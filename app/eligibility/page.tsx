import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { countries } from "@/data/countries";
import CTABanner from "@/components/ui/CTABanner";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "MBBS Abroad Eligibility Criteria for Indian Students 2026",
  description:
    "Check MBBS abroad eligibility criteria: NEET requirement, PCB percentage, age limit, country-wise requirements. NEET score guide by country.",
  alternates: { canonical: "/eligibility" },
};

const criteria = [
  {
    title: "Age",
    requirement: "17+",
    note: "Minimum 17 years as of December 31 of the admission year. No upper age limit currently enforced.",
  },
  {
    title: "Class 12 PCB",
    requirement: "50% aggregate",
    note: "Physics, Chemistry, Biology + English mandatory. SC/ST/OBC: minimum 40%.",
  },
  {
    title: "NEET",
    requirement: "Qualified",
    note: "Mandatory since 2018 NMC regulation. No minimum score beyond qualification for most countries.",
  },
  {
    title: "Stream",
    requirement: "Science only",
    note: "PCB (Physics, Chemistry, Biology) is mandatory. Arts or Commerce students are not eligible.",
  },
];

const neetGuide = [
  {
    range: "500–700",
    destinations: "Russia, Georgia, Nepal, Philippines",
    label: "Strong candidates",
  },
  {
    range: "400–500",
    destinations: "Russia, Georgia, Kazakhstan, Philippines",
    label: "Good range",
  },
  {
    range: "300–400",
    destinations: "Kazakhstan, Uzbekistan, Bangladesh, Nepal",
    label: "Solid options",
  },
  {
    range: "150–300",
    destinations: "Kyrgyzstan, Uzbekistan",
    label: "Budget destinations + FMGE focus",
  },
];

