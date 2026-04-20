import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Target, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products } from "@/lib/products";

export const metadata = {
  title: "Products | Maxis Pharmacy Automation",
  description: "Explore our range of pharmacy automation products. Automation built for accuracy, speed, and compliance.",
};

export default function ProductsIndex() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      
      {/* PREMIUM HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-ink">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-dark/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-brand-light font-bold tracking-widest uppercase text-xs mb-6">
              <span className="w-8 h-px bg-brand-teal"></span>
              Hardware Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Systems built for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-light">absolute precision.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              From modular tabletop packaging to high-volume robotic fulfillment, our systems eliminate manual intervention.
            </p>
          </div>
        </Container>
      </section>

      {/* FLOAT STRIP */}
      <section className="-mt-10 relative z-20 pb-20">
        <Container>
          <div className="bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="flex items-center gap-4 py-4 md:py-0 md:px-8 first:pl-0 last:pr-0">
                <Target className="w-8 h-8 text-brand shrink-0" />
                <div>
                  <div className="font-bold text-ink">Zero Calibration</div>
                  <div className="text-sm font-medium text-slate-500">Instant accuracy</div>
                </div>
              </div>
              <div className="flex items-center gap-4 py-4 md:py-0 md:px-8 first:pl-0 last:pr-0">
                <Zap className="w-8 h-8 text-brand shrink-0" />
                <div>
                  <div className="font-bold text-ink">High Velocity</div>
                  <div className="text-sm font-medium text-slate-500">Up to 55 pouches/min</div>
                </div>
              </div>
              <div className="flex items-center gap-4 py-4 md:py-0 md:px-8 first:pl-0 last:pr-0">
                <ShieldCheck className="w-8 h-8 text-brand shrink-0" />
                <div>
                  <div className="font-bold text-ink">GS1 Verified</div>
                  <div className="text-sm font-medium text-slate-500">100% compliant</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BENTO GRID PRODUCTS */}
      <section className="py-16 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {products.map((product) => (
              <Link 
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex flex-col bg-white rounded-[2.5rem] p-4 border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-brand-dark/5 hover:border-brand-light transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[16/10] bg-slate-100 w-full overflow-hidden rounded-[2rem] mb-6">
                  <Image 
                    src={product.heroImage} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-bold tracking-wider text-xs uppercase border border-white/30">
                      Explore Technical Specs
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 px-4 md:px-6 pb-6">
                  <div className="text-brand-dark font-bold uppercase tracking-widest text-[10px] mb-3">
                    {product.tagline}
                  </div>
                  <h2 className="text-3xl font-bold text-ink mb-4 group-hover:text-brand-dark transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-slate-600 mb-8 flex-1 text-lg font-medium leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10 bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:bg-brand-light/20 transition-colors">
                    {product.specs.slice(0, 4).map((spec, i) => (
                      <div key={i}>
                        <span className="block text-slate-400 font-bold text-[10px] uppercase tracking-wider mb-1">{spec.label}</span>
                        <span className="font-bold text-ink text-sm leading-tight">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center text-brand-dark font-bold mt-auto group-hover:translate-x-2 transition-transform text-lg">
                    View product details <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* IMMERSIVE BOTTOM CTA */}
      <section className="bg-ink py-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-brand-dark/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
            Not sure which system is right for you?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Talk to our engineering team to get a detailed workflow analysis and precise ROI calculation for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-10 h-16 text-lg font-bold text-ink bg-white hover:bg-brand-light rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:-translate-y-1"
            >
              Talk to sales
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 h-16 text-lg font-bold text-white bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-full transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Contact us
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
