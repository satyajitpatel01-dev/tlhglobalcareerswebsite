import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | TLH Global Careers",
  description: "Terms and conditions for using TLH Global Careers services and website.",
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "April 24, 2026";

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-slate-500 font-medium">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the website of TLH Global Careers (&quot;the Website&quot;) and our recruitment services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services Provided</h2>
              <p>
                TLH Global Careers provides recruitment and consultancy services for healthcare professionals seeking employment in Germany. Our services include candidate screening, employer matching, language training coordination, and relocation support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Candidate Obligations</h2>
              <p>Candidates using our services agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, truthful, and complete information regarding their qualifications and experience.</li>
                <li>Submit authentic documents for verification and visa processing.</li>
                <li>Engage in the recruitment process in good faith.</li>
                <li>Maintain confidentiality regarding employer details and specific job offers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
              <p>
                All content on this Website, including text, graphics, logos, and images, is the property of TLH Global Careers or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
              <p>
                TLH Global Careers acts as an intermediary. While we strive to ensure the quality of placements, we are not responsible for the ultimate employment decisions made by clinics or the performance of candidates. We are not liable for any direct, indirect, or consequential losses arising from the use of our services or the Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Protection</h2>
              <p>
                Your use of the Website is also governed by our Privacy Policy. By using the Website, you consent to the collection and use of your data as described therein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India and, where applicable, the European Union regulations concerning international recruitment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any significant changes by posting the new terms on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Information</h2>
              <p>
                For any questions regarding these Terms, please contact us at info@tlhglobalcareers.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
