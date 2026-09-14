import { products, type Manufacturer, type Product } from "./products";

export type ManufacturerInfo = {
  id: Manufacturer;
  name: string;
  /** Short line shown under the manufacturer name. */
  tagline: string;
  description: string;
  logo?: { src: string; alt: string; width: number; height: number };
  /** Ordered product slugs for navigation and listing. */
  slugs: string[];
};

export const manufacturers: Record<Manufacturer, ManufacturerInfo> = {
  UNIDOSE: {
    id: "UNIDOSE",
    name: "UNIDOSE",
    tagline: "Unit-dose & multi-dose adherence packaging",
    description:
      "Tabletop and automatic pouch packagers for unit-dose and adherence programs, with GS1 barcode verification and built-in Smart Print software.",
    slugs: ["smart-pack", "smart-pack-auto", "tabletop-adherencepackrx", "adherencepackrx-108"],
  },
  CRETEM: {
    id: "CRETEM",
    name: "CRETEM",
    tagline: "Premium brand of Intelligent Tablet Packing System",
    description:
      "Cassette-based intelligent tablet packing systems from 52 to 500 cassettes, plus multi-tablet vial counting and benchtop tablet counting.",
    logo: { src: "/products/cretem/cretem-logo-02.webp", alt: "CRETEM — Premium brand of Intelligent Tablet Packing System", width: 527, height: 334 },
    slugs: ["cap-ex-model", "wap-model", "ap-model", "ap-md-model", "mtc-model", "tablet-counter"],
  },
};

export const manufacturerOrder: Manufacturer[] = ["UNIDOSE", "CRETEM"];

export function getManufacturer(product: Pick<Product, "slug" | "manufacturer">): Manufacturer {
  if (product.manufacturer) return product.manufacturer;
  return manufacturers.CRETEM.slugs.includes(product.slug) ? "CRETEM" : "UNIDOSE";
}

export function isCretem(product: Pick<Product, "slug" | "manufacturer">): boolean {
  return getManufacturer(product) === "CRETEM";
}

export function productsByManufacturer(id: Manufacturer): Product[] {
  return manufacturers[id].slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));
}
