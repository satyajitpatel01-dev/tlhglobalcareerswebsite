"use client";

import { motion } from "motion/react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Application & Interview",
      desc: "Submit your CV and credentials. We conduct an initial interview to assess your qualifications and motivations."
    },
    {
      num: "02",
      title: "Language Preparation",
      desc: "Join our intensive B2 German language courses. We provide materials and tutoring to ensure you pass the exams."
    },
    {
      num: "03",
      title: "Matching & Interview",
      desc: "We arrange interviews with top hospitals in Germany. Once matched, you receive an employment contract."
    },
    {
      num: "04",
      title: "Recognition & Visa",
      desc: "We handle your recognition of qualifications (Defizitbescheid) and guide you through the visa application process."
    },
    {
      num: "05",
      title: "Arrival & Integration",
      desc: "Welcome to Germany! We pick you up, help you settle into your housing, and support your integration."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Your Journey to Germany</h2>
          <p className="text-slate-600 text-lg">
            A clear, structured, and supported path to your new career and life.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-slate-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Circle */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-xl font-black text-slate-900 mb-6 relative z-10 font-mono">
                  {step.num}
                  {/* Highlight indicator line */}
                  <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-blue-600 rounded-full"></div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
