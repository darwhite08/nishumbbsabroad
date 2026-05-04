"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Phone, User, CheckCircle2, Calendar, ChevronDown, Loader2, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

const doctors = [
  {
    id: "nishu",
    name: "Dr. Nishu Yadav",
    role: "Founder & Lead Counselor",
    university: "Semey Medical University, Kazakhstan",
    specialty: "MBBS Abroad guidance, FMGE preparation",
    photo: "/images/nishu_yadav.jpg",
    available: ["Mon", "Wed", "Fri"],
  },
  {
    id: "lokesh",
    name: "Dr. Lokesh Attri",
    role: "Co-Founder & FMG Counselor",
    university: "Semey Medical University, Kazakhstan",
    specialty: "FMGE coaching, Central Asia guidance",
    photo: "/images/lokesh_attri.jpg",
    available: ["Tue", "Thu", "Sat"],
  },
  {
    id: "bindu",
    name: "Dr. Bindu Tyagi",
    role: "Co-Founder & MBBS Abroad Counselor",
    university: "Ternopil National Medical University",
    specialty: "MBBS abroad for girls, Ukraine/Eastern Europe",
    photo: "/images/bindu_tyagi.jpg",
    available: ["Mon", "Thu", "Sat"],
  },
];

const timeSlots = [
  "9:00 AM – 10:00 AM",
  "10:00 AM – 11:00 AM",
  "11:00 AM – 12:00 PM",
  "2:00 PM – 3:00 PM",
  "3:00 PM – 4:00 PM",
  "4:00 PM – 5:00 PM",
  "6:00 PM – 7:00 PM",
  "7:00 PM – 8:00 PM",
];

type Step = 1 | 2 | 3;
type Status = "idle" | "sending" | "success" | "error";

