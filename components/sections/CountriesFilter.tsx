"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LayoutGrid, List, CheckCircle, X } from "lucide-react";
import { Country } from "@/data/countries";

type BudgetFilter = "any" | "under25" | "25to40" | "40plus";
type DurationFilter = "any" | "5" | "5.5" | "6";
type InternshipFilter = "any" | "yes" | "no";
type ViewMode = "grid" | "list";

const budgetOptions: { key: BudgetFilter; label: string }[] = [
  { key: "any",     label: "Any Budget" },
  { key: "under25", label: "Under ₹25L" },
  { key: "25to40",  label: "₹25L – ₹40L" },
  { key: "40plus",  label: "₹40L+" },
];

const durationOptions: { key: DurationFilter; label: string }[] = [
  { key: "any", label: "Any Duration" },
  { key: "5",   label: "5 Years" },
  { key: "5.5", label: "5.5 Years" },
  { key: "6",   label: "6 Years" },
];

const internshipOptions: { key: InternshipFilter; label: string }[] = [
  { key: "any", label: "Any" },
  { key: "yes", label: "Internship Included" },
  { key: "no",  label: "No Internship" },
];

const countryPhotos: Record<string, string> = {
  russia:      "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80",
  georgia:     "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
  kazakhstan:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  uzbekistan:  "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80",
  kyrgyzstan:  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
  bangladesh:  "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
  nepal:       "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  philippines: "https://images.unsplash.com/photo-1519544801976-22f3600d79a8?w=800&q=80",
};

interface Props {
  countries: Country[];
}

export default function CountriesFilter({ countries }: Props) {
  const [budget, setBudget] = useState<BudgetFilter>("any");
  const [duration, setDuration] = useState<DurationFilter>("any");
  const [internship, setInternship] = useState<InternshipFilter>("any");
  const [view, setView] = useState<ViewMode>("grid");

  const filtered = useMemo(() => {
    return countries.filter((c) => {
      // Budget filter
      if (budget === "under25" && c.budgetMin >= 25) return false;
      if (budget === "25to40" && (c.budgetMax < 25 || c.budgetMin > 40)) return false;
      if (budget === "40plus" && c.budgetMax < 40) return false;

      // Duration filter
      if (duration === "5" && c.durationYears !== 5) return false;
      if (duration === "5.5" && c.durationYears !== 5.5) return false;
      if (duration === "6" && c.durationYears !== 6) return false;

      // Internship filter
      if (internship === "yes" && !c.internshipIncluded) return false;
      if (internship === "no" && c.internshipIncluded) return false;

      return true;
    });
  }, [countries, budget, duration, internship]);

  const hasActiveFilter = budget !== "any" || duration !== "any" || internship !== "any";

  const resetFilters = () => {
    setBudget("any");
    setDuration("any");
    setInternship("any");
  };

  return (
    <div>
      {/* Filter bar */}
      <div style={{ borderBottom: "1px solid #E8E8E8", paddingBottom: "1.5rem", marginBottom: "2rem" }}>

        {/* Row: filters left, view toggle right */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1.5rem", flexWrap: "wrap" }}>

          {/* Filters */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>

            {/* Budget */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", minWidth: "5rem" }}>
                Budget
              </span>
              {budgetOptions.map((opt) => (
                <FilterChip
                  key={opt.key}
                  active={budget === opt.key}
                  onClick={() => setBudget(opt.key)}
                >
                  {opt.label}
                </FilterChip>
              ))}
            </div>

            {/* Duration */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", minWidth: "5rem" }}>
                Duration
              </span>
              {durationOptions.map((opt) => (
                <FilterChip
                  key={opt.key}
                  active={duration === opt.key}
                  onClick={() => setDuration(opt.key)}
                >
                  {opt.label}
                </FilterChip>
              ))}
            </div>

            {/* Internship */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", minWidth: "5rem" }}>
                Internship
              </span>
              {internshipOptions.map((opt) => (
                <FilterChip
                  key={opt.key}
                  active={internship === opt.key}
                  onClick={() => setInternship(opt.key)}
                >
                  {opt.label}
                </FilterChip>
              ))}
            </div>
          </div>

          {/* View toggle + reset */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.75rem", flexShrink: 0 }}>
            <div style={{ display: "flex", border: "1px solid #E8E8E8" }}>
              <ViewButton active={view === "grid"} onClick={() => setView("grid")} title="Grid view">
                <LayoutGrid size={13} />
              </ViewButton>
              <ViewButton active={view === "list"} onClick={() => setView("list")} title="List view" borderLeft>
                <List size={13} />
              </ViewButton>
            </div>

            {hasActiveFilter && (
              <button
                onClick={resetFilters}
                style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "var(--font-mono)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF", background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                <X size={10} />
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Result count */}
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "#9CA3AF", letterSpacing: "0.08em", marginTop: "1rem" }}>
          {filtered.length === 0 ? "No countries match" : `${filtered.length} of ${countries.length} countries`}
          {hasActiveFilter && " (filtered)"}
        </p>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem 2rem", border: "1px solid #E8E8E8" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "#0A0A0A", marginBottom: "0.75rem" }}>No countries match</p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#9CA3AF", letterSpacing: "0.06em", marginBottom: "1.5rem" }}>Try adjusting your filters</p>
          <button onClick={resetFilters} className="btn-outline" style={{ cursor: "pointer" }}>Clear Filters</button>
        </div>
      ) : view === "grid" ? (
        <GridView countries={filtered} />
      ) : (
        <ListView countries={filtered} />
      )}
    </div>
  );
}

/* ── Filter chip ── */
function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.58rem",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "5px 12px",
        border: `1px solid ${active ? "#003366" : "#E8E8E8"}`,
        background: active ? "#003366" : "#FFFFFF",
        color: active ? "#FFFFFF" : "#6B7280",
        cursor: "pointer",
        transition: "all 0.15s",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}

/* ── View toggle button ── */
function ViewButton({ active, onClick, title, borderLeft, children }: { active: boolean; onClick: () => void; title: string; borderLeft?: boolean; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "36px",
        height: "36px",
        background: active ? "#003366" : "#FFFFFF",
        color: active ? "#FFFFFF" : "#9CA3AF",
        border: "none",
        borderLeft: borderLeft ? "1px solid #E8E8E8" : "none",
        cursor: "pointer",
        transition: "all 0.15s",
      }}
    >
      {children}
    </button>
  );
}

