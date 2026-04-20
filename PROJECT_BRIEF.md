# Maxis Pharmacy Automation — Rebuild Brief

**This document is the source of truth. Antigravity should reference it for every task.**

---

## Project Goal

Rebuild `maxispharmacyautomation.ca` as a modern, fast, accessible B2B marketing site that positions Maxis as a trusted pharmacy automation partner for Canadian hospitals, retail pharmacies, and long-term care facilities.

The old site is functional but dated — it uses a drag-and-drop builder aesthetic, unoptimized images, AI-generated hero art, and lacks clear conversion architecture. The new site should feel like it belongs in the same category as Omnicell, Parata, or McKesson — clinical, credible, conversion-focused.

---

## Brand Essentials

- **Name:** Maxis Pharmacy Automation
- **Tagline:** Right Dose, On Time, Right Patient
- **HQ:** Hazelton Ave, Hamilton, Ontario, L9B 0E9, Canada
- **Phones:** +1 833-935-1500 / +1 416-827-5330
- **Email:** sales@maxispharmacyautomation.ca
- **Target buyers:** Hospital pharmacy directors, retail pharmacy owners, LTC facility procurement, bedside nursing leadership
- **Geographic focus:** Primary — Canada & USA. Secondary — worldwide (early-stage global expansion). Copy should feel North American but open to international inquiries. Contact/demo forms must include a country dropdown.
- **Positioning note:** Do NOT emphasize any manufacturer/distributor relationship. Position Maxis as the direct solution provider and brand. No links to or mentions of external manufacturers anywhere on the site.

## Design Direction

A single cohesive aesthetic that combines three qualities:

1. **Clinical & trustworthy** — Stripe-meets-medical. Generous whitespace, restrained color palette, confident typography. This builds credibility with hospital procurement teams.
2. **Bold & conversion-focused** — Every page has a clear primary CTA (Request Demo), strong value props above the fold, social proof where possible. No ambiguous "Learn More" dead ends.
3. **Product-photography heavy** — Hardware is the hero. Each product detail page leads with a high-quality product image. Replace the old site's AI-generated hero art entirely.

### Visual system — colors derived from the Maxis logo

The logo is a wordmark in medical teal/cyan with a dark gray tagline. The entire site's color system must extend from these brand colors.

**Color tokens (use these exact values in `tailwind.config.ts`):**

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-teal` | `#00B4C8` | Logo color. Brand identity, section accents, links, icons |
| `brand-teal-dark` | `#007A8A` | **Primary CTA buttons, button hover on teal** |
| `brand-teal-light` | `#E0F7FA` | Subtle backgrounds, hover fills, highlighted cards |
| `ink` | `#1A2B3C` | Headlines (deep navy-charcoal — pairs with teal better than pure black) |
| `slate-700` | `#334155` | Body text |
| `slate-500` | `#64748B` | Meta text, captions, form helper text |
| `slate-200` | `#E2E8F0` | Borders, dividers |
| `slate-100` | `#F1F5F9` | Section alternating backgrounds |
| `slate-50` | `#F8FAFC` | Page background alternative to pure white |
| `white` | `#FFFFFF` | Base |
| `success` | `#10B981` | Form success states |
| `error` | `#EF4444` | Form errors, validation |

**Color usage rules:**
- Logo teal (`#00B4C8`) is the brand identity color — use for the logo, small accents, active nav states, link color
- Primary CTAs use `brand-teal-dark` (`#007A8A`) for better contrast and click-worthiness. Hover: `#005F6B`
- Never use teal for body text (contrast/fatigue). Body text is always `slate-700` on white
- One accent color only — no second accent. Visual hierarchy comes from weight and size, not more colors
- Hero sections can use a subtle teal gradient background (`#E0F7FA` → `#FFFFFF`) or a deep ink-to-teal gradient for emphasis sections

**Typography:**
- UI/body: Inter (via `next/font/google`). Fallback: system-ui
- Headings: Inter with tighter tracking (`tracking-tight`) and heavier weight
- Numbers/specs: tabular-nums for product spec tables
- No serif fonts — stay clean and modern

**Imagery:**
- Real pharmacy/hospital/product photography wherever possible
- Kill every AI-generated hero image from the old site — they undermine credibility for a medical brand
- Product photos: clean white or light gray backgrounds, consistent lighting
- Apply subtle teal tint overlay (`mix-blend-multiply` or color gradient at 8-12% opacity) on lifestyle photography to maintain visual cohesion

**Motion:**
- Subtle only. Scroll-triggered fade-ups (`opacity 0→1, translateY 20px→0`), smooth hover states on cards/buttons
- No hero carousels (the old site has 4 identical slides — kill this pattern completely)
- Button hovers: slight scale (`scale-[1.02]`) + shadow deepen + color shift to `teal-dark`

### References to study

- omnicell.com — category leader, clinical authority
- parata.com — direct competitor in pharmacy automation
- stripe.com — gold standard for B2B clarity
- linear.app — typography and whitespace discipline

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript, React Server Components)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (install as needed)
- **Blog content:** MDX files in `/content/blog/`, rendered with `next-mdx-remote` or `contentlayer`
- **Images:** `next/image` with the old site's images migrated to `/public/images/`
- **Forms:** Demo/Contact forms → Resend for email delivery + a simple API route. (If Pranav prefers, swap to HubSpot/Calendly embed later.)
- **Analytics:** Vercel Analytics + optional Google Analytics 4
- **Hosting:** Vercel
- **Node:** 20+

