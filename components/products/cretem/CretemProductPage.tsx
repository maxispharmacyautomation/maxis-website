import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronRight, Check, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products, type Product } from "@/lib/products";
import { manufacturers, productsByManufacturer } from "@/lib/manufacturers";
import { ProductSubnav, type SubnavItem } from "./ProductSubnav";
import { ModelTable } from "./ModelTable";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-brand-dark text-white text-sm font-semibold hover:bg-brand-darker transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";
const btnSecondary =
  "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border border-slate-300 bg-white text-ink text-sm font-semibold hover:border-ink hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark mb-3">{children}</p>
  );
}

function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto mb-12" : "max-w-2xl mb-12"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight leading-tight">{title}</h2>
      {lead && <p className="mt-4 text-lg text-slate-600 leading-relaxed">{lead}</p>}
    </div>
  );
}

export function CretemProductPage({ product }: { product: Product }) {
  const cretem = manufacturers.CRETEM;
  const fit = product.heroImageFit ?? "contain";

  const related: Product[] = (product.relatedSlugs ?? [])
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));
  const lineup = productsByManufacturer("CRETEM").filter((p) => p.slug !== product.slug);

  // A single gallery image is shown beside the overview instead of as a one-tile gallery.
  const gallery = product.gallery && product.gallery.length >= 2 ? product.gallery : undefined;
  const overviewFigure: { src: string; alt: string; caption: string; fit: "contain" | "cover" } | undefined = product.heroImageAngled
    ? { src: product.heroImageAngled, alt: `${product.name}, three-quarter view`, caption: "Three-quarter view", fit: "contain" }
    : product.gallery?.length === 1
      ? { src: product.gallery[0].src, alt: product.gallery[0].alt, caption: product.gallery[0].caption ?? "", fit: product.gallery[0].fit ?? "cover" }
      : undefined;

  const subnav: SubnavItem[] = [
    product.demoAvailable ? { id: "demo", label: "Demo" } : null,
    { id: "overview", label: "Overview" },
    product.workflow?.length ? { id: "workflow", label: "How it works" } : null,
    gallery ? { id: "gallery", label: "Up close" } : null,
    product.anatomy?.length ? { id: "components", label: "Components" } : null,
    product.modules?.length ? { id: "options", label: "Options" } : null,
    product.modelTable ? { id: "models", label: "Models" } : null,
    { id: "specifications", label: "Specifications" },
    product.faqs?.length ? { id: "faq", label: "FAQ" } : null,
  ].filter((i): i is SubnavItem => Boolean(i));

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* ── Breadcrumb ─────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-white">
        <Container className="flex items-center gap-2 py-3 text-sm text-slate-500">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden />
          <Link href="/products" className="hover:text-ink transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden />
          <Link href="/products#cretem" className="hover:text-ink transition-colors">CRETEM</Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden />
          <span className="text-ink font-medium truncate">{product.name}</span>
        </Container>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
        <Container className="relative pt-10 pb-14 lg:pt-16 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 xl:col-span-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white pl-1.5 pr-4 py-1.5 mb-6 shadow-sm">
                <span className="inline-flex items-center justify-center h-7 px-2 rounded-full bg-[#1F3A8A] text-white text-[11px] font-bold tracking-wider">
                  CRETEM
                </span>
                <span className="text-xs font-medium text-slate-600">{cretem.tagline}</span>
              </div>

              {product.category && <Eyebrow>{product.category}</Eyebrow>}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.05]">
                {product.name}
              </h1>
              {product.seriesName && (
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {product.seriesName}
                </p>
              )}
              <p className="mt-2 text-xl text-brand-dark font-medium">{product.tagline}</p>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">{product.description}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/demo" className={btnPrimary}>
                  Request a demo <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
                {product.modelTable ? (
                  <a href="#models" className={btnSecondary}>
                    Compare models
                  </a>
                ) : (
                  <a href="#specifications" className={btnSecondary}>
                    View specifications
                  </a>
                )}
              </div>

              <p className="mt-6 text-sm text-slate-500">
                Supplied and supported in Canada and the US by Maxis Pharmacy Automation.
              </p>
            </div>

            <div className="lg:col-span-6 xl:col-span-6">
              <figure className="relative">
                <div
                  className={
                    fit === "cover"
                      ? "relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_40px_80px_-40px_rgba(15,23,42,0.35)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-slate-100 before:to-transparent"
                      : "relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] max-h-[680px] w-full rounded-3xl overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(0,180,200,0.16),rgba(248,250,252,0)_65%)]"
                  }
                >
                  <Image
                    src={product.heroImage}
                    alt={`${product.name} — ${product.tagline}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className={fit === "cover" ? "object-contain p-6 sm:p-8" : "object-contain p-4 sm:p-8 drop-shadow-[0_35px_45px_rgba(15,23,42,0.22)]"}
                  />
                </div>
                {product.heroCaption && (
                  <figcaption className="mt-3 text-center text-xs text-slate-500">{product.heroCaption}</figcaption>
                )}
              </figure>
            </div>
          </div>
        </Container>

        {/* Key figures */}
        {product.heroStats && product.heroStats.length > 0 && (
          <Container className="relative pb-12 lg:pb-16">
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
              {product.heroStats.map((stat) => (
                <div key={stat.label} className="bg-white p-5 lg:p-6">
                  <dd className="text-3xl lg:text-4xl font-bold text-ink tracking-tight tabular-nums">{stat.value}</dd>
                  <dt className="mt-1 text-sm font-semibold text-slate-700">{stat.label}</dt>
                  {stat.note && <p className="mt-0.5 text-xs text-slate-500">{stat.note}</p>}
                </div>
              ))}
            </dl>
          </Container>
        )}

        {product.demoAvailable && (
          <Container className="relative pb-12 lg:pb-16">
            <div id="demo" className="scroll-mt-32 flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
              <span className="shrink-0 w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center">
                <PlayCircle className="w-6 h-6" aria-hidden />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark">Demo video available</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  A demonstration video of the {product.seriesName ?? product.name} is available. Request a viewing with our team.
                </p>
              </div>
              <Link href="/demo" className={`${btnPrimary} shrink-0`}>
                Request the video <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          </Container>
        )}
      </section>

      <ProductSubnav items={subnav} productName={product.name} />

      {/* ── Overview / value props ────────────────────────────── */}
      <section id="overview" className="scroll-mt-32 py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className={overviewFigure ? "lg:col-span-7" : "lg:col-span-12"}>
              <SectionHeader
                eyebrow="Overview"
                title={`Why pharmacies choose the ${product.name}`}
              />
              {product.valueProps && (
                <ol className={overviewFigure ? "space-y-8" : "grid md:grid-cols-3 gap-10"}>
                  {product.valueProps.map((vp, i) => (
                    <li key={vp.title} className="flex gap-5">
                      <span className="shrink-0 w-10 h-10 rounded-full border border-slate-200 bg-slate-50 text-ink text-sm font-bold flex items-center justify-center tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{vp.title}</h3>
                        <p className="mt-2 text-slate-600 leading-relaxed">{vp.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </div>

            {overviewFigure && (
              <figure className="lg:col-span-5 lg:sticky lg:top-36">
                <div className={`relative rounded-3xl border border-slate-200 overflow-hidden ${overviewFigure.fit === "cover" ? "aspect-[4/3] bg-white" : "aspect-[4/5] bg-gradient-to-b from-slate-50 to-slate-100"}`}>
                  <Image
                    src={overviewFigure.src}
                    alt={overviewFigure.alt}
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className={overviewFigure.fit === "cover" ? "object-contain p-6" : "object-contain p-6 drop-shadow-[0_30px_40px_rgba(15,23,42,0.2)]"}
                  />
                </div>
                {overviewFigure.caption && (
                  <figcaption className="mt-3 text-xs text-slate-500 text-center">{overviewFigure.caption}</figcaption>
                )}
              </figure>
            )}
          </div>
        </Container>
      </section>

      {/* ── Workflow ──────────────────────────────────────────── */}
      {product.workflow && product.workflow.length > 0 && (
        <section id="workflow" className="scroll-mt-32 py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
          <Container>
            <SectionHeader
              eyebrow="How it works"
              title="From order to finished output"
              lead={product.integration ? `Orders arrive via ${product.integration[0].replace(/ \(.*\)/, "")}; every step below is handled inside the ${product.name}.` : undefined}
            />
            <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
              {product.workflow.map((step, i) => (
                <li key={step.title} className="bg-white p-6 lg:p-7 flex flex-col gap-3">
                  <span className="text-xs font-bold tracking-widest text-brand-dark tabular-nums">STEP {String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {/* ── Gallery ───────────────────────────────────────────── */}
      {gallery && (
        <section id="gallery" className="scroll-mt-32 py-20 lg:py-28 bg-white">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div className="max-w-2xl">
                <Eyebrow>Up close</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
                  {product.category === "Pouch packaging" ? "Modules, cassettes and the packing line" : `The ${product.name} in detail`}
                </h2>
              </div>
              {product.galleryNote && (
                <p className="text-sm text-slate-500 md:max-w-xs md:text-right">{product.galleryNote}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gallery.map((img, i) => {
                const featured = i === 0 && gallery.length > 2;
                return (
                  <figure
                    key={img.src + i}
                    className={featured ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
                  >
                    <div className={`relative overflow-hidden rounded-2xl border border-slate-200 ${img.fit === "contain" ? "bg-white" : "bg-slate-100"} ${featured ? "aspect-[3/2] lg:h-full lg:min-h-[420px]" : "aspect-[3/2]"}`}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"}
                        className={img.fit === "contain" ? "object-contain p-3" : "object-cover"}
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="mt-2.5 text-sm text-slate-600">{img.caption}</figcaption>
                    )}
                  </figure>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* ── Components ────────────────────────────────────────── */}
      {product.anatomy && product.anatomy.length > 0 && (
        <section id="components" className="scroll-mt-32 py-20 lg:py-28 bg-ink text-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-36">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-light mb-3">Components</p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">What is inside the {product.name}</h2>
                  <p className="mt-4 text-slate-300 leading-relaxed">
                    Component overview as labelled in the CRETEM product documentation.
                  </p>
                  <div className={`relative mt-8 rounded-2xl overflow-hidden border border-white/10 ${product.anatomyImage || fit === "cover" ? "aspect-[4/5] max-w-sm bg-white" : "aspect-[4/5] max-w-sm bg-white/5"}`}>
                    <Image
                      src={product.anatomyImage ?? product.heroImage}
                      alt={`${product.name} — labelled components`}
                      fill
                      sizes="(min-width: 1024px) 30vw, 80vw"
                      className="object-contain p-6"
                    />
                  </div>
                </div>
              </div>

              <ol className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
                {product.anatomy.map((item, i) => (
                  <li key={item.name} className="grid grid-cols-[3rem_1fr] gap-4 py-5">
                    <span className="text-sm font-bold text-brand-light tabular-nums pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <p className="mt-1 text-sm text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>
      )}

      {/* ── Options / modules ─────────────────────────────────── */}
      {product.modules && product.modules.length > 0 && (
        <section id="options" className="scroll-mt-32 py-20 lg:py-28 bg-white">
          <Container>
            <SectionHeader
              eyebrow="Options & modules"
              title={
                product.slug === "mtc-model"
                  ? "Recommended peripherals"
                  : product.slug === "cap-ex-model"
                    ? "3 FSP units on every size"
                    : "Configure for medications outside the cassette"
              }
              lead={
                product.slug === "mtc-model"
                  ? "The MTC-30 is controlled from an optional touch panel and pairs with a recommended scanner and label printer."
                  : product.slug === "cap-ex-model"
                    ? "Three Free Shape Packing (FSP) units are standard on every CAP(EX) size — the highlighted module for half tablets and irregular shapes."
                    : "Free Shape Packing and Manual Divide Units handle half tablets, irregular shapes and hand-loaded medications so they run through the same pouch sequence."
              }
            />
            <div className={`grid gap-6 ${product.modules.some((m) => m.featured) ? "md:grid-cols-2" : product.modules.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {product.modules.map((m) => (
                <article
                  key={m.name}
                  className={`group flex flex-col rounded-2xl border overflow-hidden hover:shadow-lg transition-all ${
                    m.featured
                      ? "md:col-span-2 md:flex-row border-brand-dark/25 bg-slate-50 hover:border-brand-dark/40"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  {m.image ? (
                    <div className={`relative overflow-hidden ${m.featured ? "aspect-[3/2] md:w-[44%] md:shrink-0 md:self-stretch md:min-h-[240px]" : "aspect-[3/2]"} ${m.image.fit === "contain" ? "bg-white" : "bg-slate-100"}`}>
                      <Image src={m.image.src} alt={m.image.alt} fill sizes={m.featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"} className={`${m.featured || m.image.fit === "contain" ? "object-contain p-4" : "object-cover"} group-hover:scale-[1.03] transition-transform duration-700`} />
                    </div>
                  ) : (
                    <div className={`bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center ${m.featured ? "aspect-[3/2] md:w-[42%] md:aspect-auto md:min-h-[280px]" : "aspect-[3/2]"}`}>
                      <span className="text-5xl font-bold text-slate-300 tracking-tight">{m.abbreviation ?? m.name.slice(0, 3)}</span>
                    </div>
                  )}
                  <div className="p-6 flex flex-col gap-3 flex-1 justify-center">
                    <div className="flex items-center gap-2 flex-wrap">
                      {m.abbreviation && (
                        <span className="inline-flex items-center h-6 px-2 rounded-md bg-ink text-white text-[11px] font-bold tracking-wider">{m.abbreviation}</span>
                      )}
                      {m.availability && (
                        <span className="inline-flex items-center h-6 px-2 rounded-md bg-brand-light text-brand-darker text-[11px] font-semibold">{m.availability}</span>
                      )}
                      {m.featured && (
                        <span className="inline-flex items-center h-6 px-2 rounded-md border border-brand-dark/20 text-brand-darker text-[11px] font-semibold">Highlighted</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-ink">{m.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{m.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── Models ────────────────────────────────────────────── */}
      {product.modelTable && (
        <section id="models" className="scroll-mt-32 py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
          <Container>
            <SectionHeader
              eyebrow="Models"
              title={`Choose your ${product.name} configuration`}
              lead="Capacity, options and cabinet dimensions by model. Packing speed, detection and printing are common to the range."
            />
            <ModelTable table={product.modelTable} />
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <p className="text-sm text-slate-500">Not sure which configuration fits your formulary or floor plan? We size it with you.</p>
              <Link href="/contact" className={btnSecondary}>
                Get a configuration recommendation <ArrowUpRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* ── Specifications ────────────────────────────────────── */}
      <section id="specifications" className="scroll-mt-32 py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-36">
                <Eyebrow>Specifications</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight leading-tight">Technical data</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  As published in the CRETEM product documentation. Dimensions are main body only (W × D × H).
                </p>

                {product.integration && product.integration.length > 0 && (
                  <div className="mt-8 rounded-2xl border border-slate-200 p-5">
                    <h3 className="text-sm font-semibold text-ink">Order input & integration</h3>
                    <ul className="mt-3 space-y-2">
                      {product.integration.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-brand-dark mt-0.5 shrink-0" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/integrations" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:underline">
                      Pharmacy software integration <ArrowRight className="w-4 h-4" aria-hidden />
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-8">
              <dl className="rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-200">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-1 sm:grid-cols-[minmax(0,14rem)_1fr] gap-1 sm:gap-6 px-5 py-4 odd:bg-slate-50/60">
                    <dt className="text-sm font-semibold text-slate-700">{spec.label}</dt>
                    <dd className="text-sm text-ink tabular-nums">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              {product.features && product.features.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 mb-4">At a glance</h3>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-brand-dark mt-0.5 shrink-0" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.useCases && product.useCases.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 mb-3">Typical settings</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.useCases.map((u) => (
                      <span key={u} className="inline-flex items-center h-8 px-3 rounded-full border border-slate-200 bg-white text-sm text-slate-700">{u}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      {product.faqs && product.faqs.length > 0 && (
        <section id="faq" className="scroll-mt-32 py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <Eyebrow>FAQ</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight leading-tight">Questions about the {product.name}</h2>
                <p className="mt-4 text-slate-600">Can&apos;t find what you need? Our team answers configuration and installation questions directly.</p>
                <Link href="/contact" className={`${btnSecondary} mt-6`}>
                  Ask a specialist <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              </div>
              <div className="lg:col-span-8 rounded-2xl border border-slate-200 bg-white divide-y divide-slate-200">
                {product.faqs.map((faq) => (
                  <details key={faq.question} className="group px-6 py-5">
                    <summary className="flex items-start justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <span className="font-semibold text-ink">{faq.question}</span>
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 mt-0.5 transition-transform group-open:rotate-180" aria-hidden />
                    </summary>
                    <p className="mt-3 text-slate-600 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── Related CRETEM systems ────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <Eyebrow>More from CRETEM</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">Related systems</h2>
            </div>
            <Link href="/products#cretem" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:underline">
              View the full CRETEM range <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(related.length ? related : lineup.slice(0, 3)).map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all"
              >
                <div className={`relative aspect-[4/3] ${p.heroImageFit === "cover" ? "bg-white border-b border-slate-100" : "bg-gradient-to-b from-slate-50 to-slate-100"}`}>
                  <Image
                    src={p.heroImage}
                    alt={`${p.name} — ${p.tagline}`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-6 group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col gap-1 flex-1">
                  {p.category && <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{p.category}</span>}
                  <h3 className="text-lg font-semibold text-ink group-hover:text-brand-dark transition-colors">{p.name}</h3>
                  <p className="text-sm text-slate-600">{p.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark">
                    View system <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-ink text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-light mb-3">Next step</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                {product.cta?.title ?? `See the ${product.name} in action`}
              </h2>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-2xl">
                {product.cta?.description ?? "Our team offers live demonstrations tailored to your pharmacy's workflow."}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-white text-ink text-sm font-semibold hover:bg-brand-light transition-colors">
                Request a demo <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                Talk to sales
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
