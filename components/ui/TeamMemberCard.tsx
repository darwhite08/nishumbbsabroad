import Image from "next/image";
import { GraduationCap, Linkedin } from "lucide-react";
import { TeamMember } from "@/data/team";

interface Props {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-border group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white font-bold text-lg leading-tight">{member.name}</p>
          <p className="text-white/90 text-sm">{member.role}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <GraduationCap className="w-4 h-4 text-primary shrink-0" />
          <p className="text-sm text-text-muted">
            <span className="font-medium text-text-main">{member.qualification}</span>
            {" — "}
            {member.university}, {member.country}
          </p>
        </div>
        <p className="text-text-muted text-sm leading-relaxed line-clamp-4">{member.bio}</p>
        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
