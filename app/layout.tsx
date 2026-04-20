import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maxis Pharmacy Automation | Right Dose, On Time, Right Patient",
    template: "%s | Maxis Pharmacy Automation",
  },
  description:
    "Modern medication packaging systems for hospitals, retail pharmacies, and long-term care. Unit dose and multi-dose automation trusted across Canada and the US.",
  metadataBase: new URL("https://maxispharmacyautomation.ca"),
  openGraph: {
    siteName: "Maxis Pharmacy Automation",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col bg-white text-slate-700">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-[calc(100vh-72px)] flex flex-col">
          <Suspense fallback={
            <div className="flex-1 flex items-center justify-center bg-white/50 backdrop-blur-sm">
              <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            {children}
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
