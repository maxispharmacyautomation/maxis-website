import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products, type Product } from "@/lib/products";
import { manufacturers, productsByManufacturer } from "@/lib/manufacturers";
import { getAllPosts } from "@/lib/blog";
import { ProductShowcase, type ShowcaseProduct } from "@/components/home/ProductShowcase";
import { SystemFinder, type FinderProduct, type FinderFormat } from "@/components/home/SystemFinder";

export const metadata = {
  title: "Maxis Pharmacy Automation | Right Dose, On Time, Right Patient",
  description:
    "Medication packaging automation for hospitals, retail pharmacies and long-term care — UNIDOSE unit-dose and adherence packagers and CRETEM cassette-based tablet packing systems, supplied and supported across Canada and the US.",
};

const btnPrimary =
  "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-brand-dark text-white text-sm font-semibold hover:bg-brand-darker transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";
const btnSecondary =
  "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border border-slate-300 bg-white text-ink text-sm font-semibold hover:border-ink hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";
const btnHeroPrimary =
  "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-brand text-ink text-sm font-semibold hover:bg-brand-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink";
const btnHeroSecondary =
  "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border border-white/25 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

function Eyebrow({ children, light = false, className = "" }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.18em] mb-3 ${light ? "text-brand-light" : "text-brand-dark"} ${className}`}>
      {children}
    </p>
  );
}

function bySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** UNIDOSE products carry no category field; these labels restate each product's own tagline. */
const unidoseCategory: Record<string, string> = {
  "smart-pack": "Unit-dose packaging",
  "smart-pack-auto": "Unit-dose packaging",
  "tabletop-adherencepackrx": "Multi-dose packaging",
  "adherencepackrx-108": "Multi-dose packaging",
};

/** Packaging formats each system produces, per its own product description. */
const productFormats: Record<string, FinderFormat[]> = {
  "smart-pack": ["unit-dose"],
  "smart-pack-auto": ["unit-dose"],
  "tabletop-adherencepackrx": ["multi-dose"],
  "adherencepackrx-108": ["multi-dose"],
  "cap-ex-model": ["unit-dose", "multi-dose"],
  "wap-model": ["unit-dose", "multi-dose"],
  "ap-model": ["unit-dose", "multi-dose"],
  "ap-md-model": ["unit-dose", "multi-dose"],
  "mtc-model": ["vials"],
  "tablet-counter": ["vials"],
};

/** Mirrors the recommended-system lists on the Industries page. */
const settingSlugs = {
  hospital: ["smart-pack", "smart-pack-auto", "ap-md-model", "ap-model"],
  retail: ["smart-pack", "tabletop-adherencepackrx", "wap-model", "tablet-counter"],
  ltc: ["smart-pack-auto", "adherencepackrx-108", "ap-md-model", "ap-model"],
} as const;

function keyFact(p: Product): string | undefined {
  if (p.heroStats?.[0]) return `${p.heroStats[0].value} ${p.heroStats[0].label.toLowerCase()}`;
  const speed = p.specs.find((s) => s.label === "Speed");
  return speed?.value.replace(/^Up to /, "≤ ");
}

/** Images without a transparent background (whitened photos and the MTC labelled diagram) sit on a plain white plate. */
function imageStyle(p: Product): ShowcaseProduct["imageStyle"] {
  return p.heroImageFit === "cover" || p.slug === "mtc-model" ? "plate" : "cutout";
}

function toShowcase(p: Product): ShowcaseProduct {
  return {
    slug: p.slug,
    name: p.name,
    tagline: p.tagline,
    category: p.category ?? unidoseCategory[p.slug] ?? "Packaging system",
    image: p.heroImage,
    imageStyle: imageStyle(p),
    fact: keyFact(p),
  };
}

function toFinder(p: Product, manufacturer: "UNIDOSE" | "CRETEM"): FinderProduct {
  return {
    ...toShowcase(p),
    manufacturer,
    formats: productFormats[p.slug] ?? [],
    settings: (Object.keys(settingSlugs) as (keyof typeof settingSlugs)[]).filter((s) => (settingSlugs[s] as readonly string[]).includes(p.slug)),
  };
}

/**
 * Hero lineup. `height` is the visible product height relative to the stage (CRETEM cabinets follow their
 * listed heights: 1,910 / 2,060 / 2,100 mm). `visible` and `padBottom` are the opaque fraction and the
 * transparent bottom margin of each cut-out, measured from the image files, so every base lands on the floor line.
 */
const heroLineup: {
  slug: string;
  label: string;
  brand: "UNIDOSE" | "CRETEM";
  height: number;
  aspect: string;
  visible: number;
  padBottom: number;
  angled?: boolean;
}[] = [
  { slug: "smart-pack", label: "Smart Pack®", brand: "UNIDOSE", height: 0.3, aspect: "3 / 2", visible: 0.79, padBottom: 0.125 },
  { slug: "cap-ex-model", label: "CAP(EX)-92FS", brand: "CRETEM", height: 0.91, aspect: "2 / 3", visible: 0.801, padBottom: 0.051 },
  { slug: "ap-model", label: "AP-405FS", brand: "CRETEM", height: 1, aspect: "2 / 3", visible: 0.819, padBottom: 0.061, angled: true },
];

// CRETEM cassette-count ranges from the model tables; scale bar caps at 500 cassettes.
const capacityLadder = [
  { slug: "cap-ex-model", label: "CAP(EX) Model", min: 52, max: 92, models: "52 · 72 · 92" },
  { slug: "wap-model", label: "WAP Model", min: 144, max: 224, models: "144 · 184 · 224" },
  { slug: "ap-model", label: "AP Model", min: 207, max: 500, models: "207 · 267 · 336 · 405 · 500" },
  { slug: "ap-md-model", label: "AP MD Model", min: 300, max: 480, models: "300 · 360 · 480" },
];
const LADDER_MAX = 500;

const industries = [
  {
    id: "hospital",
    title: "Hospitals",
    description: "Unit-dose and multi-dose packaging with barcode verification for inpatient dispensing and central pharmacy fill.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&auto=format&fit=crop",
    alt: "Hospital pharmacy",
  },
  {
    id: "retail",
    title: "Retail pharmacies",
    description: "Grow adherence programs and vial throughput without expanding the dispensary footprint.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=80&auto=format&fit=crop",
    alt: "Retail pharmacy counter",
  },
  {
    id: "ltc",
    title: "Long-term care",
    description: "Scheduled multi-dose pouch packaging for residential communities, with every pouch labelled by day, date and time.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80&auto=format&fit=crop",
    alt: "Long-term care facility",
  },
];

const integrationPartners = ["Kroll", "Fillware", "PioneerRx", "BoxLab"];

const brandBadge = {
  UNIDOSE: "bg-ink text-white",
  CRETEM: "bg-[#1F3A8A] text-white",
} as const;

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  const unidose = productsByManufacturer("UNIDOSE");
  const cretem = productsByManufacturer("CRETEM");
  const finderProducts: FinderProduct[] = [
    ...unidose.map((p) => toFinder(p, "UNIDOSE")),
    ...cretem.map((p) => toFinder(p, "CRETEM")),
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[18%] -top-[30%] h-[70%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(0,180,200,0.28),transparent_62%)]" />
          <div className="absolute -right-[12%] top-[-8%] h-[90%] w-[65%] rounded-full bg-[radial-gradient(circle,rgba(31,58,138,0.55),transparent_64%)]" />
          <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black_35%,transparent_88%)]" />
        </div>

        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[calc(100svh-5.5rem)]">
            <div className="relative z-10 flex flex-col justify-center pt-12 pb-4 sm:pt-14 lg:col-span-5 lg:py-16">
              <p className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-700 inline-flex self-start items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                Pharmacy automation · Canada &amp; US
              </p>
              <h1 className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both duration-700 delay-100 mt-6 text-4xl sm:text-5xl lg:text-[2.85rem] xl:text-[3.35rem] font-bold tracking-tight leading-[1.05]">
                Medication packaging automation, from tabletop to 500 cassettes.
              </h1>
              <p className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both duration-700 delay-200 mt-5 text-base lg:text-lg text-slate-300 leading-relaxed max-w-lg">
                Maxis supplies and supports UNIDOSE pouch packagers and CRETEM intelligent tablet packing systems for hospitals, retail pharmacies and long-term care.
              </p>
              <div className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both duration-700 delay-300 mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/products" className={btnHeroPrimary}>
                  Explore the range <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
                <Link href="/demo" className={btnHeroSecondary}>
                  Request a demo
                </Link>
              </div>
              <div className="animate-in fade-in fill-mode-both duration-700 delay-500 mt-9 flex flex-col gap-2.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Two manufacturers · one partner</p>
                {(["UNIDOSE", "CRETEM"] as const).map((id) => (
                  <Link
                    key={id}
                    href={`#${id.toLowerCase()}`}
                    className="group inline-flex items-center gap-3 self-start"
                  >
                    <span className={`inline-flex h-6 w-[82px] items-center justify-center rounded-md text-[10px] font-bold tracking-wider ${brandBadge[id]}`}>{id}</span>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      {id === "UNIDOSE" ? "Unit-dose & adherence packagers" : "Cassette systems, 52–500"}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand group-hover:translate-x-0.5 transition-all" aria-hidden />
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative lg:col-span-7 lg:-mr-[max(1.5rem,calc((100vw-80rem)/2+2rem))]">
              <div className="relative h-[420px] sm:h-[520px] lg:absolute lg:inset-0 lg:h-auto">
                <div aria-hidden className="absolute left-[8%] top-[8%] h-[55%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(0,180,200,0.22),transparent_70%)]" />

                <div className="absolute inset-x-0 bottom-14 sm:bottom-16 lg:bottom-20 [--stage-h:230px] sm:[--stage-h:320px] lg:[--stage-h:390px] xl:[--stage-h:460px] h-[var(--stage-h)]">
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-center px-1 sm:px-0">
                    {heroLineup.map((item, i) => {
                      const p = bySlug(item.slug);
                      if (!p) return null;
                      const src = item.angled ? p.heroImageAngled ?? p.heroImage : p.heroImage;
                      return (
                        <Link
                          key={item.slug}
                          href={`/products/${item.slug}`}
                          className="group relative -mx-1 sm:-mx-5 lg:-mx-8 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 fill-mode-both duration-1000 focus-visible:outline-none"
                          style={{ animationDelay: `${250 + i * 120}ms` }}
                        >
                          <div
                            className="relative transition-transform duration-500 ease-out group-hover:-translate-y-3"
                            style={{
                              height: `calc(var(--stage-h) * ${(item.height / item.visible).toFixed(3)})`,
                              aspectRatio: item.aspect,
                              marginBottom: `calc(var(--stage-h) * ${(-(item.height / item.visible) * item.padBottom).toFixed(3)})`,
                            }}
                          >
                            <Image
                              src={src}
                              alt={`${item.brand} ${item.label}`}
                              fill
                              priority
                              sizes="(min-width: 1024px) 24vw, 45vw"
                              className="object-contain object-bottom drop-shadow-[0_40px_50px_rgba(0,0,0,0.55)]"
                            />
                          </div>
                          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-4 whitespace-nowrap flex flex-col items-center gap-1 text-center">
                            <span className={`inline-flex h-5 px-1.5 items-center rounded text-[9px] font-bold tracking-wider ${brandBadge[item.brand]}`}>{item.brand}</span>
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">{item.label}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <div aria-hidden className="absolute inset-x-[8%] -bottom-2 h-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55),transparent_70%)] blur-md" />
                  <div aria-hidden className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container className="relative z-10 pb-12 lg:pb-16">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl border border-white/10 bg-white/10 overflow-hidden backdrop-blur-md shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
            {[
              { value: "10", label: "Packaging & counting systems", note: "Two manufacturer ranges" },
              { value: "52–500", label: "Cassettes per CRETEM cabinet", note: "Six configurations in between" },
              { value: "60", label: "Pouches / min", note: "CRETEM FS-series maximum" },
              { value: "GS1", label: "Barcode-verified pouches", note: "UNIDOSE built-in scanners" },
            ].map((s) => (
              <div key={s.label} className="bg-ink/70 p-5 lg:p-6">
                <dd className="text-3xl lg:text-4xl font-bold tracking-tight tabular-nums">{s.value}</dd>
                <dt className="mt-1 text-sm font-semibold text-slate-200">{s.label}</dt>
                <p className="mt-0.5 text-xs text-slate-300">{s.note}</p>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── 2. Our range ───────────────────────────────────────── */}
      <section id="manufacturers" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 lg:gap-16 mb-8 lg:mb-10">
            <div className="max-w-xl">
              <Eyebrow>Our range</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-tight">Two manufacturers. One partner for supply and support.</h2>
            </div>
            <p className="lg:max-w-md text-lg text-slate-600 leading-relaxed">
              Each range is built around a different packaging approach. Start with the format your pharmacy dispenses, then size the system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16 lg:mb-20">
            {(
              [
                {
                  id: "unidose",
                  manufacturer: "UNIDOSE" as const,
                  title: "Tabletop and automatic pouch packagers",
                  formats: "Unit-dose & multi-dose pouches",
                  list: unidose,
                  image: bySlug("smart-pack"),
                },
                {
                  id: "cretem",
                  manufacturer: "CRETEM" as const,
                  title: "Cassette-based intelligent tablet packing systems",
                  formats: "Pouch packaging · Vial packaging · Tablet counting",
                  list: cretem,
                  image: bySlug("ap-model"),
                },
              ] as const
            ).map((g) => {
              const src = g.image?.heroImageAngled ?? g.image?.heroImage;
              return (
                <Link
                  key={g.id}
                  href={`#${g.id}`}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)] transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(ellipse_at_50%_70%,rgba(0,180,200,0.16),rgba(248,250,252,0)_70%)]">
                    <span className={`absolute top-4 left-4 z-10 inline-flex h-7 px-2.5 items-center rounded-md text-xs font-bold tracking-wider ${brandBadge[g.manufacturer]}`}>
                      {g.manufacturer}
                    </span>
                    {src && (
                      <Image
                        src={src}
                        alt={`${g.manufacturer} ${g.image?.name ?? "system"}`}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-contain object-bottom p-6 sm:p-8 drop-shadow-[0_24px_30px_rgba(15,23,42,0.22)] transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 items-end justify-between gap-4 p-6">
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-ink tracking-tight group-hover:text-brand-dark transition-colors">{g.title}</h3>
                      <p className="mt-1.5 text-sm text-slate-600">
                        {g.list.length} systems · {g.formats}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 shrink-0 text-sm font-semibold text-brand-dark">
                      Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="space-y-20 lg:space-y-24">
            <RangeBand
              id="unidose"
              manufacturer="UNIDOSE"
              title="Tabletop and automatic pouch packagers"
              description={manufacturers.UNIDOSE.description}
              products={unidose.map(toShowcase)}
            />
            <RangeBand
              id="cretem"
              manufacturer="CRETEM"
              title="Cassette-based intelligent tablet packing systems"
              description={manufacturers.CRETEM.description}
              products={cretem.map(toShowcase)}
              logo={manufacturers.CRETEM.logo}
            />
          </div>
        </Container>
      </section>

      {/* ── 3. Find the right system ───────────────────────────── */}
      <section id="finder" className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="max-w-2xl mb-10 lg:mb-12">
            <Eyebrow>Find the right system</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-tight">Two questions to a shortlist</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Choose the packaging format and the setting it will run in. We&apos;ll narrow the range to the systems that fit.
            </p>
          </div>
          <SystemFinder products={finderProducts} />
        </Container>
      </section>

      {/* ── 4. CRETEM capacity ladder ──────────────────────────── */}
      <section className="py-20 lg:py-28 bg-ink text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <Eyebrow light>CRETEM cassette packagers</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">Size the cabinet to your formulary</h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Four CRETEM packagers cover 52 to 500 cassettes. All share infrared photodetection, thermal-transfer pouch printing and a maximum of 60 unit-dose pouches per minute — the difference is capacity, footprint and how many FSP and MDU options fit.
              </p>
              <Link href="/products#cretem" className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-white text-ink text-sm font-semibold hover:bg-brand-light transition-colors">
                Compare CRETEM systems <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
                <div className="flex justify-between text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-4">
                  <span>Cassettes</span>
                  <span>{LADDER_MAX}</span>
                </div>
                <ol className="space-y-5">
                  {capacityLadder.map((row) => {
                    const left = (row.min / LADDER_MAX) * 100;
                    const width = ((row.max - row.min) / LADDER_MAX) * 100;
                    return (
                      <li key={row.slug}>
                        <Link href={`/products/${row.slug}`} className="group block focus-visible:outline-none">
                          <div className="flex items-baseline justify-between gap-4 mb-2">
                            <span className="font-semibold group-hover:text-brand-light transition-colors">{row.label}</span>
                            <span className="text-xs text-slate-400 tabular-nums">{row.models}</span>
                          </div>
                          <div className="relative h-8 rounded-md bg-white/[0.06] overflow-hidden">
                            <div
                              className="absolute inset-y-0 rounded-md bg-gradient-to-r from-brand-dark to-brand group-hover:from-brand group-hover:to-brand-light transition-colors"
                              style={{ left: `${left}%`, width: `${Math.max(width, 6)}%` }}
                            />
                            <span className="absolute inset-y-0 flex items-center text-xs font-bold text-white tabular-nums" style={{ left: `calc(${left}% + 10px)` }}>
                              {row.min}–{row.max}
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ol>
                <p className="mt-6 text-xs text-slate-400">
                  Cassette counts from the CRETEM model tables. Also in the range: MTC-30 multi tablet counter (30–90 canisters, vials) and the benchtop Tablet Counter.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. Industries ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="max-w-2xl mb-12">
            <Eyebrow>Where it runs</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight leading-tight">Solutions for every care setting</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.id}
                href={`/industries#${ind.id}`}
                className="group flex flex-col rounded-2xl border border-slate-200 overflow-hidden bg-white hover:border-slate-300 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={ind.image} alt={ind.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-ink group-hover:text-brand-dark transition-colors">{ind.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{ind.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark">
                    See recommended systems <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. Integration + support ───────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <Eyebrow>Software integration</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight leading-tight">Prescription data flows straight to the packager</h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                UNIDOSE systems connect to leading pharmacy management platforms; CRETEM systems receive orders through OCS linkage or direct input on the machine. Barcode checks validate patient-specific packaging along the way.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {["Automated prescription data transfer", "Barcode verification and safety checks", "Unit-dose and multi-dose formats", "HL7 / custom API on request"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-brand-dark mt-0.5 shrink-0" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/integrations" className={`${btnSecondary} mt-8`}>
                Integration details <ArrowUpRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-3">
                {integrationPartners.map((name) => (
                  <div key={name} className="flex items-center justify-center h-24 rounded-2xl border border-slate-200 bg-white text-lg font-semibold text-ink">
                    {name}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-500 text-center">Supported pharmacy management platforms. CRETEM systems: OCS · HIS · PMS order linkage.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 7. Insights ────────────────────────────────────────── */}
      {recentPosts.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div className="max-w-2xl">
                <Eyebrow>Insights</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight leading-tight">Medication safety and compliance packaging</h2>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:underline">
                All articles <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 overflow-hidden bg-white hover:border-slate-300 hover:shadow-lg transition-all">
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <Image
                      src={post.image || "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80"}
                      alt={post.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                      <span className="font-semibold text-brand-dark uppercase tracking-wider">{post.category}</span>
                      <span aria-hidden>·</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-ink group-hover:text-brand-dark transition-colors leading-snug line-clamp-2">{post.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2 flex-1">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark">
                      Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── 8. Final CTA ───────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-ink text-white overflow-hidden">
        <div aria-hidden className="absolute -right-32 -top-32 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,180,200,0.35),transparent_65%)]" />
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <Eyebrow light>Next step</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">Ready to modernize your pharmacy?</h2>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-2xl">
                Book a demo with our team. We&apos;ll walk through your dispensing volume, packaging format and floor plan, and recommend the UNIDOSE or CRETEM system that fits.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-white text-ink text-sm font-semibold hover:bg-brand-light transition-colors">
                Request a demo <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                Contact sales
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function RangeBand({
  id,
  manufacturer,
  title,
  description,
  products,
  logo,
}: {
  id: string;
  manufacturer: "UNIDOSE" | "CRETEM";
  title: string;
  description: string;
  products: ShowcaseProduct[];
  logo?: { src: string; alt: string; width: number; height: number };
}) {
  return (
    <article id={id} className="scroll-mt-28">
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4">
            <span className={`inline-flex h-8 px-3 items-center rounded-md text-sm font-bold tracking-wider ${brandBadge[manufacturer]}`}>{manufacturer}</span>
            <span className="text-sm text-slate-500">{products.length} systems</span>
          </div>
          <h3 className="mt-4 text-2xl md:text-3xl font-bold text-ink tracking-tight">{title}</h3>
          <p className="mt-2 text-slate-600 leading-relaxed">{description}</p>
        </div>
        {logo && <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="hidden md:block w-36 h-auto shrink-0" />}
      </div>
      <ProductShowcase manufacturer={manufacturer} products={products} footerHref={`/products#${id}`} />
    </article>
  );
}
