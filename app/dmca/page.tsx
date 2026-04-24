import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DMCA Policy | TLH Global Careers",
  description: "Digital Millennium Copyright Act (DMCA) compliance and notice procedures for TLH Global Careers.",
};

export default function DMCAPage() {
  const lastUpdated = "April 24, 2026";

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              DMCA Policy
            </h1>
            <p className="text-slate-500 font-medium">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Notification of Copyright Infringement</h2>
              <p>
                TLH Global Careers (&quot;the Company&quot;) respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), the text of which may be found on the U.S. Copyright Office website, we will respond expeditiously to claims of copyright infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">DMCA Notice Requirements</h2>
              <p>
                If you are a copyright owner, or are authorized to act on behalf of one, please report alleged copyright infringements taking place on or through the Website by completing a DMCA Notice of Alleged Infringement and delivering it to our Designated Copyright Agent.
              </p>
              <p className="mt-4">Your notice must include the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identify the copyrighted work that you claim has been infringed.</li>
                <li>Identify the material that you claim is infringing and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material (e.g., URL).</li>
                <li>Your contact information (address, telephone number, and email address).</li>
                <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Designated Copyright Agent</h2>
              <p>
                Deliver the DMCA Notice to:
              </p>
              <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="font-bold text-slate-900">TLH Global Careers Legal Department</p>
                <p>Email: info@tlhglobalcareers.com</p>
                <p>Address: Kharghar, Navi Mumbai, 410210, India</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Counter-Notification Procedures</h2>
              <p>
                If you receive a notification that your content has been removed due to a copyright complaint, you may send us a counter-notification. It must be a written communication that includes substantially the following:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your physical or electronic signature.</li>
                <li>Identification of the material that has been removed and the location where the material appeared before it was removed.</li>
                <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.</li>
                <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located, or if your address is outside of the United States, for any judicial district in which the Company may be found.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Repeat Infringers</h2>
              <p>
                It is our policy in appropriate circumstances to disable and/or terminate the accounts of users who are repeat infringers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
