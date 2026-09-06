import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { products } from "@/lib/products";

const Facebook = (props: React.ComponentProps<"svg">) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Instagram = (props: React.ComponentProps<"svg">) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Linkedin = (props: React.ComponentProps<"svg">) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Youtube = (props: React.ComponentProps<"svg">) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);


export function Footer() {
  return (
    <footer className="bg-ink text-slate-400">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1 — Brand block */}
          <div className="flex flex-col gap-6 lg:pr-4">
            <Link href="/" aria-label="Maxis Pharmacy Automation home" className="flex items-center gap-3 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD4E6] rounded-sm w-fit group">
              <Image src="/brand/maxis-logo-footer.png" alt="Maxis Logo" width={240} height={80} className="h-8 md:h-10 w-auto object-contain brightness-[1.1]" />
            </Link>
            <div className="space-y-4">
              <p className="text-slate-300 font-medium">
                Right Dose, On Time, Right Patient.
              </p>
              <p className="text-sm leading-relaxed">
                Modern medication packaging systems for hospitals, retail pharmacies, and long-term care across Canada, the US, and beyond.
              </p>
            </div>
          </div>

          {/* Column 2 — Products */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-6">Products</h3>
            <ul className="flex flex-col gap-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`} className="text-sm hover:text-[#3DD4E6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD4E6] rounded-sm px-1 -ml-1">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-6">Company</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about" className="text-sm hover:text-[#3DD4E6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD4E6] rounded-sm px-1 -ml-1">
                  About
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-sm hover:text-[#3DD4E6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD4E6] rounded-sm px-1 -ml-1">
                  Software Integration
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm hover:text-[#3DD4E6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD4E6] rounded-sm px-1 -ml-1">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-[#3DD4E6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD4E6] rounded-sm px-1 -ml-1">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-sm hover:text-[#3DD4E6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD4E6] rounded-sm px-1 -ml-1">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#3DD4E6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD4E6] rounded-sm px-1 -ml-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-6">Contact</h3>
            <div className="flex flex-col gap-4 text-sm">
              <p>Hazelton Ave, Hamilton,<br />Ontario L9B 0E9, Canada</p>
              
              <div className="flex flex-col gap-2">
                <a href="tel:+18339351500" className="hover:text-[#3DD4E6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD4E6] rounded-sm w-fit px-1 -ml-1">+1 833-935-1500</a>
                <a href="tel:+14168275330" className="hover:text-[#3DD4E6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD4E6] rounded-sm w-fit px-1 -ml-1">+1 416-827-5330</a>
              </div>
              
              <a href="mailto:sales@maxispharmacyautomation.ca" className="hover:text-[#3DD4E6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD4E6] rounded-sm w-fit px-1 -ml-1 break-all">
                sales@maxispharmacyautomation.ca
              </a>

              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="text-slate-400 hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm p-1 -ml-1" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm p-1" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm p-1" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm p-1" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>
      
      {/* Bottom bar */}
      <div className="border-t border-slate-700 mt-8">
        <Container className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Maxis Pharmacy Automation. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#3DD4E6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD4E6] rounded-sm px-1">Privacy Policy</Link>
            <span className="text-slate-600">|</span>
            <Link href="/terms" className="hover:text-[#3DD4E6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DD4E6] rounded-sm px-1">Terms of Service</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
