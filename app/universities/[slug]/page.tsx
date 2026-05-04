import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, CheckCircle2 } from "lucide-react";
import { universities, getUniversityBySlug } from "@/data/universities";
import { testimonials } from "@/data/testimonials";
import { whatsappLink } from "@/lib/utils";
import TestimonialCard from "@/components/ui/TestimonialCard";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return universities.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const u = getUniversityBySlug(params.slug);
  if (!u) return {};
  return {
    title: `${u.name} — MBBS Fees, Admission & Review`,
    description: `${u.name} in ${u.city}, ${u.country}. Annual fee: ${u.annualFee}. ${u.nmcApproved ? "NMC Approved." : ""} ${u.overview.slice(0, 100)}`,
    alternates: { canonical: `/universities/${u.slug}` },
  };
}

export default function UniversityPage({ params }: Props) {
  const u = getUniversityBySlug(params.slug);
  if (!u) notFound();

  const uniTestimonials = testimonials.filter((t) =>
    t.university.toLowerCase().includes(u.name.split(" ").slice(0, 2).join(" ").toLowerCase())
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: u.name,
    description: u.overview,
    address: {
      "@type": "PostalAddress",
      addressLocality: u.city,
      addressCountry: u.country,
    },
    foundingDate: u.established.toString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section
        style={{ background: "#003366", paddingTop: "7rem" }}
        className="relative overflow-hidden"
      >
        {/* Full-bleed university photo with opacity overlay */}
        <div className="absolute inset-0">
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={u.image}
              alt={u.name}
              fill
              priority
              className="object-cover"
              style={{ opacity: 0.15 }}
            />
          </div>
          {/* Strong navy overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(0,51,102,0.92) 0%, rgba(0,51,102,0.85) 100%)",
            }}
          />
        </div>

        {/* Grid-line texture */}
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
              href="/universities"
              className="mono-label-white hover:text-white transition-colors"
            >
              Universities
            </Link>
            <span className="mono-label-white">/</span>
            <span className="mono-label" style={{ color: "#00C5A3" }}>
              {u.name}
            </span>
          </nav>

          {/* Section label */}
          <div className="mb-4">
            <span className="section-label">
              <span style={{ opacity: 0.35 }}>01</span>
              <span style={{ opacity: 0.35 }}> — </span>
              <span>University Profile</span>
            </span>
          </div>

          {/* University name */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "#FFFFFF",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}
          >
            {u.name}
          </h1>

          {/* Key stats row — mono pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { label: "City", value: u.city },
              { label: "Country", value: u.country },
              { label: "Established", value: u.established.toString() },
              { label: "Annual Fee", value: u.annualFee },
              ...(u.nmcApproved ? [{ label: "NMC Status", value: "Approved ✓" }] : []),
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
        </div>
      </section>

      {/* ── OVERVIEW + QUICK INFO ── */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left col: overview + highlights */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="section-label">
                  <span style={{ opacity: 0.35 }}>02</span>
                  <span style={{ opacity: 0.35 }}> — </span>
                  <span>Overview</span>
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#003366",
                  marginBottom: "1rem",
                }}
              >
                About {u.name}
              </h2>
              <p
                style={{
                  color: "#6B7280",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  fontSize: "1rem",
                }}
              >
                {u.overview}
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#003366",
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                }}
              >
                Highlights
              </h3>
              <ul className="space-y-3">
                {u.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{ color: "#6B7280", fontSize: "0.9rem" }}
                  >
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "#00C5A3" }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right col: dark quick-info card */}
            <div
              style={{
                background: "#003366",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "2rem",
                height: "fit-content",
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
                Annual Fee
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: 700,
                  color: "#00C5A3",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "1.5rem",
                }}
              >
                {u.annualFee}
              </p>

              <div className="space-y-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem" }}>
                {[
                  { label: "Total Fee", value: u.totalFee },
                  { label: "Established", value: u.established.toString() },
                  { label: "Language", value: u.mediumOfInstruction },
                  ...(u.fmgePassRate ? [{ label: "FMGE Pass Rate", value: u.fmgePassRate }] : []),
                  ...(u.ranking ? [{ label: "Ranking", value: u.ranking }] : []),
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "0.625rem" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink(u.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal"
                style={{ marginTop: "1.5rem", width: "100%", justifyContent: "center" }}
              >
                <Phone className="w-4 h-4" />
                Apply Through Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      {uniTestimonials.length > 0 && (
        <section className="section-padding" style={{ background: "#F5F5F5" }}>
          <div className="container-custom">
            <div className="mb-8">
              <span className="section-label">
                <span style={{ opacity: 0.35 }}>03</span>
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
                Student Reviews
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {uniTestimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

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
              <span style={{ opacity: 0.35 }}>04</span>
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
              Interested in {u.name}?
            </h2>
            <p
              className="max-w-xl mx-auto mb-8"
              style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.6 }}
            >
              Talk to our doctors who have personally studied at similar universities. Free counseling.
            </p>
            <a
              href={whatsappLink(u.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal"
              style={{ fontSize: "0.8rem", padding: "16px 36px" }}
            >
              <Phone className="w-5 h-5" />
              Apply Through Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
