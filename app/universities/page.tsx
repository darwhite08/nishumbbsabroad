import type { Metadata } from "next";
import { universities } from "@/data/universities";
import { countries } from "@/data/countries";
import UniversityCard from "@/components/ui/UniversityCard";
import CTABanner from "@/components/ui/CTABanner";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "NMC-Approved Universities for MBBS Abroad — Complete List 2026",
  description:
    "Browse NMC-approved universities across 8 countries for MBBS abroad. Russia, Georgia, Kazakhstan, Uzbekistan, Kyrgyzstan, Bangladesh, Nepal, Philippines.",
  alternates: { canonical: "/universities" },
};

export default function UniversitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Universities" }]} />
          <h1 className="text-white mb-4">NMC-Approved Universities Abroad</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            We work with carefully selected, NMC-approved, WDOMS-listed universities across 8
            countries. Every university listed here has been evaluated by our team of doctors.
          </p>
        </div>
      </section>

      {/* Universities by country */}
      {countries.map((country) => {
        const countryUnis = universities.filter((u) => u.countrySlug === country.slug);
        if (countryUnis.length === 0) return null;
        return (
          <section key={country.slug} className="section-padding bg-white odd:bg-bg-light">
            <div className="container-custom">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{country.flag}</span>
                <div>
                  <h2 className="text-text-main">{country.name}</h2>
                  <p className="text-text-muted text-sm">
                    {country.duration} · {country.totalCost} total
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {countryUnis.map((u) => (
                  <UniversityCard key={u.slug} university={u} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner
        headline="Need Help Choosing the Right University?"
        subtext="Our doctors will match you to the best university for your NEET score, budget, and FMGE goals."
      />
    </>
  );
}
