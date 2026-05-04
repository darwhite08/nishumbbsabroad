import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { countries } from "@/data/countries";
import CountriesFilter from "@/components/sections/CountriesFilter";
import CTABanner from "@/components/ui/CTABanner";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Best Countries for MBBS Abroad — 6 NMC-Approved Destinations",
  description:
    "Compare 8 NMC-approved MBBS abroad destinations — Russia, Georgia, Kazakhstan, Uzbekistan, Kyrgyzstan, Philippines. Filter by budget, duration and more.",
  alternates: { canonical: "/countries" },
};

const countryPhotos: Record<string, string> = {
  russia:      "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&q=80",
  georgia:     "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
  kazakhstan:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  uzbekistan:  "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&q=80",
  kyrgyzstan:  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80",
  bangladesh:  "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80",
  nepal:       "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
  philippines: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80",
};

export default function CountriesPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO — Full viewport, vertically centered
      ══════════════════════════════════════ */}
      <section style={{ background: "#003366", position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

        {/* Background photo — full bleed */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80"
            alt="University campus architecture"
            fill priority
            className="object-cover"
            style={{ objectPosition: "center 35%" }}
          />
          {/* Strong left fade — keeps heading readable */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, #003366 35%, rgba(0,51,102,0.92) 55%, rgba(0,51,102,0.6) 80%, rgba(0,51,102,0.3) 100%)" }} />
          {/* Bottom fade into stats */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "180px", background: "linear-gradient(to top, #003366, transparent)" }} />
        </div>

        {/* Grid lines */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

        {/* Ghost number */}
        <div style={{ position: "absolute", right: "clamp(1rem,4vw,3rem)", top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-mono)", fontSize: "clamp(10rem,20vw,18rem)", fontWeight: 700, lineHeight: 1, color: "#fff", opacity: 0.04, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none" }}>6</div>

        {/* Teal left stripe */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "#00C5A3", zIndex: 2 }} />

        {/* ── Vertically centered content ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1 }}>
          <div className="container-custom" style={{ paddingTop: "7rem", paddingBottom: "3rem" }}>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.15s" }}>Home</Link>
                <span>/</span>
                <span style={{ color: "rgba(255,255,255,0.6)" }}>Countries</span>
              </div>
            </nav>

            {/* Tag */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
              <span style={{ width: "40px", height: "1px", background: "rgba(0,197,163,0.6)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#00C5A3" }}>
                6 NMC-Approved Destinations
              </span>
            </div>

            {/* BIG heading — two clear lines */}
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.25rem, 7.5vw, 7rem)", lineHeight: 0.92, letterSpacing: "-0.04em", color: "#FFFFFF", marginBottom: "0.1em" }}>
              6 countries.
            </h1>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.25rem, 7.5vw, 7rem)", lineHeight: 0.92, letterSpacing: "-0.04em", color: "#00C5A3", fontStyle: "italic", marginBottom: "2rem" }}>
              Find yours.
            </h1>

            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.9375rem,1.2vw,1.0625rem)", lineHeight: 1.8, maxWidth: "480px", marginBottom: "2.5rem" }}>
              The right country isn&apos;t always the cheapest. It&apos;s the one that fits your NEET score, budget, climate preference, and career goals. Our doctors will help you find it.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "3rem" }}>
              <a href={whatsappLink("Hi, I need help choosing the right country for MBBS abroad.")} target="_blank" rel="noopener noreferrer" className="btn-teal">
                <Phone size={13} />
                Get Matched Free
              </a>
              <Link href="#filter" className="btn-outline-white">
                Explore All Countries
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
              {["NMC Approved ✓", "WDOMS Listed ✓", "Doctor-Led ✓", "Zero Commission ✓"].map(b => (
                <span key={b} style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#00C5A3", border: "1px solid rgba(0,197,163,0.25)", padding: "4px 10px" }}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar — bottom */}
        <div style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="container-custom">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {[
                { val: "6",        label: "Countries" },
                { val: "100%",     label: "NMC Approved" },
                { val: "₹15L–55L", label: "Cost Range" },
                { val: "5–6 yrs",  label: "Duration" },
              ].map((s, i) => (
                <div key={s.label} style={{ padding: "1.5rem clamp(1rem,3vw,2rem)", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "0.3rem" }}>{s.val}</p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FILTER + GRID
      ══════════════════════════════════════ */}
      <section id="filter" style={{ background: "#FFFFFF", padding: "clamp(4rem,7vw,6rem) 0", borderBottom: "1px solid #E8E8E8" }}>
        <div className="container-custom">

          {/* 2-col header matching landing page pattern */}
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "3rem", alignItems: "end", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid #E8E8E8" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ opacity: 0.35 }}>—</span><span>Filter &amp; Explore</span>
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 0.97, letterSpacing: "-0.03em", color: "#0A0A0A" }}>
                All 8 destinations,{" "}
                <em style={{ color: "#003366" }}>your filters.</em>
              </h2>
            </div>
            <p style={{ color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.8, borderLeft: "2px solid #E8E8E8", paddingLeft: "1.75rem" }}>
              Filter by budget, duration, or internship inclusion. Switch between grid and list view. All countries are NMC-approved and WDOMS-listed.
            </p>
          </div>

          <CountriesFilter countries={countries} />
        </div>
      </section>

      {/* ══════════════════════════════════════
          COUNTRY SHOWCASE — Editorial photo grid
      ══════════════════════════════════════ */}
      <section style={{ background: "#0D0D0D", padding: "clamp(4rem,7vw,6rem) 0", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div style={{ paddingBottom: "3rem", borderBottom: "1px solid rgba(255,255,255,0.07)", marginBottom: "0" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ opacity: 0.35 }}>—</span><span>At a Glance</span>
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "3rem", alignItems: "end" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 0.95, letterSpacing: "-0.035em", color: "#FFFFFF" }}>
                6 countries.<br />
                <em style={{ color: "#00C5A3" }}>One right answer.</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9375rem", lineHeight: 1.8, borderLeft: "2px solid rgba(255,255,255,0.08)", paddingLeft: "1.75rem" }}>
                Click any country to see full details — fees, universities, FMGE pass rates, visa timeline, and what life is actually like there.
              </p>
            </div>
          </div>

          {/* 4x2 photo grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
            {countries.map((c, i) => (
              <Link
                key={c.slug}
                href={`/countries/${c.slug}`}
                className="group"
                style={{ display: "block", position: "relative", overflow: "hidden", height: "260px", textDecoration: "none", borderRight: "1px solid rgba(255,255,255,0.07)", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.07)" : "none" }}
              >
                <Image
                  src={countryPhotos[c.slug] ?? "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80"}
                  alt={c.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{ objectPosition: "center" }}
                />
                {/* Gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)", transition: "opacity 0.3s" }} />
                {/* Teal hover border */}
                <div style={{ position: "absolute", inset: 0, border: "2px solid #00C5A3", opacity: 0, transition: "opacity 0.25s" }} className="group-hover:opacity-100" />

                {/* NMC badge */}
                <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.48rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", background: "#00C5A3", border: "1px solid #009E84", padding: "2px 7px" }}>NMC ✓</span>
                </div>

                {/* Content */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "0.35rem" }}>
                    {c.flag} {c.name}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 700, color: "#00C5A3" }}>{c.totalCost}</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em" }}>{c.duration}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════ */}
      <section style={{ background: "#F5F5F5", padding: "clamp(4rem,7vw,6rem) 0", borderBottom: "1px solid #E8E8E8" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "3rem", alignItems: "end", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid #E8E8E8" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ opacity: 0.35 }}>—</span><span>Side by Side</span>
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 0.97, letterSpacing: "-0.03em", color: "#0A0A0A" }}>
                Quick comparison
              </h2>
            </div>
            <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.8, borderLeft: "2px solid #E8E8E8", paddingLeft: "1.75rem" }}>
              All fee data is approximate. Always verify with partner universities before making any payment.
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #E8E8E8" }}>
              <thead>
                <tr style={{ background: "#003366" }}>
                  {["Country", "Duration", "Total Cost", "Per Year", "Internship", "NMC"].map((h, i) => (
                    <th key={h} style={{ padding: "1rem 1.25rem", fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: i === 5 ? "#00C5A3" : "rgba(255,255,255,0.55)", textAlign: i > 0 ? "center" : "left", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {countries.map((c, i) => (
                  <tr key={c.slug} className="group" style={{ background: i % 2 === 0 ? "#FFFFFF" : "#F8F8F8", borderTop: "1px solid #E8E8E8", transition: "background 0.15s" }}>
                    <td style={{ padding: "1.125rem 1.25rem" }}>
                      <Link href={`/countries/${c.slug}`} style={{ display: "flex", alignItems: "center", gap: "0.875rem", textDecoration: "none" }}>
                        <span style={{ fontSize: "1.375rem" }}>{c.flag}</span>
                        <div>
                          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.0625rem", color: "#0A0A0A", letterSpacing: "-0.01em", lineHeight: 1.1 }}>{c.name}</p>
                          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "#00C5A3", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "2px" }}>Explore →</p>
                        </div>
                      </Link>
                    </td>
                    <td style={{ padding: "1.125rem 1.25rem", textAlign: "center", borderLeft: "1px solid #E8E8E8" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#0A0A0A", fontWeight: 600 }}>{c.duration}</span>
                    </td>
                    <td style={{ padding: "1.125rem 1.25rem", textAlign: "center", borderLeft: "1px solid #E8E8E8" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: "#003366" }}>{c.totalCost}</span>
                    </td>
                    <td style={{ padding: "1.125rem 1.25rem", textAlign: "center", borderLeft: "1px solid #E8E8E8" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "#6B7280" }}>{c.feeRangePerYear}</span>
                    </td>
                    <td style={{ padding: "1.125rem 1.25rem", textAlign: "center", borderLeft: "1px solid #E8E8E8" }}>
                      {c.internshipIncluded ? (
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, color: "#00C5A3", letterSpacing: "0.06em" }}>Included</span>
                      ) : (
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "#9CA3AF" }}>—</span>
                      )}
                    </td>
                    <td style={{ padding: "1.125rem 1.25rem", textAlign: "center", borderLeft: "1px solid #E8E8E8" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, color: "#fff", background: "#00C5A3", border: "1px solid #009E84", padding: "3px 10px" }}>✓</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "#9CA3AF", marginTop: "1rem" }}>
            * Fees are approximate. Last updated May 2026. Verify with universities before payment.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW WE MATCH YOU
      ══════════════════════════════════════ */}
      <section style={{ background: "#003366", padding: "clamp(4rem,7vw,6rem) 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "#00C5A3" }} />

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "4rem", alignItems: "start" }}>

            {/* Left */}
            <div style={{ position: "sticky", top: "6rem" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ opacity: 0.4 }}>—</span><span>How We Match You</span>
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 0.95, letterSpacing: "-0.035em", color: "#FFFFFF", marginBottom: "1.5rem" }}>
                Not just fees.<br />
                <em style={{ color: "#00C5A3" }}>The full picture.</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "360px" }}>
                Our doctors consider 6 factors when recommending a country — not just cost. Because the cheapest option is rarely the right one.
              </p>
              <a href={whatsappLink("Hi, I need help choosing the right country for MBBS abroad.")} target="_blank" rel="noopener noreferrer" className="btn-teal" style={{ display: "inline-flex" }}>
                <Phone size={13} />
                Get Matched Free
              </a>
            </div>

            {/* Right — numbered factors */}
            <div>
              {[
                { num: "01", title: "Your NEET score", desc: "Determines which universities and countries best fit your academic profile." },
                { num: "02", title: "Total budget", desc: "We calculate the real cost — tuition, hostel, living, visa, travel — across the full degree." },
                { num: "03", title: "FMGE pass rate", desc: "We only recommend universities and countries with verified, consistent FMGE results." },
                { num: "04", title: "Climate & lifestyle", desc: "Cold weather affects performance. We match you to a climate where you can focus and thrive." },
                { num: "05", title: "Career goal", desc: "USMLE? Philippines. Practice in India? Any NMC destination. We align to your actual goal." },
                { num: "06", title: "Family proximity", desc: "Nepal/Bangladesh for students who need family nearby. Russia for full independence." },
              ].map((item) => (
                <div key={item.num} style={{ display: "grid", gridTemplateColumns: "52px 1fr", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "1.5rem 0" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", color: "#00C5A3", paddingTop: "3px" }}>{item.num}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "1.0625rem", color: "#FFFFFF", marginBottom: "4px", letterSpacing: "-0.01em" }}>{item.title}</p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Not sure which country fits you?"
        subtext="Our doctors will match you to the right destination in a single free call."
      />
    </>
  );
}
