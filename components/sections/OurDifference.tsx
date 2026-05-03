"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, CheckCircle } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

const proofPoints = [
  { num: "01", title: "We studied abroad — they didn't", desc: "Every team member holds an MBBS from an NMC-approved foreign university. Agents have brochures. We have diplomas." },
  { num: "02", title: "Zero university commission", desc: "Our income is from student fees, not referral cuts. We recommend what is right for you — not what pays us the most." },
  { num: "03", title: "FMGE planning starts pre-departure", desc: "We hand you a year-wise FMGE study plan before your flight. Not after year 3 when panic sets in." },
  { num: "04", title: "One point of contact, always", desc: "No passing you around. The counselor who signs you is reachable throughout your full 5–6 year degree." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
};

export default function OurDifference() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E8E8", position: "relative", overflow: "hidden" }}
    >
      {/* ── 3D floating objects ── */}
      <FloatingObjects />

      {/* Subtle dot-grid overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, #E8E8E8 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5, pointerEvents: "none" }} />

      {/* Faded ghost number */}
      <div style={{ position: "absolute", right: "clamp(1rem, 4vw, 3rem)", top: "2rem", fontFamily: "var(--font-mono)", fontSize: "clamp(6rem, 14vw, 11rem)", fontWeight: 700, lineHeight: 1, color: "#0A0A0A", opacity: 0.04, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none" }}>
        03
      </div>

      <div className="container-custom" style={{ position: "relative", zIndex: 2 }}>

        {/* ── Header ── */}
        <div style={{ padding: "clamp(4rem, 7vw, 6rem) 0 3rem", borderBottom: "1px solid #E8E8E8" }}>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "2rem", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <span style={{ opacity: 0.35 }}>03</span>
            <span style={{ opacity: 0.35 }}>—</span>
            <span>Our Difference</span>
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "3rem", alignItems: "end" }}>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.75rem)", lineHeight: 0.92, letterSpacing: "-0.04em", color: "#0A0A0A" }}
            >
              Doctor-Led.
              <br />
              <em style={{ color: "#003366" }}>Not Agent-Led.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.8, borderLeft: "2px solid #E8E8E8", paddingLeft: "1.75rem" }}
            >
              When a doctor guides you, the outcome shifts from closing a sale to securing your future. That&apos;s not a tagline — it&apos;s the difference between a career and a mistake.
            </motion.p>
          </div>
        </div>

        {/* ── Proof rows ── */}
        <ProofRows />

        {/* ── Comparison strip ── */}
        <ComparisonStrip />

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ padding: "2rem 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Free · No obligation · Doctor-led
          </p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-surgical">
            <Phone className="w-3.5 h-3.5" />
            Talk to a Doctor
          </a>
        </motion.div>

      </div>
    </section>
  );
}

