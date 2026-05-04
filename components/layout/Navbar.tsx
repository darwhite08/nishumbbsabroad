"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  { href: "/book", label: "Book a Call" },
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E8E8E8" : "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Teal top progress line — only on scroll */}
      {scrolled && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, #00C5A3, #003366)" }} />
      )}

      <div className="container-custom">
        <div className="flex items-stretch" style={{ height: "72px" }}>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 mr-auto"
            style={{
              paddingRight: "2rem",
              borderRight: scrolled ? "1px solid #E8E8E8" : "1px solid rgba(255,255,255,0.1)",
              textDecoration: "none",
            }}
          >
            {/* Real logo */}
            <div style={{ width: "44px", height: "44px", flexShrink: 0, position: "relative" }}>
              <Image
                src="/images/logo.png"
                alt="Worldwise Education"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Wordmark */}
            <div>
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "14px",
                fontWeight: 400,
                color: scrolled ? "#003366" : "white",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                transition: "color 0.4s",
                whiteSpace: "nowrap",
              }}>
                Worldwise Education
              </p>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.5rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: scrolled ? "#00C5A3" : "rgba(0,197,163,0.7)",
                marginTop: "2px",
              }}>
                MBBS Abroad
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-stretch">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} scrolled={scrolled}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden lg:flex items-center" style={{ paddingLeft: "1.5rem", borderLeft: scrolled ? "1px solid #E8E8E8" : "1px solid rgba(255,255,255,0.1)" }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "white",
                background: "#003366",
                border: "1px solid #003366",
                padding: "10px 20px",
                transition: "all 0.2s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#00C5A3";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#00C5A3";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#003366";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#003366";
              }}
            >
              <Phone size={11} />
              Free Counseling
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center"
            style={{
              width: "48px",
              color: scrolled ? "#003366" : "white",
              background: "transparent",
              border: "none",
              borderLeft: scrolled ? "1px solid #E8E8E8" : "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}
        style={{ background: "#FFFFFF", borderTop: "1px solid #E8E8E8" }}
      >
        <div className="container-custom py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#003366",
                textDecoration: "none",
                padding: "1rem 0",
                borderBottom: "1px solid #E8E8E8",
                transition: "color 0.15s",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ padding: "1rem 0" }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal"
              style={{ display: "flex", width: "100%", justifyContent: "center" }}
            >
              <Phone size={13} />
              Free Counseling
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* Extracted nav link with hover underline indicator */
function NavLink({ href, scrolled, children }: { href: string; scrolled: boolean; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 1.125rem",
        fontFamily: "var(--font-mono)",
        fontSize: "0.6rem",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: hovered
          ? (scrolled ? "#003366" : "white")
          : (scrolled ? "#9CA3AF" : "rgba(255,255,255,0.55)"),
        textDecoration: "none",
        position: "relative",
        transition: "color 0.2s",
        borderRight: scrolled ? "1px solid #E8E8E8" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {children}
      {/* Teal underline indicator */}
      <span style={{
        position: "absolute",
        bottom: 0,
        left: "1.125rem",
        right: "1.125rem",
        height: "2px",
        background: "#00C5A3",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.2s ease",
      }} />
    </Link>
  );
}
