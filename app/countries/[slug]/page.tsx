import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Phone, ChevronDown } from "lucide-react";
import { countries, getCountryBySlug } from "@/data/countries";
import { getUniversitiesByCountry } from "@/data/universities";
import { testimonials } from "@/data/testimonials";
import { whatsappLink } from "@/lib/utils";
import UniversityCard from "@/components/ui/UniversityCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Breadcrumb from "@/components/ui/Breadcrumb";

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

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={country.heroImage}
            alt={country.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-primary/30" />
        </div>
        <div className="relative container-custom pb-12 pt-32">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Countries", href: "/countries" },
              { label: country.name },
            ]}
          />
          <div className="flex items-start gap-4 flex-wrap">
            <span className="text-6xl">{country.flag}</span>
            <div>
              <h1 className="text-white">{country.name}</h1>
              <p className="text-white/80 text-lg mt-1">{country.tagline}</p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { label: "Duration", value: country.duration },
              { label: "Total Cost", value: country.totalCost },
              { label: "Language", value: country.language },
              { label: "NMC", value: country.nmcApproved ? "Approved ✓" : "Not approved" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/15 backdrop-blur-sm px-4 py-2 border border-white/20"
              >
                <p className="text-white/70 text-xs">{s.label}</p>
                <p className="text-white font-semibold text-sm">{s.value}</p>
              </div>
            ))}
          </div>

          <a
            href={whatsappLink(country.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-success text-white px-8 py-3.5 font-semibold mt-6 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Talk to Us About {country.name}
          </a>
        </div>
      </section>

      {/* Why this country */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-text-main mb-8">Why {country.name} for MBBS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {country.whyChoose.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 bg-bg-light border border-border">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-text-main mb-1">{item.title}</h3>
                  <p className="text-text-muted text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-text-main mb-6">Eligibility for {country.name}</h2>
          <div className="max-w-2xl overflow-x-auto border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-4">Criteria</th>
                  <th className="text-left p-4">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {country.eligibility.map((row, i) => (
                  <tr key={row.criteria} className={i % 2 === 0 ? "bg-white" : "bg-bg-light/50"}>
                    <td className="p-4 font-medium text-text-main">{row.criteria}</td>
                    <td className="p-4 text-text-muted">{row.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      {unis.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-text-main mb-8">Top Universities in {country.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {unis.map((u) => (
                <UniversityCard key={u.slug} university={u} />
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/universities"
                className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
              >
                View All Universities →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Fee Structure */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-text-main mb-6">Fee Structure — {country.name}</h2>
          <div className="overflow-x-auto border border-border max-w-3xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-3">Year</th>
                  <th className="text-right p-3">Tuition</th>
                  <th className="text-right p-3">Hostel</th>
                  <th className="text-right p-3">Misc</th>
                  <th className="text-right p-3 font-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                {country.feeStructure.map((row, i) => (
                  <tr key={row.year} className={i % 2 === 0 ? "bg-white" : "bg-bg-light/50"}>
                    <td className="p-3 font-medium text-text-main">{row.year}</td>
                    <td className="p-3 text-right text-text-muted">{row.tuition}</td>
                    <td className="p-3 text-right text-text-muted">{row.hostel}</td>
                    <td className="p-3 text-right text-text-muted">{row.misc}</td>
                    <td className="p-3 text-right font-semibold text-primary">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-text-muted text-xs mt-3">
            * Fees are approximate. Verify with universities before paying. Last updated May 2026.
          </p>
        </div>
      </section>

      {/* Admission Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-text-main mb-8">Admission Timeline — {country.name}</h2>
          <div className="max-w-2xl space-y-3">
            {country.admissionTimeline.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-bg-light border border-border">
                <div className="w-8 h-8 bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-text-main text-sm">{item.month}</p>
                  <p className="text-text-muted text-sm">{item.step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life Abroad */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-text-main mb-6">Life in {country.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
            {Object.entries(country.lifeAbroad).map(([key, val]) => (
              <div key={key} className="bg-white p-5 border border-border">
                <h3 className="font-semibold text-text-main capitalize mb-2">{key}</h3>
                <p className="text-text-muted text-sm">{val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FMGE Note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl bg-[#F5F5F5] border border-primary/20 p-6">
            <h2 className="text-text-main mb-3">FMGE/NExT Preparation from {country.name}</h2>
            <p className="text-text-muted leading-relaxed">{country.fmgeNote}</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {countryTestimonials.length > 0 && (
        <section className="section-padding bg-bg-light">
          <div className="container-custom">
            <h2 className="text-text-main mb-8">What Students from {country.name} Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {countryTestimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Country FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-text-main mb-8">FAQ — MBBS in {country.name}</h2>
          <div className="max-w-3xl space-y-3">
            {country.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-bg-light border border-border overflow-hidden"
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
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-surgical">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Study MBBS in {country.name}?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Talk to Dr. {country.slug === "russia" || country.slug === "kazakhstan"
              ? "Arjun or Rahul"
              : country.slug === "georgia"
              ? "Priya"
              : "Sunita"} — who personally studied in one of these universities.
          </p>
          <a
            href={whatsappLink(country.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-success text-white px-10 py-4 font-semibold text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Talk to Us About {country.name}
          </a>
        </div>
      </section>
    </>
  );
}
