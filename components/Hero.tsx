"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Plane, FileCheck, Stethoscope, Building2, UserPlus } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Your Journey to Germany Starts Here
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Career in Germany</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              We connect highly qualified healthcare professionals—nurses, physiotherapists, and geriatric specialists—with top-tier employers across Germany.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-full shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:-translate-y-0.5 transition-all outline-none">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/employers" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 transition-all outline-none">
                  For Employers
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:flex sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-8 border-t border-slate-200/60 pt-8 w-full sm:w-auto text-center sm:text-left">
               <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">Proven Success</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider">in Healthcare Recruiting</span>
               </div>
               <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
               <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">Trusted Partners</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider">Across Germany</span>
               </div>
            </div>
          </motion.div>

          {/* Right side Images/Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
             <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/hero-nurse.png" 
                  alt="Professional Indian Nurse in Germany" 
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover" 
                  priority
                />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
               
               {/* Floating Cards */}
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.8, duration: 0.5 }}
                 className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-center gap-4"
               >
                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <FileCheck className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-slate-900">Visa Approved</p>
                   <p className="text-xs text-slate-500">Fast-track process</p>
                 </div>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 1, duration: 0.5 }}
                 className="absolute top-8 left-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-center gap-4"
               >
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Plane className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-slate-900">Relocation Support</p>
                   <p className="text-xs text-slate-500">End-to-end guidance</p>
                 </div>
               </motion.div>

             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
