import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { universities, getUniversityBySlug } from "@/data/universities";
import { testimonials } from "@/data/testimonials";
import { whatsappLink } from "@/lib/utils";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Breadcrumb from "@/components/ui/Breadcrumb";

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

  const uniTestimonials = testimonials.filter(
    (t) => t.university.toLowerCase().includes(u.name.split(" ").slice(0, 2).join(" ").toLowerCase())
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

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={u.image}
            alt={u.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent" />
        </div>
        <div className="relative container-custom pb-10 pt-32">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Universities", href: "/universities" },
              { label: u.name },
            ]}
          />
          <h1 className="text-white">{u.name}</h1>
          <div className="flex flex-wrap gap-3 mt-3 text-white/80 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {u.city}, {u.country}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Est. {u.established}
            </span>
            {u.nmcApproved && (
              <span className="flex items-center gap-1.5 text-green-300">
                <CheckCircle2 className="w-4 h-4" />
                NMC Approved
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-text-main mb-4">Overview</h2>
              <p className="text-text-muted leading-relaxed mb-6">{u.overview}</p>

              <h3 className="text-text-main mb-3">Highlights</h3>
              <ul className="space-y-2">
                {u.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-text-muted text-sm">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick info card */}
            <div className="bg-bg-light p-6 border border-border h-fit">
              <h3 className="text-text-main font-semibold mb-4">Quick Info</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Annual Fee", value: u.annualFee, highlight: true },
                  { label: "Total Fee", value: u.totalFee },
                  { label: "Established", value: u.established.toString() },
                  { label: "Location", value: `${u.city}, ${u.country}` },
                  { label: "Teaching Medium", value: u.mediumOfInstruction },
                  ...(u.fmgePassRate ? [{ label: "FMGE Pass Rate", value: u.fmgePassRate }] : []),
                  ...(u.ranking ? [{ label: "Ranking", value: u.ranking }] : []),
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-border pb-2 last:border-0 last:pb-0">
                    <span className="text-text-muted">{item.label}</span>
                    <span className={`font-semibold ${item.highlight ? "text-primary" : "text-text-main"}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink(u.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 bg-success text-white px-6 py-3 font-semibold text-sm transition-colors w-full"
              >
                <Phone className="w-4 h-4" />
                Apply Through Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {uniTestimonials.length > 0 && (
        <section className="section-padding bg-bg-light">
          <div className="container-custom">
            <h2 className="text-text-main mb-8">Student Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {uniTestimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-surgical">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Interested in {u.name}?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Talk to our doctors who have personally studied at similar universities. Free counseling.
          </p>
          <a
            href={whatsappLink(u.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-success text-white px-10 py-4 font-semibold text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Apply Through Us
          </a>
        </div>
      </section>
    </>
  );
}
