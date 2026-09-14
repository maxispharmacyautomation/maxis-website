"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const productGroups = [
  {
    manufacturer: "UNIDOSE",
    tagline: "Unit-dose & adherence pouch packaging",
    href: "/products#unidose",
    items: [
      { name: "Smart Pack®", description: "Tabletop unit-dose packaging", href: "/products/smart-pack" },
      { name: "Smart Pack Auto®", description: "Automatic unit-dose packaging", href: "/products/smart-pack-auto" },
      { name: "Tabletop AdherencePackRx", description: "Semi-automatic multi-dose", href: "/products/tabletop-adherencepackrx" },
      { name: "AdherencePackRx 108", description: "108-canister multi-dose", href: "/products/adherencepackrx-108" },
    ],
  },
  {
    manufacturer: "CRETEM",
    tagline: "Intelligent tablet packing systems",
    href: "/products#cretem",
    items: [
      { name: "CAP(EX) Model", description: "52–92 cassettes, extendable", href: "/products/cap-ex-model" },
      { name: "WAP Model", description: "144–224 cassettes, slim depth", href: "/products/wap-model" },
      { name: "AP Model", description: "207–500 cassettes", href: "/products/ap-model" },
      { name: "AP MD Model", description: "300–480 cassettes, multi-dose", href: "/products/ap-md-model" },
      { name: "MTC Model", description: "Multi tablet counter for vials", href: "/products/mtc-model" },
      { name: "Tablet Counter", description: "Benchtop infrared counter", href: "/products/tablet-counter" },
    ],
  },
];

const buttonPrimaryStyles = "inline-flex items-center justify-center whitespace-nowrap px-5 py-2.5 bg-brand-dark text-white rounded-lg font-medium hover:bg-brand-darker transition duration-200 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200"
          : "bg-white"
      )}
    >
      <Container className="flex h-16 md:h-[72px] items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Maxis Pharmacy Automation home" className="flex items-center gap-3 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 rounded-sm">
          <Image src="/brand/maxis-logo-header.png" alt="Maxis Logo" width={240} height={80} priority className="h-8 md:h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-brand-dark focus:text-brand-dark font-medium text-sm bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[560px] md:w-[680px] grid-cols-2 gap-6 p-5">
                    {productGroups.map((group) => (
                      <div key={group.manufacturer}>
                        <div className="flex items-baseline justify-between gap-3 px-3 pb-2 mb-1 border-b border-slate-100">
                          <div>
                            <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink">{group.manufacturer}</div>
                            <div className="text-xs text-slate-500">{group.tagline}</div>
                          </div>
                        </div>
                        <ul className="flex flex-col gap-0.5">
                          {group.items.map((product) => (
                            <li key={product.name}>
                              <NavigationMenuLink
                                render={<Link href={product.href} />}
                                className="block select-none rounded-md px-3 py-2.5 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-brand-dark focus:bg-slate-50 focus:text-brand-dark"
                              >
                                <div className="text-sm font-medium leading-none text-ink">{product.name}</div>
                                <div className="mt-1 text-xs text-slate-500">{product.description}</div>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                        <NavigationMenuLink
                          render={<Link href={group.href} />}
                          className="mt-1 block px-3 py-2 text-xs font-semibold text-brand-dark hover:underline outline-none"
                        >
                          All {group.manufacturer} systems →
                        </NavigationMenuLink>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <nav className="flex items-center gap-6 xl:gap-8">
            <Link
              href="/industries"
              className="text-slate-700 hover:text-brand-dark focus:text-brand-dark font-medium text-sm transition-colors tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1"
            >
              Industries
            </Link>
            <Link
              href="/integrations"
              className="text-slate-700 hover:text-brand-dark focus:text-brand-dark font-medium text-sm transition-colors tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1"
            >
              Integrations
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-brand-dark focus:text-brand-dark font-medium text-sm transition-colors tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-slate-700 hover:text-brand-dark focus:text-brand-dark font-medium text-sm transition-colors tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-brand-dark focus:text-brand-dark font-medium text-sm transition-colors tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm px-1"
            >
              Contact
            </Link>
          </nav>

          <Link href="/demo" className={buttonPrimaryStyles}>
            Request Demo
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger className="lg:hidden p-2 text-slate-700 hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-none">
            <div className="flex flex-col h-full bg-white">
              {/* Added SheetTitle to fix accessibility issue */}
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} aria-label="Maxis Pharmacy Automation home" className="flex items-center gap-3 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand p-1 rounded-sm">
                  <Image src="/brand/maxis-logo-header.png" alt="Maxis Logo" width={200} height={64} priority className="h-7 md:h-8 w-auto object-contain" />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8">
                <nav className="flex flex-col gap-6">
                  {productGroups.map((group) => (
                    <div key={group.manufacturer} className="space-y-3">
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.16em]">
                        {group.manufacturer} <span className="font-medium normal-case tracking-normal text-slate-400">· {group.tagline}</span>
                      </h3>
                      <ul className="flex flex-col gap-3 pl-2">
                        {group.items.map((product) => (
                          <li key={product.name}>
                            <Link
                              href={product.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-lg font-medium text-slate-700 active:text-brand-dark"
                            >
                              {product.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="h-px bg-slate-100 w-full my-2"></div>

                  <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 active:text-brand-dark">
                    Industries
                  </Link>
                  <Link href="/integrations" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 active:text-brand-dark">
                    Integrations
                  </Link>
                  <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 active:text-brand-dark">
                    About
                  </Link>
                  <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 active:text-brand-dark">
                    Blog
                  </Link>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 active:text-brand-dark">
                    Contact
                  </Link>
                </nav>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <Link href="/demo" onClick={() => setMobileMenuOpen(false)} className={cn(buttonPrimaryStyles, "w-full h-12 text-base")}>
                  Request Demo
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
