import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Global Healthcare Recruitment Experts",
  description: "Learn about TLH Global Careers, our ethical recruitment mission, and our leadership team dedicated to connecting global healthcare talent with German employers.",
  openGraph: {
    title: "About Us | TLH Global Careers",
    description: "Learn about our mission to empower global healthcare careers and our ethical recruitment process.",
    url: "https://tlhglobalcareers.com/about",
  }
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2, Mail } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Shubham Jain",
      role: "Director / Co-Founder",
      dept: "Germany Operations & Employer Partnerships",
      email: "shubham.jain@tlhglobalcareers.com",
      image: "/images/shubham-jain-original.jpg",
      position: "50% 15%" // Focus on face and shoulders
    },
    {
      name: "Satyajit Patel",
      role: "Operations Head / Co-Founder",
      dept: "Recruitment Operations & Candidate Management",
      email: "satyajit.patel@tlhglobalcareers.com",
      image: "/images/satyajit-patel.png"
    },
    {
      name: "Vishant Singh",
      role: "Growth Manager",
      dept: "International Partnerships",
      email: "vishant.singh@tlhglobalcareers.com",
      image: "/images/vishant-singh.png"
    }
  ];

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

          <div className="bg-slate-50 rounded-[2.5rem] p-10 lg:p-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Leadership</h2>
            <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Our dedicated experts work tirelessly to bridge the gap between global talent and German healthcare excellence.</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden relative mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      referrerPolicy="no-referrer" 
                      className="object-cover"
                      style={{ objectPosition: (member as any).position || 'center' }}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-4 leading-relaxed">{member.dept}</p>
                  <div className="pt-4 border-t border-slate-50 flex justify-center">
                    <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
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
