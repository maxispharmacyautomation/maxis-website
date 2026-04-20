import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  Workflow, 
  Database, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Activity,
  Layers,
  Cpu
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Software Integration | Pharmacy Automation Connectivity",
  description: "Seamless integration between Maxis packaging automation and leading pharmacy management software like Kroll, Fillware, PioneerRx, and BoxLab.",
};

const partners = [
  { name: "Kroll", description: "Seamless data exchange for high-volume hospital and retail environments." },
  { name: "Fillware", description: "Efficient synchronization for community-focused pharmacy workflows." },
  { name: "PioneerRx", description: "Advanced connectivity for modern, clinical-first pharmacy operations." },
  { name: "BoxLab", description: "Scalable integration for automated laboratory and pharmacy networks." }
];

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Automated Data Transfer",
    desc: "Prescription data flows directly from your PMS to our packaging machines, eliminating manual entry and transcription errors."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Real-Time Synchronization",
    desc: "Instant updates between dispensing and packaging ensure that your inventory and patient records are always in sync."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Barcode Verification",
    desc: "Every package is validated through rigorous barcode scanning, matching patient-specific data against the original order."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Multi-Dose Support",
    desc: "Our software handles both Adherence (pouch) and Unit-dose packaging formats with equal precision."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Custom API & HL7",
    desc: "We offer tailored integration using industry-standard protocols like HL7 and custom APIs for unique facility needs."
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Workflow Optimization",
    desc: "Designed to slot directly into your existing operations without requiring massive infrastructure changes."
  }
];

const compatibleSystems = [
  { name: "SmartPack", type: "Unit Dose Packaging", slug: "smart-pack" },
  { name: "Adherence Pack Rx", type: "Multi-Dose Adherence", slug: "tabletop-adherencepackrx" },
  { name: "CAP52FS", type: "High-Speed Pouching", slug: "cap52fs" },
  { name: "MTC30", type: "Vial Packaging", slug: "cretem-mtc-30" }
];

export default function IntegrationsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-ink text-white py-24 md:py-36 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-dark/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              Seamless Pharmacy <br />
              <span className="text-brand">Software Integration</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
              Bridging the gap between prescription processing and clinical packaging for zero-error automation.
            </p>
            <Link href="/demo" className="inline-flex items-center gap-2 px-10 h-14 text-lg font-bold text-ink bg-white hover:bg-brand-light rounded-full transition-all duration-300 shadow-xl hover:-translate-y-1">
              Request Integration Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-ink mb-6">Connect Your Workflow</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Modern pharmacy operations demand seamless integration between packaging automation and pharmacy management software. At Maxis, we ensure that our leading packaging systems integrate efficiently with the platforms you already trust.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By automating the data flow from prescription to pouch, we minimize manual labor, eliminate transcription errors, and guarantee that the right dose reaches the right patient every time.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {partners.map((p) => (
                <div key={p.name} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl group hover:border-brand transition-colors">
                  <h3 className="text-2xl font-black text-ink mb-2 group-hover:text-brand transition-colors">{p.name}</h3>
                  <p className="text-sm text-slate-500 leading-tight">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SYSTEM ARCHITECTURE / COMPATIBILITY */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-ink tracking-tight mb-4">Compatible Systems</h2>
            <p className="text-slate-600">Our integration solutions support the entire Maxis hardware ecosystem.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {compatibleSystems.map((sys) => (
              <Link key={sys.name} href={`/products/${sys.slug}`} className="bg-white border border-slate-200 p-8 rounded-3xl group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-ink mb-1">{sys.name}</h3>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-4">{sys.type}</p>
                <div className="flex items-center text-brand font-bold text-sm">
                  System Specs <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* KEY FEATURES BENTO */}
      <section className="py-24 bg-white relative overflow-hidden">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-ink tracking-tight mb-4">Intelligent Connectivity</h2>
            <p className="text-slate-600">Advanced features designed for accuracy and high-speed throughput.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col gap-5 p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-brand shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-3">{f.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SUCCESS USE CASES */}
      <section className="py-24 bg-ink text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-brand">Hospital Pharmacies</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Centralized automation integration for high-volume unit-dose dispensing and secure inventory management.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-brand">LTC Pharmacies</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Structured multi-dose pouch packaging for scheduled deliveries to long-term care residents and nursing networks.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-brand">Community Settings</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Streamlined retail workflows that allow independent pharmacies to offer clinical adherence services without adding staff.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ backgroundImage: "url('https://transparenttextures.com/patterns/cubes.png')" }} />
        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-6 tracking-tight">Ready to integrate?</h2>
          <p className="text-xl text-ink/80 mb-10 font-medium leading-relaxed">
            Our engineering team will work directly with your software provider to ensure a turnkey installation with zero downtime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 h-14 inline-flex items-center justify-center text-lg font-bold bg-ink text-white rounded-full hover:bg-black transition-all shadow-xl">
              Talk to an Engineer
            </Link>
            <Link href="/demo" className="px-10 h-14 inline-flex items-center justify-center text-lg font-bold bg-white text-ink rounded-full hover:bg-slate-50 transition-all shadow-lg">
              Book a Demo
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
