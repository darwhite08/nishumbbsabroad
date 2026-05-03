"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

const navLinks = [
  { href: "/countries", label: "Countries" },
  { href: "/universities", label: "Universities" },
  { href: "/process", label: "Process" },
  { href: "/eligibility", label: "Eligibility" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)] border-b border-black/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #2E6DB4 100%)" }}>
              <span className="text-white font-bold text-sm font-display">N</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-bold text-[15px] tracking-tight transition-colors ${scrolled ? "text-text-main" : "text-white"}`}>
                Worldwise Education
              </span>
              <span className={`text-[10px] tracking-widest uppercase transition-colors ${scrolled ? "text-text-muted" : "text-white/50"}`}>
                MBBS Abroad Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium px-3.5 py-2 rounded-lg transition-all duration-200 ${
                  scrolled
                    ? "text-text-muted hover:text-text-main hover:bg-bg-light"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-5 py-2.5"
            >
              <Phone className="w-3.5 h-3.5" />
              Free Counseling
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-text-main hover:bg-bg-light" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white border-t border-border">
          <div className="container-custom py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-main hover:text-primary font-medium py-3 px-2 border-b border-border/50 last:border-0 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-4 text-sm"
            >
              <Phone className="w-4 h-4" />
              Free Counseling on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