---

## Site Structure (Information Architecture)

```
/                              Home
/products                      Products index (overview of all 5)
/products/smart-pack           Smart Pack® product detail
/products/smart-pack-auto      Smart Pack Auto® product detail
/products/tabletop-adherencepackrx   Tabletop AdherencePackRx product detail
/products/adherencepackrx-108  AdherencePackRx 108 product detail
/products/smart-tablet-cutter  Smart Tablet Cutter product detail
/industries                    Industries overview (optional, consolidates hospital/retail/LTC)
/about                         About Maxis
/blog                          Blog index
/blog/[slug]                   Individual blog post
/demo                          Request a demo (primary CTA landing)
/contact                       Contact
/privacy                       Privacy policy (new — required for PIPEDA compliance)
/terms                         Terms (new)
```

## URL Redirect Map (CRITICAL for SEO)

The old site uses inconsistent casing and URL structure. Every old URL must 301 → new URL. Configure in `next.config.js` under `redirects()`.

| Old URL | New URL |
|---------|---------|
| `/Smart-Pack` | `/products/smart-pack` |
| `/Smart-Pack-Auto` | `/products/smart-pack-auto` |
| `/Table-Top-AdherancePackRx` | `/products/tabletop-adherencepackrx` |
| `/AdherancePackRx-108` | `/products/adherencepackrx-108` |
| `/smart-tablet-cutter` | `/products/smart-tablet-cutter` |
| `/product` | `/products` |
| `/about-us` | `/about` |
| `/blogs` | `/blog` |
| `/blogs/post/:slug` | `/blog/:slug` |
| `/blogs/author/:name` | `/blog` (collapse) |
| `/blogs/tag/:tag` | `/blog?tag=:tag` |
| `/blogs/:category` | `/blog?category=:category` |

---

## Products (Full Inventory)

| Product | Key Claim | Category |
|---------|-----------|----------|
| Smart Pack® | Tabletop unit-dose, up to 55 pouches/min, 4 pouch sizes, calibration-free | Unit Dose |
| Smart Pack Auto® | Fully automated unit-dose, bulk tablet loading, 55/min | Unit Dose |
| Tabletop AdherencePackRx | Semi-auto multi-dose, 40/min, GS1 barcode, touch screen | Multi-Dose |
| AdherencePackRx 108 | High-capacity multi-dose compliance packager with dedicated canisters | Multi-Dose |
| Smart Tablet Cutter | Tablet cutting automation | Accessory |

Each product page needs: hero image, one-line value prop, spec table, key features (3-5), use cases, demo CTA, related products.

---

## Blog Content

10 posts to migrate as-is (content unchanged, styling/layout only). All posts are by "Dona", dated September 2024. Source content is in `scraped/blog/*.md` after running the scraper.

Post slugs (after redirects):
1. `bedside-barcoding`
2. `gs1-barcodes-on-unit-dose-packages`
3. `transition-of-manual-to-automated-unit-dose-packagings`
4. `labeling-of-syringes-to-increase-patient-safety`
5. `tallman-lettering-for-look-alike-high-alert-drugs`
6. `ease-of-automated-medication-packaging-in-a-covid-era`
7. `key-benefits-of-compliance-packaging`
8. `compliance-packaging`
9. `adherence-packager`
10. `strip-packaging-alternative-to-blister-packaging`

---

## International Standards Requirements

These are non-negotiable for a Canadian B2B medical site:

- **Accessibility:** WCAG 2.1 AA minimum. Semantic HTML, focus states, aria labels, skip-to-content link, sufficient color contrast. Run axe-core or Lighthouse accessibility audit before launch.
- **Performance:** Lighthouse scores ≥ 90 for Performance, Accessibility, Best Practices, SEO. Core Web Vitals in green.
- **SEO:** Meta title + description on every page. Open Graph tags. `sitemap.xml` and `robots.txt` auto-generated. Schema.org markup: `Organization` sitewide, `Product` on product pages, `BlogPosting` on blog posts, `MedicalBusiness` on About.
- **Privacy:** PIPEDA-compliant privacy policy page. Cookie banner only if analytics/marketing cookies are used (keep it simple — Vercel Analytics is cookieless).
- **Forms:** Server-side validation, honeypot or rate-limiting for spam, clear success/error states, accessible labels.
- **Mobile:** Mobile-first design. Test at 320px, 768px, 1024px, 1440px.

---

## Out of Scope (for v1)

- French translation (flag as Phase 2 if targeting Quebec hospitals)
- E-commerce / online ordering
- Customer portal / login
- Live chat
- Blog commenting (old site shows comment links but none exist)
- Author profile pages

---

## Acceptance Criteria

The rebuild is complete when:

- [ ] All 11 main pages render with new design
- [ ] All 10 blog posts migrated and rendering
- [ ] All 5 product pages have full specs and CTAs
- [ ] All old URLs 301 to new URLs (verified with curl)
- [ ] Demo form submits successfully and sends email to sales@
- [ ] Lighthouse scores ≥ 90 across all four categories on home + one product + one blog page
- [ ] Zero WCAG AA violations on axe-core scan
- [ ] Mobile verified at 320px, 768px, 1440px
- [ ] `sitemap.xml` and `robots.txt` present
- [ ] Deployed to Vercel preview URL for review
