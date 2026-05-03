"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

const navLinks = [
  { href: "/countries", label: "Countries" },
  { href: "/universities", label: "Universities" },
  { href: "/process", label: "Process" },
  { href: "/eligibility", label: "Eligibility" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bc = scrolled ? "#E2E4E8" : "rgba(255,255,255,0.12)";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "#fff" : "transparent", borderBottom: `1px solid ${bc}` }}>
      <div className="container-custom">
        <div className="flex items-stretch h-16 md:h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mr-auto pr-6" style={{ borderRight: `1px solid ${bc}` }}>
            <div className="w-7 h-7 flex items-center justify-center text-white bg-surgical flex-shrink-0"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.05em", border: "1px solid #003366" }}>
              WE
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "13px", color: scrolled ? "#003366" : "white", lineHeight: 1.1, transition: "color 0.3s", whiteSpace: "nowrap" }}>
                Worldwise Education
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", letterSpacing: "0.14em", textTransform: "uppercase", color: scrolled ? "#9CA3AF" : "rgba(255,255,255,0.4)", marginTop: 2 }}>
                MBBS ABROAD
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-stretch">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-center px-4 transition-all duration-150"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: scrolled ? "#6B7280" : "rgba(255,255,255,0.6)", borderRight: `1px solid ${bc}`, textDecoration: "none" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? "#003366" : "white"; (e.currentTarget as HTMLAnchorElement).style.background = scrolled ? "#F8F9FA" : "rgba(255,255,255,0.07)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? "#6B7280" : "rgba(255,255,255,0.6)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-stretch">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-teal flex items-center"
              style={{ fontSize: "0.6rem", padding: "0 24px", letterSpacing: "0.1em", borderRadius: 0, border: "none", borderLeft: `1px solid ${bc}` }}>
              Free Counseling
            </a>
          </div>

          {/* Mobile */}
          <button className="lg:hidden flex items-center justify-center w-12 ml-auto"
            style={{ color: scrolled ? "#003366" : "white", background: "transparent", borderTop: "none", borderRight: "none", borderBottom: "none", borderLeft: `1px solid ${bc}` }}
            onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-200 ${isOpen ? "max-h-screen" : "max-h-0"}`}
        style={{ background: "#fff", borderTop: "1px solid #E2E4E8" }}>
        <div className="container-custom">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}
              className="block py-4 hover:text-teal transition-colors"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#003366", borderBottom: "1px solid #E2E4E8", textDecoration: "none" }}>
              {link.label}
            </Link>
          ))}
          <div className="py-4">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-teal"
              style={{ display: "flex", width: "100%", justifyContent: "center" }}>
              Free Counseling
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
