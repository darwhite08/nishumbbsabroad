import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Calendar } from "lucide-react";
import { University } from "@/data/universities";

interface Props {
  university: University;
}

export default function UniversityCard({ university }: Props) {
  return (
    <Link
      href={`/universities/${university.slug}`}
      className="group block bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden border border-border"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-base font-bold text-text-main group-hover:text-primary transition-colors leading-tight">
              {university.name}
            </h3>
          </div>
          {university.nmcApproved && (
            <span className="flex items-center gap-1 shrink-0 ml-2 bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded-full border border-green-200">
              <CheckCircle2 className="w-3 h-3" />
              NMC
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
          <span className="flex items-center gap-1 text-text-muted text-sm">
            <MapPin className="w-3.5 h-3.5" />
            {university.city}, {university.country}
          </span>
          <span className="flex items-center gap-1 text-text-muted text-sm">
            <Calendar className="w-3.5 h-3.5" />
            Est. {university.established}
          </span>
        </div>

        <div className="space-y-1.5 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted">Annual Fee</span>
            <span className="font-semibold text-primary">{university.annualFee}</span>
          </div>
          {university.fmgePassRate && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-muted">FMGE Pass Rate</span>
              <span className="font-medium text-text-main">{university.fmgePassRate}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
          View Details
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
