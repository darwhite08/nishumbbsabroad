import type { Metadata } from "next";
import Link from "next/link";
import { universities, getUniversitiesByCountry } from "@/data/universities";
import { countries } from "@/data/countries";
import CTABanner from "@/components/ui/CTABanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "NMC-Approved Universities for MBBS Abroad — Complete List 2026",
  description:
    "Browse NMC-approved universities across 7 countries for MBBS abroad. Russia, Georgia, Kazakhstan, Uzbekistan, Kyrgyzstan, Philippines.",
  alternates: { canonical: "/universities" },
};

export default function UniversitiesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          background: "#003366",
          paddingTop: "7rem",
          paddingBottom: "5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid-line texture overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* Teal left 3px stripe */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "3px",
            background: "#00C5A3",
          }}
        />

        {/* Ghost number top-right */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "2rem",
            right: "2rem",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(7rem, 18vw, 14rem)",
            fontWeight: 700,
            lineHeight: 1,
            color: "#FFFFFF",
            opacity: 0.04,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          12
        </div>

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Universities" }]}
          />

          {/* Section label */}
          <p className="section-label-white" style={{ marginBottom: "1.25rem" }}>
            <span style={{ opacity: 0.35 }}>12</span>
            <span style={{ opacity: 0.35 }}> — </span>
            <span>Universities</span>
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
              color: "#FFFFFF",
              marginBottom: "1.5rem",
              maxWidth: "700px",
            }}
          >
            Find Your{" "}
            <em style={{ color: "#00C5A3", fontStyle: "italic" }}>University.</em>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.75,
              maxWidth: "560px",
              marginBottom: "2.5rem",
            }}
          >
            We work with carefully selected, NMC-approved, WDOMS-listed universities
            across 7 countries. Every university has been evaluated by our team of
            doctors.
          </p>

          {/* Stat callouts */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0",
              borderTop: "1px solid rgba(255,255,255,0.12)",
              borderLeft: "1px solid rgba(255,255,255,0.12)",
              maxWidth: "fit-content",
            }}
          >
            {[
              { stat: `${universities.length}+`, label: "Universities" },
              { stat: "7", label: "Countries" },
              { stat: "100%", label: "NMC Compliant" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                style={{
                  padding: "1.25rem 2rem",
                  borderRight: "1px solid rgba(255,255,255,0.12)",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(1.375rem, 3vw, 2rem)",
                    fontWeight: 700,
                    color: "#00C5A3",
                    lineHeight: 1,
                    marginBottom: "0.3rem",
                  }}
                >
                  {stat}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Universities by Country ───────────────────────────── */}
      <section style={{ background: "#F5F5F5" }} className="section-padding">
        <div className="container-custom">
          {/* Section label */}
          <p className="section-label" style={{ marginBottom: "3rem" }}>
            <span style={{ opacity: 0.35 }}>01</span>
            <span style={{ opacity: 0.35 }}>—</span>
            <span>Browse by Country</span>
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {countries.map((country) => {
              const countryUnis = getUniversitiesByCountry(country.slug);
              if (countryUnis.length === 0) return null;
              return (
                <div key={country.slug}>
                  {/* Country header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.75rem",
                      paddingBottom: "0.875rem",
                      borderBottom: "2px solid #003366",
                      marginBottom: "1.75rem",
                    }}
                  >
                    <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>
                      {country.flag}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                        fontWeight: 700,
                        color: "#003366",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        margin: 0,
                      }}
                    >
                      {country.name}
                    </h2>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#6B7280",
                        marginLeft: "0.25rem",
                      }}
                    >
                      {country.duration} · {country.totalCost}
                    </span>
                  </div>

                  {/* University cards grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {countryUnis.map((u) => (
                      <Link
                        key={u.slug}
                        href={`/universities/${u.slug}`}
                        className="group block"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #E8E8E8",
                          textDecoration: "none",
                          transition: "border-color 0.15s, transform 0.15s",
                          padding: "1.5rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.875rem",
                        }}
                      >
                        {/* University name */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
                              fontWeight: 700,
                              color: "#0D0D0D",
                              lineHeight: 1.25,
                              letterSpacing: "-0.015em",
                              margin: 0,
                            }}
                            className="group-hover:text-[#003366] transition-colors"
                          >
                            {u.name}
                          </h3>

                          {/* NMC badge */}
                          {u.nmcApproved && (
                            <span className="nmc-badge-teal" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
                              <CheckCircle2 style={{ width: "10px", height: "10px" }} />
                              NMC
                            </span>
                          )}
                        </div>

                        {/* City · Country (mono small) */}
                        <p
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#6B7280",
                            margin: 0,
                          }}
                        >
                          {u.city} · {u.country}
                        </p>

                        {/* Divider */}
                        <div style={{ borderTop: "1px solid #E8E8E8" }} />

                        {/* Fee row */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "baseline",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.6rem",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "#6B7280",
                            }}
                          >
                            Annual Fee
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "1rem",
                              fontWeight: 700,
                              color: "#00C5A3",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {u.annualFee}
                          </span>
                        </div>

                        {/* FMGE pass rate */}
                        {u.fmgePassRate && (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "baseline",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.6rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "#6B7280",
                              }}
                            >
                              FMGE Pass Rate
                            </span>
                            <span
                              style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                color: "#0D0D0D",
                                letterSpacing: "-0.01em",
                              }}
                            >
                              {u.fmgePassRate}
                            </span>
                          </div>
                        )}

                        {/* CTA link */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.375rem",
                            marginTop: "auto",
                            paddingTop: "0.5rem",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#003366",
                          }}
                          className="group-hover:gap-2 transition-all"
                        >
                          View Details
                          <ArrowRight style={{ width: "14px", height: "14px" }} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why NMC Matters ──────────────────────────────────── */}
      <section style={{ background: "#FFFFFF" }} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left — heading + copy */}
            <div>
              <p className="section-label" style={{ marginBottom: "1.25rem" }}>
                <span style={{ opacity: 0.35 }}>02</span>
                <span style={{ opacity: 0.35 }}>—</span>
                <span>Why NMC Matters</span>
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  lineHeight: 0.97,
                  letterSpacing: "-0.03em",
                  color: "#0D0D0D",
                  marginBottom: "1.5rem",
                }}
              >
                Your licence to{" "}
                <em style={{ color: "#00C5A3", fontStyle: "italic" }}>
                  practise in India
                </em>{" "}
                depends on it.
              </h2>
              <p
                style={{
                  color: "#4B5563",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                The National Medical Commission (NMC) regulates which foreign medical
                degrees are recognised in India. Graduating from an unapproved
                university means you cannot sit the NExT (formerly FMGE) exam — and
                you cannot practise medicine in India.
              </p>
              <p
                style={{
                  color: "#4B5563",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                }}
              >
                Every university we list is NMC-approved and WDOMS-listed. We verify
                this before onboarding any partner institution.
              </p>
            </div>

            {/* Right — 3 fact rows */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                borderTop: "1px solid #E8E8E8",
              }}
            >
              {[
                {
                  heading: "NMC Approval is Mandatory",
                  body: "Without NMC / WDOMS listing your foreign degree is not valid for Indian medical registration, regardless of the university's reputation.",
                },
                {
                  heading: "WDOMS Listing Must be Active",
                  body: "Universities can lose NMC approval. We monitor the WDOMS database and only recommend currently active institutions.",
                },
                {
                  heading: "NExT Exam Eligibility Requires It",
                  body: "From 2025, the NExT exam replaces FMGE. Eligibility requires graduation from an NMC-recognised institution — non-negotiable.",
                },
              ].map(({ heading, body }) => (
                <div
                  key={heading}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "1.5rem 0",
                    borderBottom: "1px solid #E8E8E8",
                  }}
                >
                  <div style={{ flexShrink: 0, paddingTop: "0.125rem" }}>
                    <CheckCircle2
                      style={{ width: "20px", height: "20px", color: "#00C5A3" }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.0625rem",
                        fontWeight: 700,
                        color: "#0D0D0D",
                        marginBottom: "0.375rem",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.3,
                      }}
                    >
                      {heading}
                    </p>
                    <p
                      style={{
                        color: "#6B7280",
                        fontSize: "0.875rem",
                        lineHeight: 1.75,
                      }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <CTABanner
        headline="Need help choosing a university?"
        subtext="Our doctors will match you to the best university for your NEET score and budget."
      />
    </>
  );
}
