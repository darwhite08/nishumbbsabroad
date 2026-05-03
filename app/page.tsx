import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Instagram, ArrowRight, CheckCircle, Star } from "lucide-react";
import CountriesFilter from "@/components/sections/CountriesFilter";
import OurDifference from "@/components/sections/OurDifference";
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

          {/* Header — section label + 2-col heading/copy using pure Tailwind (no inline grid conflict) */}
          <div style={{ padding: "4rem 0 3.5rem", borderBottom: "1px solid #E8E8E8" }}>

            {/* Label */}
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "2rem", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ opacity: 0.35 }}>01</span>
              <span style={{ opacity: 0.35 }}>—</span>
              <span>Why Worldwise Education</span>
            </p>

            {/* 2-column: heading left, copy right — Tailwind only, no inline gridTemplateColumns */}
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "3rem", alignItems: "end" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 4vw, 3.75rem)", lineHeight: 0.97, letterSpacing: "-0.03em", color: "#0A0A0A" }}>
                The consultancy that&apos;s{" "}
                <em style={{ color: "#003366" }}>actually been there.</em>
              </h2>
              <p style={{ color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.8, borderLeft: "2px solid #E8E8E8", paddingLeft: "1.75rem" }}>
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

          {/* Country filter + grid/list — interactive client component */}
          <CountriesFilter countries={countries} />

          {/* DEAD CODE START — kept as reference, replaced by CountriesFilter */}
          {false && countries.map((country) => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              style={{ textDecoration: "none", display: "block", position: "relative", overflow: "hidden", height: "260px", background: "#0D0D0D" }}
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
      </section>

      {/* ════════════════════════════════════════
          5. OUR DIFFERENCE — White bg, 3D objects, Framer Motion
      ════════════════════════════════════════ */}
      <OurDifference />
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

          {/* Team grid — no inline gridTemplateColumns so Tailwind classes work */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
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
                    height: "360px",
                  }}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    style={{ objectPosition: "top center" }}
                  />
                  {/* Stronger gradient so name/role always readable */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.88) 100%)" }} />

                  <div style={{ position: "absolute", bottom: "1.25rem", left: "1.5rem", right: "1.5rem" }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-0.01em", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                      {member.name}
                    </p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#00C5A3", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "5px", fontWeight: 700 }}>
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div style={{ padding: "1.5rem" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em", marginBottom: "0.75rem", fontWeight: 600 }}>
                    {member.qualification} · {member.university}, {member.country}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", lineHeight: 1.7, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. THE NUMBERS — White, full-width editorial
      ═══════════════════════════════════════════ */}
      <section style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E8E8", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "clamp(1rem,4vw,3rem)", top: "2rem", fontFamily: "var(--font-mono)", fontSize: "clamp(6rem,14vw,11rem)", fontWeight: 700, lineHeight: 1, color: "#0A0A0A", opacity: 0.04, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none" }}>05</div>

        {/* Teal top accent */}
        <div style={{ height: "3px", background: "linear-gradient(to right, #003366 0%, #00C5A3 50%, transparent 100%)" }} />

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>

          {/* Header */}
          <div style={{ padding: "4rem 0 3rem", borderBottom: "1px solid #E8E8E8" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ opacity: 0.35 }}>05</span><span style={{ opacity: 0.35 }}>—</span><span>The Numbers</span>
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "3rem", alignItems: "end" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 4vw, 3.75rem)", lineHeight: 0.97, letterSpacing: "-0.035em", color: "#0A0A0A" }}>
                MBBS abroad is the{" "}
                <em style={{ color: "#003366" }}>rational choice.</em>
              </h2>
              <p style={{ color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.8, borderLeft: "2px solid #E8E8E8", paddingLeft: "1.75rem" }}>
                Indian private colleges charge ₹60L–₹1Cr+ with ₹20–50L in unreceipted capitation fees. MBBS abroad has zero capitation, zero donations, zero hidden charges.
              </p>
            </div>
          </div>

          {/* 4 stat callouts */}
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ borderBottom: "1px solid #E8E8E8" }}>
            {[
              { val: "60–95%", label: "Cheaper than Indian private" },
              { val: "₹0", label: "Capitation / donation fees" },
              { val: "100%", label: "NMC compliant universities" },
              { val: "=", label: "Same NEET PG eligibility" },
            ].map((s, i) => (
              <div key={s.label} style={{ padding: "2rem 0", borderRight: i < 3 ? "1px solid #E8E8E8" : "none", paddingLeft: i > 0 ? "2rem" : 0 }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 700, color: "#003366", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>{s.val}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#6B7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "3rem", padding: "3rem 0", alignItems: "start" }}>
            {/* Left — bullet points */}
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", color: "#0A0A0A", letterSpacing: "-0.015em", marginBottom: "1.5rem", lineHeight: 1.2 }}>Why the numbers matter</p>
              {["Zero capitation or donation fees", "Degree valid in India after FMGE/NExT", "Same NEET PG eligibility as Indian graduates", "Education loans available from major banks"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1rem" }}>
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#00C5A3", marginTop: "2px" }} />
                  <p style={{ fontSize: "0.9375rem", color: "#2C2C2C", lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>

            {/* Right — comparison */}
            <div style={{ border: "1px solid #E8E8E8", overflow: "hidden" }}>
              <div className="grid grid-cols-3" style={{ background: "#0D0D0D" }}>
                {["Factor", "India Private", "MBBS Abroad ✓"].map((h, i) => (
                  <div key={h} style={{ padding: "0.875rem 1.25rem", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none", background: i === 2 ? "#00C5A3" : "transparent" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: i === 1 ? "rgba(255,255,255,0.35)" : "white", textDecoration: i === 1 ? "line-through" : "none" }}>{h}</p>
                  </div>
                ))}
              </div>
              {feeRows.map((row, i) => (
                <div key={row.label} className="grid grid-cols-3" style={{ borderTop: "1px solid #E8E8E8", background: i % 2 === 0 ? "#fff" : "#F8F8F8" }}>
                  <div style={{ padding: "0.875rem 1.25rem", borderRight: "1px solid #E8E8E8" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", fontWeight: 700, color: "#0A0A0A" }}>{row.label}</p>
                  </div>
                  <div style={{ padding: "0.875rem 1.25rem", borderRight: "1px solid #E8E8E8" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#9CA3AF", textDecoration: "line-through" }}>{row.india}</p>
                  </div>
                  <div style={{ padding: "0.875rem 1.25rem", background: "rgba(0,197,163,0.05)" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", fontWeight: 700, color: "#003366" }}>{row.abroad}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. TESTIMONIALS — Navy, large editorial cards
      ═══════════════════════════════════════════ */}
      <section style={{ background: "#003366", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "clamp(1rem,4vw,3rem)", top: "2rem", fontFamily: "var(--font-mono)", fontSize: "clamp(6rem,14vw,11rem)", fontWeight: 700, lineHeight: 1, color: "#fff", opacity: 0.04, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none" }}>06</div>
        {/* Subtle dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div style={{ padding: "clamp(4rem,7vw,6rem) 0 3rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ opacity: 0.6 }}>06</span><span style={{ opacity: 0.6 }}>—</span><span>Student Stories</span>
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "3rem", alignItems: "end" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem,4.5vw,4rem)", lineHeight: 0.95, letterSpacing: "-0.035em", color: "#FFFFFF" }}>
                Real students.<br />
                <em style={{ color: "#00C5A3" }}>Real words.</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem", lineHeight: 1.8, borderLeft: "2px solid rgba(255,255,255,0.1)", paddingLeft: "1.75rem" }}>
                Unscripted. Unedited. Every student you see here was counseled by a doctor who studied at the same university they now attend.
              </p>
            </div>
          </div>

          {/* Testimonial grid — pure Tailwind, no inline gridTemplateColumns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {featuredTestimonials.map((t, i) => (
              <div key={t.id} style={{ padding: "2.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)", position: "relative" }}
                className={i % 3 === 2 ? "lg:!border-r-0" : ""}>

                {/* Large decorative quote */}
                <p style={{ fontFamily: "var(--font-display)", fontSize: "6rem", color: "rgba(0,197,163,0.15)", lineHeight: 0.7, marginBottom: "1.5rem", userSelect: "none" }}>&ldquo;</p>

                {/* Stars */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "1.25rem" }}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5" style={{ fill: idx < t.rating ? "#F59E0B" : "transparent", color: idx < t.rating ? "#F59E0B" : "rgba(255,255,255,0.12)" }} />
                  ))}
                </div>

                <blockquote style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", lineHeight: 1.8, flex: 1, marginBottom: "2rem", fontFamily: "var(--font-inter)" }}>
                  {t.quote}
                </blockquote>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.25rem" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.0625rem", color: "#FFFFFF", marginBottom: "4px" }}>{t.studentName}</p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.575rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", fontWeight: 700 }}>{t.currentYear} · {t.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. FAQ — White, editorial sidebar + clean accordion
      ═══════════════════════════════════════════ */}
      <section style={{ background: "#F5F5F5", borderBottom: "1px solid #E8E8E8", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "clamp(1rem,4vw,3rem)", top: "2rem", fontFamily: "var(--font-mono)", fontSize: "clamp(6rem,14vw,11rem)", fontWeight: 700, lineHeight: 1, color: "#0A0A0A", opacity: 0.04, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none" }}>07</div>

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ padding: "clamp(4rem,7vw,6rem) 0" }}>
            <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: "3rem" }}>

              {/* Sidebar */}
              <div className="lg:col-span-4" style={{ position: "sticky" as const, top: "100px", alignSelf: "start" as const }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ opacity: 0.35 }}>07</span><span style={{ opacity: 0.35 }}>—</span><span>FAQ</span>
                </p>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 0.97, letterSpacing: "-0.03em", color: "#0A0A0A", marginBottom: "1.5rem" }}>
                  Questions we hear{" "}
                  <em style={{ color: "#003366" }}>every day</em>
                </h2>
                <div style={{ width: "32px", height: "2px", background: "#00C5A3", marginBottom: "1.5rem" }} />
                <p style={{ color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                  Honest answers from doctors who have been through the full process themselves.
                </p>
                <Link href="/faq" className="btn-surgical" style={{ display: "inline-flex" }}>
                  All 30+ FAQs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Accordion */}
              <div className="lg:col-span-8">
                {homeFaqs.map((faq, i) => (
                  <details key={faq.id} className="group" style={{ borderBottom: "1px solid #E8E8E8", background: "#FFFFFF" }}>
                    <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem", cursor: "pointer", listStyle: "none", gap: "1rem", background: "transparent" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "1.0625rem", color: "#0A0A0A", lineHeight: 1.3 }}>{faq.question}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.125rem", color: "#00C5A3", flexShrink: 0, lineHeight: 1, fontWeight: 700 }}>
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">−</span>
                      </span>
                    </summary>
                    <div style={{ padding: "0 1.5rem 1.5rem", color: "#4B5563", fontSize: "0.9375rem", lineHeight: 1.8 }}>
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10. FINAL CTA — Full-width, premium dark
      ═══════════════════════════════════════════ */}
      <section style={{ background: "#0D0D0D", position: "relative", overflow: "hidden" }}>
        {/* Background grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        {/* Teal glow */}
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: "300px", background: "radial-gradient(ellipse, rgba(0,197,163,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        {/* Teal left stripe */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "#00C5A3" }} />

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "0", alignItems: "stretch" }}>

            {/* Left — headline */}
            <div style={{ padding: "clamp(5rem,8vw,7rem) 0", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "2rem" }}>
                Free Counseling · No Obligation
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem,8vw,7rem)", lineHeight: 0.88, letterSpacing: "-0.05em", color: "#FFFFFF", marginBottom: "2rem" }}>
                Ready?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "380px", marginBottom: "2rem" }}>
                Talk to a doctor who has sat exactly where you are. No pressure. No commission-driven advice. Just honest guidance from someone who has lived it.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {[{ val: "500+", label: "Students" }, { val: "8", label: "Countries" }, { val: "3", label: "Doctors" }].map(s => (
                  <div key={s.label} style={{ paddingRight: "1.5rem", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.5rem", fontWeight: 700, color: "#00C5A3", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.val}</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "3px" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTAs */}
            <div style={{ padding: "clamp(5rem,8vw,7rem) 0 clamp(5rem,8vw,7rem) clamp(2rem,5vw,4rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "2rem" }}>
                Start now — it&apos;s free
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "#00C5A3", color: "#FFFFFF", padding: "18px 32px", border: "1px solid #00C5A3", textDecoration: "none", transition: "all 0.15s" }}>
                  <Phone className="w-4 h-4" />
                  Talk to Us on WhatsApp
                </a>
                <a href={instagramLink()} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "transparent", color: "white", padding: "17px 32px", border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none", transition: "all 0.15s" }}>
                  <Instagram className="w-4 h-4" />
                  Find Us on Instagram
                </a>
              </div>

              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Free · No Obligation · Mon–Sat 9am–8pm IST
              </p>
            </div>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
          { "@context": "https://schema.org", "@type": "Organization", name: "Worldwise Education", url: "https://nishumbbsabroad.com", description: "Doctor-led MBBS abroad consultancy for Indian students." },
          { "@context": "https://schema.org", "@type": "WebSite", name: "Worldwise Education", url: "https://nishumbbsabroad.com" },
        ]) }} />
      </section>
    </>
  );
}