export default function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "", phone: "", neet: "", budget: "", preferredDate: "", preferredTime: "", message: "",
  });

  const doctor = doctors.find(d => d.id === selectedDoctor);

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const sendEmails = async () => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const teamTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_TEAM!;
    const studentTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_STUDENT!;
    const pubKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const params = {
      to_name: form.name,
      from_name: "Worldwise Education",
      student_name: form.name,
      student_phone: form.phone,
      neet_score: form.neet,
      budget: form.budget,
      doctor_name: doctor?.name,
      doctor_role: doctor?.role,
      preferred_date: form.preferredDate,
      preferred_time: form.preferredTime,
      message: form.message || "No additional message.",
    };

    await emailjs.send(serviceId, teamTemplate, params, pubKey);
    await emailjs.send(serviceId, studentTemplate, params, pubKey);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendEmails();
      setStatus("success");
      setStep(3);
    } catch {
      setStatus("error");
    }
  };

  // ── Step 1: Select Doctor ──────────────────────────────────────────
  if (step === 1) {
    return (
      <div>
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00C5A3", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ opacity: 0.4 }}>Step 1 of 2</span>
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3vw,2.5rem)", lineHeight: 1.0, letterSpacing: "-0.025em", color: "#0A0A0A" }}>
            Choose your counselor
          </h2>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", marginTop: "0.75rem", lineHeight: 1.7 }}>
            Every counselor has personally studied MBBS abroad and cleared FMGE. Pick who fits your situation best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1px", background: "#E8E8E8" }}>
          {doctors.map(doc => (
            <button
              key={doc.id}
              onClick={() => { setSelectedDoctor(doc.id); setStep(2); }}
              style={{ background: "#FFFFFF", border: "none", cursor: "pointer", textAlign: "left", padding: 0, outline: "none", transition: "background 0.15s" }}
              className="group hover:bg-[#F8FFFE]"
            >
              {/* Photo */}
              <div style={{ position: "relative", height: "220px", overflow: "hidden", background: "#003366" }}>
                <Image src={doc.photo} alt={doc.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" style={{ objectPosition: "top center" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", color: "white", lineHeight: 1.1 }}>{doc.name}</p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "#00C5A3", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "3px", fontWeight: 700 }}>{doc.role}</p>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "1.25rem" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#6B7280", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{doc.university}</p>
                <p style={{ fontSize: "0.8125rem", color: "#0A0A0A", lineHeight: 1.6, marginBottom: "0.875rem" }}>{doc.specialty}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "3px", marginBottom: "0.875rem" }}>
                  {doc.available.map(d => (
                    <span key={d} style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.08em", color: "#003366", background: "#E8EDF4", border: "1px solid rgba(0,51,102,0.15)", padding: "2px 7px" }}>{d}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", paddingTop: "0.75rem", borderTop: "1px solid #E8E8E8" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#003366" }}>Book a Call</span>
                  <ArrowRight size={11} style={{ color: "#003366" }} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── Step 3: Success ──────────────────────────────────────────────
  if (step === 3) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 2rem", border: "1px solid #E8E8E8", background: "#FAFFFE" }}>
        <div style={{ width: "64px", height: "64px", background: "rgba(0,197,163,0.1)", border: "2px solid #00C5A3", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
          <CheckCircle2 size={28} style={{ color: "#00C5A3" }} />
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3vw,2.5rem)", lineHeight: 1.0, letterSpacing: "-0.025em", color: "#0A0A0A", marginBottom: "1rem" }}>
          Booking confirmed!
        </h2>
        <p style={{ color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 0.75rem" }}>
          We&apos;ve received your request. <strong style={{ color: "#0A0A0A" }}>{doctor?.name}</strong> will contact you on <strong style={{ color: "#0A0A0A" }}>{form.phone}</strong> within <strong style={{ color: "#0A0A0A" }}>2 hours</strong> with the Google Meet link for your session.
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2rem" }}>
          Check your spam folder if you don&apos;t see it in 2 hours.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => { setStep(1); setSelectedDoctor(""); setStatus("idle"); setForm({ name:"",phone:"",neet:"",budget:"",preferredDate:"",preferredTime:"",message:"" }); }}
            className="btn-outline" style={{ cursor: "pointer" }}>
            Book Another Call
          </button>
          <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999"}?text=Hi, I just booked a call with ${doctor?.name}. My name is ${form.name}.`} target="_blank" rel="noopener noreferrer" className="btn-teal">
            <Phone size={13} />
            Ping on WhatsApp Too
          </a>
        </div>
      </div>
    );
  }

  // ── Step 2: Fill Form ────────────────────────────────────────────
  return (
    <div>
      {/* Back + Doctor summary */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid #E8E8E8" }}>
        <button onClick={() => setStep(1)} style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280", background: "none", border: "1px solid #E8E8E8", padding: "6px 14px", cursor: "pointer" }}>
          ← Back
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden", border: "2px solid #00C5A3", flexShrink: 0, position: "relative" }}>
            <Image src={doctor!.photo} alt={doctor!.name} fill className="object-cover" style={{ objectPosition: "top center" }} />
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#0A0A0A", lineHeight: 1.1 }}>{doctor?.name}</p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", color: "#00C5A3", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "2px", fontWeight: 700 }}>{doctor?.role}</p>
          </div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "#9CA3AF", letterSpacing: "0.08em" }}>Step 2 of 2</p>
        </div>
      </div>

      <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,2.5vw,2rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#0A0A0A", marginBottom: "2rem" }}>
        Your details
      </p>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1px", background: "#E8E8E8", marginBottom: "1px" }}>

          {/* Name */}
          <div style={{ background: "#FFFFFF", padding: "1.25rem" }}>
            <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280", marginBottom: "0.5rem" }}>
              Full Name *
            </label>
            <div style={{ position: "relative" }}>
              <User size={14} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} />
              <input required value={form.name} onChange={e => update("name", e.target.value)} placeholder="Your full name"
                style={{ width: "100%", paddingLeft: "2.25rem", paddingRight: "0.75rem", paddingTop: "0.625rem", paddingBottom: "0.625rem", border: "1px solid #E8E8E8", background: "#F8F9FA", fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#0A0A0A", outline: "none", transition: "border-color 0.15s", boxSizing: "border-box" }}
                onFocus={e => e.target.style.borderColor = "#003366"}
                onBlur={e => e.target.style.borderColor = "#E8E8E8"}
              />
            </div>
          </div>

          {/* Phone */}
          <div style={{ background: "#FFFFFF", padding: "1.25rem" }}>
            <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280", marginBottom: "0.5rem" }}>
              Phone Number *
            </label>
            <div style={{ position: "relative" }}>
              <Phone size={14} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} />
              <input required type="tel" value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+91 XXXXX XXXXX"
                style={{ width: "100%", paddingLeft: "2.25rem", paddingRight: "0.75rem", paddingTop: "0.625rem", paddingBottom: "0.625rem", border: "1px solid #E8E8E8", background: "#F8F9FA", fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#0A0A0A", outline: "none", transition: "border-color 0.15s", boxSizing: "border-box" }}
                onFocus={e => e.target.style.borderColor = "#003366"}
                onBlur={e => e.target.style.borderColor = "#E8E8E8"}
              />
            </div>
          </div>

          {/* NEET Score */}
          <div style={{ background: "#FFFFFF", padding: "1.25rem" }}>
            <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280", marginBottom: "0.5rem" }}>
              NEET Score / Status
            </label>
            <input value={form.neet} onChange={e => update("neet", e.target.value)} placeholder="e.g. 350 or Appearing 2026"
              style={{ width: "100%", padding: "0.625rem 0.75rem", border: "1px solid #E8E8E8", background: "#F8F9FA", fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#0A0A0A", outline: "none", transition: "border-color 0.15s", boxSizing: "border-box" }}
              onFocus={e => e.target.style.borderColor = "#003366"}
              onBlur={e => e.target.style.borderColor = "#E8E8E8"}
            />
          </div>

          {/* Budget */}
          <div style={{ background: "#FFFFFF", padding: "1.25rem" }}>
            <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280", marginBottom: "0.5rem" }}>
              Total Budget
            </label>
            <div style={{ position: "relative" }}>
              <select value={form.budget} onChange={e => update("budget", e.target.value)}
                style={{ width: "100%", padding: "0.625rem 2rem 0.625rem 0.75rem", border: "1px solid #E8E8E8", background: "#F8F9FA", fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: form.budget ? "#0A0A0A" : "#9CA3AF", outline: "none", appearance: "none", cursor: "pointer", transition: "border-color 0.15s", boxSizing: "border-box" }}
                onFocus={e => (e.target as HTMLSelectElement).style.borderColor = "#003366"}
                onBlur={e => (e.target as HTMLSelectElement).style.borderColor = "#E8E8E8"}
              >
                <option value="">Select budget range</option>
                <option>Under ₹20 Lakhs</option>
                <option>₹20L – ₹30L</option>
                <option>₹30L – ₹40L</option>
                <option>₹40L – ₹55L</option>
                <option>Above ₹55 Lakhs</option>
              </select>
              <ChevronDown size={13} style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF", pointerEvents: "none" }} />
            </div>
          </div>

          {/* Preferred Date */}
          <div style={{ background: "#FFFFFF", padding: "1.25rem" }}>
            <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280", marginBottom: "0.5rem" }}>
              Preferred Date *
            </label>
            <div style={{ position: "relative" }}>
              <Calendar size={14} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} />
              <input required type="date" value={form.preferredDate} onChange={e => update("preferredDate", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                style={{ width: "100%", paddingLeft: "2.25rem", paddingRight: "0.75rem", paddingTop: "0.625rem", paddingBottom: "0.625rem", border: "1px solid #E8E8E8", background: "#F8F9FA", fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#0A0A0A", outline: "none", transition: "border-color 0.15s", boxSizing: "border-box" }}
                onFocus={e => e.target.style.borderColor = "#003366"}
                onBlur={e => e.target.style.borderColor = "#E8E8E8"}
              />
            </div>
          </div>
        </div>

        {/* Preferred Time */}
        <div style={{ background: "#FFFFFF", border: "1px solid #E8E8E8", padding: "1.25rem", marginBottom: "1px" }}>
          <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280", marginBottom: "0.875rem" }}>
            Preferred Time Slot *
          </label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {timeSlots.map(slot => (
              <button key={slot} type="button" onClick={() => update("preferredTime", slot)}
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.06em", padding: "6px 14px", border: `1px solid ${form.preferredTime === slot ? "#003366" : "#E8E8E8"}`, background: form.preferredTime === slot ? "#003366" : "#FFFFFF", color: form.preferredTime === slot ? "white" : "#6B7280", cursor: "pointer", transition: "all 0.15s" }}>
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div style={{ background: "#FFFFFF", border: "1px solid #E8E8E8", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280", marginBottom: "0.5rem" }}>
            Anything specific to discuss? (optional)
          </label>
          <textarea value={form.message} onChange={e => update("message", e.target.value)} rows={3} placeholder="e.g. I want to know about MBBS in Kazakhstan specifically, or my FMGE prep plan..."
            style={{ width: "100%", padding: "0.625rem 0.75rem", border: "1px solid #E8E8E8", background: "#F8F9FA", fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#0A0A0A", outline: "none", resize: "none", transition: "border-color 0.15s", boxSizing: "border-box" }}
            onFocus={e => e.target.style.borderColor = "#003366"}
            onBlur={e => e.target.style.borderColor = "#E8E8E8"}
          />
        </div>

        {status === "error" && (
          <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", padding: "0.75rem 1rem", marginBottom: "1rem" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#DC2626", letterSpacing: "0.06em" }}>
              ⚠ Booking failed. Please try WhatsApp directly or check your EmailJS configuration.
            </p>
          </div>
        )}

        <button type="submit" disabled={!form.name || !form.phone || !form.preferredDate || !form.preferredTime || status === "sending"}
          className="btn-surgical" style={{ width: "100%", justifyContent: "center", opacity: (!form.name || !form.phone || !form.preferredDate || !form.preferredTime) ? 0.5 : 1, cursor: (!form.name || !form.phone || !form.preferredDate || !form.preferredTime) ? "not-allowed" : "pointer" }}>
          {status === "sending" ? (
            <><Loader2 size={14} className="animate-spin" /> Sending booking...</>
          ) : (
            <><Calendar size={14} /> Confirm Booking with {doctor?.name.split(" ")[1]}</>
          )}
        </button>

        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "#9CA3AF", letterSpacing: "0.06em", textAlign: "center", marginTop: "0.875rem" }}>
          Free · No obligation · Google Meet link sent via WhatsApp/call within 2 hours
        </p>
      </form>
    </div>
  );
}
