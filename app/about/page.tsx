import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { team } from "@/data/team";
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
    number: "01",
    title: "Transparency",
    desc: "We tell you what other consultancies won't — including FMGE challenges, country-specific risks, and realistic cost expectations.",
  },
  {
    number: "02",
    title: "Student-First",
    desc: "Our success is measured by your success in FMGE and your medical career — not by our commission. We only recommend what's right for you.",
  },
  {
    number: "03",
    title: "Medical Integrity",
    desc: "We are doctors first, consultants second. Every recommendation we make is one we would make for our own family members.",
  },
  {
    number: "04",
    title: "Long-Term Relationship",
    desc: "We stay in touch with students throughout their MBBS — with FMGE guidance, check-ins, and support for PG planning after you return.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "#003366",
          paddingTop: "7rem",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Teal left stripe */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "4px",
            background: "#00C5A3",
          }}
        />
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            pointerEvents: "none",
          }}
        />

        {/* Logo watermark */}
        <div style={{ position: "absolute", top: "5rem", right: "clamp(2rem,5vw,5rem)", width: "90px", height: "90px", opacity: 0.12, zIndex: 2, pointerEvents: "none" }}>
          <Image src="/images/logo.png" alt="" fill className="object-contain" />
        </div>

        <div className="container-custom" style={{ position: "relative" }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

          {/* Label */}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#00C5A3",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Who We Are
          </span>

          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                  marginBottom: "1.25rem",
                }}
              >
                Doctors helping doctors.
              </h1>

              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  maxWidth: "560px",
                }}
              >
                We are doctors who studied MBBS abroad. We came back, cleared FMGE, and built
                careers — and now we help the next generation do the same.
              </p>
            </div>

            <div style={{ flexShrink: 0 }}>
              <Image src="/images/logo.png" alt="Worldwise Education" width={100} height={100} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ background: "#FFFFFF", paddingTop: "clamp(4rem, 7vw, 6rem)", paddingBottom: "clamp(4rem, 7vw, 6rem)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "3rem", alignItems: "start" }}>
            {/* Left: story text */}
            <div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#00C5A3",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                Our Story
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    color: "#0D0D0D",
                    margin: 0,
                  }}
                >
                  Why Doctors Started This Consultancy
                </h2>
                <Image src="/images/logo.png" alt="Worldwise Education" width={64} height={64} className="object-contain" style={{ flexShrink: 0 }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: "#4B5563", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                <p>
                  Dr. Nishu Yadav was in the same position as thousands of students today —
                  NEET-qualified, determined to become a doctor, and navigating the overwhelming
                  world of MBBS abroad alone. The consultancies he encountered had no medical
                  background. The advice was commission-driven. Nobody warned him about FMGE.
                </p>
                <p>
                  He completed his MBBS across Ukraine and Kazakhstan, cleared FMGE on his first
                  attempt with a strong score, and returned to India determined to do things
                  differently. Along the way, he saw too many fellow students struggle — not because
                  the universities were bad, but because they had received no honest,
                  experience-based guidance at the start.
                </p>
                <p>
                  He joined with Dr. Lokesh Attri and Dr. Bindu Tyagi — each with their own MBBS
                  abroad journey and first-attempt FMGE success — to found Worldwise Education with
                  a single premise:{" "}
                  <strong style={{ color: "#0D0D0D" }}>
                    the only people qualified to guide students through MBBS abroad are doctors who
                    have done it themselves.
                  </strong>
                </p>
              </div>
            </div>

            {/* Right: stats card */}
            <div
              style={{
                background: "#003366",
                border: "1px solid #004488",
                padding: "2.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  display: "block",
                  marginBottom: "2rem",
                }}
              >
                By The Numbers
              </span>

              {[
                { stat: "4", label: "doctors on team" },
                { stat: "500+", label: "students placed" },
                { stat: "3", label: "countries studied in" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    paddingBottom: i < 2 ? "1.5rem" : 0,
                    marginBottom: i < 2 ? "1.5rem" : 0,
                    borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 700,
                      color: "#00C5A3",
                      lineHeight: 1,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {item.stat}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: "#F5F5F5", paddingTop: "clamp(4rem, 7vw, 6rem)", paddingBottom: "clamp(4rem, 7vw, 6rem)" }}>
        <div className="container-custom">
          {/* Section header */}
          <div style={{ marginBottom: "3rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00C5A3",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              Our Team
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "#0D0D0D",
                marginBottom: "0.75rem",
              }}
            >
              Meet the Doctors
            </h2>
            <p style={{ color: "#4B5563", fontSize: "1rem", lineHeight: 1.7, maxWidth: "520px" }}>
              Every counselor on our team is a qualified doctor with an MBBS from a foreign
              university. When we say &ldquo;we&apos;ve been where you are,&rdquo; we mean it
              literally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "0", border: "1px solid #E2E4E8" }}>
            {team.map((member) => (
              <div
                key={member.id}
                style={{
                  background: "#FFFFFF",
                  borderRight: "1px solid #E2E4E8",
                  borderBottom: "1px solid #E2E4E8",
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    position: "relative",
                    height: "280px",
                    overflow: "hidden",
                    background: "#001F3F",
                  }}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                  {/* Dark gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,20,40,0.85) 0%, rgba(0,20,40,0.2) 60%, transparent 100%)",
                    }}
                  />
                  {/* Name & role on photo */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1rem",
                      right: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1875rem",
                        color: "#FFFFFF",
                        lineHeight: 1.2,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {member.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#00C5A3",
                      }}
                    >
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
                  {/* Qualification · University · Country */}
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#6B7280",
                      marginBottom: "0.875rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {member.qualification} · {member.university} · {member.country}
                  </div>

                  {/* Bio */}
                  <p
                    style={{
                      color: "#4B5563",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#FFFFFF", paddingTop: "clamp(4rem, 7vw, 6rem)", paddingBottom: "clamp(4rem, 7vw, 6rem)" }}>
        <div className="container-custom">
          {/* Section header */}
          <div style={{ marginBottom: "3rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00C5A3",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              What We Stand For
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "#0D0D0D",
              }}
            >
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ border: "1px solid #E2E4E8" }}>
            {values.map((v) => (
              <div
                key={v.number}
                style={{
                  padding: "2rem",
                  borderRight: "1px solid #E2E4E8",
                  borderBottom: "1px solid #E2E4E8",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#00C5A3",
                    marginBottom: "0.875rem",
                  }}
                >
                  {v.number}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.015em",
                    color: "#0D0D0D",
                    marginBottom: "0.75rem",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    color: "#4B5563",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Talk to a doctor today."
        subtext="Free counseling. No obligation. Just honest guidance from someone who's been there."
      />
    </>
  );
}
