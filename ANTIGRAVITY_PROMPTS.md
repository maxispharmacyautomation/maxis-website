# Antigravity Prompts — Maxis Rebuild

**How to use this file:** Antigravity works best with focused, sequential tasks rather than one mega-prompt. Run these in order. After each prompt, review the output in Antigravity's Artifact view before moving on. Don't skip reviews — catching drift early saves hours later.

---

## Prerequisites (do these first, before opening Antigravity)

1. Run the scraper:
   ```bash
   pip install requests beautifulsoup4 markdownify
   python scrape-maxis.py
   ```
   This produces a `scraped/` folder with all content and images.

2. Create a new empty folder for the project, e.g. `maxis-web/`.

3. Copy `PROJECT_BRIEF.md` and the `scraped/` folder into `maxis-web/`.

4. Open `maxis-web/` in Antigravity as the workspace.

---

## Prompt 1 — Project Initialization

> You are rebuilding the Maxis Pharmacy Automation website. Read `PROJECT_BRIEF.md` completely before doing anything else — it is the source of truth for every decision.
>
> Your first task: initialize a Next.js 15 project in this workspace with the exact stack specified in the brief (Next.js 15 App Router, TypeScript, Tailwind CSS v4, shadcn/ui). Set up the folder structure for `/app`, `/components`, `/content/blog`, `/lib`, and `/public/images`.
>
> Configure `next.config.js` with all 301 redirects from the brief's URL Redirect Map. Configure `tailwind.config.ts` with the brand color tokens (deep medical blue primary, single accent, slate neutrals). Add `Inter` as the base font via `next/font/google`.
>
> Create a minimal design-system starter: `components/ui/` with Button, Card, Container, and Section primitives using shadcn conventions. Do NOT build any pages yet.
>
> Confirm when the project boots with `npm run dev` and shows a placeholder homepage.

---

## Prompt 2 — Design System & Global Layout

> Read `PROJECT_BRIEF.md` again, focusing on the "Design Direction" section.
>
> Build the global layout: `app/layout.tsx` with a site-wide header and footer.
>
> **Header requirements:**
> - Sticky top nav with subtle backdrop blur on scroll
> - Logo left (placeholder text "Maxis" for now, will swap in real logo)
> - Nav items: Products (dropdown with 5 products), Industries, About, Blog, Contact
> - Primary CTA button "Request Demo" on the right, routes to `/demo`
> - Mobile: hamburger menu with full-screen overlay, accessible
>
> **Footer requirements:**
> - Three-column on desktop: brand block (logo + tagline "Right Dose, On Time, Right Patient"), quick links column, contact info column (Hamilton address, both phones, email)
> - Social icons: LinkedIn, Facebook, Instagram, YouTube (use lucide-react icons, not images)
> - Bottom bar: copyright "© 2026 Maxis Pharmacy Automation. All rights reserved.", privacy, terms
>
> Build a skip-to-content link for accessibility. Verify tab order is correct.
>
> Do not build any page content yet — just layout chrome.

---

## Prompt 3 — Home Page

