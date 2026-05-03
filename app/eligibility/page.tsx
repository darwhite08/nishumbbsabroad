import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { countries } from "@/data/countries";
import { whatsappLink } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "MBBS Abroad Eligibility Criteria for Indian Students 2026",
  description:
    "Check MBBS abroad eligibility criteria: NEET requirement, PCB percentage, age limit, country-wise requirements. NEET score guide by country.",
  alternates: { canonical: "/eligibility" },
};

const neetGuide = [
  { range: "500–700", countries: "Russia (top unis), Georgia, Nepal, Philippines", notes: "Strong candidates — maximum options" },
  { range: "400–500", countries: "Russia, Georgia, Kazakhstan, Philippines", notes: "Good range of quality universities" },
  { range: "300–400", countries: "Kazakhstan, Uzbekistan, Bangladesh, Nepal", notes: "Solid options at the right universities" },
  { range: "150–300", countries: "Kyrgyzstan, Uzbekistan", notes: "Budget destinations — commit to FMGE prep from Day 1" },
];

export default function EligibilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Eligibility" }]} />
          <h1 className="text-white mb-4">Eligibility for MBBS Abroad</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Most Indian students with NEET qualification are eligible for MBBS abroad. Here&apos;s
            everything you need to check.
          </p>
        </div>
      </section>

      {/* General Eligibility */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-text-main mb-6">General Eligibility (All Countries)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            {[
              {
                title: "Age",
                req: "Minimum 17 years as of December 31 of the admission year",
                note: "No upper age limit currently enforced.",
              },
              {
                title: "Class 12",
                req: "Physics, Chemistry, Biology + English. Minimum 50% aggregate (PCB).",
                note: "SC/ST/OBC: minimum 40%.",
              },
              {
                title: "NEET",
                req: "Qualified (passing score) — mandatory since 2018 NMC regulation.",
                note: "No minimum score required beyond qualification for most countries.",
              },
              {
                title: "Stream",
                req: "Science stream with PCB (Physics, Chemistry, Biology) mandatory.",
                note: "Arts or Commerce students are not eligible.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-bg-light rounded-xl p-5 border border-border">
                <h3 className="font-bold text-text-main mb-1">{item.title}</h3>
                <p className="text-text-main text-sm mb-1">{item.req}</p>
                <p className="text-text-muted text-xs italic">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country-wise table */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-text-main mb-6">Country-Wise Eligibility Requirements</h2>
          <div className="overflow-x-auto rounded-2xl shadow-md border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-4">Country</th>
                  <th className="text-center p-4">Min PCB %</th>
                  <th className="text-center p-4">NEET Required</th>
                  <th className="text-center p-4">IELTS/TOEFL</th>
                  <th className="text-left p-4">Additional</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c, i) => (
                  <tr key={c.slug} className={i % 2 === 0 ? "bg-white" : "bg-bg-light/50"}>
                    <td className="p-4 font-medium text-text-main">
                      {c.flag} {c.name}
                    </td>
                    <td className="p-4 text-center text-text-muted">50% (40% SC/ST/OBC)</td>
                    <td className="p-4 text-center text-success font-semibold">Yes ✓</td>
                    <td className="p-4 text-center text-text-muted">Not required</td>
                    <td className="p-4 text-text-muted text-xs">
                      {c.slug === "philippines"
                        ? "English-speaking country — no language requirement"
                        : c.slug === "nepal"
                        ? "No visa for Indians. Some unis prefer NEET 300+"
                        : c.slug === "bangladesh"
                        ? "Easy travel, cultural similarity"
                        : "Standard requirements apply"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NEET Score Guide */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-text-main mb-4">NEET Score vs. Country Recommendation</h2>
          <p className="text-text-muted mb-6 max-w-2xl">
            Your NEET score alone doesn&apos;t determine your best destination. Budget, climate
            preference, and career goals matter equally. Use this as a starting guide, not a final
            answer.
          </p>

          <div className="overflow-x-auto rounded-2xl shadow-md border border-border max-w-3xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-4">NEET Score Range</th>
                  <th className="text-left p-4">Recommended Destinations</th>
                  <th className="text-left p-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {neetGuide.map((row, i) => (
                  <tr key={row.range} className={i % 2 === 0 ? "bg-white" : "bg-bg-light/50"}>
                    <td className="p-4 font-bold text-primary">{row.range}</td>
                    <td className="p-4 text-text-main">{row.countries}</td>
                    <td className="p-4 text-text-muted text-xs">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-5 bg-blue-50 border border-primary/20 rounded-xl max-w-2xl">
            <p className="text-text-muted text-sm">
              <strong className="text-text-main">Important:</strong> These are guidelines, not
              rules. A student with a 280 NEET score and a ₹25L budget has a clear, viable path.
              Talk to our doctors for a personalised assessment — we factor in your full profile,
              not just your NEET score.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-light">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Check Your Eligibility — Talk to Our Doctors</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            A 5-minute WhatsApp conversation with our doctors will tell you exactly which
            universities and countries match your profile.
          </p>
          <a
            href={whatsappLink("Hi, I want to check my eligibility for MBBS abroad. My NEET score is ___.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-success text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Check My Eligibility
          </a>
        </div>
      </section>
    </>
  );
}
