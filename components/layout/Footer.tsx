"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Instagram, MapPin, Clock } from "lucide-react";
import { whatsappLink, instagramLink } from "@/lib/utils";
import { countries } from "@/data/countries";

export default function Footer() {
  const year = new Date().getFullYear();
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999";
  const igHandle = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "nishumbbsabroad";

  return (
    <footer style={{ background: "#0A0A0A", borderTop: "4px solid #00C5A3" }}>
      <div className="container-custom pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="lg:col-span-4" style={{ borderRight: "1px solid rgba(255,255,255,0.06)", paddingRight: "2.5rem" }}>
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: "48px", height: "48px", flexShrink: 0, position: "relative" }}>
                <Image src="/images/logo.png" alt="Worldwise Education" fill className="object-contain" />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "14px", color: "white", lineHeight: 1.1 }}>Worldwise Education</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: 2 }}>MBBS Abroad Consultancy</p>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8125rem", lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: "280px" }}>
              India&apos;s only MBBS abroad consultancy where every counselor holds an MBBS degree from a foreign university.
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", color: "#00C5A3", textTransform: "uppercase" }}>
              For the Doctors. By the Doctors.
            </p>
          </div>

          {/* Countries */}
          <div className="lg:col-span-3">
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.575rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "1rem" }}>Destinations</p>
            <ul className="space-y-2">
              {countries.map(c => (
                <li key={c.slug}>
                  <Link href={`/countries/${c.slug}`}
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "8px", transition: "color 0.15s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "white"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"}>
                    {c.flag} {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.575rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "1rem" }}>Company</p>
            <ul className="space-y-2.5">
              {["/about","/process","/eligibility","/universities","/blog","/faq","/contact"].map(href => (
                <li key={href}>
                  <Link href={href}
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", letterSpacing: "0.03em", transition: "color 0.15s", textTransform: "capitalize" }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "white"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"}>
                    {href.replace("/", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)", paddingLeft: "2rem" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.575rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "1rem" }}>Contact</p>
            <div className="space-y-4">
              {[
                { icon: Phone, label: "WhatsApp", val: `+${waNumber.replace(/^91/, "91 ")}`, href: whatsappLink(), col: "#00C5A3" },
                { icon: Instagram, label: "Instagram", val: `@${igHandle}`, href: instagramLink(), col: "#E1306C" },
                { icon: MapPin, label: "Office", val: "New Delhi, India", href: null, col: "rgba(255,255,255,0.4)" },
                { icon: Clock, label: "Hours", val: "Mon–Sat, 9AM–8PM IST", href: null, col: "rgba(255,255,255,0.4)" },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: item.col }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.575rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        style={{ fontFamily: "var(--font-mono)", fontSize: "0.7125rem", color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.15s" }}
                        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "white"}
                        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)"}>
                        {item.val}
                      </a>
                    ) : (
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7125rem", color: "rgba(255,255,255,0.55)" }}>{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}>© {year} Worldwise Education. All rights reserved.</p>
          <div className="flex gap-6">
            {["/privacy", "/disclaimer"].map(href => (
              <Link key={href} href={href}
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", textDecoration: "none", letterSpacing: "0.06em", textTransform: "capitalize", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.2)"}>
                {href.replace("/", "")}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container-custom py-2.5">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "rgba(255,255,255,0.15)", textAlign: "center", letterSpacing: "0.04em", lineHeight: 1.7 }}>
            All university information is for guidance only. Verify NMC/WDOMS listings independently before payment. We do not share information with third parties.
          </p>
        </div>
      </div>
    </footer>
  );
}
