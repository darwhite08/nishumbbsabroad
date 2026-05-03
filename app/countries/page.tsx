import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { countries } from "@/data/countries";
import CountriesFilter from "@/components/sections/CountriesFilter";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Best Countries for MBBS Abroad — 8 NMC-Approved Destinations",
  description:
    "Compare 8 NMC-approved MBBS abroad destinations — Russia, Georgia, Kazakhstan, Uzbekistan, Kyrgyzstan, Bangladesh, Nepal, Philippines. Filter by budget, duration and more.",
  alternates: { canonical: "/countries" },
};

const whyFacts = [
  { val: "8", label: "Countries covered" },
  { val: "100%", label: "NMC compliant" },
  { val: "₹15L–₹55L", label: "Total cost range" },
  { val: "5–6 yrs", label: "Degree duration" },
];

export default function CountriesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "#003366", position: "relative", overflow: "hidden", paddingTop: "7rem", paddingBottom: "5rem" }}>
        {/* Grid lines */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        {/* Ghost number */}
        <div style={{ position: "absolute", right: "clamp(1rem,4vw,3rem)", top: "1.5rem", fontFamily: "var(--font-mono)", fontSize: "clamp(8rem,16vw,14rem)", fontWeight: 700, lineHeight: 1, color: "#fff", opacity: 0.04, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none" }}>8</div>
        {/* Teal left stripe */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "#00C5A3" }} />

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.15s" }}>Home</Link>
              <span>/</span>
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Countries</span>
            </div>
          </nav>

          {/* Label */}
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "1.5rem" }}>
            8 NMC-Approved Destinations
          </p>

          {/* Heading */}
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", lineHeight: 0.93, letterSpacing: "-0.04em", color: "#FFFFFF", marginBottom: "1.5rem", maxWidth: "700px" }}>
            Choose your <em style={{ color: "#00C5A3" }}>destination.</em>
          </h1>

          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "520px", marginBottom: "3rem" }}>
            The right country isn&apos;t the cheapest — it&apos;s the one that fits your NEET score, budget, climate preference, and career goals. Our doctors will help you decide.
          </p>

          {/* Stat strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(255,255,255,0.08)", maxWidth: "500px" }} className="sm:grid-cols-4">
            {whyFacts.map((s) => (
              <div key={s.label} style={{ background: "#003366", padding: "1.25rem 1.5rem" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.25rem,2vw,1.75rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "0.3rem" }}>{s.val}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTRIES FILTER + GRID ── */}
      <section style={{ background: "#F5F5F5", padding: "clamp(4rem,7vw,6rem) 0", borderBottom: "1px solid #E8E8E8" }}>
        <div className="container-custom">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid #E8E8E8" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "0.75rem" }}>
                Filter &amp; Explore
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3vw,2.75rem)", lineHeight: 1.0, letterSpacing: "-0.025em", color: "#0A0A0A" }}>
                All 8 destinations
              </h2>
            </div>
            <p style={{ color: "#6B7280", fontSize: "0.875rem", maxWidth: "320px", lineHeight: 1.7 }}>
              All countries are NMC-approved. Fee data is approximate — verify before paying.{" "}
              <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>Last updated May 2026</span>
            </p>
          </div>

          <CountriesFilter countries={countries} />
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ background: "#FFFFFF", padding: "clamp(4rem,7vw,6rem) 0", borderBottom: "1px solid #E8E8E8" }}>
        <div className="container-custom">
          <div style={{ marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid #E8E8E8" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "0.75rem" }}>
              Side by Side
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3vw,2.75rem)", lineHeight: 1.0, letterSpacing: "-0.025em", color: "#0A0A0A" }}>
              Quick comparison
            </h2>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #E8E8E8" }}>
              <thead>
                <tr style={{ background: "#003366" }}>
                  {["Country", "Duration", "Total Cost", "Per Year", "Internship", "NMC"].map((h, i) => (
                    <th key={h} style={{ padding: "0.875rem 1.25rem", fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", textAlign: i > 0 ? "center" : "left", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {countries.map((c, i) => (
                  <tr key={c.slug} style={{ background: i % 2 === 0 ? "#FFFFFF" : "#F8F8F8", borderTop: "1px solid #E8E8E8" }}>
                    <td style={{ padding: "1rem 1.25rem" }}>
                      <Link href={`/countries/${c.slug}`} style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
                        <span style={{ fontSize: "1.25rem" }}>{c.flag}</span>
                        <div>
                          <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#0A0A0A", letterSpacing: "-0.01em", lineHeight: 1.1 }}>{c.name}</p>
                          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "#9CA3AF", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "2px" }}>View details →</p>
                        </div>
                      </Link>
                    </td>
                    <td style={{ padding: "1rem 1.25rem", textAlign: "center", borderLeft: "1px solid #E8E8E8" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#0A0A0A", fontWeight: 600 }}>{c.duration}</span>
                    </td>
                    <td style={{ padding: "1rem 1.25rem", textAlign: "center", borderLeft: "1px solid #E8E8E8" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", fontWeight: 700, color: "#003366" }}>{c.totalCost}</span>
                    </td>
                    <td style={{ padding: "1rem 1.25rem", textAlign: "center", borderLeft: "1px solid #E8E8E8" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#6B7280" }}>{c.feeRangePerYear}</span>
                    </td>
                    <td style={{ padding: "1rem 1.25rem", textAlign: "center", borderLeft: "1px solid #E8E8E8" }}>
                      {c.internshipIncluded ? (
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, color: "#00C5A3", letterSpacing: "0.06em" }}>Included</span>
                      ) : (
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "#9CA3AF", letterSpacing: "0.06em" }}>—</span>
                      )}
                    </td>
                    <td style={{ padding: "1rem 1.25rem", textAlign: "center", borderLeft: "1px solid #E8E8E8" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, color: "#fff", background: "#00C5A3", border: "1px solid #009E84", padding: "2px 8px" }}>✓</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "#9CA3AF", marginTop: "1rem", letterSpacing: "0.04em" }}>
            * Fee data is approximate. Verify directly with universities before making any payments. Last updated May 2026.
          </p>
        </div>
      </section>

      {/* ── HOW WE MATCH YOU ── */}
      <section style={{ background: "#0D0D0D", padding: "clamp(4rem,7vw,6rem) 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "#00C5A3" }} />

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "4rem", alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "1.5rem" }}>
                How We Match You
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 0.95, letterSpacing: "-0.035em", color: "#FFFFFF", marginBottom: "1.5rem" }}>
                Not just fees.<br />
                <em style={{ color: "#00C5A3" }}>The full picture.</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Our doctors consider 6 factors when recommending a country — not just cost. Because the cheapest option isn&apos;t always the right one.
              </p>
              <Link href="/contact" className="btn-teal" style={{ display: "inline-flex" }}>
                Get Matched Free <ArrowRight size={14} />
              </Link>
            </div>

            <div>
              {[
                { num: "01", title: "Your NEET score", desc: "Determines which universities and countries are best positioned for you." },
                { num: "02", title: "Total budget", desc: "We calculate the real cost — tuition, hostel, living, visa, travel — over the full degree." },
                { num: "03", title: "FMGE pass rate", desc: "We only recommend countries and universities with verified track records." },
                { num: "04", title: "Climate & lifestyle", desc: "Cold weather affects focus. We match you to a climate you can thrive in." },
                { num: "05", title: "Career goal", desc: "USMLE aspirant? Philippines. Practice in India? Any NMC destination. We align with your goal." },
                { num: "06", title: "Family proximity", desc: "Nepal and Bangladesh for students who need to stay close. Russia for those who want full independence." },
              ].map((item, i) => (
                <div key={item.num} style={{ display: "grid", gridTemplateColumns: "44px 1fr", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "1.25rem 0" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", color: "#00C5A3", paddingTop: "3px" }}>{item.num}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#FFFFFF", marginBottom: "3px", letterSpacing: "-0.01em" }}>{item.title}</p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8125rem", lineHeight: 1.65 }}>{item.desc}</p>
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
