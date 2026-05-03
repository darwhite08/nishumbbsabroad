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
} from "lucide-react";
import { whatsappLink, instagramLink } from "@/lib/utils";
import { countries } from "@/data/countries";
import { team } from "@/data/team";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import CountryCard from "@/components/ui/CountryCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

export const metadata: Metadata = {
  title: "NishU MBBS Abroad — Doctor-Led MBBS Abroad Consultancy for Indian Students",
  description:
    "India's only MBBS abroad consultancy where every counselor holds an MBBS degree from a foreign university. Get honest, doctor-to-doctor guidance for MBBS in Russia, Georgia, Kazakhstan, and 5 more countries. Free counseling.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: "20L+", label: "NEET candidates every year" },
  { value: "52,000", label: "Government seats available" },
  { value: "60–95%", label: "Cheaper than Indian private colleges" },
  { value: "100+", label: "Countries recognize the degree" },
];

const differentiators = [
  {
    icon: GraduationCap,
    title: "Doctor-Led Counseling",
    description:
      "Every counselor on our team holds an MBBS degree from the same universities they recommend. Real experience, not sales talk.",
  },
  {
    icon: Shield,
    title: "NMC/WDOMS Compliance",
    description:
      "We only work with fully NMC-approved, WDOMS-listed universities. Your practice rights in India are non-negotiable.",
  },
  {
    icon: HandHeart,
    title: "End-to-End Support",
    description:
      "From shortlisting your university to airport pickup and settling in — we're with you every step of the journey.",
  },
  {
    icon: BookOpen,
    title: "FMGE/NExT Awareness",
    description:
      "We prepare you for the Indian licensing exam from Day 1 — not as an afterthought. This is what separates successful graduates.",
  },
];

const processSteps = [
  { step: "1", title: "Free Counseling", desc: "NEET score, budget, country preference" },
  { step: "2", title: "University Shortlisting", desc: "Personalised recommendations" },
  { step: "3", title: "Application & Offer Letter", desc: "We handle the paperwork" },
  { step: "4", title: "Visa Processing", desc: "Country-specific guidance" },
  { step: "5", title: "Travel & Arrival", desc: "Airport pickup, hostel check-in" },
  { step: "6", title: "Ongoing Support", desc: "Academic + FMGE coaching guidance" },
];

const feeComparison = [
  { factor: "Total Fee", india: "₹60L – ₹1 Cr+", abroad: "₹25L – ₹55L" },
  { factor: "Capitation/Donation", india: "Yes (₹20–50L hidden)", abroad: "None" },
  { factor: "NMC Recognition", india: "Yes", abroad: "Yes (approved unis)" },
  { factor: "Medium of Instruction", india: "English", abroad: "English" },
  { factor: "Duration", india: "5.5 years", abroad: "5–6 years" },
];

const homeFaqs = faqs.slice(0, 5);

