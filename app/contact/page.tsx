import type { Metadata } from "next";
import { Phone, Instagram, MapPin, Clock, MessageSquare } from "lucide-react";
import { whatsappLink, instagramLink } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact NishU MBBS Abroad — WhatsApp & Instagram",
  description:
    "Contact NishU MBBS Abroad for free MBBS counseling. WhatsApp or Instagram for a response within hours. Doctor-led guidance, no obligation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "NishU MBBS Abroad",
    description: "Doctor-led MBBS abroad consultancy for Indian students",
    telephone: `+${waNumber}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-20:00",
    url: "https://nishumbbsabroad.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-primary pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="text-white mb-4">Let&apos;s Talk</h1>
          <p className="text-white/80 text-xl max-w-xl">
            Have questions? Our doctors are available to answer them. Free, no obligation
            counseling.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* WhatsApp card */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5">
                <Phone className="w-8 h-8 text-success" />
              </div>
              <h2 className="text-text-main mb-2">Chat on WhatsApp</h2>
              <p className="text-text-muted mb-6 text-sm leading-relaxed">
                Get a response within hours. Free, no-obligation counseling from a doctor who has
                studied MBBS abroad.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-success text-white px-8 py-3.5 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Open WhatsApp
              </a>
              <p className="text-text-muted text-xs mt-4">
                +{waNumber.replace(/^91/, "+91 ")}
              </p>
            </div>

            {/* Instagram card */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-5">
                <Instagram className="w-8 h-8 text-pink-500" />
              </div>
              <h2 className="text-text-main mb-2">Message on Instagram</h2>
              <p className="text-text-muted mb-6 text-sm leading-relaxed">
                DM us for quick answers and to see real student stories from our community across
                8 countries.
              </p>
              <a
                href={instagramLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
                Open Instagram
              </a>
              <p className="text-text-muted text-xs mt-4">
                @{process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "nishumbbsabroad"}
              </p>
            </div>
          </div>

          {/* Additional info */}
          <div className="max-w-3xl mx-auto mt-8 bg-white rounded-2xl p-6 shadow-sm border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-text-main text-sm">Hours</p>
                  <p className="text-text-muted text-sm">Mon–Sat, 9 AM – 8 PM IST</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-text-main text-sm">Office</p>
                  <p className="text-text-muted text-sm">New Delhi, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-text-main text-sm">Privacy</p>
                  <p className="text-text-muted text-sm">We do not share your info with third parties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
