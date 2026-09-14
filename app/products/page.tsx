import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Product } from "@/lib/products";
import { manufacturerOrder, manufacturers, productsByManufacturer } from "@/lib/manufacturers";

export const metadata = {
  title: "Products",
  description:
    "UNIDOSE unit-dose and adherence pouch packagers and CRETEM cassette-based intelligent tablet packing systems, vial counters and tablet counters — supplied and supported by Maxis across Canada and the US.",
};

const badgeClass: Record<string, string> = {
  UNIDOSE: "bg-ink",
  CRETEM: "bg-[#1F3A8A]",
};

export default function ProductsIndex() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
        />
        <Container className="relative pt-12 pb-12 lg:pt-20 lg:pb-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark mb-3">Products</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.05]">
              Packaging and counting systems for every dispensing volume
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-slate-600 leading-relaxed">
              Two manufacturer ranges, one point of supply and support. Browse by manufacturer below, or jump to a product from the menu.
            </p>
          </div>
          <nav aria-label="Manufacturers" className="mt-8 flex flex-wrap gap-3">
            {manufacturerOrder.map((id) => (
              <a
                key={id}
                href={`#${id.toLowerCase()}`}
                className="inline-flex items-center gap-2 h-10 pl-1.5 pr-4 rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:border-ink hover:text-ink transition-colors"
              >
                <span className={`inline-flex h-7 px-2 items-center rounded-full text-white text-[11px] font-bold tracking-wider ${badgeClass[id]}`}>{id}</span>
                {manufacturers[id].tagline}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {manufacturerOrder.map((id, idx) => {
        const info = manufacturers[id];
        const list = productsByManufacturer(id);
        return (
          <section
            key={id}
            id={id.toLowerCase()}
            className={`scroll-mt-24 py-16 lg:py-24 ${idx % 2 === 1 ? "bg-slate-50 border-y border-slate-200" : "bg-white"}`}
          >
            <Container>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                <div className="max-w-2xl">
                  <span className={`inline-flex h-7 px-2.5 items-center rounded-md text-white text-xs font-bold tracking-wider ${badgeClass[id]}`}>{info.name}</span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-bold text-ink tracking-tight leading-tight">{info.tagline}</h2>
                  <p className="mt-3 text-slate-600 leading-relaxed">{info.description}</p>
                </div>
                {info.logo && (
                  <Image src={info.logo.src} alt={info.logo.alt} width={info.logo.width} height={info.logo.height} className="hidden md:block w-36 h-auto shrink-0" />
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {list.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-ink text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-light mb-3">Next step</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">Not sure which system is right for you?</h2>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-2xl">
                Tell us your dispensing volume, packaging format and available floor space. We&apos;ll recommend a configuration and arrange a demonstration.
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

function ProductCard({ product }: { product: Product }) {
  const stats = product.heroStats?.slice(0, 3) ?? product.specs.slice(0, 3).map((s) => ({ value: s.value, label: s.label }));
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all"
    >
      <div className={`relative aspect-[4/3] overflow-hidden ${product.heroImageFit === "cover" ? "bg-white border-b border-slate-100" : "bg-gradient-to-b from-slate-50 to-slate-100"}`}>
        <Image
          src={product.heroImage}
          alt={`${product.name} — ${product.tagline}`}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
          className="object-contain p-6 group-hover:scale-[1.04] transition-transform duration-700"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        {product.category && <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{product.category}</span>}
        <h3 className="mt-1 text-xl font-semibold text-ink group-hover:text-brand-dark transition-colors">{product.name}</h3>
        <p className="mt-1 text-sm text-brand-dark font-medium">{product.tagline}</p>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">{product.description}</p>

        <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
          {stats.map((s) => (
            <div key={s.label} className="min-w-0">
              <dd className="text-sm font-bold text-ink tabular-nums truncate">{s.value}</dd>
              <dt className="text-[11px] text-slate-500 truncate">{s.label}</dt>
            </div>
          ))}
        </dl>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark">
          View system <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
