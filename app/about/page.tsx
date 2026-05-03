import type { Metadata } from "next";
import { CheckCircle2, Heart, Shield, Users, Award } from "lucide-react";
import { team } from "@/data/team";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import CTABanner from "@/components/ui/CTABanner";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us — Doctor-Led MBBS Abroad Consultancy",
  description:
    "Meet the team of doctors behind Worldwise Education. Every counselor holds an MBBS degree from a foreign university — because real guidance comes from real experience.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Shield,
    title: "Transparency",
    desc: "We tell you what other consultancies won't — including FMGE challenges, country-specific risks, and realistic cost expectations.",
  },
  {
    icon: Heart,
    title: "Student-First",
    desc: "Our success is measured by your success in FMGE and your medical career — not by our commission. We only recommend what's right for you.",
  },
  {
    icon: Award,
    title: "Medical Integrity",
    desc: "We are doctors first, consultants second. Every recommendation we make is one we would make for our own family members.",
  },
  {
    icon: Users,
    title: "Long-Term Relationship",
    desc: "We stay in touch with students throughout their MBBS — with FMGE guidance, check-ins, and support for PG planning after you return.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          <h1 className="text-white mb-4">About Worldwise Education</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            We are doctors who studied MBBS abroad. We came back, cleared FMGE, and built
            careers — and now we help the next generation do the same.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-text-main mt-2 mb-6">Why Doctors Started This Consultancy</h2>

            <div className="space-y-5 text-text-muted leading-relaxed">
              <p>
                In 2010, Dr. Arjun Sharma was in the same position as thousands of students today —
                NEET-qualified, without a government seat, trying to figure out what to do next. His
                family was approached by multiple consultancies, none of which had medical backgrounds.
                The advice was generic. The universities recommended were based on commission, not
                fit. Nobody warned him about FMGE.
              </p>
              <p>
                He went to Kazan Federal University in Russia and figured it out himself — the hard
                way. Six years later, he graduated, cleared FMGE on his first attempt, and returned
                to practice medicine in India. Along the way, he saw too many fellow students
                struggle — not because the universities were bad, but because they had received poor
                guidance at the start.
              </p>
              <p>
                He reached out to three other doctors — Dr. Priya Nair (Georgia), Dr. Rahul Verma
                (Kazakhstan), and Dr. Sunita Gupta (Philippines) — who had similar stories. Together,
                they founded Worldwise Education with a single premise:{" "}
                <strong className="text-text-main">
                  the only people qualified to guide students through MBBS abroad are doctors who
                  have done it themselves.
                </strong>
              </p>
              <p>
                That&apos;s the gap we fill. Not as salespeople. As doctors who have sat exactly
                where you are sitting right now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Team */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-text-main mt-2 mb-4">Meet the Doctors</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Every counselor on our team is a qualified doctor with an MBBS from a foreign
              university. When we say &ldquo;we&apos;ve been where you are,&rdquo; we mean it
              literally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="text-text-main mt-2 mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-bg-light rounded-2xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-text-main font-semibold mb-2">{v.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-text-main mb-4">Our Commitment to Compliance</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              We only work with universities that are fully compliant with Indian regulatory
              requirements. No exceptions.
            </p>
          </div>

          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "NMC Approved",
                desc: "All partner universities are on the NMC approved list",
              },
              {
                title: "WDOMS Listed",
                desc: "Verified on the World Directory of Medical Schools",
              },
              {
                title: "No Fake Universities",
                desc: "We independently verify every university before recommending it",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-5 border border-border text-center"
              >
                <CheckCircle2 className="w-8 h-8 text-success mx-auto mb-2" />
                <h3 className="font-semibold text-text-main text-sm mb-1">{item.title}</h3>
                <p className="text-text-muted text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Talk to a Doctor Who's Been Where You Are"
        subtext="Free counseling from doctors who have studied MBBS abroad and cleared FMGE. No pressure, no obligation."
      />
    </>
  );
}
