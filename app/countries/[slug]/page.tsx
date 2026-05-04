import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";
import { countries, getCountryBySlug } from "@/data/countries";
import { getUniversitiesByCountry } from "@/data/universities";
import { testimonials } from "@/data/testimonials";
import { whatsappLink } from "@/lib/utils";
import UniversityCard from "@/components/ui/UniversityCard";
import TestimonialCard from "@/components/ui/TestimonialCard";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = getCountryBySlug(params.slug);
  if (!country) return {};
  return {
    title: `MBBS in ${country.name} for Indian Students — Fees, Universities & Guide 2026`,
    description: `Complete guide to MBBS in ${country.name}. ${country.tagline}. Fees: ${country.totalCost} total. NMC approved. Doctor-led counseling.`,
    alternates: { canonical: `/countries/${country.slug}` },
  };
}

export default function CountryPage({ params }: Props) {
  const country = getCountryBySlug(params.slug);
  if (!country) notFound();

  const unis = getUniversitiesByCountry(country.slug);
  const countryTestimonials = testimonials.filter((t) => t.countrySlug === country.slug);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: country.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ── */}
      <section
        style={{ background: "#003366", paddingTop: "7rem" }}
        className="relative overflow-hidden"
      >
        {/* Grid-line texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Teal left stripe */}
        <div
          className="absolute top-0 bottom-0 left-0"
          style={{ width: "3px", background: "#00C5A3" }}
        />
        {/* Ghost country number top-right */}
        <div
          className="absolute top-8 right-8 select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(5rem, 12vw, 10rem)",
            fontWeight: 700,
            color: "#fff",
            opacity: 0.04,
            lineHeight: 1,
            letterSpacing: "-0.05em",
          }}
        >
          {String(countries.findIndex((c) => c.slug === country.slug) + 1).padStart(2, "0")}
        </div>

        <div className="relative container-custom pb-14 pt-6">
          {/* Inline breadcrumb */}
          <nav className="flex items-center gap-2 mb-8" aria-label="Breadcrumb">
            <Link
              href="/"
              className="mono-label-white hover:text-white transition-colors"
            >
              Home
            </Link>
            <span className="mono-label-white">/</span>
            <Link
              href="/countries"
              className="mono-label-white hover:text-white transition-colors"
            >
              Countries
            </Link>
            <span className="mono-label-white">/</span>
            <span className="mono-label" style={{ color: "#00C5A3" }}>
              {country.name}
            </span>
          </nav>

          {/* Section label */}
          <div className="mb-4">
            <span className="section-label">
              <span style={{ opacity: 0.35 }}>01</span>
              <span style={{ opacity: 0.35 }}> — </span>
              <span>Country Guide</span>
            </span>
          </div>

          {/* Heading */}
          <div className="flex items-start gap-5 flex-wrap mb-6">
            <span style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>{country.flag}</span>
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  color: "#FFFFFF",
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                }}
              >
                MBBS in {country.name}
              </h1>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {country.tagline}
              </p>
            </div>
          </div>

          {/* Quick stats row — mono pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { label: "Duration", value: country.duration },
              { label: "Total Cost", value: country.totalCost },
              { label: "Language", value: country.language },
              { label: "NMC Status", value: country.nmcApproved ? "Approved ✓" : "Not Approved" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  border: "1px solid #00C5A3",
                  background: "rgba(0,197,163,0.08)",
                  padding: "10px 16px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#00C5A3",
                    letterSpacing: "0.04em",
                    marginTop: "2px",
                  }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={whatsappLink(country.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-teal"
          >
            <Phone className="w-4 h-4" />
            Talk to Us About {country.name}
          </a>
        </div>
      </section>

      {/* ── WHY THIS COUNTRY ── */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="container-custom">
          <div className="mb-8">
            <span className="section-label">
              <span style={{ opacity: 0.35 }}>02</span>
              <span style={{ opacity: 0.35 }}> — </span>
              <span>Why Choose</span>
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "#003366",
                marginTop: "0.75rem",
              }}
            >
              Why {country.name} for MBBS?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {country.whyChoose.map((item) => (
              <div
                key={item.title}
                style={{
                  borderLeft: "3px solid #00C5A3",
                  border: "1px solid #E2E4E8",
                  borderLeftWidth: "3px",
                  borderLeftColor: "#00C5A3",
                  padding: "1.5rem",
                  background: "#FFFFFF",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#003366",
                    fontSize: "1.15rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ── */}
      <section className="section-padding" style={{ background: "#F5F5F5" }}>
        <div className="container-custom">
          <div className="mb-8">
            <span className="section-label">
              <span style={{ opacity: 0.35 }}>03</span>
              <span style={{ opacity: 0.35 }}> — </span>
              <span>Eligibility</span>
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "#003366",
                marginTop: "0.75rem",
              }}
            >
              Eligibility for {country.name}
            </h2>
          </div>
          <div className="max-w-2xl overflow-x-auto" style={{ border: "1px solid #E2E4E8" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#003366", color: "#FFFFFF" }}>
                  <th
                    className="text-left p-4"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    Criteria
                  </th>
                  <th
                    className="text-left p-4"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    Requirement
                  </th>
                </tr>
              </thead>
              <tbody>
                {country.eligibility.map((row, i) => (
                  <tr
                    key={row.criteria}
                    style={{ background: i % 2 === 0 ? "#FFFFFF" : "#F5F5F5", borderBottom: "1px solid #E2E4E8" }}
                  >
                    <td className="p-4" style={{ fontWeight: 600, color: "#003366" }}>
                      {row.criteria}
                    </td>
                    <td className="p-4" style={{ color: "#6B7280" }}>
                      {row.requirement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TOP UNIVERSITIES ── */}
      {unis.length > 0 && (
        <section className="section-padding" style={{ background: "#FFFFFF" }}>
          <div className="container-custom">
            <div className="mb-8">
              <span className="section-label">
                <span style={{ opacity: 0.35 }}>04</span>
                <span style={{ opacity: 0.35 }}> — </span>
                <span>Universities</span>
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#003366",
                  marginTop: "0.75rem",
                }}
              >
                Top Universities in {country.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {unis.map((u) => (
                <UniversityCard key={u.slug} university={u} />
              ))}
            </div>
            <div className="mt-8">
              <Link href="/universities" className="btn-outline">
                View All Universities →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FEE STRUCTURE ── */}
      <section className="section-padding" style={{ background: "#F5F5F5" }}>
        <div className="container-custom">
          <div className="mb-8">
            <span className="section-label">
              <span style={{ opacity: 0.35 }}>05</span>
              <span style={{ opacity: 0.35 }}> — </span>
              <span>Fee Structure</span>
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "#003366",
                marginTop: "0.75rem",
              }}
            >
              Fee Structure — {country.name}
            </h2>
          </div>
          <div className="overflow-x-auto max-w-3xl" style={{ border: "1px solid #E2E4E8" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#003366", color: "#FFFFFF" }}>
                  {["Year", "Tuition", "Hostel", "Misc", "Total"].map((h, i) => (
                    <th
                      key={h}
                      className={i === 0 ? "text-left p-3" : "text-right p-3"}
                      style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {country.feeStructure.map((row, i) => (
                  <tr
                    key={row.year}
                    style={{ background: i % 2 === 0 ? "#FFFFFF" : "#F5F5F5", borderBottom: "1px solid #E2E4E8" }}
                  >
                    <td className="p-3" style={{ fontWeight: 600, color: "#003366" }}>{row.year}</td>
                    <td className="p-3 text-right" style={{ color: "#6B7280" }}>{row.tuition}</td>
                    <td className="p-3 text-right" style={{ color: "#6B7280" }}>{row.hostel}</td>
                    <td className="p-3 text-right" style={{ color: "#6B7280" }}>{row.misc}</td>
                    <td
                      className="p-3 text-right"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        color: "#00C5A3",
                        fontSize: "0.8rem",
                      }}
                    >
                      {row.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            className="mt-3"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#9CA3AF", letterSpacing: "0.06em" }}
          >
            * Fees are approximate. Verify with universities before paying. Last updated May 2026.
          </p>
        </div>
      </section>

      {/* ── ADMISSION TIMELINE ── */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="container-custom">
          <div className="mb-8">
            <span className="section-label">
              <span style={{ opacity: 0.35 }}>06</span>
              <span style={{ opacity: 0.35 }}> — </span>
              <span>Timeline</span>
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "#003366",
                marginTop: "0.75rem",
              }}
            >
              Admission Timeline — {country.name}
            </h2>
          </div>
          <div className="max-w-2xl space-y-3">
            {country.admissionTimeline.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  border: "1px solid #E2E4E8",
                  background: "#FFFFFF",
                }}
              >
                <div
                  style={{
                    background: "#003366",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ padding: "1rem 1.25rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#00C5A3",
                      marginBottom: "4px",
                    }}
                  >
                    {item.month}
                  </p>
                  <p style={{ color: "#0D0D0D", fontSize: "0.875rem", fontWeight: 500 }}>
                    {item.step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFE ABROAD ── */}
      <section className="section-padding" style={{ background: "#0D0D0D" }}>
        <div className="container-custom">
          <div className="mb-8">
            <span className="section-label">
              <span style={{ opacity: 0.35 }}>07</span>
              <span style={{ opacity: 0.35 }}> — </span>
              <span>Student Life</span>
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "#FFFFFF",
                marginTop: "0.75rem",
              }}
            >
              Life in {country.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            {Object.entries(country.lifeAbroad).map(([key, val]) => (
              <div
                key={key}
                style={{
                  padding: "1.5rem",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  background: "#0D0D0D",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#00C5A3",
                    marginBottom: "0.5rem",
                  }}
                >
                  {key}
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {val}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FMGE NOTE ── */}
      <section className="section-padding" style={{ background: "#003366" }}>
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="section-label">
                <span style={{ opacity: 0.35 }}>08</span>
                <span style={{ opacity: 0.35 }}> — </span>
                <span>FMGE / NExT</span>
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "#FFFFFF",
                marginBottom: "1rem",
              }}
            >
              FMGE/NExT Preparation from {country.name}
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
                fontSize: "1rem",
              }}
            >
              {country.fmgeNote}
            </p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      {countryTestimonials.length > 0 && (
        <section className="section-padding" style={{ background: "#FFFFFF" }}>
          <div className="container-custom">
            <div className="mb-8">
              <span className="section-label">
                <span style={{ opacity: 0.35 }}>09</span>
                <span style={{ opacity: 0.35 }}> — </span>
                <span>Student Reviews</span>
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#003366",
                  marginTop: "0.75rem",
                }}
              >
                What Students from {country.name} Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {countryTestimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── COUNTRY FAQs ── */}
      <section className="section-padding" style={{ background: "#F5F5F5" }}>
        <div className="container-custom">
          <div className="mb-8">
            <span className="section-label">
              <span style={{ opacity: 0.35 }}>10</span>
              <span style={{ opacity: 0.35 }}> — </span>
              <span>FAQs</span>
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "#003366",
                marginTop: "0.75rem",
              }}
            >
              FAQ — MBBS in {country.name}
            </h2>
          </div>
          <div className="max-w-3xl space-y-3">
            {country.faqs.map((faq, i) => (
              <details
                key={i}
                className="group overflow-hidden"
                style={{ background: "#FFFFFF", border: "1px solid #E2E4E8" }}
              >
                <summary
                  className="flex items-center justify-between cursor-pointer list-none transition-colors"
                  style={{ padding: "1.25rem 1.5rem" }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: "#003366",
                      fontSize: "0.9375rem",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform"
                    style={{ color: "#00C5A3" }}
                  />
                </summary>
                <div
                  style={{
                    padding: "0 1.5rem 1.25rem",
                    color: "#6B7280",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    borderTop: "1px solid #E2E4E8",
                    paddingTop: "1rem",
                  }}
                >
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="section-padding" style={{ background: "#003366" }}>
        <div className="container-custom">
          {/* Grid-line texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="text-center relative">
            <span className="section-label">
              <span style={{ opacity: 0.35 }}>11</span>
              <span style={{ opacity: 0.35 }}> — </span>
              <span>Get Started</span>
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "#FFFFFF",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Ready to Study MBBS in {country.name}?
            </h2>
            <p
              className="max-w-xl mx-auto mb-8"
              style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.6 }}
            >
              Talk to Dr.{" "}
              {country.slug === "russia" || country.slug === "kazakhstan"
                ? "Arjun or Rahul"
                : country.slug === "georgia"
                ? "Priya"
                : "Sunita"}{" "}
              — who personally studied in one of these universities.
            </p>
            <a
              href={whatsappLink(country.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal"
              style={{ fontSize: "0.8rem", padding: "16px 36px" }}
            >
              <Phone className="w-5 h-5" />
              Talk to Us About {country.name}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
