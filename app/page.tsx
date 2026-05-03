import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Instagram, ArrowRight, CheckCircle } from "lucide-react";
import { whatsappLink, instagramLink } from "@/lib/utils";
import { countries } from "@/data/countries";
import { team } from "@/data/team";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Worldwise Education — For the Doctors, By the Doctors",
  description: "Premium MBBS abroad consultancy. Doctor-led guidance for NMC-approved universities in Russia, Georgia, Kazakhstan and 5 more countries. Free counseling.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: "20L+", label: "NEET candidates / year" },
  { value: "52K",  label: "Govt. seats available" },
  { value: "8",    label: "Countries covered" },
  { value: "500+", label: "Students placed" },
];

const features = [
  { num: "01", title: "Doctor-Led Counseling", body: "Every counselor holds an MBBS from a foreign university. We have sat exactly where you are sitting right now." },
  { num: "02", title: "NMC / WDOMS Compliant", body: "We only recommend universities that are fully NMC-approved and WDOMS-listed. Your practice rights in India are non-negotiable." },
  { num: "03", title: "End-to-End Support", body: "University selection → visa → airport pickup → FMGE coaching strategy. We stay in touch throughout your degree." },
  { num: "04", title: "FMGE from Day One", body: "We hand you a year-wise FMGE preparation roadmap before you board your flight — not as an afterthought." },
];

const feeRows = [
  { label: "Total Cost",       india: "₹60L – ₹1 Cr+",        abroad: "₹18L – ₹55L" },
  { label: "Capitation Fee",   india: "₹20–50L (unreceipted)", abroad: "Zero" },
  { label: "NMC Recognition",  india: "Yes",                   abroad: "Yes (approved unis)" },
  { label: "Language",         india: "English",               abroad: "English" },
  { label: "Duration",         india: "5.5 years",             abroad: "5–6 years" },
];

const countryPhotos: Record<string, string> = {
  russia:      "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80",
  georgia:     "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
  kazakhstan:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  uzbekistan:  "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80",
  kyrgyzstan:  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
  bangladesh:  "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
  nepal:       "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  philippines: "https://images.unsplash.com/photo-1519544801976-22f3600d79a8?w=800&q=80",
};

