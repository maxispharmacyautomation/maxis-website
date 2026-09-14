"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ShowcaseProduct = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  /** "plate" for whitened photographs that sit on a plain white surface; "cutout" for transparent renders. */
  imageStyle: "cutout" | "plate";
  fact?: string;
};

type Props = {
  manufacturer: "UNIDOSE" | "CRETEM";
  products: ShowcaseProduct[];
  /** Rendered beside the scroll controls (e.g. "All CRETEM systems"). */
  footerHref: string;
};

const badgeClass: Record<Props["manufacturer"], string> = {
  UNIDOSE: "bg-ink text-white",
  CRETEM: "bg-[#1F3A8A] text-white",
};

export function ProductShowcase({ manufacturer, products, footerHref }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      setCanPrev(track.scrollLeft > 8);
      setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 8);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [products.length]);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("li");
    const step = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step * 2, behavior: "smooth" });
  };

  const scrollable = canPrev || canNext;

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-4 sm:scroll-px-6 lg:scroll-px-8 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 pb-4 scrollbar-none"
        aria-label={`${manufacturer} systems`}
      >
        {products.map((p, i) => (
          <li
            key={p.slug}
            className="snap-start shrink-0 w-[78vw] max-w-[320px] sm:w-[300px] lg:w-[calc((100%-3*1.25rem)/4)] lg:min-w-[280px]"
          >
            <Link
              href={`/products/${p.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <div
                className={cn(
                  "relative aspect-[4/5] sm:aspect-square overflow-hidden",
                  p.imageStyle === "plate"
                    ? "bg-white"
                    : "bg-[radial-gradient(ellipse_at_50%_60%,rgba(0,180,200,0.14),rgba(248,250,252,0)_70%)]",
                )}
              >
                <span className={cn("absolute top-4 left-4 z-10 inline-flex h-6 px-2 items-center rounded-md text-[10px] font-bold tracking-wider", badgeClass[manufacturer])}>
                  {manufacturer}
                </span>
                <Image
                  src={p.image}
                  alt={`${p.name} — ${p.tagline}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 300px, 78vw"
                  priority={i < 2}
                  className={cn(
                    "object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.05]",
                    p.imageStyle === "cutout" && "drop-shadow-[0_24px_30px_rgba(15,23,42,0.22)]",
                  )}
                />
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{p.category}</span>
                <h3 className="mt-1 text-xl font-bold text-ink tracking-tight group-hover:text-brand-dark transition-colors">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600 leading-snug">{p.tagline}</p>
                <div className="mt-auto pt-5 flex items-center justify-between gap-3">
                  {p.fact ? <span className="text-xs font-semibold text-ink tabular-nums">{p.fact}</span> : <span />}
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark">
                    Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center justify-between gap-4">
        <Link href={footerHref} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:underline">
          All {manufacturer} systems <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
        {scrollable && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Scroll products left"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-ink transition-colors hover:border-ink disabled:opacity-30 disabled:hover:border-slate-300"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Scroll products right"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-ink transition-colors hover:border-ink disabled:opacity-30 disabled:hover:border-slate-300"
            >
              <ChevronRight className="w-5 h-5" aria-hidden />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
