import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "MBBS Abroad Admission Process — Step-by-Step Guide 2026",
  description:
    "Complete step-by-step MBBS abroad admission process for Indian students. From free counseling to arriving at university. Documents checklist included.",
  alternates: { canonical: "/process" },
};

const steps = [
  {
    num: "01",
    title: "Free Counseling",
    body: "Discuss your NEET score, budget, country preference, and career goals with a doctor who has done it themselves. No topic is off-limits.",
  },
  {
    num: "02",
    title: "University Shortlisting",
    body: "Receive 2–3 personalised university recommendations with full reasoning — fees, FMGE pass rates, location, and total cost. No hidden charges.",
  },
  {
    num: "03",
    title: "Application & Offer Letter",
    body: "Document submission with our assistance. Receive official Invitation or Offer Letter within 2–4 weeks while NMC application runs in parallel.",
  },
  {
    num: "04",
    title: "NMC Eligibility Certificate",
    body: "Mandatory step for all Indian students. We assist with the full NMC website application — NEET, PCB %, and age verification. Processing: 10–15 working days.",
  },
  {
    num: "05",
    title: "Visa Application",
    body: "Country-specific documentation and embassy submission. Processing varies: 2–6 weeks. Medical examination required for Russia, Kazakhstan, and Philippines.",
  },
  {
    num: "06",
    title: "Pre-Departure Briefing",
    body: "Complete packing list, currency exchange guidance, emergency contacts, and your FMGE preparation strategy — a study plan built before Day 1.",
  },
  {
    num: "07",
    title: "Arrival & Settling In",
    body: "Airport pickup arranged at most partner universities. Hostel check-in, university registration, orientation, and introduction to the Indian student community.",
  },
  {
    num: "08",
    title: "Ongoing Support",
    body: "Semester check-ins throughout your MBBS, FMGE orientation every year, PG planning as you near graduation, and emergency support — always reachable.",
  },
];

const timeline = [
  { month: "March–April", step: "Start counseling, begin shortlisting" },
  { month: "June", step: "NEET result → finalise university" },
  { month: "July", step: "Apply to university + start NMC" },
  { month: "August", step: "Receive offer letter, apply for visa" },
  { month: "September", step: "Visa received, travel to university" },
  { month: "October", step: "Orientation, classes begin" },
];

const documents = [
  "Class 10 Marksheet (original + notarized copies)",
  "Class 12 Marksheet (original + notarized copies)",
  "NEET Scorecard (original + copies)",
  "Passport (valid 5+ years from date of admission)",
  "30–40 passport-size photographs",
  "Birth Certificate (notarized)",
  "Medical Fitness Certificate (recent)",
  "HIV Negative Certificate (Russia, Kazakhstan, Philippines)",
  "Police Clearance Certificate (Russia, Kazakhstan, Philippines)",
  "NMC Eligibility Certificate",
  "Bank Statement / Education Loan Sanction Letter",
];

