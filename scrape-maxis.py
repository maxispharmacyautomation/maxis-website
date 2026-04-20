#!/usr/bin/env python3
"""
Maxis Pharmacy Automation — content & image scraper
Pulls all pages from maxispharmacyautomation.ca into clean markdown + a JSON sitemap,
and downloads all images locally. Antigravity will consume the output.

Usage:
    pip install requests beautifulsoup4 markdownify
    python scrape-maxis.py

Output:
    ./scraped/
        sitemap.json          — structured list of all pages with metadata
        pages/                — markdown for each page (home, about, products, etc.)
        blog/                 — markdown for each blog post
        images/               — all downloaded images
        raw-html/             — original HTML (for reference/fallback)
"""

import json
import os
import re
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse, unquote

import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as md

BASE = "https://www.maxispharmacyautomation.ca"
OUT = Path("./scraped")
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; MaxisRebuildBot/1.0)"}

# Full page inventory derived from the live site
PAGES = [
    {"url": "/", "slug": "home", "type": "page"},
    {"url": "/about-us", "slug": "about", "type": "page"},
    {"url": "/demo", "slug": "demo", "type": "page"},
    {"url": "/contact", "slug": "contact", "type": "page"},
    {"url": "/product", "slug": "products-index", "type": "page"},
    {"url": "/Smart-Pack", "slug": "smart-pack", "type": "product"},
    {"url": "/Smart-Pack-Auto", "slug": "smart-pack-auto", "type": "product"},
    {"url": "/Table-Top-AdherancePackRx", "slug": "tabletop-adherencepackrx", "type": "product"},
    {"url": "/AdherancePackRx-108", "slug": "adherencepackrx-108", "type": "product"},
    {"url": "/smart-tablet-cutter", "slug": "smart-tablet-cutter", "type": "product"},
    {"url": "/blogs", "slug": "blog-index", "type": "page"},
]

BLOG_POSTS = [
    "Bedside-Barcoding",
    "GS1-Barcodes-on-Unit-Dose-Packages-To-prevent-medical-errors",
    "transition-of-manual-to-automated-unit-dose-packagings",
    "labeling-of-syringes-to-increase-patient-safety",
    "TALLman-Lettering-feature-for-look-alike-High-Alert-drugs",
    "ease-of-automated-medication-packaging-in-a-covid-era",
    "key-benefits-of-compliance-packaging",
    "compliance-packaging",
    "adherence-packager",
    "strip-packaging-alternative-to-blister-packaging",
]


def setup_dirs():
    for d in ["pages", "blog", "images", "raw-html"]:
        (OUT / d).mkdir(parents=True, exist_ok=True)


def fetch(url: str) -> str | None:
    try:
        r = requests.get(url, headers=HEADERS, timeout=30)
        r.raise_for_status()
        return r.text
    except Exception as e:
        print(f"  ✗ Failed: {url} — {e}")
        return None


def download_image(img_url: str) -> str | None:
    """Download image, return local relative path."""
    try:
        if img_url.startswith("//"):
            img_url = "https:" + img_url
        elif img_url.startswith("/"):
            img_url = BASE + img_url
        elif not img_url.startswith("http"):
            img_url = urljoin(BASE, img_url)

        filename = unquote(os.path.basename(urlparse(img_url).path))
        filename = re.sub(r"[^\w\-\.]", "_", filename)
        if not filename or "." not in filename:
            return None

        local = OUT / "images" / filename
        if local.exists():
            return f"images/{filename}"

        r = requests.get(img_url, headers=HEADERS, timeout=30)
        r.raise_for_status()
        local.write_bytes(r.content)
        print(f"    ↓ {filename}")
        return f"images/{filename}"
    except Exception as e:
        print(f"    ✗ Image failed: {img_url} — {e}")
        return None


def extract_main_content(html: str) -> tuple[BeautifulSoup, str]:
    """Strip nav/footer, return (soup, title)."""
    soup = BeautifulSoup(html, "html.parser")
    title = soup.title.string.strip() if soup.title else ""

    # Remove chrome
    for sel in ["nav", "header", "footer", "script", "style", ".header", ".footer"]:
        for el in soup.select(sel):
            el.decompose()

    # Try common main content selectors
    main = (
        soup.find("main")
        or soup.find(id="thememaincontent")
        or soup.find("article")
        or soup.body
    )
    return main or soup, title


def process_images_in_soup(soup) -> list[dict]:
    """Download all images, rewrite src to local paths. Return image manifest."""
    manifest = []
    for img in soup.find_all("img"):
        src = img.get("src", "")
        if not src:
            continue
        local = download_image(src)
        if local:
            img["src"] = local
            manifest.append({
                "original": src,
                "local": local,
                "alt": img.get("alt", ""),
            })
    return manifest


def scrape_page(page: dict) -> dict:
    url = BASE + page["url"]
    print(f"\n→ {page['slug']}: {url}")
    html = fetch(url)
    if not html:
        return {**page, "status": "failed"}

    # Save raw HTML for reference
    (OUT / "raw-html" / f"{page['slug']}.html").write_text(html, encoding="utf-8")

    soup, title = extract_main_content(html)
    images = process_images_in_soup(soup)
    markdown = md(str(soup), heading_style="ATX", strip=["script", "style"])
    markdown = re.sub(r"\n{3,}", "\n\n", markdown).strip()

    frontmatter = [
        "---",
        f'title: "{title}"',
        f'original_url: "{url}"',
        f'slug: "{page["slug"]}"',
        f'type: "{page["type"]}"',
        f"image_count: {len(images)}",
        "---",
        "",
    ]
    content = "\n".join(frontmatter) + markdown

    folder = "blog" if page["type"] == "blog" else "pages"
    (OUT / folder / f"{page['slug']}.md").write_text(content, encoding="utf-8")

    time.sleep(0.5)  # Be polite
    return {**page, "status": "ok", "title": title, "images": len(images)}


def main():
    setup_dirs()
    print(f"Scraping Maxis Pharmacy Automation into {OUT.absolute()}\n")

    results = []

    # Main pages
    for page in PAGES:
        results.append(scrape_page(page))

    # Blog posts
    for slug in BLOG_POSTS:
        post = {
            "url": f"/blogs/post/{slug}",
            "slug": slug.lower().replace("_", "-"),
            "type": "blog",
        }
        results.append(scrape_page(post))

    # Write sitemap
    sitemap = {
        "source": BASE,
        "scraped_at": time.strftime("%Y-%m-%d %H:%M:%S"),
        "total_pages": len([r for r in results if r["status"] == "ok"]),
        "pages": results,
    }
    (OUT / "sitemap.json").write_text(
        json.dumps(sitemap, indent=2), encoding="utf-8"
    )

    ok = sum(1 for r in results if r["status"] == "ok")
    failed = sum(1 for r in results if r["status"] == "failed")
    print(f"\n{'='*60}\nDone. {ok} pages OK, {failed} failed.")
    print(f"Output: {OUT.absolute()}")
    print("Hand the scraped/ folder to Antigravity as the content source.")


if __name__ == "__main__":
    main()
