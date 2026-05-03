import { Phone, Instagram } from "lucide-react";
import { whatsappLink, instagramLink } from "@/lib/utils";

interface Props {
  headline: string;
  subtext?: string;
  waMessage?: string;
}

export default function CTABanner({ headline, subtext, waMessage }: Props) {
  return (
    <section style={{ background: "#003366", position: "relative", overflow: "hidden" }}>
      {/* Teal left accent */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "#00C5A3" }} />

      <div className="container-custom" style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 4vw, 4rem)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 0.97, letterSpacing: "-0.03em", color: "#FFFFFF", marginBottom: "1.25rem" }}>
          {headline}
        </h2>
        {subtext && (
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "480px", margin: "0 auto 2.5rem" }}>
            {subtext}
          </p>
        )}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }} className="sm:flex-row sm:justify-center">
          <a href={whatsappLink(waMessage)} target="_blank" rel="noopener noreferrer" className="btn-teal">
            <Phone className="w-4 h-4" />
            WhatsApp Us
          </a>
          <a href={instagramLink()} target="_blank" rel="noopener noreferrer" className="btn-outline-white">
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "1.5rem" }}>
          Free · No obligation · Doctor-led
        </p>
      </div>
    </section>
  );
}
