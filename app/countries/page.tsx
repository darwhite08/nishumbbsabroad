import type { Metadata } from "next";
import { countries } from "@/data/countries";
import CountryCard from "@/components/ui/CountryCard";
import CTABanner from "@/components/ui/CTABanner";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Best Countries for MBBS Abroad — 8 NMC-Approved Destinations",
  description:
    "Compare 8 NMC-approved MBBS abroad destinations — Russia, Georgia, Kazakhstan, Uzbekistan, Kyrgyzstan, Bangladesh, Nepal, Philippines. Fees, duration, climate, and more.",
  alternates: { canonical: "/countries" },
};

export default function CountriesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#003366", paddingTop: "7rem", paddingBottom: "4rem" }}>
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Countries" }]} />
          <h1 className="text-white mb-4">Choose Your Destination</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            We work with 8 NMC-approved countries. The right choice depends on your NEET score,
            budget, climate preference, and career goals — not just fees.
          </p>
        </div>
      </section>

      {/* Countries grid */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="mb-8">
            <p className="text-text-muted">
              All countries listed below have NMC-approved, WDOMS-listed universities. Fee data
              is approximate — verify with universities before paying.{" "}
              <span className="text-text-muted text-xs">Last updated: May 2026</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country) => (
              <CountryCard key={country.slug} country={country} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-text-main mb-8 text-center">Quick Country Comparison</h2>
          <div className="overflow-x-auto border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-4 font-semibold">Country</th>
                  <th className="text-center p-4 font-semibold">Duration</th>
                  <th className="text-center p-4 font-semibold">Total Cost</th>
                  <th className="text-center p-4 font-semibold">Climate</th>
                  <th className="text-center p-4 font-semibold">NMC</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c, i) => (
                  <tr key={c.slug} className={i % 2 === 0 ? "bg-white" : "bg-bg-light"}>
                    <td className="p-4 font-medium text-text-main">
                      <span className="mr-2">{c.flag}</span>
                      {c.name}
                    </td>
                    <td className="p-4 text-center text-text-muted">{c.duration}</td>
                    <td className="p-4 text-center font-semibold text-primary">{c.totalCost}</td>
                    <td className="p-4 text-center text-text-muted text-xs">{c.climate}</td>
                    <td className="p-4 text-center">
                      {c.nmcApproved ? (
                        <span className="text-success font-semibold">✓</span>
                      ) : (
                        <span className="text-red-400">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-text-muted text-xs mt-3 text-center">
            * Fee data is approximate. Last updated May 2026. Verify with universities before making
            any payments.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Not Sure Which Country Is Right for You?"
        subtext="Our doctors will match you to the right destination based on your NEET score, budget, and goals."
      />
    </>
  );
}
