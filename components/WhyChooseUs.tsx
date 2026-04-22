"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    "Fully transparent process with no hidden fees for candidates.",
    "Partnered with leading public and private hospitals in Germany.",
    "Comprehensive language and cultural integration programs.",
    "Dedicated personal consultant for every candidate.",
    "High visa and professional recognition success rate.",
    "Long-term support even after your start in Germany."
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
         <div className="w-96 h-96 bg-blue-600/20 rounded-full blur-3xl mix-blend-screen"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
         <div className="w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://res.cloudinary.com/tlh01/image/upload/v1776843538/tlh_global_whyChooseUs.jpg"
              alt="Medical Team"
              fill
              referrerPolicy="no-referrer"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900 to-transparent pt-32">
               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl relative">
                  <p className="text-lg font-medium text-white italic">
                    &quot;TLH Global Careers made my transition to Germany incredibly smooth. They handled the paperwork while I focused on learning German.&quot;
                  </p>
                  <p className="mt-4 text-sm font-semibold text-blue-300">— Maria S., Registered Nurse</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Why Choose TLH Global Careers?</h2>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed">
              We understand the complexities of international career migration. Our holistic approach ensures that neither candidates nor employers are left alone during the process.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" />
                  <p className="text-slate-200">{reason}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex items-center gap-6">
               <div className="flex -space-x-4">
                 {[1,2,3,4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden relative">
                       <Image src={`https://ui-avatars.com/api/?name=Candidate+${i}&size=100&background=random`} alt="Candidate" fill referrerPolicy="no-referrer" className="object-cover" />
                    </div>
                 ))}
               </div>
               <div className="text-sm font-medium text-slate-300">
                  Join <strong className="text-white">a growing community of professionals</strong><br/> already in Germany
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