/* ── Proof rows with scroll animation ── */
function ProofRows() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} style={{ borderBottom: "1px solid #E8E8E8" }}>
      {proofPoints.map((item, i) => (
        <motion.div
          key={item.num}
          custom={i}
          variants={slideLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="group"
          style={{ display: "grid", gridTemplateColumns: "56px 1fr", borderTop: "1px solid #E8E8E8", position: "relative" }}
        >
          {/* Teal hover left bar */}
          <motion.div
            style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "#00C5A3", scaleY: 0, originY: 0 }}
            whileHover={{ scaleY: 1 }}
            transition={{ duration: 0.25 }}
          />

          {/* Index */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "2rem", borderRight: "1px solid #E8E8E8" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", color: "#00C5A3" }}>{item.num}</span>
          </div>

          {/* Content */}
          <div style={{ padding: "2rem 0 2rem 2rem" }} className="lg:grid lg:grid-cols-[40%_1fr] lg:gap-8">
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "#0A0A0A", marginBottom: "0.625rem" }}>
              {item.title}
            </h3>
            <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.75 }}>
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Comparison strip ── */
function ComparisonStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const agents = ["Brochure knowledge only", "University commissions", "FMGE as afterthought", "Unreachable post-admission"];
  const worldwise = ["MBBS from the same universities", "Student-fee only, zero commission", "FMGE roadmap before departure", "Same counselor, 6 years"];

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2" style={{ borderBottom: "1px solid #E8E8E8" }}>
      {/* Agents */}
      <div style={{ padding: "2rem 0", borderRight: "1px solid #E8E8E8" }}>
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "1rem" }}
        >
          Typical Agent
        </motion.p>
        {agents.map((t, i) => (
          <motion.div key={t} custom={i} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.625rem" }}>
            <div style={{ width: "16px", height: "1px", background: "#D1D5DB", flexShrink: 0 }} />
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#9CA3AF", letterSpacing: "0.03em", textDecoration: "line-through" }}>{t}</p>
          </motion.div>
        ))}
      </div>

      {/* Worldwise */}
      <div style={{ padding: "2rem 0" }} className="lg:pl-8">
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.15 }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "1rem" }}
        >
          Worldwise Education
        </motion.p>
        {worldwise.map((t, i) => (
          <motion.div key={t} custom={i} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.625rem" }}>
            <CheckCircle size={11} style={{ color: "#00C5A3", flexShrink: 0 }} />
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#0A0A0A", letterSpacing: "0.03em", fontWeight: 600 }}>{t}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── 3D floating objects (pure CSS + React) ── */
function FloatingObjects() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>

      {/* Ring 1 — top left */}
      <div style={{ position: "absolute", top: "8%", left: "5%", width: "140px", height: "140px" }} className="float-slow">
        <div className="spin-ring" style={{ width: "100%", height: "100%", border: "1px solid rgba(0,197,163,0.2)", borderRadius: "50%", transformStyle: "preserve-3d" }} />
      </div>

      {/* Ring 2 — mid right, larger */}
      <div style={{ position: "absolute", top: "35%", right: "3%", width: "200px", height: "200px" }} className="float-medium">
        <div className="spin-ring-r" style={{ width: "100%", height: "100%", border: "1px solid rgba(0,51,102,0.12)", borderRadius: "50%", transformStyle: "preserve-3d" }} />
      </div>

      {/* Ring 3 — bottom left, small */}
      <div style={{ position: "absolute", bottom: "15%", left: "8%", width: "80px", height: "80px" }} className="float-fast">
        <div className="spin-ring" style={{ width: "100%", height: "100%", border: "1px solid rgba(0,197,163,0.25)", borderRadius: "50%", transformStyle: "preserve-3d" }} />
      </div>

      {/* Wireframe square 1 */}
      <div style={{ position: "absolute", top: "20%", right: "18%", width: "60px", height: "60px" }} className="float-medium">
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          style={{ width: "100%", height: "100%", border: "1px solid rgba(0,51,102,0.15)", background: "transparent" }}
        />
      </div>

      {/* Wireframe square 2 — rotated 45° */}
      <div style={{ position: "absolute", bottom: "25%", right: "12%", width: "40px", height: "40px" }} className="float-slow">
        <motion.div
          animate={{ rotateZ: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ width: "100%", height: "100%", border: "1px solid rgba(0,197,163,0.2)", background: "transparent", transform: "rotate(45deg)" }}
        />
      </div>

      {/* Wireframe triangle (SVG) */}
      <div style={{ position: "absolute", top: "55%", left: "3%", width: "70px", height: "70px" }} className="float-fast">
        <motion.svg
          animate={{ rotateZ: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
        >
          <polygon points="30,4 56,52 4,52" stroke="rgba(0,51,102,0.15)" strokeWidth="1" fill="none" />
        </motion.svg>
      </div>

      {/* Floating dots */}
      {[
        { top: "15%", left: "25%", delay: 0 },
        { top: "70%", left: "45%", delay: 1.5 },
        { top: "40%", left: "60%", delay: 3 },
        { top: "80%", left: "70%", delay: 0.8 },
      ].map((d, i) => (
        <div key={i} style={{ position: "absolute", top: d.top, left: d.left, width: "5px", height: "5px", background: "#00C5A3", borderRadius: "50%" }}
          className="pulse-dot" />
      ))}

    </div>
  );
}
