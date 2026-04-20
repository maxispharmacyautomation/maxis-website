import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Maxis Pharmacy Automation",
  description: "Terms of service and use for Maxis Pharmacy Automation.",
};

export default function TermsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="bg-slate-50 border-b border-slate-200 py-12 md:py-20">
        <Container>
          <h1 className="text-3xl md:text-5xl font-medium text-ink tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-500">Last updated: April 2026</p>
        </Container>
      </div>
      
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl ml-0 lg:mx-auto">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:text-ink prose-a:text-brand-dark">
            <p className="lead border-l-4 border-slate-300 pl-4 text-slate-600 italic bg-slate-50 py-2">
              Note: This is a boilerplate placeholder. The final Terms of Service is under legal review and will be published before the official site launch.
            </p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement.
            </p>

            <h2>2. Provision of Service</h2>
            <p>
              Maxis Pharmacy Automation is constantly innovating in order to provide the best possible hardware and software to its users. You acknowledge and agree that the form and nature of the services which Maxis Pharmacy Automation provides may change from time to time without prior notice to you.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              The site and its original content, features, and functionality are owned by Maxis Pharmacy Automation and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. "Smart Pack®", "Smart Pack Auto®" and related nomenclature are trademarks of their respective owners where applicable.
            </p>

            <h2>4. Disclaimer of Warranties</h2>
            <p>
              The website is provided "as is". Maxis Pharmacy Automation and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              In no event will Maxis Pharmacy Automation, or its suppliers or licensors, be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential damages; (ii) the cost of procurement for substitute products or services; or (iii) for interruption of use or loss or corruption of data.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at <Link href="mailto:sales@maxispharmacyautomation.ca">sales@maxispharmacyautomation.ca</Link>.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
