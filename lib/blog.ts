import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  category: string;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

export function getPostSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR).filter((fileName) => fileName.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(CONTENT_DIR, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Super simple frontmatter parsing since we control the exact format
    const titleMatch = fileContents.match(/title:\s*"([^"]+)"/);
    const dateMatch = fileContents.match(/date:\s*"([^"]+)"/);
    const authorMatch = fileContents.match(/author:\s*"([^"]+)"/);
    const excerptMatch = fileContents.match(/excerpt:\s*"([^"]+)"/);
    const imageMatch = fileContents.match(/image:\s*"([^"]+)"/);
    const categoryMatch = fileContents.match(/category:\s*"([^"]+)"/);

    const title = titleMatch ? titleMatch[1] : realSlug;
    const date = dateMatch ? dateMatch[1] : '2024-09-07';
    const author = authorMatch ? authorMatch[1] : 'Dona';
    const excerpt = excerptMatch ? excerptMatch[1] : '';
    const image = imageMatch ? imageMatch[1] : '';
    const category = categoryMatch ? categoryMatch[1] : 'Pharmacy Automation';

    const contentStart = fileContents.indexOf('---', 5);
    const content = contentStart !== -1 ? fileContents.slice(contentStart + 3).trim() : fileContents;

    return { slug: realSlug, title, date, author, excerpt, image, category, content };
  } catch (err) {
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
