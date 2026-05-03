import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Instagram, ArrowRight, CheckCircle, Star } from "lucide-react";
import { whatsappLink, instagramLink } from "@/lib/utils";
import { countries } from "@/data/countries";
import { team } from "@/data/team";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Worldwise Education — For the Doctors, By the Doctors",
  description:
    "Premium MBBS abroad consultancy. Doctor-led guidance for NMC-approved universities in Russia, Georgia, Kazakhstan and 5 more countries. Free counseling.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: "20L+", label: "NEET candidates / year" },
  { value: "52K", label: "Govt. seats available" },
  { value: "8", label: "Countries covered" },
  { value: "500+", label: "Students placed" },
];

const features = [
  {
    num: "01",
    title: "Doctor-Led Counseling",
    body: "Every counselor holds an MBBS from a foreign university. We have sat exactly where you are sitting right now.",
  },
  {
    num: "02",
    title: "NMC / WDOMS Compliant",
    body: "We only recommend universities that are fully NMC-approved and WDOMS-listed. Your practice rights in India are non-negotiable.",
  },
  {
    num: "03",
    title: "End-to-End Support",
    body: "University selection → visa → airport pickup → FMGE coaching strategy. We stay in touch throughout your degree.",
  },
  {
    num: "04",
    title: "FMGE from Day One",
    body: "We hand you a year-wise FMGE preparation roadmap before you board your flight — not as an afterthought.",
  },
];

const feeRows = [
  { label: "Total Cost", india: "₹60L – ₹1 Cr+", abroad: "₹18L – ₹55L" },
  { label: "Capitation Fee", india: "₹20–50L (unreceipted)", abroad: "Zero" },
  { label: "NMC Recognition", india: "Yes", abroad: "Yes (approved unis)" },
  { label: "Language", india: "English", abroad: "English" },
  { label: "Duration", india: "5.5 years", abroad: "5–6 years" },
];

const countryPhotos: Record<string, string> = {
  russia:
    "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80",
  georgia:
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
  kazakhstan:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  uzbekistan:
    "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80",
  kyrgyzstan:
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
  bangladesh:
    "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
  nepal:
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  philippines:
    "https://images.unsplash.com/photo-1519544801976-22f3600d79a8?w=800&q=80",
};

const marqueeItems = [
  "NMC Approved",
  "WDOMS Listed",
  "Doctor Led",
  "500+ Students",
  "Free Counseling",
  "8 Countries",
  "FMGE Support",
  "Zero Capitation",
];

