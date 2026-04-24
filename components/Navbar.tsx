"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Employers", href: "/employers" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 relative rounded-full overflow-hidden shadow-lg group-hover:shadow-blue-500/25 transition-all">
              <Image src="https://res.cloudinary.com/tlh01/image/upload/q_auto/f_auto/v1776471058/Round_Logo_nczoh2.png" alt="TLH Global Careers Logo" fill referrerPolicy="no-referrer" className="object-cover" />
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-tight leading-none text-slate-900 group-hover:text-blue-700 transition-colors">
              TLH Global Careers
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://portal.tlhglobalcareers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              Portal Login
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-700 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="https://portal.tlhglobalcareers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3 rounded-xl border border-slate-200 font-medium text-slate-700 hover:bg-slate-50 relative overflow-hidden"
              >
                Portal Login
              </a>
              <Link
                href="/contact"
                className="text-center py-3 rounded-xl bg-blue-600 font-medium text-white shadow-md hover:bg-blue-700"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
