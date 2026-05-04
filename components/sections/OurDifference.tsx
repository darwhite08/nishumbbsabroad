"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

const proofPoints = [
  { num: "01", title: "We studied abroad — they didn't", desc: "Every team member holds an MBBS from an NMC-approved foreign university. Agents have brochures. We have diplomas." },
  { num: "02", title: "Zero university commission", desc: "Our income is from student fees, not referral cuts. We recommend what is right for you — not what pays us the most." },
  { num: "03", title: "FMGE planning starts pre-departure", desc: "We hand you a year-wise FMGE study plan before your flight. Not after year 3 when panic sets in." },
  { num: "04", title: "One point of contact, always", desc: "No passing you around. The counselor who signs you is reachable throughout your full 5–6 year degree." },
];

export default function OurDifference() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Mouse tracking for cursor glow + parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  // Parallax layers
  const p1x = useTransform(smoothX, [0, 1400], [-18, 18]);
  const p1y = useTransform(smoothY, [0, 800], [-12, 12]);
  const p2x = useTransform(smoothX, [0, 1400], [12, -12]);
  const p2y = useTransform(smoothY, [0, 800], [8, -8]);
  const p3x = useTransform(smoothX, [0, 1400], [-24, 24]);
  const p3y = useTransform(smoothY, [0, 800], [-16, 16]);

  // Cursor glow position — defined at top level to avoid hook-in-JSX glitch
  const glowX = useTransform(smoothX, [0, 1400], [-250, 1150]);
  const glowY = useTransform(smoothY, [0, 800], [-250, 550]);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E8E8", position: "relative", overflow: "hidden" }}
    >
      {/* ── Cursor glow ── */}
      <motion.div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,197,163,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
          x: glowX,
          y: glowY,
        }}
      />

      {/* ── Dot grid ── */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, #D1D5DB 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.4, pointerEvents: "none" }} />

      {/* ── Ghost number ── */}
      <div style={{ position: "absolute", right: "clamp(1rem, 4vw, 3rem)", top: "2rem", fontFamily: "var(--font-mono)", fontSize: "clamp(6rem, 14vw, 11rem)", fontWeight: 700, lineHeight: 1, color: "#0A0A0A", opacity: 0.04, letterSpacing: "-0.04em", userSelect: "none", pointerEvents: "none", zIndex: 1 }}>03</div>

      {/* ── 3D floating objects with mouse parallax ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2 }}>

        {/* Wireframe cube 1 — top-left */}
        <motion.div style={{ position: "absolute", top: "10%", left: "4%", x: p1x, y: p1y }}>
          <div style={{ width: "80px", height: "80px", perspective: "200px" }} className="float-slow">
            <WireframeCube size={80} color="rgba(0,197,163,0.22)" spin="spin-cube" />
          </div>
        </motion.div>

        {/* Wireframe cube 2 — right mid, larger */}
        <motion.div style={{ position: "absolute", top: "30%", right: "5%", x: p2x, y: p2y }}>
          <div style={{ width: "110px", height: "110px", perspective: "280px" }} className="float-medium">
            <WireframeCube size={110} color="rgba(0,51,102,0.14)" spin="spin-cube2" />
          </div>
        </motion.div>

        {/* Wireframe cube 3 — bottom-left, small */}
        <motion.div style={{ position: "absolute", bottom: "12%", left: "7%", x: p3x, y: p3y }}>
          <div style={{ width: "50px", height: "50px", perspective: "150px" }} className="float-fast">
            <WireframeCube size={50} color="rgba(0,197,163,0.28)" spin="spin-cube" />
          </div>
        </motion.div>

        {/* Spinning ring — top-right area */}
        <motion.div style={{ position: "absolute", top: "8%", right: "20%", x: p1x, y: p1y }}>
          <div className="float-medium" style={{ width: "160px", height: "160px" }}>
            <div className="spin-ring" style={{ width: "100%", height: "100%", border: "1px solid rgba(0,197,163,0.2)", borderRadius: "50%" }} />
          </div>
        </motion.div>

        {/* Orbiting system — mid-left */}
        <motion.div style={{ position: "absolute", top: "50%", left: "12%", x: p2x, y: p2y }}>
          <div className="float-slow" style={{ width: "40px", height: "40px", position: "relative" }}>
            {/* Center dot */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "5px", height: "5px", background: "#00C5A3", borderRadius: "50%" }} />
            {/* Orbit ring */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "120px", height: "120px", border: "1px solid rgba(0,197,163,0.15)", borderRadius: "50%" }} />
            {/* Orbiting dot 1 */}
            <div style={{ position: "absolute", top: "50%", left: "50%", width: "0", height: "0" }} className="orbit-dot">
              <div style={{ width: "7px", height: "7px", background: "#00C5A3", borderRadius: "50%", marginTop: "-3.5px" }} />
            </div>
            {/* Orbiting dot 2 */}
            <div style={{ position: "absolute", top: "50%", left: "50%", width: "0", height: "0" }} className="orbit-dot-r">
              <div style={{ width: "5px", height: "5px", background: "#003366", borderRadius: "50%", marginTop: "-2.5px" }} />
            </div>
          </div>
        </motion.div>

        {/* Rotating triangle SVG */}
        <motion.div style={{ position: "absolute", bottom: "20%", right: "15%", x: p3x, y: p3y }}>
          <motion.svg
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="float-fast"
            viewBox="0 0 70 70" fill="none" width="70" height="70"
          >
            <polygon points="35,5 65,60 5,60" stroke="rgba(0,51,102,0.18)" strokeWidth="1" fill="none" />
            <polygon points="35,18 52,50 18,50" stroke="rgba(0,197,163,0.2)" strokeWidth="1" fill="none" />
          </motion.svg>
        </motion.div>

        {/* Floating cross/plus */}
        <motion.div style={{ position: "absolute", top: "65%", right: "28%", x: p1x, y: p1y }}>
          <motion.div
            animate={{ rotateZ: [0, 90, 180, 270, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="float-medium"
            style={{ width: "28px", height: "28px", position: "relative" }}
          >
            <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "rgba(0,197,163,0.35)", transform: "translateY(-50%)" }} />
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "rgba(0,197,163,0.35)", transform: "translateX(-50%)" }} />
          </motion.div>
        </motion.div>

        {/* Pulsing dots */}
        {[
          { top: "18%", left: "28%", delay: 0,   color: "#00C5A3" },
          { top: "72%", left: "48%", delay: 1.2, color: "#003366" },
          { top: "38%", left: "55%", delay: 2.4, color: "#00C5A3" },
          { top: "82%", left: "72%", delay: 0.6, color: "#003366" },
          { top: "25%", left: "80%", delay: 1.8, color: "#00C5A3" },
        ].map((d, i) => (
          <motion.div
            key={i}
            style={{ position: "absolute", top: d.top, left: d.left, width: "5px", height: "5px", background: d.color, borderRadius: "50%" }}
            animate={{ opacity: [0.15, 0.5, 0.15], scale: [1, 1.6, 1] }}
            transition={{ duration: 3, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

      </div>

      {/* ── CONTENT ── */}
      <div className="container-custom" style={{ position: "relative", zIndex: 3 }}>

        {/* Header */}
        <div style={{ padding: "clamp(4rem, 7vw, 6rem) 0 3rem", borderBottom: "1px solid #E8E8E8" }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "2rem", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <span style={{ opacity: 0.35 }}>03</span>
            <span style={{ opacity: 0.35 }}>—</span>
            <span>Our Difference</span>
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "3rem", alignItems: "end" }}>
            {/* Animated headline — words stagger in */}
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.75rem)", lineHeight: 0.92, letterSpacing: "-0.04em", color: "#0A0A0A" }}
              >
                Doctor-Led.
                <br />
                <motion.em
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="shimmer-text"
                  style={{ fontStyle: "italic" }}
                >
                  Not Agent-Led.
                </motion.em>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.8, borderLeft: "2px solid #E8E8E8", paddingLeft: "1.75rem" }}
            >
              When a doctor guides you, the outcome shifts from closing a sale to securing your future. That&apos;s not a tagline — it&apos;s the difference between a career and a mistake.
            </motion.p>
          </div>
        </div>

        {/* Proof rows */}
        <ProofRows inView={inView} />

        {/* Comparison strip */}
        <ComparisonStrip />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ padding: "2rem 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Free · No obligation · Doctor-led
          </p>
          <MagneticButton href={whatsappLink()} />
        </motion.div>

      </div>
    </section>
  );
}

