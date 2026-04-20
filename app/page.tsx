import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, Gauge, Globe, ArrowRight, Microchip, Activity, Package } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { products } from "@/lib/products";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Maxis Pharmacy Automation | Right Dose, On Time, Right Patient",
  description: "Unit dose and multi-dose packaging systems engineered for hospitals, retail pharmacies, and long-term care across Canada, the US, and beyond.",
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-ink">
        {/* Animated Glow Backgrounds */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-dark/40 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-10 right-1/4 w-[800px] h-[800px] bg-brand-teal/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>

        <Container className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Hero Typo */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-8 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-3 text-brand-light font-medium tracking-[0.2em] uppercase text-xs md:text-sm">
              <span className="w-12 h-px bg-gradient-to-r from-brand-teal to-transparent hidden sm:block"></span>
              The Standard in Pharmacy Automation
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Automation that gets every dose <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-light">perfectly right.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              Unit-dose and multi-dose packaging systems engineered for hospitals, retail pharmacies, and long-term care facilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-6">
              <Link
                href="/demo"
                className="group relative inline-flex items-center justify-center px-8 py-4 px-10 h-14 text-base font-semibold text-ink bg-white hover:bg-brand-light rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(0,180,200,0.3)] w-full sm:w-auto overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-light translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center">Request a demo <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 h-14 text-base font-semibold text-white bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                View our products
              </Link>
            </div>
          </div>
          
          {/* Glassmorphic Image Card */}
          <div className="col-span-1 lg:col-span-5 relative w-full max-w-lg mx-auto lg:max-w-none aspect-square lg:aspect-[4/5] perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/50 to-brand-teal/20 rounded-3xl transform rotate-6 scale-100 blur-2xl"></div>
            <div className="absolute inset-0 bg-ink/50 border border-white/10 backdrop-blur-3xl rounded-3xl shadow-2xl overflow-hidden transform -rotate-2 transition-transform duration-700 hover:rotate-0 hover:scale-[1.02] group">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-light to-transparent opacity-30"></div>
              <Image 
                src="/images/custom-hero-pharmacy.jpg" 
                alt="Pharmacy automation dispensary supply lines" 
                fill
                priority
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 mix-blend-lighten" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"></div>
              
              {/* Floating UI Badge inside Image */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 flex items-center gap-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-brand-light" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Calibration-Free</div>
                  <div className="text-slate-300 text-xs mt-0.5">100% Verified Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. FLOATING TRUST STRIP */}
      <section className="-mt-12 relative z-20 pb-20">
        <Container>
          <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {[
                { icon: CheckCircle2, title: "GS1 Compliant", desc: "Global barcode standards" },
                { icon: Microchip, title: "Smart Calibration", desc: "Zero manual intervention" },
                { icon: Gauge, title: "55 Pouches / Min", desc: "High-speed output" },
                { icon: Globe, title: "North America", desc: "Trusted coast to coast" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-dark mb-2 shadow-sm">
                    <item.icon className="w-7 h-7 text-brand" />
                  </div>
                  <h3 className="font-bold text-ink text-lg">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. PREMIUM BENTO GRID PRODUCTS */}
      <Section className="py-20 md:py-32 overflow-hidden bg-slate-50">
        <Container>
          <div className="max-w-3xl mb-16">
            <div className="text-brand font-semibold tracking-wider uppercase text-sm mb-4">Our Systems</div>
            <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-6">
              Built for every pharmacy workflow
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              From modular tabletop packaging to high-capacity robotic fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-auto">
            {products.map(p => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group md:col-span-6 relative bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-brand-light transition-all duration-500 flex flex-col xl:flex-row min-h-[340px]">
                <div className="relative w-full xl:w-1/2 min-h-[300px] xl:min-h-[340px] bg-slate-50 border-b xl:border-b-0 xl:border-r border-slate-100">
                  <Image src={p.heroImage} alt={p.name} fill className="object-contain p-2 group-hover:scale-[1.06] drop-shadow-sm transition-transform duration-700" />
                </div>
                <div className="w-full xl:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-ink mb-3 group-hover:text-brand-dark transition-colors">{p.name}</h3>
                  <p className="text-slate-600 mb-8 line-clamp-3 text-[15px] leading-relaxed">{p.description}</p>
                  <div className="inline-flex items-center text-brand-dark font-medium mt-auto group-hover:translate-x-2 transition-transform">
                    Explore system <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. PREMIUM INDUSTRIES */}
      <section className="py-20 md:py-32 bg-white relative">
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-6">
              Solutions for every care setting
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Maxis systems actively adapt to specific environments ensuring high-accuracy compliance wherever medications are dispensed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-0">
            {/* Industry 1 */}
            <div className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format&fit=crop" alt="Hospital Pharmacy setting" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white backdrop-blur-sm">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Hospitals</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">Reduce dispensing errors to near zero while freeing up crucial technicians for clinical duties at the bedside.</p>
                <Link href="/industries#hospital" className="w-full inline-flex items-center justify-center py-3 bg-white border border-slate-200 rounded-xl text-brand-dark font-bold hover:bg-slate-50 hover:border-brand-light transition-all">
                  Explore Hospital Solutions
                </Link>
              </div>
            </div>

            {/* Industry 2 */}
            <div className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80&auto=format&fit=crop" alt="Retail Pharmacy" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white backdrop-blur-sm">
                    <Package className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Retail</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">Grow your adherence programs and handle massive volume without expanding your physical footprint.</p>
                <Link href="/industries#retail" className="w-full inline-flex items-center justify-center py-3 bg-white border border-slate-200 rounded-xl text-brand-dark font-bold hover:bg-slate-50 hover:border-brand-light transition-all">
                  Explore Retail Solutions
                </Link>
              </div>
            </div>

            {/* Industry 3 */}
            <div className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80&auto=format&fit=crop" alt="Long term care" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white backdrop-blur-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">LTC</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">Safely scale up multi-dose compliance packaging for large residential communities with 100% verification.</p>
                <Link href="/industries#ltc" className="w-full inline-flex items-center justify-center py-3 bg-white border border-slate-200 rounded-xl text-brand-dark font-bold hover:bg-slate-50 hover:border-brand-light transition-all">
                  Explore LTC Solutions
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. ELEVATED INSIGHTS */}
      <Section className="py-24 md:py-32 bg-slate-100 border-t border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">
                Clinical Insights
              </h2>
              <p className="text-xl text-slate-600 font-medium">
                The latest perspectives on medication safety and compliance packaging.
              </p>
            </div>
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-white rounded-full text-brand-dark font-bold hover:bg-brand-light hover:text-brand-darker border border-slate-200 shadow-sm transition-all hover:shadow hover:-translate-y-0.5 group"
            >
              View all insights <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`} 
                className="group flex flex-col bg-white rounded-3xl p-3 border border-slate-200 hover:border-brand-light hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-6">
                  <Image 
                    src={post.image || "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80"} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur shadow-sm px-3 py-1 rounded-full text-xs font-bold text-brand-dark tracking-wide uppercase">
                    {post.category}
                  </div>
                </div>
                <div className="px-4 pb-4 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-ink group-hover:text-brand-dark transition-colors mb-3 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 line-clamp-2 mb-6 font-medium">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto text-brand-dark font-bold text-sm inline-flex items-center group-hover:translate-x-1 transition-transform">
                    Read Post <ArrowRight className="w-4 h-4 ml-1.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. IMMERSIVE CLOSING CTA */}
      <section className="bg-ink py-32 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-[800px] h-[800px] bg-brand-dark/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-overlay"></div>
        
        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            Ready to modernize your pharmacy?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Book a 30-minute demo with our engineering team. See Maxis directly in action on your workflow and understand the exact ROI for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-10 h-16 text-lg font-bold text-ink bg-white hover:bg-brand-light rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:-translate-y-1 w-full sm:w-auto"
            >
              Request a live demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 h-16 text-lg font-bold text-white bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 w-full sm:w-auto"
            >
              Contact Sales
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
