import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Healthcare Professionals | TLH Global Careers",
  description: "Connect with pre-screened, highly qualified nurses and healthcare professionals from around the world for your clinic or hospital in Germany.",
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
      <main className="flex-1 pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6">
                 Hospital & Clinic Partners
               </div>
               <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                 Hire Qualified <span className="text-blue-600">Healthcare Professionals</span>
               </h1>
               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                 Solve your staffing shortages with dedicated, well-trained, and culturally prepared international nursing and healthcare staff. We handle the complexity of international recruitment so you can focus on patient care.
               </p>
               <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-full shadow-lg shadow-blue-900/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
                    Request Candidates
                    <ArrowRight className="ml-2 w-5 h-5" />
               </Link>
            </div>
            
            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
               <Image 
                 src="https://res.cloudinary.com/tlh01/image/upload/v1776843537/tlh_global_employers.jpg" 
                 alt="Hospital Team" 
                 fill
                 referrerPolicy="no-referrer"
                 className="object-cover"
               />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8 pt-32">
                   <div className="flex items-center gap-4 text-white">
                      <div className="text-2xl font-bold uppercase tracking-tight">Extensive Network</div>
                      <div className="text-sm font-medium leading-snug">Healthcare facilities<br/>trust our talent pool</div>
                   </div>
                </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-[2.5rem] p-10 lg:p-16 mb-24">
             <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Partner With Us?</h2>
                <p className="text-slate-600">Our comprehensive screening and training process ensures you receive candidates who are ready to integrate into your clinical workflow.</p>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, i) => (
                   <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                      <p className="text-slate-700 font-medium">{benefit}</p>
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
