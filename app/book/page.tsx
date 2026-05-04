import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Mail, Phone, Clock } from "lucide-react";
import BookingForm from "@/components/sections/BookingForm";

export const metadata: Metadata = {
  title: "Book a Free Counseling Call — Worldwise Education",
  description:
    "Book a one-on-one counseling call with a doctor who has studied MBBS abroad. Get personalized guidance on country selection, FMGE prep, and the full admission process.",
  alternates: { canonical: "/book" },
};

const perks = [
  { icon: CheckCircle2, text: "One-on-one with your chosen doctor" },
  { icon: CheckCircle2, text: "Google Meet link sent to your email" },
  { icon: CheckCircle2, text: "30-minute personalized session" },
  { icon: CheckCircle2, text: "100% free, zero obligation" },
];

export default function BookPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "#003366", paddingTop: "7rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "#00C5A3" }} />
        {/* Logo watermark */}
        <div style={{ position: "absolute", top: "5rem", right: "clamp(2rem,5vw,5rem)", width: "90px", height: "90px", opacity: 0.12, zIndex: 2, pointerEvents: "none" }}>
          <Image src="/images/logo.png" alt="" fill className="object-contain" />
        </div>

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>Book a Call</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "3rem", alignItems: "end" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ opacity: 0.4 }}>—</span>
                <span>One-on-One Counseling</span>
              </p>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4.5rem)", lineHeight: 0.93, letterSpacing: "-0.04em", color: "#FFFFFF", marginBottom: "1.25rem" }}>
                Book a free<br />
                <em style={{ color: "#00C5A3" }}>doctor call.</em>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "440px" }}>
                Get 30 minutes with a doctor who has personally walked the path you&apos;re planning — from NEET to MBBS abroad to clearing FMGE.
              </p>
            </div>

            {/* Perks + process */}
            <div style={{ borderLeft: "2px solid rgba(255,255,255,0.08)", paddingLeft: "2rem" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                {perks.map(p => (
                  <div key={p.text} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <p.icon size={14} style={{ color: "#00C5A3", flexShrink: 0 }} />
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.04em" }}>{p.text}</p>
                  </div>
                ))}
              </div>

              {/* How it works */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.25rem" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.875rem" }}>How it works</p>
                {[
                  { num: "01", text: "Pick your doctor below" },
                  { num: "02", text: "Fill your details + preferred slot" },
                  { num: "03", text: "Get Google Meet link by email within 2 hrs" },
                  { num: "04", text: "Join your session at the booked time" },
                ].map(s => (
                  <div key={s.num} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.625rem" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", fontWeight: 700, color: "#00C5A3", letterSpacing: "0.08em", flexShrink: 0, marginTop: "1px" }}>{s.num}</span>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info strip */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "3rem", position: "relative", zIndex: 1 }}>
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {[
                { icon: Clock, text: "Response within 2 hours", sub: "Mon–Sat, 9AM–8PM IST" },
                { icon: Mail, text: "Meet link sent by email", sub: "Check inbox + spam" },
                { icon: Phone, text: "WhatsApp available too", sub: "For quick queries" },
              ].map((item, i) => (
                <div key={item.text} style={{ padding: "1.25rem clamp(1rem,3vw,2rem)", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <item.icon size={15} style={{ color: "#00C5A3", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.04em" }}>{item.text}</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em", marginTop: "2px" }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM ── */}
      <section style={{ background: "#F5F5F5", padding: "clamp(4rem,7vw,6rem) 0" }}>
        <div className="container-custom">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* ── EMAILJS SETUP NOTE ── shown only in dev ── */}
      <section style={{ background: "#FEF9E7", borderTop: "1px solid #F59E0B", padding: "1.5rem 0" }}>
        <div className="container-custom">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#92400E", letterSpacing: "0.04em" }}>
            <strong>⚙ Setup required:</strong> To activate email sending, create a free account at{" "}
            <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer" style={{ color: "#D97706", textDecoration: "underline" }}>emailjs.com</a>,
            {" "}create a Service + 2 Templates (one for team, one for student confirmation), then add your Service ID, Template IDs, and Public Key to <code>.env.local</code>.
            Remove this banner once configured.
          </p>
        </div>
      </section>
    </>
  );
}
