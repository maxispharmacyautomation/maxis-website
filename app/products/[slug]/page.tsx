import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Zap,
  Package,
  ScanBarcode,
  Cpu,
  HeartHandshake,
  ShieldCheck,
  Printer,
  Wrench,
  Layers,
  Gauge,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products, type Product } from "@/lib/products";
import { isCretem } from "@/lib/manufacturers";
import { CretemProductPage } from "@/components/products/cretem/CretemProductPage";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.heroImage, alt: `${product.name} — ${product.tagline}` }],
    },
  };
}

const highlightIconMap = [Zap, Gauge, ScanBarcode, Package, Printer, HeartHandshake, ShieldCheck, Wrench, Cpu, Layers, CheckCircle2, ArrowRight];

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center min-h-screen bg-ink">
        <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <ProductDetailContent slug={slug} />
    </Suspense>
  );
}

async function ProductDetailContent({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  // CRETEM systems use the dedicated template; UNIDOSE pages keep the original layout below.
  if (isCretem(product)) {
    return <CretemProductPage product={product} />;
  }

  const relatedProducts: Product[] = product.relatedSlugs
    ? product.relatedSlugs
        .map((relatedSlug) => products.find((p) => p.slug === relatedSlug))
        .filter((p): p is Product => Boolean(p))
    : products.filter((p) => p.slug !== product.slug).slice(0, 3);

  // Parse how it works into steps
  const howItWorksSteps = product.howItWorks
    ? product.howItWorks.split(". ").filter(s => s.trim().length > 20).slice(0, 5)
    : [];

  return (
    <main className="flex flex-col min-h-screen bg-white">

      {/* BREADCRUMBS */}
      <div className="bg-slate-50 border-b border-slate-100 py-3 text-sm text-slate-500">
        <Container className="flex items-center gap-2">
          <Link href="/" className="hover:text-brand-dark transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-brand-dark transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-800 font-medium">{product.name}</span>
        </Container>
      </div>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen lg:min-h-[90vh] flex items-center overflow-hidden bg-ink">
        {/* bg glows */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-dark/25 rounded-full blur-[140px] pointer-events-none translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal/15 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url('https://transparenttextures.com/patterns/cubes.png')" }} />

        <Container className="relative z-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT — copy */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-light text-xs font-bold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse" />
                {product.tagline}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.05]">
                {product.name}
              </h1>

              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
                {product.description.split(".")[0]}.
              </p>

              {/* 3 stat pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
                {product.specs.slice(0, 3).map((s, i) => (
                  <div key={i} className="bg-white/8 border border-white/15 backdrop-blur rounded-2xl px-5 py-4">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{s.label}</span>
                    <span className="text-white font-bold text-lg mt-1">{s.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <Link href="/demo"
                  className="inline-flex items-center gap-2 px-8 h-13 text-base font-bold text-ink bg-white hover:bg-brand-light rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(0,180,200,0.35)] hover:-translate-y-1">
                  Request a Demo
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-8 h-13 text-base font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 hover:-translate-y-1">
                  Talk to an Expert <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT — product image card */}
            <div className="order-1 lg:order-2 relative flex justify-center">
              {/* glow halo behind card */}
              <div className="absolute inset-8 bg-gradient-to-tr from-brand-dark/50 to-brand-teal/30 rounded-[2.5rem] blur-3xl" />
              <div className="relative w-full max-w-md aspect-[4/3] bg-white/5 border border-white/12 backdrop-blur-xl rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden group">
                {/* top shimmer line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-light to-transparent opacity-40" />
                <Image
                  src={product.heroImage}
                  alt={`${product.name} — ${product.tagline}`}
                  fill priority
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                />
                {/* corner badge */}
                <div className="absolute top-4 right-4 bg-brand/20 border border-brand/30 backdrop-blur text-brand-light text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Maxis Certified
                </div>
              </div>
            </div>

          </div>
        </Container>

        {/* wave divider */}
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L720 0L1440 60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      {howItWorksSteps.length > 0 && (
        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-brand font-semibold tracking-wider uppercase text-sm mb-3">
                <span className="w-8 h-px bg-brand" /> Process <span className="w-8 h-px bg-brand" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-ink tracking-tight">How It Works</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {howItWorksSteps.map((step, i) => (
                <div key={i} className="flex flex-row md:flex-col items-start md:items-center md:text-center gap-4 relative">
                  {/* step circle */}
                  <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand flex items-center justify-center text-white font-black text-base md:text-lg shadow-lg shadow-brand/30 mb-0 md:mb-5 shrink-0">
                    {i + 1}
                    <div className="hidden md:block absolute inset-0 rounded-full bg-brand/40 animate-ping" style={{ animationDelay: `${i * 0.3}s`, animationDuration: "2s" }} />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.trim()}.</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── SYSTEM ANATOMY ───────────────────────────────── */}
      {product.anatomy && product.anatomy.length > 0 && (
        <section className="py-24 bg-slate-50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative">
                <div className="text-left mb-8 lg:hidden">
                  <div className="inline-flex items-center gap-2 text-brand font-semibold tracking-wider uppercase text-sm mb-3">
                    <span className="w-8 h-px bg-brand" /> Overview
                  </div>
                  <h2 className="text-4xl font-black text-ink tracking-tight">Inside the System</h2>
                </div>
                <div className="relative aspect-[4/3] bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-xl">
                  <Image
                    src={product.heroImage}
                    alt={`${product.name} labeled components`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div>
                <div className="hidden lg:block mb-8">
                  <div className="inline-flex items-center gap-2 text-brand font-semibold tracking-wider uppercase text-sm mb-3">
                    <span className="w-8 h-px bg-brand" /> Overview
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-ink tracking-tight">Inside the System</h2>
                </div>
                <div className="space-y-4">
                  {product.anatomy.map((item) => (
                    <div key={item.name} className="bg-white border border-slate-200 rounded-2xl p-5">
                      <h3 className="font-bold text-ink mb-1">{item.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── HIGHLIGHTS ICON BENTO ────────────────────────── */}
      {product.highlights && product.highlights.length > 0 && (
        <section className="py-24 bg-slate-50">
          <Container>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-brand font-semibold tracking-wider uppercase text-sm mb-3">
                <span className="w-8 h-px bg-brand" /> Capabilities <span className="w-8 h-px bg-brand" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-ink tracking-tight">Built for Performance</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {product.highlights.map((h, idx) => {
                const Icon = highlightIconMap[idx % highlightIconMap.length];
                const isAccent = idx === 0 || idx === 5;
                return (
                  <div key={idx}
                    className={`group rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col gap-4 ${isAccent
                      ? "bg-ink border-white/10 text-white col-span-1"
                      : "bg-white border-slate-200 hover:border-brand-light"}`}>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${isAccent ? "bg-brand/20" : "bg-brand/10"}`}>
                      <Icon className={`w-6 h-6 ${isAccent ? "text-brand-light" : "text-brand"}`} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-base mb-1 ${isAccent ? "text-white" : "text-ink"}`}>{h.title}</h3>
                      <p className={`text-sm leading-relaxed ${isAccent ? "text-slate-300" : "text-slate-600"}`}>{h.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* ── POUCH / BARCODE SPEC 3-COL ───────────────────── */}
      {product.pouchSpec && (
        <section className="py-20 bg-white">
          <Container>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-brand font-semibold tracking-wider uppercase text-sm mb-3">
                <span className="w-8 h-px bg-brand" /> Packaging Details <span className="w-8 h-px bg-brand" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-ink tracking-tight">Packaging Specifications</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Pouch */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-6">
                  <Package className="w-6 h-6 text-brand" />
                </div>
                <h3 className="font-bold text-ink text-lg mb-4">Pouch Sizes</h3>
                <ul className="space-y-3">
                  {product.pouchSpec.pouchSizes.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Barcode */}
              <div className="rounded-3xl overflow-hidden border border-brand/20 bg-gradient-to-b from-brand/5 to-white p-8">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-6">
                  <ScanBarcode className="w-6 h-6 text-brand" />
                </div>
                <h3 className="font-bold text-ink text-lg mb-4">Barcode Support</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{product.pouchSpec.barcodeSummary}</p>
              </div>
              {/* Software */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-6">
                  <Printer className="w-6 h-6 text-brand" />
                </div>
                <h3 className="font-bold text-ink text-lg mb-4">Built-In Software</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{product.pouchSpec.softwareSummary}</p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── MODEL COMPARISON ─────────────────────────────── */}
      {product.modelTable && (
        <section className="py-24 bg-slate-50">
          <Container>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-brand font-semibold tracking-wider uppercase text-sm mb-3">
                <span className="w-8 h-px bg-brand" /> Configurations <span className="w-8 h-px bg-brand" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-ink tracking-tight">Available Models</h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Compare cassette capacity, options, and cabinet size to match your formulary and floor plan.
              </p>
            </div>
            <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[720px] text-left border-collapse">
                <thead>
                  <tr className="bg-ink text-white">
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-slate-300 whitespace-nowrap">Specification</th>
                    {product.modelTable.models.map((model) => (
                      <th key={model} className="px-5 py-4 text-sm font-bold whitespace-nowrap">{model}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.modelTable.rows.map((row) => (
                    <tr key={row.label} className="bg-white hover:bg-slate-50 transition-colors">
                      <th className="px-5 py-4 text-sm font-semibold text-ink whitespace-nowrap">{row.label}</th>
                      {row.values.map((value, i) => (
                        <td key={`${row.label}-${i}`} className="px-5 py-4 text-sm text-slate-600 tabular-nums">{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
      )}

      {/* ── SPECS + FEATURES SIDE BY SIDE ────────────────── */}
      <section className="py-24 bg-ink relative overflow-hidden">
        {/* bg glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-dark/20 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

            {/* SPECS */}
            <div>
              <div className="inline-flex items-center gap-2 text-brand-light font-semibold tracking-wider uppercase text-xs mb-5">
                <span className="w-6 h-px bg-brand-light" /> Technical Specs
              </div>
              <h2 className="text-3xl font-black text-white mb-8">Full Specifications</h2>
              <div className="rounded-3xl overflow-hidden border border-white/10 divide-y divide-white/10">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                    <span className="text-slate-400 text-sm uppercase tracking-wider w-36 shrink-0">{spec.label}</span>
                    <span className="text-white font-semibold text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FEATURES */}
            <div>
              <div className="inline-flex items-center gap-2 text-brand-light font-semibold tracking-wider uppercase text-xs mb-5">
                <span className="w-6 h-px bg-brand-light" /> Key Advantages
              </div>
              <h2 className="text-3xl font-black text-white mb-8">What Sets It Apart</h2>
              <div className="space-y-3">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 hover:bg-white/10 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-light" />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{feat}</p>
                  </div>
                ))}
              </div>

              {/* Use cases pills */}
              <div className="mt-8">
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-3">Ideal for</p>
                <div className="flex flex-wrap gap-2">
                  {product.useCases.map((u, i) => (
                    <span key={i} className="px-4 py-2 text-xs font-semibold text-brand-light bg-brand/10 border border-brand/20 rounded-full">
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-24 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* sticky left */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-28">
                  <div className="inline-flex items-center gap-2 text-brand font-semibold tracking-wider uppercase text-sm mb-4">
                    <span className="w-6 h-px bg-brand" /> FAQ
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-ink mb-6 leading-tight">
                    Common Questions
                  </h2>
                  <p className="text-slate-600 mb-8">
                    Everything you need to know about the {product.name}. Can't find your answer?
                  </p>
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand text-brand font-bold text-sm hover:bg-brand hover:text-white transition-all">
                    Ask our team <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* accordion */}
              <div className="lg:col-span-2 divide-y divide-slate-100">
                {product.faqs.map((faq, idx) => (
                  <details key={idx} className="group py-6">
                    <summary className="flex items-start justify-between cursor-pointer list-none gap-4">
                      <span className="font-semibold text-ink text-base group-hover:text-brand-dark transition-colors">
                        {faq.question}
                      </span>
                      <span className="w-7 h-7 rounded-full bg-slate-100 group-open:bg-brand/10 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                        <ChevronDown className="w-4 h-4 text-slate-500 group-open:text-brand transition-transform group-open:rotate-180" />
                      </span>
                    </summary>
                    <p className="mt-4 text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── RELATED PRODUCTS ─────────────────────────────── */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-brand font-semibold tracking-wider uppercase text-sm mb-3">
                <span className="w-6 h-px bg-brand" /> More Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-ink tracking-tight">Explore Other Systems</h2>
            </div>
            <Link href="/products" className="text-brand-dark font-semibold hover:underline shrink-0 inline-flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`}
                className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-brand-light hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <div className="relative h-44 bg-slate-50 overflow-hidden">
                  <Image src={p.heroImage} alt={`${p.name} — ${p.tagline}`} fill className="object-contain p-6 group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-ink text-lg mb-1 group-hover:text-brand-dark transition-colors">{p.name}</h3>
                  <p className="text-slate-500 text-sm mb-4 flex-1 line-clamp-2">{p.tagline}</p>
                  <div className="inline-flex items-center text-brand-dark font-semibold text-sm mt-auto group-hover:translate-x-1 transition-transform">
                    View details <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className="relative py-28 bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "url('https://transparenttextures.com/patterns/cubes.png')" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-brand-dark/30 blur-[120px] rounded-full pointer-events-none" />

        <Container className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-3xl bg-brand/20 border border-brand/30 flex items-center justify-center mx-auto mb-8">
            <Zap className="w-8 h-8 text-brand-light" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            {product.cta?.title ?? (
              <>
                See {product.name}
                <br />
                in Action
              </>
            )}
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            {product.cta?.description ?? "Our engineering team offers live remote or on-site demonstrations tailored to your pharmacy's workflow."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo"
              className="inline-flex items-center justify-center px-10 h-14 text-base font-bold text-ink bg-white hover:bg-brand-light rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-1">
              Request a Demo
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 h-14 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-1">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

    </main>
  );
}
