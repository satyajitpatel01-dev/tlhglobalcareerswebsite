import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Healthcare Professionals | Recruitment Services for Germany",
  description: "Connect with pre-screened, highly qualified nurses and healthcare professionals. We handle visa, language training, and relocation for your clinic in Germany.",
  openGraph: {
    title: "Hire Healthcare Professionals | TLH Global Careers",
    description: "Connect with pre-screened, highly qualified nurses and healthcare professionals for your hospital in Germany.",
    url: "https://tlhglobalcareers.com/employers",
  }
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import PortalShowcase from "@/components/PortalShowcase";

export default function EmployersPage() {
  const benefits = [
    "Pre-screened candidates with proven medical qualifications.",
    "B2 language proficiency guaranteed before arrival.",
    "Intercultural training completed.",
    "Full administrative handling of visa and recognition processes.",
    "High retention rates due to transparent candidate expectation management."
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-32 pb-16 sm:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6">
                 Hospital & Clinic Partners
               </div>
               <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                 Hire Qualified <span className="text-blue-600">Healthcare Professionals</span>
               </h1>
               <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                 Solve your staffing shortages with dedicated, well-trained, and culturally prepared international nursing and healthcare staff. We handle the complexity of international recruitment so you can focus on patient care.
               </p>
               <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-full shadow-lg shadow-blue-900/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all w-full sm:w-auto">
                    Request Candidates
                    <ArrowRight className="ml-2 w-5 h-5" />
               </Link>
            </div>
            
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl order-first lg:order-last mb-8 lg:mb-0">
               <Image 
                 src="https://res.cloudinary.com/tlh01/image/upload/v1776843537/tlh_global_employers.jpg" 
                 alt="Hospital Team" 
                 fill
                 referrerPolicy="no-referrer"
                 className="object-cover"
               />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 sm:p-8 pt-24 sm:pt-32">
                   <div className="flex items-center gap-4 text-white">
                      <div className="text-lg sm:text-2xl font-bold uppercase tracking-tight">Extensive Network</div>
                      <div className="text-xs sm:text-sm font-medium leading-snug">Healthcare facilities<br/>trust our talent pool</div>
                   </div>
                </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl sm:rounded-[2.5rem] p-8 lg:p-16 mb-16 sm:mb-24">
             <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Why Partner With Us?</h2>
                <p className="text-sm sm:text-base text-slate-600">Our comprehensive screening and training process ensures you receive candidates who are ready to integrate into your clinical workflow.</p>
             </div>
             
             <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                {benefits.map((benefit, i) => (
                   <div key={i} className="flex gap-3 sm:gap-4 p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 shrink-0" />
                      <p className="text-sm sm:text-base text-slate-700 font-medium">{benefit}</p>
                   </div>
                ))}
             </div>
             

          </div>

          <PortalShowcase />
          
          <ContactForm 
            defaultType="employer"
            title="Partner With Us"
            subtitle="Let us help you find the right talent for your facility. Fill out the form below and our recruitment experts will reach out to you."
          />

        </div>
      </main>
      <Footer />
    </>
  );
}
