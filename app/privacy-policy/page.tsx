import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | TLH Global Careers",
  description: "Our commitment to protecting your personal data, especially for healthcare professionals and nurses applying for jobs in Germany.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "April 24, 2026";

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-500 font-medium">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                TLH Global Careers (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our recruitment services. We specialize in connecting healthcare professionals with employers in Germany, which involves handling sensitive professional and personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">2.1 Personal Data</h3>
              <p>
                As a healthcare recruitment agency, we collect extensive information to facilitate your employment in Germany, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (Name, email, phone number, address).</li>
                <li>Professional qualifications (Nursing degrees, certifications, licenses).</li>
                <li>Work history and experience.</li>
                <li>Language proficiency levels (especially German language certificates).</li>
                <li>Identification documents (Passport copies for visa processing).</li>
                <li>Health declarations (as required for German medical professional standards).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To match your profile with suitable healthcare employers in Germany.</li>
                <li>To facilitate the visa application and professional recognition process (Anerkennung).</li>
                <li>To coordinate language training and intercultural preparation.</li>
                <li>To communicate with you regarding job opportunities and application status.</li>
                <li>To improve our website and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Sharing and Disclosure</h2>
              <p>
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Potential employers in Germany (clinics, hospitals, care facilities).</li>
                <li>Government authorities in Germany (for visa and professional recognition purposes).</li>
                <li>Language schools and training partners.</li>
                <li>Service providers who assist in our operations (e.g., document translation services).</li>
              </ul>
              <p className="mt-4 italic">
                We do not sell your personal data to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect the confidentiality and integrity of your personal information. Given that we store sensitive nurse details, we use encrypted storage and restricted access protocols. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights (GDPR Compliance)</h2>
              <p>
                As we operate with European employers, we adhere to GDPR standards. You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data (&quot;right to be forgotten&quot;).</li>
                <li>Object to the processing of your data.</li>
                <li>Withdraw consent at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="font-bold text-slate-900">Data Protection Officer</p>
                <p>Email: info@tlhglobalcareers.com</p>
                <p>Address: Kharghar, Navi Mumbai, 410210, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
