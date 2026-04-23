"use client";

import { motion } from "motion/react";
import { ArrowRight, LayoutDashboard, FileText, CheckSquare, Bell, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PortalShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Light flare effects */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl mix-blend-screen translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10 lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Explore Our Smart Portal</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Track visa status, upload documents, and communicate directly in real-time. Employers can browse our talent pool and track candidate progress seamlessly.
            </p>
            
            <ul className="space-y-4 mb-10">
               <li className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <LayoutDashboard className="w-4 h-4" />
                  </div>
                  Real-time status tracking
               </li>
               <li className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <FileText className="w-4 h-4" />
                  </div>
                  Secure document uploads
               </li>
               <li className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <CheckSquare className="w-4 h-4" />
                  </div>
                  Language course progress
               </li>
            </ul>

            <a href="https://portal.tlhglobalcareers.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-full shadow-lg hover:bg-slate-50 hover:-translate-y-0.5 transition-all outline-none w-full sm:w-auto">
              Go to Portal
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="relative z-10 lg:w-1/2 w-full min-h-[350px] sm:min-h-[450px]">
             
             {/* Employer Portal Mock UI (Back) */}
             <motion.div 
               initial={{ opacity: 0, x: 40, y: -20 }}
               whileInView={{ opacity: 1, x: 0, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="absolute top-0 right-0 w-[85%] bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-700 shadow-xl p-6 hidden sm:block z-0"
             >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-900/50 border border-blue-800 flex items-center justify-center text-blue-400">
                         <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                         <p className="text-sm font-semibold text-white">City Hospital Berlin</p>
                         <p className="text-xs text-slate-400">Employer Dashboard</p>
                      </div>
                   </div>
                </div>
                <div className="space-y-3 opacity-60">
                   <div className="p-3 rounded-xl bg-slate-700/50 border border-slate-600 flex justify-between items-center">
                      <span className="text-xs text-slate-300">New Candidates Matched</span>
                      <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">12</span>
                   </div>
                   <div className="p-3 rounded-xl bg-slate-700/50 border border-slate-600 flex justify-between items-center">
                      <span className="text-xs text-slate-300">Interviews Scheduled</span>
                      <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded">4</span>
                   </div>
                   <div className="p-3 rounded-xl bg-slate-700/50 border border-slate-600 flex justify-between items-center">
                      <span className="text-xs text-slate-300">Documents Pending</span>
                      <span className="text-xs font-bold text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">2</span>
                   </div>
                </div>
             </motion.div>

             {/* Candidate Portal Mock UI (Front) */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative bg-slate-800 rounded-2xl border border-slate-600 shadow-2xl p-5 sm:p-6 sm:w-[85%] z-10 sm:mt-16"
             >
                {/* Mock UI Header */}
                <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-slate-700">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden relative">
                         <Image src="https://ui-avatars.com/api/?name=Maria+Sanchez&size=100&background=random" alt="Avatar" fill referrerPolicy="no-referrer" className="object-cover" />
                      </div>
                      <div>
                         <p className="text-sm font-semibold text-white">Maria Sanchez</p>
                         <p className="text-xs text-slate-400">ID: #8492</p>
                      </div>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 relative">
                      <Bell className="w-4 h-4" />
                      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                   </div>
                </div>

                {/* Mock UI Content */}
                <div className="space-y-4">
                   <div className="p-3 sm:p-4 rounded-xl bg-slate-700/50 border border-slate-600">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-xs sm:text-sm font-medium text-slate-200">Visa Application</span>
                         <span className="text-[10px] sm:text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">Approved</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 sm:h-2">
                         <div className="bg-green-400 h-1.5 sm:h-2 rounded-full w-full"></div>
                      </div>
                   </div>
                   
                   <div className="p-3 sm:p-4 rounded-xl bg-slate-700/50 border border-slate-600">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-xs sm:text-sm font-medium text-slate-200">B2 Language Course</span>
                         <span className="text-[10px] sm:text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">In Progress</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 sm:h-2">
                         <div className="bg-blue-400 h-1.5 sm:h-2 rounded-full w-[60%]"></div>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                      <div className="p-3 sm:p-4 rounded-xl bg-slate-700/30 border border-slate-600 border-dashed text-center">
                         <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 mx-auto mb-1.5 sm:mb-2" />
                         <span className="text-[10px] sm:text-xs text-slate-400">Upload B1</span>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-slate-700/30 border border-slate-600 text-center">
                         <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 mx-auto mb-1.5 sm:mb-2" />
                         <span className="text-[10px] sm:text-xs text-slate-400">Hospital Match</span>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
