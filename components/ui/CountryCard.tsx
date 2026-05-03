import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Country } from "@/data/countries";

interface Props {
  country: Country;
  compact?: boolean;
}

export default function CountryCard({ country, compact = false }: Props) {
  return (
    <Link
      href={`/countries/${country.slug}`}
      className="group block bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden border border-border"
    >
      {!compact && (
        <div className="h-3 bg-primary" />
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl" aria-hidden="true">{country.flag}</span>
          {country.nmcApproved && (
            <span className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200">
              <CheckCircle2 className="w-3 h-3" />
              NMC Approved
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors mb-1">
          {country.name}
        </h3>

        {!compact && (
          <p className="text-text-muted text-sm mb-4">{country.tagline}</p>
        )}

        <div className="space-y-1.5 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted">Duration</span>
            <span className="font-medium text-text-main">{country.duration}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted">Total Cost</span>
            <span className="font-medium text-primary">{country.totalCost}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted">Language</span>
            <span className="font-medium text-text-main">{country.language}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
          Explore
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
