"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type SubnavItem = { id: string; label: string };

type Props = {
  items: SubnavItem[];
  productName: string;
};

/**
 * Sticky in-page navigation for long product pages.
 * Highlights the section currently in view and keeps the primary CTA reachable.
 */
export function ProductSubnav({ items, productName }: Props) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    // The active section is the last one whose top has crossed an activation line placed a little
    // below the sticky header + subnav, so a section becomes current as its heading comes into view.
    let frame = 0;
    const update = () => {
      frame = 0;
      const activationLine = Math.max(160, window.innerHeight * 0.35);
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) current = section.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [items]);

  return (
    <div className="sticky top-16 md:top-[72px] z-30 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-4">
        <span className="hidden lg:block text-sm font-semibold text-ink whitespace-nowrap pr-4 border-r border-slate-200">
          {productName}
        </span>
        <nav aria-label="On this page" className="flex-1 overflow-x-auto scrollbar-none">
          <ul className="flex items-center gap-1 -mb-px">
            {items.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "inline-flex items-center h-12 px-3 text-sm whitespace-nowrap border-b-2 transition-colors",
                      isActive
                        ? "border-brand-dark text-brand-dark font-semibold"
                        : "border-transparent text-slate-600 hover:text-ink",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link
          href="/demo"
          className="hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-lg bg-brand-dark text-white text-sm font-semibold hover:bg-brand-darker transition-colors whitespace-nowrap"
        >
          Request a demo
        </Link>
      </div>
    </div>
  );
}
