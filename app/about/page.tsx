import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | TLH Global Careers",
  description: "Learn about our mission to empower global healthcare careers and our ethical recruitment process connecting talent with German employers.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Empowering Global Healthcare Careers
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              TLH Global Careers is built on a mission to connect exceptional healthcare talent with opportunities in Germany, fostering professional growth and solving staffing challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
             <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
               <Image 
                 src="https://res.cloudinary.com/tlh01/image/upload/v1776843538/tlh_global_about.jpg" 
                 alt="Team Meeting" 
                 fill
                 referrerPolicy="no-referrer"
                 className="object-cover"
               />
             </div>
             
             <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission & Vision</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We believe that talent has no borders. Our mission is to provide transparent, ethical, and fully supported pathways for international nurses and healthcare professionals to build fulfilling careers in Germany.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Ethical Recruitment</h4>
                      <p className="text-sm text-slate-600">We adhere to the highest standards of international recruitment protocols.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Holistic Support</h4>
                      <p className="text-sm text-slate-600">From language learning to integrating into a new society.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>

          {/* Team Placeholder */}
          <div className="bg-slate-50 rounded-[2.5rem] p-10 lg:p-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Our dedicated consultants, language instructors, and legal experts work tirelessly to ensure your success.</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1,2,3,4].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-slate-200 mb-4 overflow-hidden relative">
                    <Image src={`https://ui-avatars.com/api/?name=Team+Member+${i}&size=200&background=random`} alt="Team Member" fill referrerPolicy="no-referrer" className="object-cover" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Name Placeholder</h4>
                  <p className="text-sm text-slate-500">Consultant role</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
