import type { Metadata } from "next";
import { CheckSquare, Phone } from "lucide-react";
import { whatsappLink } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "MBBS Abroad Admission Process — Step-by-Step Guide 2026",
  description:
    "Complete step-by-step MBBS abroad admission process for Indian students. From free counseling to arriving at university. Documents checklist included.",
  alternates: { canonical: "/process" },
};

const steps = [
  {
    num: 1,
    title: "Free Counseling",
    icon: "🎯",
    details: [
      "Discuss your NEET score, budget, country preference, and career goals",
      "Understand which countries and universities fit your profile",
      "Ask any question — no topic is off-limits",
      "You speak directly to a doctor who has studied abroad",
    ],
  },
  {
    num: 2,
    title: "University Shortlisting",
    icon: "🏫",
    details: [
      "Receive 2–3 personalised university recommendations with reasoning",
      "Compare fees, FMGE pass rates, location, and quality",
      "Understand the full total cost — no hidden charges",
      "Finalize your choice at your own pace",
    ],
  },
  {
    num: 3,
    title: "Application & Offer Letter",
    icon: "📋",
    details: [
      "Submit application to the university with our assistance",
      "Document compilation: marksheets, passport, NEET scorecard",
      "Receive official Invitation/Offer Letter (2–4 weeks)",
      "Apply for NMC Eligibility Certificate simultaneously",
    ],
  },
  {
    num: 4,
    title: "NMC Eligibility Certificate",
    icon: "🏥",
    details: [
      "Apply on the NMC website — mandatory for Indian students",
      "Verify your qualification: NEET, PCB %, age",
      "Processing time: 10–15 working days",
      "We assist with the complete application process",
    ],
  },
  {
    num: 5,
    title: "Visa Application",
    icon: "🛂",
    details: [
      "Country-specific visa requirements and documentation",
      "Submit application at relevant embassy/consulate",
      "Processing time: 2–6 weeks depending on country",
      "Medical examinations if required (Russia, Kazakhstan, Philippines)",
    ],
  },
  {
    num: 6,
    title: "Pre-Departure Briefing",
    icon: "🧳",
    details: [
      "Complete packing list and what NOT to bring",
      "Currency exchange guidance and payment setup",
      "Emergency contacts and what to do on arrival",
      "FMGE preparation strategy — your first year study plan",
    ],
  },
  {
    num: 7,
    title: "Arrival & Settling In",
    icon: "✈️",
    details: [
      "Airport pickup arranged (most partner universities)",
      "Hostel/accommodation check-in assistance",
      "University registration and orientation",
      "Introduction to the Indian student community",
    ],
  },
  {
    num: 8,
    title: "Ongoing Support",
    icon: "🤝",
    details: [
      "Semester-wise check-ins throughout your MBBS",
      "FMGE orientation sessions every year",
      "Guidance for PG planning (NEET PG) as you near graduation",
      "Emergency support — our team is always reachable",
    ],
  },
];

const documents = [
  "Class 10 Marksheet (original + notarized copies)",
  "Class 12 Marksheet (original + notarized copies)",
  "NEET Scorecard (original + copies)",
  "Passport (valid 5+ years from date of admission)",
  "30–40 passport-size photographs",
  "Birth Certificate (notarized)",
  "Medical Fitness Certificate (recent)",
  "HIV Negative Certificate (for Russia, Kazakhstan, Philippines)",
  "Police Clearance Certificate (for Russia, Kazakhstan, Philippines)",
  "NMC Eligibility Certificate",
  "Bank Statement / Education Loan Sanction Letter",
];

const timeline = [
  { month: "March–April", activity: "Start counseling, begin shortlisting" },
  { month: "May", activity: "Document collection begins" },
  { month: "June", activity: "NEET result → finalize university" },
  { month: "July", activity: "Apply to university, start NMC application" },
  { month: "August", activity: "Receive offer letter, apply for visa" },
  { month: "September", activity: "Visa received, travel to university" },
  { month: "October", activity: "Orientation, classes begin" },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Admission Process" }]} />
          <h1 className="text-white mb-4">The MBBS Abroad Admission Process</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            The process is simpler than you think. Here&apos;s exactly what happens from your first
            conversation with us to your first day at university.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-6 p-6 bg-bg-light rounded-2xl border border-border"
              >
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg">
                    {step.num}
                  </div>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-text-main font-bold text-xl mb-3">{step.title}</h3>
                  <ul className="space-y-2">
                    {step.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-muted text-sm">
                        <CheckSquare className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-text-main mb-8">Typical Admission Timeline (March–October)</h2>
          <div className="max-w-2xl space-y-3">
            {timeline.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-text-main text-sm">{item.month}</p>
                  <p className="text-text-muted text-sm">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-text-main mb-8">Documents Required</h2>
          <div className="max-w-2xl">
            <p className="text-text-muted mb-5">
              This is the general checklist. Country-specific requirements vary (e.g., HIV test
              required for Russia, Kazakhstan, Philippines). We provide a detailed country-specific
              checklist for every student we work with.
            </p>
            <ul className="space-y-3">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-bg-light rounded-xl border border-border">
                  <div className="w-5 h-5 border-2 border-primary rounded mt-0.5 shrink-0" />
                  <span className="text-text-main text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-light">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Start Your Process Today</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            The earlier you start, the more options you have. Talk to our doctors for a
            personalised admission roadmap.
          </p>
          <a
            href={whatsappLink("Hi, I want to start the MBBS abroad admission process. Please guide me.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-success text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Start Your Process
          </a>
        </div>
      </section>
    </>
  );
}