export default function HomePage() {
  const featuredTestimonials = testimonials.filter((t) => t.featured);
  const featuredTeam = team.filter((m) => m.featured);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1800&q=80"
            alt="Medical students studying"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-light/70" />
        </div>

        <div className="relative container-custom py-32 pt-40">
          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["WHO Approved", "NMC Recognized", "500+ Students Placed", "Doctor-Led Team"].map(
              (badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-300" />
                  {badge}
                </span>
              )
            )}
          </div>

          <h1 className="text-white max-w-3xl mb-6 leading-tight">
            Future Doctors,
            <br />
            <span className="text-accent">Guided by Doctors</span>
          </h1>

          <p className="text-white/90 text-xl max-w-2xl mb-10 leading-relaxed">
            We help Indian students secure MBBS seats at NMC-approved universities across 8
            countries — guided by a team of doctors who studied there themselves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-success text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Talk to Us on WhatsApp
            </a>
            <Link
              href="#countries"
              className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/25 transition-colors"
            >
              Explore Destinations
              <ChevronDown className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-white/60 text-sm">
            Free counseling · No obligation · Doctor-led guidance
          </p>
        </div>
      </section>

      {/* ── WHY MBBS ABROAD — STATS ── */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-text-main mb-4">The MBBS Opportunity Abroad</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Every year, millions of students compete for a handful of government seats. MBBS
              abroad is not a fallback — it is a legitimate, affordable path to becoming a doctor.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center shadow-md border border-border"
              >
                <p className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Difference
            </span>
            <h2 className="text-text-main mt-2 mb-4">Why NishU MBBS Abroad?</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Most consultancies are staffed by sales professionals. Our team consists of doctors
              who have lived the experience — because the advice of someone who&apos;s been there
              is worth infinitely more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-bg-light rounded-2xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <d.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-text-main font-semibold mb-2">{d.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTRIES GRID ── */}
      <section id="countries" className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              8 Destinations
            </span>
            <h2 className="text-text-main mt-2 mb-4">Choose Your Destination</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Every country we work with is NMC-approved. We help you match to the right one
              based on your NEET score, budget, and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {countries.map((country) => (
              <CountryCard key={country.slug} country={country} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Simple Process
            </span>
            <h2 className="text-text-main mt-2 mb-4">How It Works</h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              From your first conversation with us to your first day at university — here&apos;s
              what the journey looks like.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-1/2 w-full h-0.5 bg-border z-0" />
                )}
                <div className="relative z-10 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-3">
                  {s.step}
                </div>
                <h3 className="text-text-main font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-text-muted text-xs">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View Detailed Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM ── */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-text-main mt-2 mb-4">Guided by Doctors Who&apos;ve Done It</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Every counselor on our team is a qualified doctor who has studied MBBS abroad. When
              we give advice, it comes from personal experience — not a brochure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Meet the Full Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Student Stories
            </span>
            <h2 className="text-text-main mt-2 mb-4">What Our Students Say</h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Real students, real experiences. No scripted reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEE COMPARISON ── */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              The Numbers
            </span>
            <h2 className="text-text-main mt-2 mb-4">MBBS Abroad vs Indian Private College</h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              The financial case for MBBS abroad is clear. No capitation, no donations, no hidden
              charges.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="overflow-x-auto rounded-2xl shadow-md border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-4 font-semibold">Factor</th>
                    <th className="text-center p-4 font-semibold">Indian Private College</th>
                    <th className="text-center p-4 font-semibold bg-primary-light">MBBS Abroad</th>
                  </tr>
                </thead>
                <tbody>
                  {feeComparison.map((row, i) => (
                    <tr
                      key={row.factor}
                      className={i % 2 === 0 ? "bg-white" : "bg-bg-light"}
                    >
                      <td className="p-4 font-medium text-text-main">{row.factor}</td>
                      <td className="p-4 text-center text-text-muted">{row.india}</td>
                      <td className="p-4 text-center font-semibold text-primary bg-blue-50/50">
                        {row.abroad}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-text-muted text-xs text-center mt-3">
              * Fee data is approximate. MBBS abroad fees are for NMC-approved universities. Last
              updated May 2026.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-text-main mt-2 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {homeFaqs.map((faq) => (
              <details
                key={faq.id}
                className="group bg-bg-light rounded-xl border border-border overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-text-main hover:text-primary transition-colors list-none">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-light">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Start Your Medical Journey?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Talk to a doctor who has been exactly where you are. Free counseling, honest advice,
            no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-success text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors shadow-xl"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href={instagramLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/15 border border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/25 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Find Us on Instagram
            </a>
          </div>
          <p className="text-white/50 text-sm mt-5">
            Free counseling · No obligation · Doctor-led guidance
          </p>
        </div>

        {/* JSON-LD Organization + WebSite schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "NishU MBBS Abroad",
                url: "https://nishumbbsabroad.com",
                logo: "https://nishumbbsabroad.com/logo.png",
                description:
                  "India's only doctor-led MBBS abroad consultancy. Our counselors hold MBBS degrees from the same universities they recommend.",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91-9999999999",
                  contactType: "customer service",
                  availableLanguage: ["English", "Hindi"],
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "NishU MBBS Abroad",
                url: "https://nishumbbsabroad.com",
              },
            ]),
          }}
        />
      </section>
    </>
  );
}
