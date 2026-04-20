import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products } from "@/lib/products";

export const metadata = {
  title: "Industries | Maxis Pharmacy Automation",
  description: "Pharmacy automation solutions designed for hospitals, retail pharmacies, and long-term care facilities.",
};

const industries = [
  {
    id: "hospital",
    title: "Hospital Pharmacies",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    description: "Hospitals face relentless pressure to reduce dispensing errors, manage complex inventory, and free up clinical staff for patient care.",
    benefits: [
      "Drop dispensing errors to near zero with GS1 barcoding",
      "Free up technicians and nurses to focus on clinical duties",
      "Seamlessly interface with existing Hospital Information Systems (HIS)"
    ],
    productSlugs: ["smart-pack", "smart-pack-auto", "smart-tablet-cutter"],
  },
  {
    id: "retail",
    title: "Retail Pharmacies",
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=80",
    description: "Independent and chain retail pharmacies are pushed to deliver high-margin adherence programs without expanding real estate or ballooning payroll.",
    benefits: [
      "Grow adherence programs effortlessly using multi-dose packaging",
      "Compact tabletop equipment that scales without structural renovations",
      "Build patient loyalty with easy-to-read compliance pouches"
    ],
    productSlugs: ["smart-pack", "tabletop-adherencepackrx"],
  },
  {
    id: "ltc",
    title: "Long-Term Care",
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80",
    description: "LTC facilities manage massive volumes of daily scripts per patient. Medication passes are tedious, and misfills directly impact patient safety.",
    benefits: [
      "Automate high-volume multi-dose pouch dispensing",
      "Reduce nurse medication pass times significantly",
      "Complete barcode verification from canister to patient tray"
    ],
    productSlugs: ["smart-pack-auto", "adherencepackrx-108"],
  }
];

export default function IndustriesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="bg-ink text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-dark/30 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
            Solutions for every care setting
          </h1>
          <p className="text-xl text-slate-300">
            From precision tabletop packaging to high-capacity robotic packagers, Maxis systems are engineered for the realities of modern medical workflows.
          </p>
        </Container>
      </section>

      {/* INDUSTRY SECTIONS */}
      <div className="py-20 md:py-32">
        <Container className="flex flex-col gap-32">
          {industries.map((ind, idx) => (
            <div key={ind.id} id={ind.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl p-2 bg-slate-100 border border-slate-200">
                  <Image src={ind.img} alt={ind.title} fill className="object-cover rounded-2xl" />
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col">
                <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-6">{ind.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {ind.description}
                </p>

                <div className="mb-10">
                  <h3 className="font-semibold text-ink mb-4 uppercase tracking-wider text-sm">How Maxis Helps</h3>
                  <ul className="flex flex-col gap-4">
                    {ind.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-3 text-slate-700">
                        <CheckCircle2 className="w-6 h-6 text-brand shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-ink mb-4 uppercase tracking-wider text-sm">Recommended Systems</h3>
                  <div className="flex flex-wrap gap-3">
                    {ind.productSlugs.map(slug => {
                      const p = products.find(prod => prod.slug === slug);
                      if (!p) return null;
                      return (
                        <Link 
                          key={slug} 
                          href={`/products/${slug}`}
                          className="inline-flex items-center px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-brand-dark font-medium hover:bg-slate-100 transition-colors"
                        >
                          {p.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </div>

      {/* BOTTOM CTA */}
      <section className="bg-brand-light py-24">
        <Container className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-ink tracking-tight mb-6">
            Ready to upgrade your workflow?
          </h2>
          <p className="text-lg text-slate-700 mb-10">
            Our experts can help you evaluate your facility's needs and recommend the exact Maxis configuration to maximize output and safety.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-brand-dark hover:bg-brand-darker rounded-lg transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Request a workflow analysis
          </Link>
        </Container>
      </section>
    </main>
  );
}
