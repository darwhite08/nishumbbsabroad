import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { University } from "@/data/universities";

interface Props {
  university: University;
}

export default function UniversityCard({ university }: Props) {
  return (
    <Link
      href={`/universities/${university.slug}`}
      style={{ textDecoration: "none", display: "block", border: "1px solid #E8E8E8", background: "#FFFFFF", transition: "border-color 0.15s, box-shadow 0.15s, transform 0.15s", position: "relative" }}
      className="group card-brutal"
    >
      {/* University photo */}
      <div style={{ position: "relative", height: "180px", overflow: "hidden", background: "#003366" }}>
        <Image
          src={university.image}
          alt={university.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
          style={{ objectPosition: "center" }}
        />
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,51,102,0.8) 0%, rgba(0,51,102,0.2) 60%, transparent 100%)" }} />

        {/* NMC badge */}
        {university.nmcApproved && (
          <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.48rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", background: "#00C5A3", border: "1px solid #009E84", padding: "2px 8px" }}>NMC ✓</span>
          </div>
        )}

        {/* Stars rating on photo */}
        {university.stars && (
          <div style={{ position: "absolute", bottom: "0.75rem", left: "0.875rem", display: "flex", gap: "2px" }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={10} style={{ fill: i < (university.stars ?? 0) ? "#F59E0B" : "rgba(255,255,255,0.2)", color: i < (university.stars ?? 0) ? "#F59E0B" : "rgba(255,255,255,0.2)" }} />
            ))}
          </div>
        )}
      </div>

      {/* Card content */}
      <div style={{ padding: "1.125rem 1.25rem" }}>
        {/* Name */}
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.9375rem,1.2vw,1.0625rem)", lineHeight: 1.2, letterSpacing: "-0.01em", color: "#0A0A0A", marginBottom: "0.375rem" }} className="group-hover:text-[#003366]">
          {university.name}
        </h3>

        {/* Location */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "0.875rem" }}>
          <MapPin size={11} style={{ color: "#9CA3AF", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#6B7280", letterSpacing: "0.04em" }}>{university.city}, {university.country}</span>
        </div>

        {/* Fee + FMGE row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingTop: "0.75rem", borderTop: "1px solid #E8E8E8" }}>
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.48rem", color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>Annual Fee</p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem", fontWeight: 700, color: "#003366", letterSpacing: "-0.01em" }}>{university.annualFee}</p>
          </div>
          {university.fmgePassRate && (
            <div style={{ textAlign: "right" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.48rem", color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>FMGE Rate</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem", fontWeight: 700, color: "#00C5A3" }}>{university.fmgePassRate}</p>
            </div>
          )}
        </div>

        {/* View link */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "0.75rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#003366" }}>View Details</span>
          <ArrowRight size={11} style={{ color: "#003366" }} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
