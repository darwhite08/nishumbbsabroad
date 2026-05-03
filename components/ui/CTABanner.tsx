import { Phone, Instagram } from "lucide-react";
import { whatsappLink, instagramLink } from "@/lib/utils";

interface Props {
  headline: string;
  subtext?: string;
  waMessage?: string;
  dark?: boolean;
}

export default function CTABanner({ headline, subtext, waMessage, dark = false }: Props) {
  return (
    <section
      className={`section-padding ${
        dark ? "bg-primary" : "bg-gradient-to-br from-primary to-primary-light"
      }`}
    >
      <div className="container-custom text-center">
        <h2 className="text-white mb-3">{headline}</h2>
        {subtext && (
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{subtext}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-success text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-green-600 transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            WhatsApp Us
          </a>
          <a
            href={instagramLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-white/20 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
        </div>
        <p className="text-white/60 text-sm mt-5">
          Free counseling · No obligation · Doctor-led guidance
        </p>
      </div>
    </section>
  );
}
