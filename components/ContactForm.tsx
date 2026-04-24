"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, Mail, User, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  userType: z.enum(["candidate", "employer", "general"]),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  defaultType?: "candidate" | "employer" | "general";
  title?: string;
  subtitle?: string;
}

export default function ContactForm({ 
  defaultType = "general",
  title = "Get in Touch",
  subtitle = "Have questions? We're here to help you every step of the way."
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: defaultType,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 bg-slate-50/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              {subtitle}
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">Email Us</p>
                  <p className="text-base sm:text-xl font-bold text-slate-900">info@tlhglobalcareers.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">Call Us</p>
                  <p className="text-base sm:text-xl font-bold text-slate-900">+91 99874 02157</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 shadow-2xl shadow-blue-900/5 border border-slate-100"
          >
            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-8 sm:py-12"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-sm sm:text-slate-600 mb-8">
                    Thank you for reaching out. We&apos;ve received your inquiry and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors w-full sm:w-auto"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          {...register("name")}
                          placeholder="John Doe"
                          className="w-full pl-11 pr-4 py-3.5 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm sm:text-base"
                        />
                      </div>
                      {errors.name && <p className="text-[10px] sm:text-xs text-red-500 mt-1 ml-1">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          {...register("email")}
                          placeholder="john@example.com"
                          className="w-full pl-11 pr-4 py-3.5 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm sm:text-base"
                        />
                      </div>
                      {errors.email && <p className="text-[10px] sm:text-xs text-red-500 mt-1 ml-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          {...register("phone")}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-11 pr-4 py-3.5 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm sm:text-base"
                        />
                      </div>
                      {errors.phone && <p className="text-[10px] sm:text-xs text-red-500 mt-1 ml-1">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">I am a...</label>
                      <select
                        {...register("userType")}
                        className="w-full px-4 py-3.5 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer text-sm sm:text-base"
                      >
                        <option value="candidate">Healthcare Professional</option>
                        <option value="employer">Employer / Hospital</option>
                        <option value="general">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                      <textarea
                        {...register("message")}
                        rows={3}
                        placeholder="Tell us how we can help you..."
                        className="w-full pl-11 pr-4 py-3.5 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none text-sm sm:text-base"
                      ></textarea>
                    </div>
                    {errors.message && <p className="text-[10px] sm:text-xs text-red-500 mt-1 ml-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 sm:py-5 bg-blue-600 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-xs sm:text-sm font-medium justify-center mt-2 sm:mt-4">
                      <AlertCircle className="w-4 h-4" />
                      Failed to send message.
                    </div>
                  )}
                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
