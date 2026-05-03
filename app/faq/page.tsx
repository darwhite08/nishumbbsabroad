import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
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
      <section className="bg-primary pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <h1 className="text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Honest answers to every question about MBBS abroad — from eligibility and fees to
            life abroad and FMGE preparation.
          </p>
        </div>
      </section>

      {/* FAQ by category */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((cat) => {
              const catFaqs = faqs.filter((f) => f.category === cat);
              if (catFaqs.length === 0) return null;
              return (
                <div key={cat}>
                  <h2 className="text-text-main mb-5 border-b border-border pb-3">{cat}</h2>
                  <div className="space-y-3">
                    {catFaqs.map((faq) => (
                      <details
                        key={faq.id}
                        className="group bg-white rounded-xl border border-border overflow-hidden shadow-sm"
                      >
                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-text-main hover:text-primary transition-colors list-none">
                          {faq.question}
                          <ChevronDown className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed border-t border-border pt-4">
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
        headline="Still Have Questions?"
        subtext="Our doctors are available Mon–Sat, 9 AM – 8 PM IST. Ask anything — there are no silly questions when it comes to your medical career."
      />
    </>
  );
}