export default function HomePage() {
  const featuredTeam = team.filter((m) => m.featured);
  const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 6);
  const homeFaqs = faqs.slice(0, 6);

  return (
    <>
      {/* ════════════════════════════════════════
          1. HERO — Full-viewport editorial split
      ════════════════════════════════════════ */}
      <section style={{ background: "#0D0D0D", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Teal left accent stripe */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "#00C5A3", zIndex: 10 }} />

        {/* Background photo — full bleed, dark overlay */}
        <div className="hidden lg:block" style={{ position: "absolute", inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=90"
            alt="Modern university campus architecture"
            fill priority
            className="object-cover"
            style={{ objectPosition: "60% center" }}
          />
          {/* Heavy left-to-right fade so left text stays legible */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0D0D0D 45%, rgba(13,13,13,0.85) 65%, rgba(13,13,13,0.4) 100%)" }} />
          {/* Bottom fade into stats bar */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "160px", background: "linear-gradient(to top, #0D0D0D, transparent)" }} />
        </div>

        {/* Content — vertically centred, left-aligned */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 5, padding: "6rem clamp(2rem, 5vw, 5rem) 3rem clamp(2.5rem, 6vw, 6rem)", maxWidth: "700px" }}>

          {/* Label row */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2.5rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
              Worldwise Education
            </span>
            <div style={{ width: "40px", height: "1px", background: "rgba(0,197,163,0.5)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", color: "rgba(255,255,255,0.18)", letterSpacing: "0.1em" }}>EST. 2024</span>
          </div>

          {/* Main headline — two clean lines */}
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 7.5vw, 6.5rem)", lineHeight: 0.92, letterSpacing: "-0.04em", color: "#FFFFFF", margin: 0, marginBottom: "0.12em" }}>
            For the Doctors.
          </h1>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 7.5vw, 6.5rem)", lineHeight: 0.92, letterSpacing: "-0.04em", color: "#00C5A3", fontStyle: "italic", margin: 0, marginBottom: "2rem" }}>
            By the Doctors.
          </h1>

          {/* Sub copy */}
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)", lineHeight: 1.75, maxWidth: "420px", marginBottom: "2.5rem", fontFamily: "var(--font-inter)" }}>
            MBBS abroad counseling from doctors who studied at the same universities they recommend. Free. No obligation.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "3rem" }}>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-teal">
              <Phone className="w-3.5 h-3.5" />
              Talk to a Doctor
            </a>
            <Link href="/countries" className="btn-outline-white">
              Explore Destinations
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {["NMC Approved ✓", "WDOMS Listed ✓", "Doctor-Led ✓", "Free Counseling ✓"].map((badge) => (
              <span key={badge} style={{ fontFamily: "var(--font-mono)", fontSize: "0.53rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", border: "1px solid rgba(0,197,163,0.25)", padding: "4px 10px" }}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Floating card — bottom right, desktop only */}
        <div className="hidden lg:block" style={{ position: "absolute", bottom: "80px", right: "48px", background: "rgba(13,13,13,0.9)", border: "1px solid rgba(0,197,163,0.25)", padding: "1.25rem 1.75rem", backdropFilter: "blur(12px)", zIndex: 10 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", color: "#00C5A3", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Students placed</p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "white", lineHeight: 1, letterSpacing: "-0.04em" }}>500+</p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", marginTop: "0.25rem" }}>Across 8 countries</p>
        </div>

        {/* Stats bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", position: "relative", zIndex: 5 }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: "1.75rem clamp(1.5rem, 4vw, 2.5rem)", borderRight:
                  i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.35rem",
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.58rem",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          2. MARQUEE STRIP — deep navy
      ════════════════════════════════════════ */}
      <div
        style={{
          background: "#003366",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          position: "relative",
        }}
      >
        <div className="marquee-track" style={{ padding: "1rem 0" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1.25rem",
                paddingRight: "1.25rem",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {item}
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#00C5A3",
                  flexShrink: 0,
                }}
              />
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          3. WHY WORLDWISE — Pure white, ultra-premium editorial
      ════════════════════════════════════════ */}
      <section style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E8E8", position: "relative", overflow: "hidden" }}>

        {/* Faded section number */}
        <div style={{ position: "absolute", right: "clamp(1rem, 4vw, 3rem)", top: "3rem", fontFamily: "var(--font-mono)", fontSize: "clamp(6rem, 14vw, 11rem)", fontWeight: 700, lineHeight: 1, color: "#0A0A0A", opacity: 0.04, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none", zIndex: 0 }}>
          01
        </div>

        {/* Teal top accent */}
        <div style={{ height: "3px", background: "linear-gradient(to right, #00C5A3 0%, #003366 60%, transparent 100%)" }} />

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>

          {/* Header row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", padding: "5rem 0 4rem", borderBottom: "1px solid #E8E8E8" }} className="lg:grid-cols-[55%_45%]">
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "1.75rem", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ opacity: 0.35 }}>01</span>
                <span style={{ opacity: 0.35 }}>—</span>
                <span>Why Worldwise Education</span>
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 0.93, letterSpacing: "-0.035em", color: "#0A0A0A" }}>
                The consultancy that&apos;s<br />
                <em style={{ color: "#003366" }}>actually been there.</em>
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: "0.25rem" }}>
              <p style={{ color: "#6B7280", fontSize: "1rem", lineHeight: 1.8, maxWidth: "380px", borderLeft: "2px solid #E8E8E8", paddingLeft: "1.75rem" }}>
                Most consultancies are staffed by salespeople who have never set foot in a foreign medical university. Every single person on our team holds an MBBS from one of the universities they recommend.
              </p>
            </div>
          </div>

          {/* Feature rows — simple 2-column: index | content */}
          <div>
            {features.map((f, idx) => (
              <div key={f.num} className="group hover:bg-[#FAFAFA] transition-colors duration-150"
                style={{ display: "grid", gridTemplateColumns: "64px 1fr", borderBottom: idx < 3 ? "1px solid #E8E8E8" : "none", position: "relative" }}>

                {/* Teal left hover bar */}
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 0, background: "#00C5A3", transition: "width 0.25s ease" }}
                  className="group-hover:!w-[3px]" />

                {/* Index */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "2.25rem", borderRight: "1px solid #E8E8E8" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", color: "#00C5A3" }}>{f.num}</span>
                </div>

                {/* Content: title + rule + body — all in one column, always readable */}
                <div style={{ padding: "2.25rem 2rem 2.25rem 2rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 2vw, 1.875rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#0A0A0A", marginBottom: "0.75rem" }}>
                    {f.title}
                  </h3>
                  <div style={{ width: "24px", height: "2px", background: "#00C5A3", marginBottom: "0.875rem" }} />
                  <p style={{ color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.8 }}>
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom strip — proof + CTA */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem", padding: "2.25rem 0" }}>
            <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
              {[
                { val: "500+", label: "Students placed" },
                { val: "8",    label: "Countries" },
                { val: "4",    label: "Doctor counselors" },
                { val: "100%", label: "NMC compliant" },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.25rem", fontWeight: 700, color: "#003366", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.val}</p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.25rem" }}>{s.label}</p>
                </div>
              ))}
            </div>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-surgical">
              <Phone className="w-3.5 h-3.5" />
              Free Counseling
            </a>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          4. COUNTRIES — Off-white, full photo cards
      ════════════════════════════════════════ */}
      <section
        style={{
          background: "#F5F5F5",
          padding: "clamp(5rem, 8vw, 7rem) 0",
          borderBottom: "1px solid #E8E8E8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Faded section number */}
        <div style={{ position: "absolute", right: "clamp(1rem, 4vw, 3rem)", top: "2rem", fontFamily: "var(--font-mono)", fontSize: "clamp(6rem, 14vw, 11rem)", fontWeight: 700, lineHeight: 1, color: "#0A0A0A", opacity: 0.04, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none" }}>02</div>

        <div className="container-custom">
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "3rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid #E8E8E8",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "0.75rem", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ opacity: 0.35 }}>02</span><span style={{ opacity: 0.35 }}>—</span><span>Destinations</span>
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.25rem, 4vw, 3.75rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.03em",
                  color: "#0D0D0D",
                }}
              >
                8 NMC-Approved{" "}
                <em style={{ fontStyle: "italic" }}>Countries</em>
              </h2>
            </div>
            <Link href="/countries" className="btn-outline hidden md:inline-flex">
              Compare All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Country grid — full photo cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "1px",
              background: "#E8E8E8",
            }}
            className="sm:grid-cols-2 lg:grid-cols-4"
          >
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/countries/${country.slug}`}
                style={{ textDecoration: "none", display: "block", position: "relative", overflow: "hidden", aspectRatio: "3/4", background: "#0D0D0D" }}
                className="group"
              >
                {/* Full-bleed photo */}
                <Image
                  src={
                    countryPhotos[country.slug] ??
                    "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
                  }
                  alt={country.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
                    transition: "opacity 0.3s",
                  }}
                />
                {/* Teal border on hover */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    border: "3px solid #00C5A3",
                    opacity: 0,
                    transition: "opacity 0.25s",
                    zIndex: 2,
                  }}
                  className="group-hover:opacity-100"
                />
                {/* NMC badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    zIndex: 3,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.5rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#fff",
                      background: "#00C5A3",
                      border: "1px solid #009E84",
                      padding: "3px 8px",
                    }}
                  >
                    NMC ✓
                  </span>
                </div>
                {/* Content at bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.5rem",
                    zIndex: 3,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                      color: "white",
                      lineHeight: 1.05,
                      letterSpacing: "-0.02em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {country.flag} {country.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#00C5A3",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {country.totalCost}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.55rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {country.duration}
                    </span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: "#00C5A3" }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. SPLIT FEATURE — Teal / White bold contrast
      ════════════════════════════════════════ */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
        }}
        className="lg:grid-cols-2"
      >
        {/* Left — solid teal */}
        <div
          style={{
            background: "#00C5A3",
            padding: "clamp(5rem, 8vw, 7rem) clamp(2rem, 5vw, 5rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "2rem",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span style={{ opacity: 0.6 }}>03</span><span style={{ opacity: 0.6 }}>—</span><span>Our Difference</span>
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              lineHeight: 0.93,
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              marginBottom: "2rem",
            }}
          >
            Doctor-Led.
            <br />
            Not{" "}
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.7)" }}>
              Agent-Led.
            </em>
          </h2>
          <div
            style={{
              width: "40px",
              height: "3px",
              background: "rgba(255,255,255,0.5)",
              marginBottom: "2rem",
            }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: "420px",
            }}
          >
            When a doctor guides you, the outcome shifts from closing a sale to
            securing your future. That&apos;s not just a tagline — it&apos;s
            the difference between a career and a mistake.
          </p>
        </div>

        {/* Right — white with bullet points */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "clamp(5rem, 8vw, 7rem) clamp(2rem, 5vw, 5rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderLeft: "1px solid #E8E8E8",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6B7280",
              marginBottom: "2rem",
            }}
          >
            The contrast
          </p>
          {[
            {
              title: "We studied abroad — they didn't",
              desc: "Every team member holds an MBBS from an NMC-approved foreign university. Agents have brochures. We have diplomas.",
            },
            {
              title: "We earn zero university commission",
              desc: "Our income is from student fees, not referral cuts. We recommend what is right for you — not what pays us the most.",
            },
            {
              title: "FMGE planning starts pre-departure",
              desc: "We hand you a year-wise study plan before your flight. Not after year 3 when panic sets in.",
            },
            {
              title: "One point of contact throughout",
              desc: "No passing you around. The counselor who signs you is reachable throughout your full degree.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                gap: "1.25rem",
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid #E8E8E8",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  background: "#00C5A3",
                  flexShrink: 0,
                  marginTop: "0.5rem",
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                    color: "#0D0D0D",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    color: "#6B7280",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          6. TEAM — Charcoal, editorial grayscale
      ════════════════════════════════════════ */}
      <section
        style={{
          background: "#1A1A1A",
          padding: "clamp(5rem, 8vw, 7rem) 0",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Faded section number */}
        <div style={{ position: "absolute", right: "clamp(1rem, 4vw, 3rem)", top: "2rem", fontFamily: "var(--font-mono)", fontSize: "clamp(6rem, 14vw, 11rem)", fontWeight: 700, lineHeight: 1, color: "#FFFFFF", opacity: 0.04, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none" }}>04</div>
        <div className="container-custom">
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "3rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.58rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "0.75rem",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ opacity: 0.5 }}>04</span><span style={{ opacity: 0.5 }}>—</span><span>Our Team</span>
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.25rem, 4vw, 3.75rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                }}
              >
                Doctors who&apos;ve{" "}
                <em style={{ fontStyle: "italic", color: "#00C5A3" }}>
                  lived it
                </em>
              </h2>
            </div>
            <Link href="/about" className="btn-outline-white hidden md:inline-flex">
              Full Team <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Team grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            className="md:grid-cols-3"
          >
            {featuredTeam.map((member, i) => (
              <div
                key={member.id}
                className="group"
                style={{
                  borderRight:
                    i < featuredTeam.length - 1
                      ? "1px solid rgba(255,255,255,0.07)"
                      : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Photo — grayscale → colour on hover */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    height: "300px",
                  }}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, rgba(26,26,26,0.05) 0%, rgba(26,26,26,0.75) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1.25rem",
                      left: "1.25rem",
                      right: "1.25rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.375rem",
                        color: "white",
                        lineHeight: 1.1,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {member.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.58rem",
                        color: "#00C5A3",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginTop: "4px",
                      }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
                {/* Bio */}
                <div style={{ padding: "1.25rem 1.5rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.58rem",
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.08em",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {member.qualification} · {member.university}, {member.country}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.8125rem",
                      lineHeight: 1.65,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          7. FEE COMPARISON
      ════════════════════════════════════════ */}
      <section
        style={{
          background: "#FFFFFF",
          padding: "clamp(5rem, 8vw, 7rem) 0",
          borderBottom: "1px solid #E8E8E8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", right: "clamp(1rem, 4vw, 3rem)", top: "2rem", fontFamily: "var(--font-mono)", fontSize: "clamp(6rem, 14vw, 11rem)", fontWeight: 700, lineHeight: 1, color: "#0A0A0A", opacity: 0.04, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none" }}>05</div>
        <div className="container-custom">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="lg:grid-cols-2"
          >
            {/* Left — editorial heading */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.58rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#00C5A3",
                  marginBottom: "0.75rem",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ opacity: 0.35 }}>05</span><span style={{ opacity: 0.35 }}>—</span><span>The Numbers</span>
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.25rem, 4vw, 3.75rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.03em",
                  color: "#0D0D0D",
                  marginBottom: "1.5rem",
                }}
              >
                MBBS abroad is the{" "}
                <em style={{ fontStyle: "italic", color: "#003366" }}>
                  rational choice
                </em>
              </h2>
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  background: "#00C5A3",
                  marginBottom: "1.5rem",
                }}
              />
              <p
                style={{
                  color: "#6B7280",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  fontSize: "0.9375rem",
                }}
              >
                Indian private colleges charge ₹60L–₹1Cr+ — with ₹20–50L in
                capitation fees paid under the table. MBBS abroad has no
                capitation, no donations, no hidden charges.
              </p>
              {[
                "60–95% cheaper than Indian private colleges",
                "Zero capitation or donation fees",
                "Degree valid in India after FMGE/NExT",
                "Same NEET PG eligibility as Indian graduates",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    marginBottom: "0.875rem",
                  }}
                >
                  <CheckCircle
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#00C5A3", marginTop: "2px" }}
                  />
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#2C2C2C",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Right — styled comparison card (not a table) */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8E8E8",
                overflow: "hidden",
              }}
            >
              {/* Card header — two columns */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr 1fr",
                  background: "#0D0D0D",
                }}
              >
                <div style={{ padding: "1rem 1.25rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.55rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    Factor
                  </p>
                </div>
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    borderLeft: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.55rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                      textDecoration: "line-through",
                    }}
                  >
                    India Private
                  </p>
                </div>
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    background: "#00C5A3",
                    borderLeft: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.55rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "white",
                    }}
                  >
                    MBBS Abroad ✓
                  </p>
                </div>
              </div>

              {/* Rows */}
              {feeRows.map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr 1fr",
                    borderTop: "1px solid #E8E8E8",
                    background: i % 2 === 0 ? "#FFFFFF" : "#F8F8F8",
                  }}
                >
                  <div
                    style={{
                      padding: "1rem 1.25rem",
                      borderRight: "1px solid #E8E8E8",
                      minWidth: "110px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: "#0A0A0A",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {row.label}
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "1rem 1.25rem",
                      borderRight: "1px solid #E8E8E8",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: "#9CA3AF",
                        textDecoration: "line-through",
                      }}
                    >
                      {row.india}
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "1rem 1.25rem",
                      background: "rgba(0,197,163,0.05)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "#003366",
                      }}
                    >
                      {row.abroad}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          8. TESTIMONIALS — Deep navy
      ════════════════════════════════════════ */}
      <section
        style={{
          background: "#003366",
          padding: "clamp(5rem, 8vw, 7rem) 0",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", right: "clamp(1rem, 4vw, 3rem)", top: "2rem", fontFamily: "var(--font-mono)", fontSize: "clamp(6rem, 14vw, 11rem)", fontWeight: 700, lineHeight: 1, color: "#FFFFFF", opacity: 0.05, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none" }}>06</div>
        <div className="container-custom">
          {/* Header */}
          <div
            style={{
              marginBottom: "3rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.75rem", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ opacity: 0.6 }}>06</span><span style={{ opacity: 0.6 }}>—</span><span>Student Stories</span>
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 4vw, 3.75rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
            >
              Real students.{" "}
              <em style={{ fontStyle: "italic", color: "#00C5A3" }}>
                Real words.
              </em>
            </h2>
          </div>

          {/* Testimonial grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            className="md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredTestimonials.map((t, i) => (
              <div
                key={t.id}
                style={{
                  padding: "2.25rem",
                  display: "flex",
                  flexDirection: "column",
                  borderRight:
                    (i + 1) % 3 !== 0
                      ? "1px solid rgba(255,255,255,0.07)"
                      : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Big quote mark */}
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "5rem",
                    color: "rgba(0,197,163,0.25)",
                    lineHeight: 0.75,
                    marginBottom: "1.25rem",
                    userSelect: "none",
                  }}
                >
                  &ldquo;
                </p>
                {/* Stars */}
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    marginBottom: "1rem",
                  }}
                >
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-3.5 h-3.5"
                      style={{
                        fill: idx < t.rating ? "#F59E0B" : "transparent",
                        color: idx < t.rating ? "#F59E0B" : "rgba(255,255,255,0.15)",
                      }}
                    />
                  ))}
                </div>
                {/* Quote text */}
                <blockquote
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    flex: 1,
                    marginBottom: "1.5rem",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {t.quote}
                </blockquote>
                {/* Attrib */}
                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                    paddingTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.0625rem",
                      color: "#FFFFFF",
                      marginBottom: "3px",
                    }}
                  >
                    {t.studentName}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.58rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#00C5A3",
                    }}
                  >
                    {t.currentYear} · {t.university}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          9. FAQ — Off-white, sticky sidebar, accordion
      ════════════════════════════════════════ */}
      <section
        style={{
          background: "#F5F5F5",
          padding: "clamp(5rem, 8vw, 7rem) 0",
          borderBottom: "1px solid #E8E8E8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", right: "clamp(1rem, 4vw, 3rem)", top: "2rem", fontFamily: "var(--font-mono)", fontSize: "clamp(6rem, 14vw, 11rem)", fontWeight: 700, lineHeight: 1, color: "#0A0A0A", opacity: 0.04, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none" }}>07</div>
        <div className="container-custom">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
            className="lg:grid-cols-12"
          >
            {/* Left sticky sidebar */}
            <div
              className="lg:col-span-4"
              style={{ position: "sticky", top: "100px", alignSelf: "start" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.58rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#00C5A3",
                  marginBottom: "0.75rem",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ opacity: 0.35 }}>07</span><span style={{ opacity: 0.35 }}>—</span><span>FAQ</span>
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.03em",
                  color: "#0D0D0D",
                  marginBottom: "1.25rem",
                }}
              >
                Questions we hear{" "}
                <em style={{ fontStyle: "italic" }}>every day</em>
              </h2>
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  background: "#00C5A3",
                  marginBottom: "1.25rem",
                }}
              />
              <p
                style={{
                  color: "#6B7280",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  marginBottom: "1.75rem",
                }}
              >
                Honest answers from doctors who have been through the full
                process.
              </p>
              <Link href="/faq" className="btn-surgical" style={{ display: "inline-flex" }}>
                All 30+ FAQs <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right accordion */}
            <div className="lg:col-span-8">
              {homeFaqs.map((faq) => (
                <details
                  key={faq.id}
                  className="group"
                  style={{ borderBottom: "1px solid #E8E8E8" }}
                >
                  <summary
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1.375rem 0",
                      cursor: "pointer",
                      listStyle: "none",
                      gap: "1rem",
                      fontFamily: "var(--font-display)",
                      fontSize: "1.0625rem",
                      color: "#0A0A0A",
                      lineHeight: 1.3,
                    }}
                  >
                    {faq.question}
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "1.25rem",
                        color: "#00C5A3",
                        flexShrink: 0,
                        lineHeight: 1,
                      }}
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <div
                    style={{
                      paddingBottom: "1.375rem",
                      color: "#6B7280",
                      fontSize: "0.9375rem",
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          10. FINAL CTA — Charcoal left / Teal right
      ════════════════════════════════════════ */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          position: "relative",
          overflow: "hidden",
        }}
        className="lg:grid-cols-2"
      >
        {/* Left — charcoal */}
        <div
          style={{
            background: "#0D0D0D",
            padding: "clamp(5rem, 8vw, 7rem) clamp(2rem, 5vw, 5rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Teal left stripe */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "4px",
              background: "#00C5A3",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "1.5rem",
            }}
          >
            Free Counseling
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              color: "#FFFFFF",
              marginBottom: "2rem",
            }}
          >
            Ready?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: "380px",
            }}
          >
            Talk to a doctor who has sat exactly where you are. No pressure. No
            commission-driven advice. Just honest guidance.
          </p>
        </div>

        {/* Right — teal */}
        <div
          style={{
            background: "#00C5A3",
            padding: "clamp(5rem, 8vw, 7rem) clamp(2rem, 5vw, 5rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "2rem",
            }}
          >
            Start now — it&apos;s free
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.75rem" }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "#FFFFFF",
                color: "#0D0D0D",
                padding: "16px 32px",
                border: "none",
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              <Phone className="w-4 h-4" />
              Talk to Us on WhatsApp
            </a>
            <a
              href={instagramLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "transparent",
                color: "white",
                padding: "15px 31px",
                border: "2px solid rgba(255,255,255,0.5)",
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              <Instagram className="w-4 h-4" />
              Find Us on Instagram
            </a>
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Free · No Obligation · Mon–Sat 9am–8pm IST
          </p>
        </div>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Worldwise Education",
                url: "https://nishumbbsabroad.com",
                description:
                  "Doctor-led MBBS abroad consultancy for Indian students.",
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Worldwise Education",
                url: "https://nishumbbsabroad.com",
              },
            ]),
          }}
        />
      </section>
    </>
  );
}