export default function HomePage() {
  const featuredTeam = team.filter(m => m.featured);
  const featuredTestimonials = testimonials.filter(t => t.featured).slice(0, 6);
  const homeFaqs = faqs.slice(0, 6);

  return (
    <>
      {/* ════════════════════════════════════════
          HERO — surgical blue, editorial serif
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden" style={{ background: "#003366" }}>
        {/* Background architectural photo */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=1920&q=90"
            alt="Modern university architecture"
            fill priority
            className="object-cover"
            style={{ mixBlendMode: "luminosity", opacity: 0.18 }}
          />
        </div>

        {/* Top decorative grid line */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />

        {/* Teal accent bar — left */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "#00C5A3" }} />

        <div className="relative container-custom pb-0 pt-32">
          {/* Index tag */}
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label-white">Worldwise Education</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>EST. 2024</span>
          </div>

          {/* Headline */}
          <div className="max-w-5xl mb-0">
            <h1 className="heading-brutal-xl heading-white mb-0" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}>
              For the Doctors.
            </h1>
            <h1 className="heading-brutal-xl mb-6" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", color: "#00C5A3", fontFamily: "var(--font-display)", lineHeight: 0.93, letterSpacing: "-0.04em", fontStyle: "italic" }}>
              By the Doctors.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: 1.6, maxWidth: "480px", marginBottom: "2.5rem" }}>
              MBBS abroad counseling from doctors who have studied at the same universities they recommend. Free. No obligation.
            </p>
            <div className="flex flex-wrap gap-3 mb-16">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-teal">
                <Phone className="w-3.5 h-3.5" />
                Talk to a Doctor
              </a>
              <Link href="/countries" className="btn-outline-white">
                Explore Destinations
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar — grid ruled */}
        <div className="relative grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {stats.map((s, i) => (
            <div key={s.label} className="py-7 px-8" style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <p className="mono-stat mono-stat-white mb-1">{s.value}</p>
              <p className="mono-label-white">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          INTRO STRIP
      ════════════════════════════════════════ */}
      <div style={{ background: "#00C5A3", borderTop: "1px solid #009E84", borderBottom: "1px solid #009E84" }}>
        <div className="container-custom py-4">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "white", textAlign: "center" }}>
            NMC Approved &nbsp;·&nbsp; WDOMS Listed &nbsp;·&nbsp; Doctor-Led &nbsp;·&nbsp; 8 Countries &nbsp;·&nbsp; Free Counseling &nbsp;·&nbsp; 500+ Students Placed &nbsp;·&nbsp; FMGE Support from Day 1
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════════
          WHY WORLDWISE — 4-column brutalist grid
      ════════════════════════════════════════ */}
      <section className="section-padding" style={{ background: "#F8F9FA", borderBottom: "1px solid #E2E4E8" }}>
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12 pb-8" style={{ borderBottom: "1px solid #E2E4E8" }}>
            <div>
              <p className="section-label mb-3">Why Worldwise</p>
              <h2 className="heading-brutal-lg" style={{ maxWidth: "420px" }}>
                The consultancy that&apos;s actually{" "}
                <span style={{ fontStyle: "italic", color: "#003366" }}>been there</span>
              </h2>
            </div>
            <p style={{ color: "#6B7280", fontSize: "0.875rem", maxWidth: "300px", lineHeight: 1.7 }} className="hidden md:block">
              Most consultancies are run by sales professionals. Every doctor on our team has an MBBS from a foreign university.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-ruled">
            {features.map((f) => (
              <div key={f.num} className="p-8">
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", color: "#00C5A3", marginBottom: "1.5rem" }}>
                  {f.num}
                </p>
                <h3 className="heading-brutal-md mb-4" style={{ fontSize: "1.125rem" }}>{f.title}</h3>
                <div className="teal-rule mb-4" />
                <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.7 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          COUNTRIES — architectural photo grid
      ════════════════════════════════════════ */}
      <section className="section-padding" style={{ background: "#fff", borderBottom: "1px solid #E2E4E8" }}>
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12 pb-8" style={{ borderBottom: "1px solid #E2E4E8" }}>
            <div>
              <p className="section-label mb-3">Destinations</p>
              <h2 className="heading-brutal-lg">8 NMC-Approved <span style={{ fontStyle: "italic" }}>Countries</span></h2>
            </div>
            <Link href="/countries" className="btn-outline hidden md:inline-flex">
              Compare All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-ruled">
            {countries.map((country) => (
              <Link key={country.slug} href={`/countries/${country.slug}`}
                className="card-brutal block group" style={{ textDecoration: "none" }}>
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ height: "180px" }}>
                  <Image
                    src={countryPhotos[country.slug] ?? "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"}
                    alt={country.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Photo overlay */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,51,102,0.2) 0%, rgba(0,51,102,0.6) 100%)" }} />
                  {/* NMC badge on photo */}
                  <div className="absolute top-3 right-3">
                    <span className="nmc-badge-teal">NMC ✓</span>
                  </div>
                  {/* Country name on photo */}
                  <div className="absolute bottom-4 left-4">
                    <p className="heading-brutal-md heading-white" style={{ fontSize: "1.375rem" }}>
                      {country.flag} {country.name}
                    </p>
                  </div>
                </div>
                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3" style={{ borderBottom: "1px solid #E2E4E8", paddingBottom: "12px" }}>
                    <div>
                      <p className="mono-label">Total Cost</p>
                      <p className="mono-fee text-base mt-0.5">{country.totalCost}</p>
                    </div>
                    <div className="text-right">
                      <p className="mono-label">Duration</p>
                      <p style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "0.875rem", color: "#0A0A0A", marginTop: 2 }}>{country.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280" }}>
                      {country.language} Medium
                    </p>
                    <ArrowRight className="w-3.5 h-3.5 text-surgical group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TEAM — editorial photo treatment
      ════════════════════════════════════════ */}
      <section className="section-padding" style={{ background: "#003366", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div>
              <p className="section-label-white mb-3">Our Team</p>
              <h2 className="heading-brutal-lg heading-white">
                Doctors who&apos;ve{" "}
                <span style={{ fontStyle: "italic", color: "#00C5A3" }}>lived it</span>
              </h2>
            </div>
            <Link href="/about" className="btn-outline-white hidden md:inline-flex">
              Full Team <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            {featuredTeam.map((member, i) => (
              <div key={member.id} className="group" style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div className="relative overflow-hidden" style={{ height: "280px" }}>
                  <Image src={member.photo} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500 saturate-0 group-hover:saturate-100" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,51,102,0.1) 0%, rgba(0,51,102,0.8) 100%)" }} />
                  <div className="absolute bottom-4 left-5 right-5">
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "white", lineHeight: 1.1 }}>{member.name}</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#00C5A3", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{member.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", marginBottom: 8 }}>
                    {member.qualification} · {member.university}, {member.country}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8125rem", lineHeight: 1.65, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FEE COMPARISON — structured table
      ════════════════════════════════════════ */}
      <section className="section-padding" style={{ background: "#F8F9FA", borderBottom: "1px solid #E2E4E8" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-3">The Numbers</p>
              <h2 className="heading-brutal-lg mb-6">
                MBBS abroad is the{" "}
                <span style={{ fontStyle: "italic", color: "#003366" }}>rational choice</span>
              </h2>
              <div className="teal-rule mb-6" />
              <p style={{ color: "#6B7280", lineHeight: 1.75, marginBottom: "2rem", fontSize: "0.9375rem" }}>
                Indian private colleges charge ₹60L–₹1Cr+ — with ₹20–50L in capitation fees paid
                under the table. MBBS abroad has no capitation, no donations, no hidden charges.
              </p>
              {[
                "60–95% cheaper than Indian private colleges",
                "Zero capitation or donation fees",
                "Degree valid in India after FMGE/NExT",
                "Same NEET PG eligibility as Indian graduates",
              ].map(item => (
                <div key={item} className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" style={{ color: "#00C5A3" }} />
                  <p style={{ fontSize: "0.875rem", color: "#2C2C2C", fontWeight: 500 }}>{item}</p>
                </div>
              ))}
            </div>

            {/* Table */}
            <div style={{ border: "1px solid #E2E4E8" }}>
              <div className="grid grid-cols-3" style={{ borderBottom: "1px solid #E2E4E8" }}>
                <div className="p-4 bg-surgical">
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.575rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Factor</p>
                </div>
                <div className="p-4 bg-surgical" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.575rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>India Private</p>
                </div>
                <div className="p-4" style={{ background: "#00C5A3", borderLeft: "1px solid rgba(255,255,255,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.575rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "white" }}>MBBS Abroad ✓</p>
                </div>
              </div>
              {feeRows.map((row, i) => (
                <div key={row.label} className="grid grid-cols-3" style={{ borderBottom: i < feeRows.length - 1 ? "1px solid #E2E4E8" : "none", background: i % 2 === 0 ? "#fff" : "#F8F9FA" }}>
                  <div className="p-4" style={{ borderRight: "1px solid #E2E4E8" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.675rem", fontWeight: 700, color: "#0A0A0A", letterSpacing: "0.02em" }}>{row.label}</p>
                  </div>
                  <div className="p-4" style={{ borderRight: "1px solid #E2E4E8" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#6B7280" }}>{row.india}</p>
                  </div>
                  <div className="p-4" style={{ background: "rgba(0,197,163,0.04)" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: "#003366" }}>{row.abroad}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS — editorial quote cards
      ════════════════════════════════════════ */}
      <section className="section-padding" style={{ background: "#fff", borderBottom: "1px solid #E2E4E8" }}>
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12 pb-8" style={{ borderBottom: "1px solid #E2E4E8" }}>
            <div>
              <p className="section-label mb-3">Student Stories</p>
              <h2 className="heading-brutal-lg">Real students. <span style={{ fontStyle: "italic" }}>Real words.</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-ruled">
            {featuredTestimonials.map((t) => (
              <div key={t.id} className="p-7 flex flex-col">
                {/* Large quote mark */}
                <p style={{ fontFamily: "var(--font-display)", fontSize: "4rem", color: "#E2E4E8", lineHeight: 0.8, marginBottom: "1rem", userSelect: "none" }}>&ldquo;</p>
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ color: i < t.rating ? "#00C5A3" : "#E2E4E8", fontSize: "0.75rem" }}>★</span>
                  ))}
                </div>
                <blockquote style={{ color: "#2C2C2C", fontSize: "0.9375rem", lineHeight: 1.7, flex: 1, marginBottom: "1.5rem" }}>
                  {t.quote}
                </blockquote>
                <div style={{ borderTop: "1px solid #E2E4E8", paddingTop: "1rem" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#0A0A0A", marginBottom: 2 }}>{t.studentName}</p>
                  <p className="mono-label">{t.currentYear} · {t.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ — two-column layout
      ════════════════════════════════════════ */}
      <section className="section-padding" style={{ background: "#F8F9FA", borderBottom: "1px solid #E2E4E8" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4" style={{ position: "sticky", top: "100px", alignSelf: "start" }}>
              <p className="section-label mb-3">FAQ</p>
              <h2 className="heading-brutal-lg mb-5">Questions we hear <span style={{ fontStyle: "italic" }}>every day</span></h2>
              <div className="teal-rule mb-6" />
              <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Honest answers from doctors who have been through the full process.
              </p>
              <Link href="/faq" className="btn-surgical" style={{ display: "inline-flex" }}>
                All 30+ FAQs <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              {homeFaqs.map((faq) => (
                <details key={faq.id} className="group" style={{ borderBottom: "1px solid #E2E4E8" }}>
                  <summary className="flex items-center justify-between py-5 cursor-pointer list-none gap-4"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.0625rem", color: "#0A0A0A" }}>
                    {faq.question}
                    <span className="mono-label flex-shrink-0 group-open:text-teal transition-colors" style={{ color: "#00C5A3" }}>
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <div style={{ paddingBottom: "1.25rem", color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.75 }}>
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FINAL CTA — surgical blue
      ════════════════════════════════════════ */}
      <section style={{ background: "#003366", position: "relative", overflow: "hidden" }}>
        {/* Teal left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "#00C5A3" }} />

        <div className="container-custom py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label-white mb-4">Free Counseling</p>
              <h2 className="heading-brutal-lg heading-white mb-6">
                Ready to start your{" "}
                <span style={{ fontStyle: "italic", color: "#00C5A3" }}>medical journey?</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "420px" }}>
                Talk to a doctor who has sat exactly where you are. No pressure. No commission-driven advice. Just honest guidance.
              </p>
            </div>

            <div style={{ border: "1px solid rgba(255,255,255,0.12)", padding: "2rem" }}>
              <div className="flex flex-col gap-4 mb-6">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-teal justify-center">
                  <Phone className="w-4 h-4" />
                  Talk to Us on WhatsApp
                </a>
                <a href={instagramLink()} target="_blank" rel="noopener noreferrer" className="btn-outline-white justify-center">
                  <Instagram className="w-4 h-4" />
                  Find Us on Instagram
                </a>
              </div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center" }}>
                Free · No Obligation · Mon–Sat 9am–8pm IST
              </p>
            </div>
          </div>
        </div>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
          { "@context": "https://schema.org", "@type": "Organization", name: "Worldwise Education", url: "https://nishumbbsabroad.com", description: "Doctor-led MBBS abroad consultancy for Indian students." },
          { "@context": "https://schema.org", "@type": "WebSite", name: "Worldwise Education", url: "https://nishumbbsabroad.com" },
        ]) }} />
      </section>
    </>
  );
}
