import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, HeartPulse, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "About Maxis | Pharmacy Automation Solutions",
  description: "Maxis Pharmacy Automation aims to deliver the right dose, on time, to the right patient. Learn about our mission and team.",
};

const values = [
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Uncompromising Accuracy",
    desc: "In pharmacy automation, near perfect isn't good enough. Our products aim for zero-error dispensing to guarantee patient safety at all times."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Patient Safety First",
    desc: "Every design decision we make prioritizes the end patient. By reducing technician fatigue, we eliminate the most common sources of medical errors."
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Workflow Innovation",
    desc: "We don't just build hardware; we build workflow optimization. Our systems integrate cleanly with existing PMS to speed up daily operations."
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "True Partnership",
    desc: "We deploy dedicated engineers for installation and offer continuous remote and field support. Your success is inherently linked to ours."
  }
];

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 bg-brand-light rounded-full blur-3xl mix-blend-multiply opacity-50 pointer-events-none"></div>
        <Container className="relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-ink tracking-tight mb-6 leading-tight">
              About Maxis
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8">
              Right Dose. On Time. Right Patient.
            </p>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              We are an innovative medical technology provider focused solely on modernizing medication dispensing. From compact retail environments to sprawling institutional networks, we build systems that safeguard patients.
            </p>
          </div>
        </Container>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <Image 
                  src="https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1200&q=80&auto=format&fit=crop" 
                  alt="Pharmacist working with automation equipment" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-2">Our Story</h2>
              <div className="prose prose-lg prose-slate text-slate-600">
                <p>
                  Maxis Pharmacy Automation was founded with a singular mission: to eliminate medication dispensing errors through intelligent automation technology.
                </p>
                <p>
                  We recognized that pharmacy staff were increasingly burdened by high script volumes, leading to dangerous technician fatigue. Meanwhile, strict international compliance standards like GS1 barcoding required a level of precision that manual packaging simply couldn't scale to meet.
                </p>
                <p>
                  Today, Maxis provides advanced hardware and software systems to independent pharmacies, major retail chains, hospitals, and long-term care facilities across North America and abroad. Our flagship Smart Pack and AdherencePackRx lines represent the bleeding edge of unit-dose and multi-dose robotics.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-6">Our Core Values</h2>
            <p className="text-lg text-slate-600">
              The principles that guide our engineering, sales, and support teams every single day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* LEADERSHIP / HQ TEAM */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-6">Our Leadership</h2>
            <p className="text-lg text-slate-600">
              Driven by experts in robotics, pharmacy operations, and healthcare software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {/* Leadership placeholders */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-md">
                  <Image 
                    src={`https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop&crop=faces&hue=${i*30}`} 
                    alt={`Leadership Team member ${i}`} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-1">Executive Leader</h3>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Leadership Team</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* HQ / LOCATION */}
      <section className="py-20 bg-slate-900 border-t border-slate-800 text-white">
        <Container className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">Headquartered in Hamilton, Ontario</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-md">
              From our central Canadian hub, we design, deploy, and actively support robotic solutions for facilities around the globe.
            </p>
            <div className="flex flex-col gap-2 text-slate-400">
              <span className="font-medium text-white">Maxis Pharmacy Automation</span>
              <span>Hazelton Ave</span>
              <span>Hamilton, Ontario L9B 0E9</span>
              <span>Canada</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-800">
              <Image 
                src="https://images.unsplash.com/photo-1522038596660-ed80b5e2825d?w=800&q=80&auto=format&fit=crop" 
                alt="Hamilton Ontario skyline or office proxy" 
                fill 
                className="object-cover opacity-80 mix-blend-luminosity" 
              />
            </div>
          </div>
        </Container>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-brand-light py-24 text-center">
        <Container>
          <h2 className="text-3xl md:text-4xl font-medium text-ink mb-6">Ready to work with us?</h2>
          <p className="text-lg text-slate-700 mb-10 max-w-xl mx-auto">
            Experience true partnership. Contact our sales and engineering team today to see how our expertise can modernize your workflow.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-brand-dark hover:bg-brand-darker rounded-lg transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Request a Demo
          </Link>
        </Container>
      </section>
    </main>
  );
}
