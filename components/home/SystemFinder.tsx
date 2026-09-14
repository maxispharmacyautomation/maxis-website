"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Check, HeartPulse, Layers, Package, Pill, Store } from "lucide-react";
import { cn } from "@/lib/utils";

export type FinderFormat = "unit-dose" | "multi-dose" | "vials";
export type FinderSetting = "any" | "hospital" | "retail" | "ltc";

export type FinderProduct = {
  slug: string;
  name: string;
  tagline: string;
  manufacturer: "UNIDOSE" | "CRETEM";
  image: string;
  imageStyle: "cutout" | "plate";
  fact?: string;
  formats: FinderFormat[];
  settings: Exclude<FinderSetting, "any">[];
};

const formats: { id: FinderFormat; label: string; hint: string; icon: typeof Pill }[] = [
  { id: "unit-dose", label: "Unit-dose pouches", hint: "One dose per pouch, barcoded", icon: Pill },
  { id: "multi-dose", label: "Multi-dose adherence pouches", hint: "All meds for one time-of-day", icon: Layers },
  { id: "vials", label: "Vials & bottles", hint: "Counted tablets and capsules", icon: Package },
];

const settings: { id: FinderSetting; label: string; icon: typeof Building2 }[] = [
  { id: "any", label: "Any setting", icon: Check },
  { id: "hospital", label: "Hospital", icon: HeartPulse },
  { id: "retail", label: "Retail pharmacy", icon: Store },
  { id: "ltc", label: "Long-term care", icon: Building2 },
];

const badgeClass = {
  UNIDOSE: "bg-ink text-white",
  CRETEM: "bg-[#1F3A8A] text-white",
} as const;

export function SystemFinder({ products }: { products: FinderProduct[] }) {
  const [format, setFormat] = useState<FinderFormat>("unit-dose");
  const [setting, setSetting] = useState<FinderSetting>("any");

  const { results, relaxed } = useMemo(() => {
    const byFormat = products.filter((p) => p.formats.includes(format));
    if (setting === "any") return { results: byFormat, relaxed: false };
    const bySetting = byFormat.filter((p) => p.settings.includes(setting));
    return bySetting.length ? { results: bySetting, relaxed: false } : { results: byFormat, relaxed: true };
  }, [products, format, setting]);

  const formatLabel = formats.find((f) => f.id === format)?.label ?? "";
  const settingLabel = settings.find((s) => s.id === setting)?.label ?? "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      {/* Controls */}
      <div className="lg:col-span-4 rounded-3xl bg-ink text-white p-6 sm:p-8 flex flex-col gap-8">
        <fieldset>
          <legend className="flex items-center gap-3 text-sm font-semibold text-white/70">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-ink text-xs font-bold">1</span>
            What do you need to produce?
          </legend>
          <div className="mt-4 grid gap-2">
            {formats.map((f) => {
              const active = f.id === format;
              const Icon = f.icon;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFormat(f.id)}
                  aria-pressed={active}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl border p-4 text-left transition-all",
                    active
                      ? "border-brand bg-brand/15 shadow-[inset_0_0_0_1px_rgba(0,180,200,0.6)]"
                      : "border-white/10 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.08]",
                  )}
                >
                  <span className={cn("inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl", active ? "bg-brand text-ink" : "bg-white/10 text-brand")}>
                    <Icon className="w-5 h-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold leading-tight">{f.label}</span>
                    <span className="block text-xs text-white/60 mt-0.5">{f.hint}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="flex items-center gap-3 text-sm font-semibold text-white/70">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-ink text-xs font-bold">2</span>
            Where will it run?
          </legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {settings.map((s) => {
              const active = s.id === setting;
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSetting(s.id)}
                  aria-pressed={active}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
                    active ? "border-brand bg-brand text-ink" : "border-white/15 text-white/80 hover:border-white/40 hover:text-white",
                  )}
                >
                  <Icon className="w-4 h-4" aria-hidden />
                  {s.label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm text-white/70">Not sure where to start? Tell us your daily volume and we&apos;ll recommend a configuration.</p>
          <Link href="/contact" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-white transition-colors">
            Talk to a specialist <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </div>

      {/* Results */}
      <div className="lg:col-span-8 flex flex-col">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-5">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-ink">{results.length}</span> {results.length === 1 ? "system" : "systems"} for{" "}
            <span className="font-semibold text-ink">{formatLabel.toLowerCase()}</span>
            {setting !== "any" && !relaxed && (
              <>
                {" "}in <span className="font-semibold text-ink">{settingLabel.toLowerCase()}</span>
              </>
            )}
          </p>
          {relaxed && (
            <p className="text-xs text-slate-500">
              No dedicated match for {settingLabel.toLowerCase()} yet — showing every {formatLabel.toLowerCase()} system.
            </p>
          )}
        </div>

        <ul key={`${format}-${setting}`} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {results.map((p, i) => (
            <li
              key={p.slug}
              className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both duration-500"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Link
                href={`/products/${p.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)]"
              >
                <div className={cn("relative aspect-[5/4] overflow-hidden", p.imageStyle === "plate" ? "bg-white" : "bg-gradient-to-b from-slate-50 to-slate-100")}>
                  <span className={cn("absolute top-3 left-3 z-10 inline-flex h-6 px-2 items-center rounded-md text-[10px] font-bold tracking-wider", badgeClass[p.manufacturer])}>
                    {p.manufacturer}
                  </span>
                  <Image
                    src={p.image}
                    alt={`${p.name} — ${p.tagline}`}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 640px) 33vw, 100vw"
                    className={cn("object-contain p-3 transition-transform duration-700 group-hover:scale-[1.05]", p.imageStyle === "cutout" && "drop-shadow-[0_18px_24px_rgba(15,23,42,0.2)]")}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold text-ink tracking-tight group-hover:text-brand-dark transition-colors">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-snug">{p.tagline}</p>
                  <div className="mt-auto pt-4 flex items-center justify-between gap-3 text-xs">
                    {p.fact ? <span className="font-semibold text-ink tabular-nums">{p.fact}</span> : <span />}
                    <span className="inline-flex items-center gap-1 font-semibold text-brand-dark">
                      View <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-600 flex-1">
            Compare cassette counts, footprints and speeds side by side, or send us your requirements for a tailored recommendation.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/products#cretem" className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-ink hover:border-ink transition-colors">
              Compare CRETEM models
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-brand-dark px-4 py-2 text-sm font-semibold text-white hover:bg-brand-darker transition-colors">
              Request a demo <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