> Read the scraped home page at `scraped/pages/home.md` for reference content.
>
> Build `app/page.tsx` — the home page. Do NOT replicate the old site's 4-slide identical carousel. Instead:
>
> 1. **Hero section:** Single confident headline ("Your MedPack Partner" or a stronger variant), subheadline about unit dose + multi-dose automation, primary CTA "Request Demo", secondary "View Products". Visual: product photography placeholder on the right (we'll swap real images later).
> 2. **Trust strip:** Small row under hero for credibility signals — e.g., "Trusted by Canadian hospitals", "GS1 compliant", "Calibration-free technology". Use icons, not logos (we don't have customer logos yet).
> 3. **Products showcase:** Grid of 5 product cards. Each card: product image, name, one-line value prop, "Learn More" link. Hover state raises the card subtly.
> 4. **Industries section:** Three cards — Hospital, Retail Pharmacy, Long-Term Care — each with a brief description and a link to industries page.
> 5. **Featured insights:** Grid of 3 latest blog posts with images, titles, excerpts.
> 6. **Closing CTA:** Full-width section with strong headline ("Ready to modernize your pharmacy?"), demo CTA button.
>
> Use real copy from the scraped content where it makes sense. Keep the tone clinical and confident, not salesy.

---

## Prompt 4 — Products (Index + Detail Template)

> Build the products experience in two parts:
>
> **Part A — `/products` index page:** Grid of all 5 products with hero images, names, short descriptions, specs at a glance (speed, capacity). Filter/tab UI optional — with only 5 products, a clean grid is enough.
>
> **Part B — Product detail template at `/products/[slug]/page.tsx`:** Build ONE reusable template that all 5 products use. Read content from `scraped/pages/smart-pack.md`, `smart-pack-auto.md`, etc.
>
> Product detail page structure:
> 1. Breadcrumb (Home > Products > [Product Name])
> 2. Hero: product name, tagline, key spec callouts (e.g., "55 pouches/min"), primary demo CTA, hero product image
> 3. Overview paragraph (from scraped content)
> 4. Key features grid (3-6 features with icons)
> 5. Technical specifications table
> 6. Use cases section
> 7. Related products (2-3 cards)
> 8. Final CTA section
>
> Store product data in `lib/products.ts` as a typed array so the template renders consistently for all 5 SKUs. Make sure each product page has unique metadata (title, description, OG image).

---

## Prompt 5 — Blog Index & Post Template

> Set up MDX rendering. Install `next-mdx-remote` (or use Contentlayer if you prefer — pick one and be consistent).
>
> Move all 10 scraped blog posts from `scraped/blog/*.md` to `content/blog/*.mdx`. Clean up the frontmatter so each post has: `title`, `slug`, `date`, `author`, `excerpt`, `coverImage`, `tags`.
>
> **`/blog` index page:**
> - Header: "Insights" or "Blog", short intro about pharmacy automation knowledge
> - Grid of post cards: cover image, title, excerpt, date, tags
> - Tag filter (client component, filters by selected tag)
>
> **`/blog/[slug]/page.tsx`:**
> - Hero: cover image, title, date, author, reading time estimate
> - Article body: typography-optimized prose with Tailwind Typography plugin
> - Related posts at the bottom (3 cards based on shared tags)
> - Sticky share buttons on desktop (LinkedIn, Twitter, copy link)
>
> Add `BlogPosting` schema.org JSON-LD to each post.

---

## Prompt 6 — Remaining Pages (About, Demo, Contact, Industries)

> Build the four remaining pages:
>
> **`/about`:** Company story (pull from scraped about page), mission, relationship with Unidoses manufacturer, values, team section placeholder. Keep it to one scroll-worth of content.
>
> **`/demo`:** The primary conversion page. Two-column layout — left side: value proposition ("See Maxis in action", bullet list of what they'll see in the demo, social proof). Right side: demo request form with fields: name, email, phone, pharmacy/hospital name, role, product interest (dropdown), preferred demo time, message. Server action submits to `/api/demo` which sends email via Resend to sales@ and a confirmation to the submitter.
>
> **`/contact`:** Simpler form (name, email, message) + full contact info, office address with embedded Google Map (optional — use a static map image if you don't want Maps API).
>
> **`/industries`:** Three-section long-form page covering Hospital, Retail, and LTC use cases. Each section: hero, problem statement, how Maxis solves it, relevant products, CTA.
>
> All forms must have accessible labels, server-side validation, honeypot field for spam prevention, and clear success/error states.

---

## Prompt 7 — SEO, Compliance & Final Polish

> Final pass — bring everything to production quality:
>
> 1. **Metadata:** Every page needs a unique `generateMetadata` export with title, description, Open Graph, Twitter cards
> 2. **Structured data:** Add JSON-LD for Organization (sitewide), Product (product pages), BlogPosting (blog posts), MedicalBusiness (About)
> 3. **Sitemap:** Create `app/sitemap.ts` that generates `sitemap.xml` covering all static and dynamic routes
> 4. **Robots:** `app/robots.ts` allowing all crawlers, pointing to sitemap
> 5. **Privacy policy page** at `/privacy`: PIPEDA-compliant template covering data collection, cookies, user rights, contact for data requests. Reference Canadian privacy law.
> 6. **Terms page** at `/terms`: Basic terms of use for the site.
> 7. **Accessibility pass:** Run `npx @axe-core/cli` on all pages. Fix every AA violation.
> 8. **Performance:** Run Lighthouse. Ensure ≥ 90 on all four scores for home, one product page, one blog post. Optimize images with `next/image` sharp sizing. Check bundle size.
> 9. **Redirects verification:** Write a small script that curls every old URL and confirms 301 → correct new URL.
> 10. **Mobile QA:** Manually verify 320px, 768px, 1024px, 1440px breakpoints.
>
> Produce a final checklist output showing pass/fail for each acceptance criterion in the PROJECT_BRIEF.

---

## Prompt 8 (optional) — Deployment

> Prepare the site for Vercel deployment:
>
> 1. Create `.env.example` with all required env vars (RESEND_API_KEY, CONTACT_EMAIL, etc.)
> 2. Add a `README.md` with setup instructions, env var docs, and deployment steps
> 3. Set up Vercel Analytics
> 4. Provide the git commit history in clean conventional-commit format
>
> If I connect this to Vercel, what do I need to configure in the Vercel project settings?

---

## Tips for working with Antigravity

- **Keep the brief open.** Reference specific sections in your prompts (e.g., "per the Design Direction in PROJECT_BRIEF.md, section 2…").
- **Review artifacts, not just outputs.** Antigravity's Artifact view shows what the agent is actually building. Scan it after each prompt.
- **Don't accept drift silently.** If the agent picks a different stack or restructures folders, correct it in the same turn — doesn't compound later.
- **Commit after each prompt.** Makes it easy to roll back if a prompt goes sideways.
- **If a prompt times out or loses focus,** break it into sub-prompts. Prompt 4 (Products) or Prompt 7 (SEO/Polish) are the most likely to need splitting.
