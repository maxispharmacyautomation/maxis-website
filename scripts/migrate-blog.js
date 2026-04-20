const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../scraped/blog');
const DEST_DIR = path.join(__dirname, '../content/blog');

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

// Medical/Pharmacy Unsplash URLs
const placeholders = [
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
  "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=800&q=80",
  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80"
];

function getExcerpt(content) {
  const paragraphs = content.split('\n\n');
  for (const p of paragraphs) {
    const cleanP = p.replace(/\\[\d+\\]/g, '').trim();
    if (cleanP.length > 50 && !cleanP.startsWith('#') && !cleanP.startsWith('[') && !cleanP.startsWith('*') && !cleanP.match(/^\d+\./)) {
      // return up to 150 chars
      return cleanP.slice(0, 150) + '...';
    }
  }
  return 'Ideas on pharmacy automation, safety, and compliance.';
}

const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.md'));

files.forEach((file, index) => {
  const fileContent = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf-8');
  
  // Extract frontmatter slug
  const slugMatch = fileContent.match(/slug:\s*"([^"]+)"/);
  const titleMatch = fileContent.match(/title:\s*"([^"]+)"/);
  
  if (!slugMatch || !titleMatch) return;
  
  const slug = slugMatch[1];
  let title = titleMatch[1].replace(' | Maxis Pharmacy Automation', '');
  
  // Extract body
  const bodyMarker = fileContent.indexOf('---', 5);
  let body = fileContent.slice(bodyMarker + 3);
  
  // Clean up author/date lines and bottom junk
  body = body.replace(/\[Dona\]\(\/blogs\/author\/dona "Posts by Dona"\)/g, '');
  body = body.replace(/\d{2}\.\d{2}\.\d{2}\s+\d{2}:\d{2}\s+[AP]M\s+\[-\s+Comment\(s\)\][^\n]+/g, '');
  body = body.replace(/\[Get Started Now\]\(javascript:;\)/g, '');
  body = body.replace(/#### Dona[\s\S]+/g, '');
  
  // Extract actual excerpt
  const excerpt = getExcerpt(body);

  const mdxContent = `---
title: "${title}"
slug: "${slug}"
date: "2024-09-07"
author: "Dona"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
image: "${placeholders[index % placeholders.length]}"
category: "Pharmacy Automation"
---

${body.trim()}
`;

  fs.writeFileSync(path.join(DEST_DIR, `${slug}.mdx`), mdxContent);
  console.log(`Migrated ${file} -> ${slug}.mdx`);
});