/* ── Wireframe CSS cube ── */
function WireframeCube({ size, color, spin }: { size: number; color: string; spin: string }) {
  const half = size / 2;
  const faces = [
    { transform: `translateZ(${half}px)` },
    { transform: `rotateY(180deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];
  return (
    <div className={spin} style={{ width: size, height: size, position: "relative" }}>
      {faces.map((f, i) => (
        <div key={i} className="cube-face" style={{ ...f, width: size, height: size, borderColor: color }} />
      ))}
    </div>
  );
}

/* ── Proof rows with 3D tilt on hover ── */
function ProofRows({ inView }: { inView: boolean }) {
  return (
    <div style={{ borderBottom: "1px solid #E8E8E8" }}>
      {proofPoints.map((item, i) => (
        <TiltRow key={item.num} item={item} i={i} inView={inView} />
      ))}
    </div>
  );
}

function TiltRow({ item, i, inView }: { item: typeof proofPoints[0]; i: number; inView: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { stiffness: 200, damping: 30 });
  const sRotY = useSpring(rotY, { stiffness: 200, damping: 30 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotX.set(-y * 4);
    rotY.set(x * 6);
  };

  const onMouseLeave = () => { rotX.set(0); rotY.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX: sRotX, rotateY: sRotY, transformPerspective: 800, display: "grid", gridTemplateColumns: "56px 1fr", borderTop: "1px solid #E8E8E8", position: "relative", transformOrigin: "center" }}
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
      whileHover={{ backgroundColor: "#F9FEFF" }}
    >
      {/* Animated left bar */}
      <motion.div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "linear-gradient(to bottom, #00C5A3, #003366)", scaleY: 0, originY: 0 }} whileHover={{ scaleY: 1 }} transition={{ duration: 0.3 }} />

      {/* Index */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "2rem", borderRight: "1px solid #E8E8E8" }}>
        <motion.span
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", color: "#00C5A3" }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {item.num}
        </motion.span>
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
      <div style={{ padding: "2rem 0", borderRight: "1px solid #E8E8E8" }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "1rem" }}>
          Typical Agent
        </motion.p>
        {agents.map((t, i) => (
          <motion.div key={t} initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.07 }}
            style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.625rem" }}>
            <div style={{ width: "16px", height: "1px", background: "#D1D5DB", flexShrink: 0 }} />
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#9CA3AF", textDecoration: "line-through" }}>{t}</p>
          </motion.div>
        ))}
      </div>
      <div style={{ padding: "2rem 0" }} className="lg:pl-8">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.1 }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "1rem" }}>
          Worldwise Education
        </motion.p>
        {worldwise.map((t, i) => (
          <motion.div key={t} initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
            style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.625rem" }}>
            <motion.div whileHover={{ scale: 1.3 }} style={{ flexShrink: 0 }}>
              <CheckCircle size={11} style={{ color: "#00C5A3" }} />
            </motion.div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#0A0A0A", fontWeight: 600 }}>{t}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Magnetic CTA button ── */
function MagneticButton({ href }: { href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 25 });
  const sy = useSpring(y, { stiffness: 300, damping: 25 });

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const onMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: sx, y: sy, display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#003366", color: "white", padding: "14px 28px", border: "1px solid #003366", textDecoration: "none" }}
      whileHover={{ background: "#00C5A3", borderColor: "#00C5A3", scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      <Phone size={13} />
      Talk to a Doctor
      <motion.span
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowRight size={13} />
      </motion.span>
    </motion.a>
  );
}