export default function ProcessPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#003366",
          paddingTop: "7rem",
          paddingBottom: "5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid-line texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#FFFFFF0A 1px, transparent 1px), linear-gradient(90deg, #FFFFFF0A 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }}
        />

        {/* Teal left stripe */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "3px",
            background: "#00C5A3",
          }}
        />

        {/* Ghost "8" step number */}
        <div
          style={{
            position: "absolute",
            right: "clamp(1.5rem, 5vw, 5rem)",
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(8rem, 20vw, 18rem)",
            lineHeight: 1,
            color: "rgba(255,255,255,0.04)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          8
        </div>
        {/* Logo watermark */}
        <div style={{ position: "absolute", top: "5rem", right: "clamp(2rem,5vw,5rem)", width: "90px", height: "90px", opacity: 0.12, zIndex: 2, pointerEvents: "none" }}>
          <Image src="/images/logo.png" alt="" fill className="object-contain" />
        </div>

        <div className="container-custom" style={{ position: "relative" }}>
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Process" }]}
          />

          {/* Section label */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#00C5A3",
              marginBottom: "1.25rem",
            }}
          >
            Step by Step
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              marginBottom: "1.25rem",
              maxWidth: "700px",
            }}
          >
            From NEET to University.
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Here&apos;s exactly what happens.
          </p>
        </div>
      </section>

      {/* ── 8 Process Steps ─────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF" }} className="section-padding">
        <div className="container-custom">
          {/* Section label */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#00C5A3",
              marginBottom: "0.75rem",
            }}
          >
            The Process
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#0D0D0D",
              marginBottom: "3rem",
            }}
          >
            8 Steps to Your MBBS
          </h2>

          <div style={{ border: "1px solid #E8E8E8" }}>
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="grid grid-cols-[64px_1fr]"
                style={{
                  borderBottom: idx < steps.length - 1 ? "1px solid #E8E8E8" : undefined,
                }}
              >
                {/* Left: step number */}
                <div
                  style={{
                    borderRight: "1px solid #E8E8E8",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      color: "#00C5A3",
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Right: content */}
                <div style={{ padding: "1.5rem 1.75rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                      lineHeight: 1.15,
                      letterSpacing: "-0.015em",
                      color: "#0D0D0D",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                      color: "#4B5563",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline Strip ──────────────────────────────────────── */}
      <section style={{ background: "#F5F5F5" }} className="section-padding">
        <div className="container-custom">
          {/* Section label */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#00C5A3",
              marginBottom: "0.75rem",
            }}
          >
            Typical Timeline
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#0D0D0D",
              marginBottom: "3rem",
            }}
          >
            March to October
          </h2>

          {/* Horizontal scrollable timeline */}
          <div style={{ overflowX: "auto" }}>
            <div
              className="grid grid-cols-6"
              style={{ minWidth: "720px", border: "1px solid #E8E8E8" }}
            >
              {/* Month row */}
              {timeline.map((item) => (
                <div
                  key={item.month}
                  style={{
                    borderRight: "1px solid #E8E8E8",
                    padding: "1rem 1.25rem 0.75rem",
                    background: "#003366",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    {item.month}
                  </span>
                </div>
              ))}

              {/* Teal dots separator row */}
              {timeline.map((item) => (
                <div
                  key={`dot-${item.month}`}
                  style={{
                    borderRight: "1px solid #E8E8E8",
                    background: "#F5F5F5",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 1.25rem",
                    height: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#00C5A3",
                      flexShrink: 0,
                    }}
                  />
                </div>
              ))}

              {/* Step row */}
              {timeline.map((item) => (
                <div
                  key={`step-${item.month}`}
                  style={{
                    borderRight: "1px solid #E8E8E8",
                    padding: "0.75rem 1.25rem 1.25rem",
                    background: "#FFFFFF",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.8rem",
                      lineHeight: 1.6,
                      color: "#374151",
                    }}
                  >
                    {item.step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Documents Checklist ─────────────────────────────────── */}
      <section style={{ background: "#FFFFFF" }} className="section-padding">
        <div className="container-custom">
          {/* Section label */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#00C5A3",
              marginBottom: "0.75rem",
            }}
          >
            Documents Required
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#0D0D0D",
              marginBottom: "0.75rem",
            }}
          >
            Your Document Checklist
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.9rem",
              lineHeight: 1.75,
              color: "#6B7280",
              maxWidth: "560px",
              marginBottom: "2.5rem",
            }}
          >
            Country-specific requirements vary (e.g. HIV test required for Russia, Kazakhstan,
            Philippines). We provide a detailed country-specific checklist for every student.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ border: "1px solid #E8E8E8", maxWidth: "860px" }}
          >
            {documents.map((doc, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  padding: "0.875rem 1.25rem",
                  borderBottom: "1px solid #E8E8E8",
                  borderRight: idx % 2 === 0 ? "1px solid #E8E8E8" : undefined,
                }}
              >
                {/* Checkbox square */}
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "1px solid #00C5A3",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.02em",
                    color: "#0D0D0D",
                    lineHeight: 1.5,
                  }}
                >
                  {doc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <CTABanner
        headline="Ready to start your process?"
        subtext="Talk to our doctors to get a personalised admission roadmap."
      />
    </>
  );
}
