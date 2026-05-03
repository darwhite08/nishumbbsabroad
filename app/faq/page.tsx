import type { Metadata } from "next";
import { faqs, faqCategories } from "@/data/faqs";
import CTABanner from "@/components/ui/CTABanner";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "MBBS Abroad FAQ — Frequently Asked Questions for Indian Students",
  description:
    "All your questions about MBBS abroad answered: eligibility, NEET requirements, fees, visa, life abroad, FMGE, and post-MBBS career. 30+ questions answered by doctors.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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
      <section
        style={{
          background: "#003366",
          paddingTop: "7rem",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Teal left stripe */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "4px",
            background: "#00C5A3",
          }}
        />
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            pointerEvents: "none",
          }}
        />

        <div className="container-custom" style={{ position: "relative" }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

          {/* Label */}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#00C5A3",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            30+ Questions
          </span>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              marginBottom: "1.25rem",
            }}
          >
            Answers,{" "}
            <em style={{ color: "#00C5A3", fontStyle: "italic" }}>not brochures.</em>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              maxWidth: "560px",
            }}
          >
            Honest, doctor-written answers to every question about MBBS abroad — from eligibility
            and fees to life abroad and FMGE preparation.
          </p>
        </div>
      </section>

      {/* Categories + Accordions */}
      <section style={{ background: "#F5F5F5", paddingTop: "clamp(4rem, 7vw, 6rem)", paddingBottom: "clamp(4rem, 7vw, 6rem)" }}>
        <div className="container-custom">
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            {faqCategories.map((cat) => {
              const catFaqs = faqs.filter((f) => f.category === cat);
              if (catFaqs.length === 0) return null;

              return (
                <div key={cat} style={{ marginBottom: "3rem" }}>
                  {/* Category header */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#00C5A3",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {cat}
                    </span>
                    <div style={{ width: "32px", height: "2px", background: "#00C5A3" }} />
                  </div>

                  {/* Accordion items */}
                  <div>
                    {catFaqs.map((faq) => (
                      <details
                        key={faq.id}
                        style={{
                          borderBottom: "1px solid #E8E8E8",
                          background: "#FFFFFF",
                        }}
                      >
                        <summary
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "1.25rem 1.5rem",
                            cursor: "pointer",
                            listStyle: "none",
                            fontFamily: "var(--font-display)",
                            fontSize: "1.0625rem",
                            lineHeight: 1.3,
                            color: "#0D0D0D",
                            gap: "1rem",
                          }}
                        >
                          <span>{faq.question}</span>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "1.25rem",
                              color: "#00C5A3",
                              flexShrink: 0,
                              lineHeight: 1,
                            }}
                          >
                            +
                          </span>
                        </summary>
                        <div
                          style={{
                            padding: "0 1.5rem 1.5rem",
                            color: "#4B5563",
                            fontSize: "0.9375rem",
                            lineHeight: 1.75,
                            fontFamily: "var(--font-inter), system-ui, sans-serif",
                          }}
                        >
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Still have questions?"
        subtext="Our doctors are available Mon–Sat, 9AM–8PM IST."
      />
    </>
  );
}
