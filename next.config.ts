import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly set the Turbopack root to this project directory.
  // Prevents the "multiple lockfiles" workspace-root detection warning
  // caused by a stray package-lock.json at C:\Users\ADMIN\.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  },

  async redirects() {
    return [
      // Product page redirects — old casing/paths → new clean URLs
      {
        source: "/Smart-Pack",
        destination: "/products/smart-pack",
        permanent: true,
      },
      {
        source: "/Smart-Pack-Auto",
        destination: "/products/smart-pack-auto",
        permanent: true,
      },
      {
        source: "/Table-Top-AdherancePackRx",
        destination: "/products/tabletop-adherencepackrx",
        permanent: true,
      },
      {
        source: "/AdherancePackRx-108",
        destination: "/products/adherencepackrx-108",
        permanent: true,
      },
      {
        source: "/smart-tablet-cutter",
        destination: "/products/smart-tablet-cutter",
        permanent: true,
      },
      // Products index
      {
        source: "/product",
        destination: "/products",
        permanent: true,
      },
      // About
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      // Blog restructure — order matters: more specific before wildcards
      {
        source: "/blogs/post/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },
      {
        source: "/blogs/author/:name*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/tag/:tag",
        destination: "/blog?tag=:tag",
        permanent: true,
      },
      {
        source: "/blogs/:category",
        destination: "/blog?category=:category",
        permanent: true,
      },
      // Blog index — must come last so specific /blogs/* rules fire first
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
