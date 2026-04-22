"use client";

import { motion } from "motion/react";
import { UserCircle, Building, BookOpen, FileCheck, Stethoscope, Briefcase } from "lucide-react";

export default function Services() {
  const candidateServices = [
    {
      icon: BookOpen,
      title: "Language Training",
      description: "Intensive German language courses up to B2/C1 levels tailored for healthcare settings.",
    },
    {
      icon: FileCheck,
      title: "Document Recognition",
      description: "Full assistance with the recognition of your foreign nursing or healthcare qualifications in Germany.",
    },
    {
      icon: UserCircle,
      title: "Relocation & Integration",
      description: "Visa processing, finding accommodation, and settling into your new life in Germany.",
    },
  ];

  const employerServices = [
    {
      icon: Stethoscope,
      title: "Pre-screened Candidates",
      description: "Access a pool of highly qualified, medically trained professionals ready for the German market.",
    },
    {
      icon: Briefcase,
      title: "Seamless Onboarding",
      description: "We handle the bureaucracy, so candidates arrive ready to work with all necessary permits.",
    },
    {
      icon: Building,
      title: "Cultural Preparation",
      description: "Our candidates receive intercultural training to ensure smooth integration into your clinical teams.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Services</h2>
          <p className="text-slate-600">
            Tailored solutions to bridge the gap between global healthcare talent and German healthcare facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Candidates */}
          <div>
            <div className="mb-10 flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-2xl">
                <UserCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">For Candidates</h3>
            </div>
            
            <div className="space-y-8">
              {candidateServices.map((service, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="group flex gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Employers */}
          <div>
            <div className="mb-10 flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-2xl">
                <Building className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">For Employers</h3>
            </div>
            
             <div className="space-y-8">
              {employerServices.map((service, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="group flex gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
