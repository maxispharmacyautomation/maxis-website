import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Maxis Pharmacy Automation",
  description: "Privacy policy for Maxis Pharmacy Automation.",
};

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="bg-slate-50 border-b border-slate-200 py-12 md:py-20">
        <Container>
          <h1 className="text-3xl md:text-5xl font-medium text-ink tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500">Last updated: April 2026</p>
        </Container>
      </div>
      
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl ml-0 lg:mx-auto">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:text-ink prose-a:text-brand-dark">
            <p className="lead border-l-4 border-brand-teal pl-4 text-slate-600 italic bg-brand-light/30 py-2">
              Note: This is a boilerplate placeholder. The final PIPEDA and GDPR compliant policy is under legal review and will be published before the official site launch.
            </p>
            
            <h2>1. Information We Collect</h2>
            <p>
              When you interact with the Maxis Pharmacy Automation website, we may collect technical data (such as IP addresses, browser types, and navigation paths) through standard analytics tools like Vercel Analytics. If you submit a contact form or demo request, we collect the exact personal information you provide, which typically includes your name, work email, phone number, and hospital/company affiliation.
            </p>

            <h2>2. How We Use Information</h2>
            <p>
              We use collected information solely for operating our business and providing you with requested services. This includes responding to your demo requests, routing technical support inquiries to the appropriate engineering teams, and optimizing our website's performance and accessibility. We do not sell your personal data to third parties.
            </p>

            <h2>3. Data Security and Protection</h2>
            <p>
              We implement industry-standard security measures to protect the integrity and confidentiality of your data. However, no method of electronic transmission or storage is 100% secure. You provide personal data at your own risk.
            </p>

            <h2>4. Cookies and Tracking</h2>
            <p>
              We utilize essential cookies necessary for the basic functioning of our website. We may also use performance cookies to understand how visitors interact with our content. You can configure your browser to reject cookies, though some site features may not function optimally.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions or concerns about this privacy policy or our data practices, please contact our administrative team:
            </p>
            <p>
              <strong>Maxis Pharmacy Automation</strong><br/>
              Hazelton Ave, Hamilton, Ontario L9B 0E9, Canada<br/>
              <Link href="mailto:sales@maxispharmacyautomation.ca">sales@maxispharmacyautomation.ca</Link>
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
