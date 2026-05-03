import { Phone, Instagram } from "lucide-react";
import { whatsappLink, instagramLink } from "@/lib/utils";

interface Props {
  headline: string;
  subtext?: string;
  waMessage?: string;
}

export default function CTABanner({ headline, subtext, waMessage }: Props) {
  return (
    <section className="relative overflow-hidden noise-overlay" style={{ background: "linear-gradient(135deg, #060D1F 0%, #0E1829 60%, #0F2E55 100%)" }}>
      <div className="absolute inset-0 grid-line-bg opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-40 blur-3xl opacity-10"
        style={{ background: "radial-gradient(ellipse, #E8A020, transparent)" }} />

      <div className="relative container-custom py-24 text-center">
        <h2 className="display-md text-white mb-4 max-w-2xl mx-auto text-balance">{headline}</h2>
        {subtext && (
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">{subtext}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={whatsappLink(waMessage)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8">
            <Phone className="w-4 h-4" />
            WhatsApp Us
          </a>
          <a href={instagramLink()} target="_blank" rel="noopener noreferrer" className="btn-glass text-base px-8">
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
        </div>
        <p className="text-white/25 text-xs tracking-widest uppercase mt-6">
          Free · No obligation · Doctor-led
        </p>
      </div>
    </section>
  );
}
