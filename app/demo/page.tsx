"use client";

import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products } from "@/lib/products";

export default function DemoPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted (demo mode). In production, this wires to Resend.");
  };

  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      <div className="py-20 md:py-32">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* LEFT - Value Prop */}
            <div className="w-full lg:w-5/12 flex flex-col">
              <h1 className="text-4xl md:text-5xl font-medium text-ink tracking-tight mb-8">
                See Maxis in action
              </h1>
              
              <ul className="flex flex-col gap-6 mb-12">
                {[
                  "30-minute interactive walkthrough via Zoom",
                  "Tailored demonstrations matching your exact pharmacy workflow",
                  "Talk technically with a product and integration expert",
                  "See precise multi-year ROI calculations for your facility capacity"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-dark shrink-0" />
                    <span className="text-lg text-slate-700 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Testimonial Placeholder */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative mt-auto">
                <div className="text-4xl text-brand-light absolute top-6 left-6 -z-10 font-serif">"</div>
                <p className="text-slate-600 italic relative z-10 mb-6 text-lg">
                  Deploying the AdherencePackRx fundamentally transformed our retail capacity. Misfill errors dropped to zero and our technicians finally have time for actual patient consultation. Highly recommend the demo!
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-ink text-sm">Director of Pharmacy</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Major Retail Chain</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Form Card */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
                <h2 className="text-2xl font-semibold text-ink mb-2">Request a demo block</h2>
                <p className="text-sm text-slate-500 mb-8">Fill out your details below and we'll reach out within 24 hours to schedule.</p>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="fullName" className="text-sm font-semibold text-slate-700">Full Name *</label>
                      <input required type="text" id="fullName" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="workEmail" className="text-sm font-semibold text-slate-700">Work Email *</label>
                      <input required type="email" id="workEmail" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone</label>
                      <input type="tel" id="phone" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company / Hospital *</label>
                      <input required type="text" id="company" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="country" className="text-sm font-semibold text-slate-700">Country *</label>
                      <select required id="country" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all appearance-none cursor-pointer">
                        <option value="">Select country...</option>
                        <option value="ca">Canada</option>
                        <option value="us">United States</option>
                        <option value="in">India</option>
                        <option value="ae">United Arab Emirates</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="role" className="text-sm font-semibold text-slate-700">Role *</label>
                      <select required id="role" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all appearance-none cursor-pointer">
                        <option value="">Select role...</option>
                        <option value="director">Pharmacy Director</option>
                        <option value="owner">Owner</option>
                        <option value="procurement">Procurement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="interest" className="text-sm font-semibold text-slate-700">Product Interest</label>
                    <select id="interest" className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all appearance-none cursor-pointer">
                      <option value="">Select a product...</option>
                      {products.map(p => (
                        <option key={p.slug} value={p.slug}>{p.name}</option>
                      ))}
                      <option value="general">General / Unsure</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Additional Message</label>
                    <textarea id="message" rows={4} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-14 bg-brand-dark hover:bg-brand-darker text-white font-semibold rounded-lg text-lg transition-all shadow-md mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    Request demo
                  </button>

                  <p className="text-center text-xs text-slate-500 mt-2">
                    By submitting this form, you agree to our <a href="/privacy" className="underline hover:text-brand-dark">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </main>
  );
}
