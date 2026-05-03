import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Instagram,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Shield,
  HandHeart,
  BookOpen,
  ChevronDown,
  Star,
  Globe,
  TrendingUp,
  Users,
} from "lucide-react";
import { whatsappLink, instagramLink } from "@/lib/utils";
import { countries } from "@/data/countries";
import { team } from "@/data/team";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Worldwise Education — Future Doctors, Guided by Doctors",
  description:
    "India's only doctor-led MBBS abroad consultancy. Free counseling from doctors who studied at the same universities they recommend.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: "20L+", label: "NEET candidates yearly" },
  { value: "52,000", label: "Government seats only" },
  { value: "8", label: "Countries we cover" },
  { value: "500+", label: "Students placed" },
];

const differentiators = [
  {
    icon: GraduationCap,
    tag: "01",
    title: "Doctor-Led Counseling",
    description:
      "Every counselor on our team holds an MBBS degree from a foreign university. We've sat exactly where you are sitting now.",
    accent: "#1B4F8A",
  },
  {
    icon: Shield,
    tag: "02",
    title: "NMC/WDOMS Compliance",
    description:
      "We only work with fully NMC-approved, WDOMS-listed universities. Your ability to practice in India is non-negotiable.",
    accent: "#E8A020",
  },
  {
    icon: HandHeart,
    tag: "03",
    title: "End-to-End Support",
    description:
      "University selection → visa → airport pickup → FMGE coaching. We stay in touch throughout your MBBS.",
    accent: "#22C55E",
  },
  {
    icon: BookOpen,
    tag: "04",
    title: "FMGE from Day One",
    description:
      "We give you a year-wise FMGE preparation strategy before you even board your flight. Not an afterthought.",
    accent: "#8B5CF6",
  },
];

const processSteps = [
  { num: "01", title: "Free Counseling", desc: "Discuss NEET score, budget, country preference" },
  { num: "02", title: "University Shortlisting", desc: "2–3 personalised recommendations" },
  { num: "03", title: "Application", desc: "Document support, offer letter within 2–4 weeks" },
  { num: "04", title: "NMC Certificate", desc: "Mandatory eligibility certification from NMC" },
  { num: "05", title: "Visa Processing", desc: "Country-specific guidance, embassy support" },
  { num: "06", title: "Arrival & Beyond", desc: "Airport pickup, FMGE strategy, ongoing check-ins" },
];

const feeRows = [
  { factor: "Total Cost", india: "₹60L – ₹1 Cr+", abroad: "₹18L – ₹55L" },
  { factor: "Hidden Capitation", india: "₹20–50L (unreceipted)", abroad: "Zero" },
  { factor: "NMC Recognition", india: "Yes", abroad: "Yes (approved unis)" },
  { factor: "Language", india: "English", abroad: "English" },
  { factor: "Duration", india: "5.5 years", abroad: "5–6 years" },
];

const homeFaqs = faqs.slice(0, 6);

