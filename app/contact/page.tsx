"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted (demo mode). In production, this wires to Resend.");
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="bg-ink text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Get in touch
            </h1>
            <p className="text-xl text-slate-300">
              Have technical questions, need support, or want to discuss a custom integration? Our team is here to assist.
            </p>
          </div>
        </Container>
      </section>

      {/* SPLIT LAYOUT */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* LEFT - Form */}
            <div className="w-full lg:w-7/12 order-2 lg:order-1">
              <h2 className="text-2xl font-semibold text-ink mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
                    <input required type="text" id="name" className="w-full h-11 px-4 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address *</label>
                    <input required type="email" id="email" className="w-full h-11 px-4 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject</label>
                  <input type="text" id="subject" className="w-full h-11 px-4 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="msg" className="text-sm font-semibold text-slate-700">Message *</label>
                  <textarea required id="msg" rows={6} className="w-full p-4 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 h-12 bg-brand-dark hover:bg-brand-darker text-white font-semibold rounded-lg transition-all shadow-md mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* RIGHT - Info */}
            <div className="w-full lg:w-5/12 order-1 lg:order-2">
              <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-ink mb-8">Contact Information</h3>
                
                <div className="flex flex-col gap-8 flex-1">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink mb-1">Global Headquarters</div>
                      <div className="text-slate-600 leading-relaxed text-sm">
                        Maxis Pharmacy Automation<br />
                        Hazelton Ave, Hamilton<br />
                        Ontario L9B 0E9, Canada
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink mb-1">Sales & Support Network</div>
                      <div className="flex flex-col gap-1 text-sm">
                        <a href="tel:+18339351500" className="text-slate-600 hover:text-brand-dark transition-colors inline-flex items-center gap-2">
                          <span className="font-medium">Toll Free:</span> +1 833-935-1500
                        </a>
                        <a href="tel:+14168275330" className="text-slate-600 hover:text-brand-dark transition-colors inline-flex items-center gap-2">
                          <span className="font-medium">Direct:</span> +1 416-827-5330
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink mb-1">Email inquiries</div>
                      <a href="mailto:sales@maxispharmacyautomation.ca" className="text-slate-600 text-sm hover:text-brand-dark transition-colors break-all">
                        sales@maxispharmacyautomation.ca
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200">
                  <Link href="/demo" className="group inline-flex items-center text-brand-dark font-medium hover:text-brand-darker transition-colors">
                    Prefer a live demo? Request one <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
