import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer inline-flex">
              <div className="w-10 h-10 relative rounded-full overflow-hidden shadow-lg transition-all">
                <Image src="https://res.cloudinary.com/tlh01/image/upload/q_auto/f_auto/v1776471058/Round_Logo_nczoh2.png" alt="TLH Global Careers Logo" fill referrerPolicy="no-referrer" className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-none text-white whitespace-nowrap">
                  TLH Global Careers
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Bridging the gap between qualified healthcare professionals worldwide and top healthcare facilities in Germany.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="https://in.linkedin.com/company/tlh-global-careers" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors bg-slate-800 p-2 rounded-full">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/tlhglobalcareers/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors bg-slate-800 p-2 rounded-full">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase text-sm tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/employers" className="text-slate-400 hover:text-white text-sm transition-colors">For Employers</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link>
              </li>
              <li>
                <a href="https://portal.tlhglobalcareers.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm transition-colors font-medium">Candidate & Employer Portal →</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase text-sm tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">Language Training (B2/C1)</li>
              <li className="text-slate-400 text-sm">Visa & Relocation Support</li>
              <li className="text-slate-400 text-sm">Professional Registration</li>
              <li className="text-slate-400 text-sm">Integration Assistance</li>
              <li className="text-slate-400 text-sm">Employer Matching</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase text-sm tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">+91 99874 02157</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">info@tlhglobalcareers.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <span className="text-slate-400 text-sm">Kharghar, Navi Mumbai, 410210</span>
                  <span className="text-slate-400 text-sm">Jaipur, Rajasthan, 302039</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} TLH Global Careers. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
