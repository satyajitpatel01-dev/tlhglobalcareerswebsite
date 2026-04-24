import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Healthcare Journey in Germany",
  description: "Get in touch with TLH Global Careers. We support healthcare professionals with language training, visa processing, and job placement in Germany.",
  openGraph: {
    title: "Contact Us | TLH Global Careers",
    description: "Get in touch with our team for healthcare recruitment and relocation services in Germany.",
    url: "https://tlhglobalcareers.com/contact",
  }
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-600">
              Whether you are a candidate ready to start your journey or an employer looking to hire, we are here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
             
             {/* Info */}
             <div className="lg:col-span-1 space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                   <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                      <Phone className="w-6 h-6" />
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
                   <p className="text-slate-600 mb-4 text-sm">German speaking and English speaking lines available.</p>
                   <p className="font-semibold text-slate-900">+91 99874 02157</p>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                   <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                      <Mail className="w-6 h-6" />
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
                   <p className="text-slate-600 mb-4 text-sm">We aim to respond within 24 hours.</p>
                   <p className="font-semibold text-slate-900">info@tlhglobalcareers.com</p>
                </div>

                <div className="bg-green-50 p-8 rounded-3xl shadow-sm border border-green-100">
                   <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                      <MessageSquare className="w-6 h-6" />
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-2">WhatsApp</h3>
                   <p className="text-slate-600 mb-4 text-sm">Chat directly with our onboarding team.</p>
                   <a 
                     href="https://wa.me/919987402157" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-full inline-flex items-center justify-center py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                   >
                     Chat Now
                   </a>
                </div>
             </div>

             {/* Form */}
             <div className="lg:col-span-2">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
                   <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h2>
                   <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-700">First Name</label>
                           <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="John" />
                         </div>
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-700">Last Name</label>
                           <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Doe" />
                         </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-700">Email Address</label>
                           <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="john@example.com" />
                         </div>
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-700">Phone (with country code)</label>
                           <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="+1 234 567 8900" />
                         </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">I am a...</label>
                        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-700">
                           <option>Candidate (Nurse/Healthcare Professional)</option>
                           <option>Employer (Hospital/Clinic)</option>
                           <option>Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-slate-700">Message</label>
                         <textarea rows={5} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none" placeholder="How can we help you?"></textarea>
                      </div>
                      <button type="button" className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl shadow-lg transition-all">
                        Send Message
                      </button>
                   </form>
                </div>
             </div>

          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
             <div className="h-[400px] rounded-3xl overflow-hidden bg-slate-200 border border-slate-200 shadow-inner relative group">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Kharghar+410210`}
                ></iframe>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-slate-100">
                   <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Navi Mumbai Office</p>
                </div>
             </div>

             <div className="h-[400px] rounded-3xl overflow-hidden bg-slate-200 border border-slate-200 shadow-inner relative group">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Jaipur+302039`}
                ></iframe>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-slate-100">
                   <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Jaipur Office</p>
                </div>
             </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