export default function EligibilityPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section
        style={{
          background: "#003366",
          paddingTop: "7rem",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid-line texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        {/* Ghost number */}
        <div
          style={{
            position: "absolute",
            right: "clamp(1rem,4vw,3rem)",
            top: "1.5rem",
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(8rem,16vw,14rem)",
            fontWeight: 700,
            lineHeight: 1,
            color: "#fff",
            opacity: 0.04,
            letterSpacing: "-0.04em",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          4
        </div>
        {/* Teal left stripe */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "3px",
            background: "#00C5A3",
          }}
        />

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Eligibility" }]} />

          {/* Label */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#00C5A3",
              marginBottom: "1.5rem",
            }}
          >
            Eligibility
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
              lineHeight: 0.93,
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              marginBottom: "1.25rem",
              maxWidth: "700px",
            }}
          >
            Are you eligible?
          </h1>

          {/* Italic teal sub */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontStyle: "italic",
              color: "#00C5A3",
              marginBottom: "1.5rem",
            }}
          >
            The answer is probably yes.
          </p>

          {/* Supporting copy */}
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: "520px",
            }}
          >
            Most Indian students with NEET qualification meet the criteria for MBBS abroad.
            Below is everything you need to verify — criteria, NEET score guidance, and
            country-specific requirements.
          </p>
        </div>
      </section>

      {/* ── 2. GENERAL ELIGIBILITY ── */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="container-custom">
          {/* Section label + heading */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#00C5A3",
              marginBottom: "0.75rem",
            }}
          >
            General Requirements
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem,3vw,2.75rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "#0D0D0D",
              marginBottom: "2.5rem",
            }}
          >
            Eligibility for all countries
          </h2>

          {/* 4-col criteria cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "1px", background: "#E8E8E8" }}>
            {criteria.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8E8E8",
                  padding: "2rem 1.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                  <CheckCircle2 style={{ width: "1.125rem", height: "1.125rem", color: "#00C5A3", flexShrink: 0 }} />
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.125rem",
                      letterSpacing: "-0.01em",
                      color: "#0D0D0D",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#003366",
                    letterSpacing: "0.04em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.requirement}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#6B7280",
                    lineHeight: 1.65,
                  }}
                >
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. NEET SCORE GUIDE ── */}
      <section className="section-padding" style={{ background: "#F5F5F5" }}>
        <div className="container-custom">
          {/* Section label + heading */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#00C5A3",
              marginBottom: "0.75rem",
            }}
          >
            Score Guide
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem,3vw,2.75rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "#0D0D0D",
              marginBottom: "2.5rem",
            }}
          >
            NEET score vs. destination
          </h2>

          {/* Table */}
          <div style={{ overflowX: "auto", border: "1px solid #E8E8E8", maxWidth: "860px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-mono)" }}>
              <thead>
                <tr style={{ background: "#003366" }}>
                  <th
                    style={{
                      padding: "1rem 1.25rem",
                      textAlign: "left",
                      color: "#FFFFFF",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    NEET Score
                  </th>
                  <th
                    style={{
                      padding: "1rem 1.25rem",
                      textAlign: "left",
                      color: "#FFFFFF",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Recommended Destinations
                  </th>
                  <th
                    style={{
                      padding: "1rem 1.25rem",
                      textAlign: "left",
                      color: "#FFFFFF",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Assessment
                  </th>
                </tr>
              </thead>
              <tbody>
                {neetGuide.map((row, i) => (
                  <tr key={row.range} style={{ background: i % 2 === 0 ? "#FFFFFF" : "#F8F8F8" }}>
                    <td
                      style={{
                        padding: "1rem 1.25rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#003366",
                        borderBottom: "1px solid #E8E8E8",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.range}
                    </td>
                    <td
                      style={{
                        padding: "1rem 1.25rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        color: "#0D0D0D",
                        borderBottom: "1px solid #E8E8E8",
                      }}
                    >
                      {row.destinations}
                    </td>
                    <td
                      style={{
                        padding: "1rem 1.25rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "#6B7280",
                        borderBottom: "1px solid #E8E8E8",
                      }}
                    >
                      {row.label}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <p
            style={{
              marginTop: "1.25rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "#6B7280",
              letterSpacing: "0.02em",
              maxWidth: "860px",
              lineHeight: 1.7,
            }}
          >
            Your NEET score is just one factor. Budget and career goals matter equally.
          </p>
        </div>
      </section>

      {/* ── 4. COUNTRY-WISE TABLE ── */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="container-custom">
          {/* Section label + heading */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#00C5A3",
              marginBottom: "0.75rem",
            }}
          >
            Country Requirements
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem,3vw,2.75rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "#0D0D0D",
              marginBottom: "2.5rem",
            }}
          >
            Country-wise eligibility
          </h2>

          {/* Table */}
          <div style={{ overflowX: "auto", border: "1px solid #E8E8E8" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#003366" }}>
                  {["Country", "Min PCB%", "NEET Required", "IELTS / TOEFL", "Duration", "Total Cost"].map((col) => (
                    <th
                      key={col}
                      style={{
                        padding: "1rem 1.25rem",
                        textAlign: "left",
                        color: "#FFFFFF",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {countries.map((c, i) => (
                  <tr
                    key={c.slug}
                    style={{
                      background: i % 2 === 0 ? "#FFFFFF" : "#F8F8F8",
                      borderBottom: "1px solid #E8E8E8",
                    }}
                  >
                    {/* Country name + flag + NMC badge */}
                    <td style={{ padding: "1rem 1.25rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "1.125rem" }}>{c.flag}</span>
                        <Link
                          href={`/countries/${c.slug}`}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: "#003366",
                            textDecoration: "none",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {c.name}
                        </Link>
                        {c.nmcApproved && (
                          <span className="nmc-badge-teal">NMC</span>
                        )}
                      </div>
                    </td>
                    {/* Min PCB% */}
                    <td
                      style={{
                        padding: "1rem 1.25rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "#0D0D0D",
                        whiteSpace: "nowrap",
                      }}
                    >
                      50% (40% SC/ST/OBC)
                    </td>
                    {/* NEET Required */}
                    <td
                      style={{
                        padding: "1rem 1.25rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#00C5A3",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Yes ✓
                    </td>
                    {/* IELTS/TOEFL */}
                    <td
                      style={{
                        padding: "1rem 1.25rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "#6B7280",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Not required
                    </td>
                    {/* Duration */}
                    <td
                      style={{
                        padding: "1rem 1.25rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "#0D0D0D",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {c.duration}
                    </td>
                    {/* Total Cost */}
                    <td
                      style={{
                        padding: "1rem 1.25rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#003366",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {c.totalCost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <CTABanner
        headline="Check your eligibility with a doctor."
        subtext="One free call. Your NEET score, budget, and goals — we'll tell you exactly what fits."
      />
    </>
  );
}