export default function HomePage() {
  const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 6);
  const featuredTeam = team.filter((m) => m.featured);

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — Dark editorial, full screen
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay" style={{ background: "linear-gradient(135deg, #060D1F 0%, #0E1829 55%, #0F2E55 100%)" }}>
        {/* Grid lines */}
        <div className="absolute inset-0 grid-line-bg opacity-60" />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #2E6DB4, transparent)" }} />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full opacity-8 blur-3xl"
          style={{ background: "radial-gradient(circle, #E8A020, transparent)" }} />

        {/* Hero image — subtle, right side */}
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
            alt="Medical students"
            fill
            priority
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #060D1F 5%, transparent 60%)" }} />
        </div>

        <div className="relative container-custom pt-36 pb-24">
          {/* Tag line */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-white/70 text-xs font-medium tracking-widest uppercase">
              Doctor-Led · NMC Compliant · Free Counseling
            </span>
          </div>

          {/* Main headline */}
          <h1 className="display-xl text-white mb-4 max-w-3xl text-balance">
            Future Doctors,{" "}
            <span className="text-gradient-gold font-display italic">
              Guided by Doctors
            </span>
          </h1>

          <p className="text-white/40 text-sm font-semibold tracking-[0.25em] uppercase mb-8">
            For the Doctors &nbsp;·&nbsp; By the Doctors
          </p>

          <p className="text-white/65 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
            We help Indian students secure MBBS seats at NMC-approved universities across
            8 countries — counseled by doctors who actually studied there.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
              <Phone className="w-4 h-4" />
              Talk to Us on WhatsApp
            </a>
            <Link href="#countries" className="btn-glass text-base">
              Explore Destinations
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            {["WHO Approved", "NMC Recognized", "500+ Students Placed", "Doctor-Led Team"].map((b) => (
              <span key={b} className="glass flex items-center gap-1.5 text-white/60 text-xs px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-3 h-3 text-accent" />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.07]">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.label} className={`py-5 px-6 ${i < 3 ? "border-r border-white/[0.07]" : ""}`}>
                  <p className="font-display text-white text-2xl md:text-3xl font-bold mb-0.5" style={{ letterSpacing: "-0.02em" }}>
                    {s.value}
                  </p>
                  <p className="text-white/40 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          USP — BENTO GRID
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3">
                Why Worldwise
              </p>
              <h2 className="display-md text-text-main max-w-md">
                The consultancy that&apos;s actually <span className="font-display italic text-primary">been there</span>
              </h2>
            </div>
            <p className="text-text-muted max-w-sm text-sm leading-relaxed">
              Every competitor is staffed by salespeople. Our team consists of doctors who studied
              MBBS abroad and cleared FMGE themselves.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {differentiators.map((d, i) => (
              <div
                key={d.tag}
                className={`card-premium p-7 group cursor-default ${i === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ background: `${d.accent}18` }}>
                    <d.icon className="w-5 h-5" style={{ color: d.accent }} />
                  </div>
                  <span className="text-[11px] font-bold text-text-muted/50 tracking-wider">{d.tag}</span>
                </div>
                <h3 className="font-bold text-text-main text-lg mb-3 leading-tight">{d.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{d.description}</p>
                <div className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(to right, ${d.accent}, transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          COUNTRIES GRID
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="countries" className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-14">
            <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3">
              8 Destinations
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="display-md text-text-main max-w-sm">
                Choose your <span className="font-display italic">destination</span>
              </h2>
              <Link href="/countries" className="group flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                Compare all countries <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/countries/${country.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white hover:shadow-premium transition-all duration-300"
              >
                {/* Color accent top bar */}
                <div className="h-1 w-full bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{country.flag}</span>
                    {country.nmcApproved && (
                      <span className="badge-nmc">
                        <CheckCircle2 className="w-3 h-3" />
                        NMC
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-text-main text-lg mb-1 group-hover:text-primary transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-text-muted text-xs mb-5 line-clamp-1">{country.tagline}</p>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Duration</span>
                      <span className="font-semibold text-text-main">{country.duration}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Total Cost</span>
                      <span className="font-bold text-primary">{country.totalCost}</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-1 text-primary text-xs font-bold group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HOW IT WORKS — Dark section
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding relative overflow-hidden noise-overlay" style={{ background: "linear-gradient(135deg, #060D1F 0%, #0E1829 100%)" }}>
        <div className="absolute inset-0 grid-line-bg opacity-40" />

        <div className="relative container-custom">
          <div className="mb-14">
            <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3">
              Simple Process
            </p>
            <h2 className="display-md text-white max-w-sm">
              From your first call to<br />
              <span className="font-display italic text-gradient-gold">university day one</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((step, i) => (
              <div key={step.num} className="card-dark p-6 group">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-accent/60 font-display text-3xl font-bold leading-none">{step.num}</span>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/process" className="group inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              View full process guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TEAM — Editorial
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3">Our Team</p>
              <h2 className="display-md text-text-main max-w-sm">
                Doctors who&apos;ve{" "}
                <span className="font-display italic">lived the journey</span>
              </h2>
            </div>
            <Link href="/about" className="group flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
              Meet the full team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredTeam.map((member, i) => (
              <div key={member.id} className={`card-premium overflow-hidden group ${i === 0 ? "md:row-span-1" : ""}`}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Country flag on photo */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">{member.name}</p>
                      <p className="text-white/70 text-xs">{member.role}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <p className="text-xs text-text-muted">
                      <span className="font-semibold text-text-main">{member.qualification}</span>
                      {" · "}{member.university}, {member.country}
                    </p>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TESTIMONIALS — Editorial quotes
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="mb-14">
            <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3">Student Stories</p>
            <h2 className="display-md text-text-main max-w-sm">
              Real students,{" "}
              <span className="font-display italic">real words</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredTestimonials.map((t) => (
              <div key={t.id} className="card-premium p-6 flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < t.rating ? "fill-accent text-accent" : "fill-border text-border"}`} />
                  ))}
                </div>

                {/* Large quote mark */}
                <p className="font-display text-6xl text-primary/10 leading-none -mt-2 mb-2 select-none">&ldquo;</p>

                <blockquote className="text-text-main text-[15px] leading-relaxed flex-1 -mt-6">
                  {t.quote}
                </blockquote>

                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                  {t.photo ? (
                    <Image src={t.photo} alt={t.studentName} width={36} height={36}
                      className="rounded-full object-cover w-9 h-9 ring-2 ring-border" />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-border">
                      <span className="text-primary font-bold text-sm">{t.studentName[0]}</span>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-text-main text-sm">{t.studentName}</p>
                    <p className="text-text-muted text-xs">{t.currentYear} · {t.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FEE COMPARISON — Clean table
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3">The Numbers</p>
              <h2 className="display-md text-text-main mb-6">
                Why MBBS abroad is the{" "}
                <span className="font-display italic">rational choice</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-8">
                Indian private medical colleges charge ₹60L–₹1Cr+ — often with ₹20–50L in
                unreceipted capitation fees. MBBS abroad has none of that.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: TrendingUp, label: "60–95% cheaper than Indian private colleges" },
                  { icon: Shield, label: "Zero capitation or donation fees" },
                  { icon: Globe, label: "Degree valid in India after FMGE/NExT" },
                  { icon: Users, label: "Same PG eligibility as Indian graduates" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-text-main text-sm font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison card */}
            <div className="rounded-3xl overflow-hidden shadow-premium border border-border">
              <div className="grid grid-cols-3 bg-text-main text-white">
                <div className="p-4 col-span-1">
                  <p className="text-white/40 text-xs">Factor</p>
                </div>
                <div className="p-4 text-center border-l border-white/10">
                  <p className="text-white/60 text-xs">India Private</p>
                </div>
                <div className="p-4 text-center border-l border-white/10 bg-primary/30">
                  <p className="text-accent text-xs font-bold">MBBS Abroad</p>
                </div>
              </div>
              {feeRows.map((row, i) => (
                <div key={row.factor} className={`grid grid-cols-3 border-t border-border ${i % 2 === 0 ? "bg-white" : "bg-bg-light"}`}>
                  <div className="p-4">
                    <p className="font-semibold text-text-main text-sm">{row.factor}</p>
                  </div>
                  <div className="p-4 text-center border-l border-border">
                    <p className="text-text-muted text-sm">{row.india}</p>
                  </div>
                  <div className="p-4 text-center border-l border-border bg-primary/[0.03]">
                    <p className="font-bold text-primary text-sm">{row.abroad}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FAQ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3">FAQ</p>
              <h2 className="display-md text-text-main mb-5">
                Questions we hear <span className="font-display italic">every day</span>
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-8">
                Honest answers from doctors who have been through the process themselves.
              </p>
              <Link href="/faq" className="group inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                See all 30+ questions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-3 space-y-2">
              {homeFaqs.map((faq, i) => (
                <details key={faq.id} className="group bg-white rounded-2xl border border-border overflow-hidden shadow-card">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none gap-4">
                    <span className="font-semibold text-text-main text-sm group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown className="w-4 h-4 text-text-muted shrink-0 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="px-6 pb-5 text-text-muted text-sm leading-relaxed border-t border-border pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FINAL CTA — Premium dark
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden noise-overlay" style={{ background: "linear-gradient(135deg, #060D1F 0%, #0E1829 60%, #0F2E55 100%)" }}>
        <div className="absolute inset-0 grid-line-bg opacity-40" />
        {/* Accent glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-48 blur-3xl opacity-15"
          style={{ background: "radial-gradient(ellipse, #E8A020, transparent)" }} />

        <div className="relative container-custom py-28 text-center">
          <p className="text-accent text-xs font-bold tracking-widest uppercase mb-5">
            Free Counseling
          </p>
          <h2 className="display-lg text-white mb-5 max-w-2xl mx-auto text-balance">
            Ready to start your{" "}
            <span className="font-display italic text-gradient-gold">medical journey?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Talk to a doctor who has sat exactly where you are. No pressure. No obligation.
            Just honest guidance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8">
              <Phone className="w-4 h-4" />
              WhatsApp Us Now
            </a>
            <a href={instagramLink()} target="_blank" rel="noopener noreferrer" className="btn-glass text-base px-8">
              <Instagram className="w-4 h-4" />
              Find Us on Instagram
            </a>
          </div>

          <p className="text-white/25 text-xs tracking-widest uppercase">
            Free · No obligation · Doctor-led · Mon–Sat 9am–8pm IST
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
                description: "India's only doctor-led MBBS abroad consultancy.",
                contactPoint: { "@type": "ContactPoint", telephone: "+91-9999999999", contactType: "customer service" },
              },
              { "@context": "https://schema.org", "@type": "WebSite", name: "Worldwise Education", url: "https://nishumbbsabroad.com" },
            ]),
          }}
        />
      </section>
    </>
  );
}