/* ── Grid view ── */
function GridView({ countries }: { countries: Country[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1px", background: "#E8E8E8" }}
      className="sm:grid-cols-2 lg:grid-cols-4">
      {countries.map((country) => (
        <Link key={country.slug} href={`/countries/${country.slug}`}
          style={{ textDecoration: "none", display: "block", position: "relative", overflow: "hidden", height: "260px", background: "#0D0D0D" }}
          className="group">
          <Image
            src={countryPhotos[country.slug] ?? "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"}
            alt={country.name} fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, border: "3px solid #00C5A3", opacity: 0, transition: "opacity 0.25s", zIndex: 2 }} className="group-hover:opacity-100" />

          {/* Badges */}
          <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", zIndex: 3, display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-end" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.48rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", background: "#00C5A3", border: "1px solid #009E84", padding: "2px 7px" }}>NMC ✓</span>
            {country.internshipIncluded && (
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.48rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", background: "#003366", border: "1px solid #004488", padding: "2px 7px" }}>Internship</span>
            )}
          </div>

          {/* Content */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem", zIndex: 3 }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", color: "white", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "0.35rem" }}>
              {country.flag} {country.name}
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", fontWeight: 700, color: "#00C5A3", letterSpacing: "0.02em", marginBottom: "0.5rem" }}>
              {country.totalCost}
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                {country.duration}
              </span>
              <ArrowRight size={12} style={{ color: "rgba(255,255,255,0.5)", transition: "transform 0.2s" }} className="group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* ── List view ── */
function ListView({ countries }: { countries: Country[] }) {
  return (
    <div style={{ border: "1px solid #E8E8E8" }}>
      {/* Header */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 40px", background: "#003366", padding: "0.75rem 1.5rem", gap: "1rem" }}>
        {["Country", "Budget", "Duration", "Internship", "NMC", ""].map((h) => (
          <p key={h} style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{h}</p>
        ))}
      </div>

      {countries.map((country, i) => (
        <Link key={country.slug} href={`/countries/${country.slug}`}
          className="group"
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 40px", padding: "1.125rem 1.5rem", gap: "1rem", alignItems: "center", textDecoration: "none", background: i % 2 === 0 ? "#FFFFFF" : "#F8F8F8", borderTop: i > 0 ? "1px solid #E8E8E8" : "none", transition: "background 0.15s" }}
        >
          {/* Country */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontSize: "1.375rem" }}>{country.flag}</span>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#0A0A0A", letterSpacing: "-0.01em", lineHeight: 1.1 }} className="group-hover:text-[#003366]">{country.name}</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "2px" }}>{country.tagline.split(",")[0]}</p>
            </div>
          </div>

          {/* Budget */}
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", fontWeight: 700, color: "#003366", letterSpacing: "-0.01em" }}>{country.totalCost}</p>

          {/* Duration */}
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#0A0A0A" }}>{country.duration}</p>

          {/* Internship */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {country.internshipIncluded ? (
              <><CheckCircle size={12} style={{ color: "#00C5A3" }} /><span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "#00C5A3", fontWeight: 700 }}>Included</span></>
            ) : (
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "#9CA3AF" }}>—</span>
            )}
          </div>

          {/* NMC */}
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.08em", color: "#fff", background: "#00C5A3", border: "1px solid #009E84", padding: "2px 8px", display: "inline-block", width: "fit-content" }}>✓</span>

          {/* Arrow */}
          <ArrowRight size={13} style={{ color: "#9CA3AF" }} className="group-hover:text-[#003366] group-hover:translate-x-0.5 transition-all" />
        </Link>
      ))}
    </div>
  );
}
