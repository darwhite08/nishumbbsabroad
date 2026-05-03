import Link from "next/link";
import { Phone, Instagram, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { whatsappLink, instagramLink } from "@/lib/utils";
import { countries } from "@/data/countries";

export default function Footer() {
  const year = new Date().getFullYear();
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999";
  const igHandle = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "nishumbbsabroad";

  return (
    <footer style={{ background: "#060D1F" }}>
      {/* Main footer */}
      <div className="container-custom pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand — spans 4 cols */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #2E6DB4 100%)" }}>
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div>
                <p className="text-white font-bold text-[15px] leading-tight">Worldwise Education</p>
                <p className="text-white/30 text-[10px] tracking-widest uppercase">MBBS Abroad Consultancy</p>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              India&apos;s only MBBS abroad consultancy where every counselor holds an MBBS degree from
              a foreign university. For the doctors, by the doctors.
            </p>

            <div className="flex gap-3">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/[0.06] hover:bg-success/20 border border-white/[0.08] hover:border-success/30 text-white/60 hover:text-success text-xs px-4 py-2.5 rounded-xl transition-all duration-200 font-medium">
                <Phone className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <a href={instagramLink()} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/[0.06] hover:bg-pink-500/20 border border-white/[0.08] hover:border-pink-500/30 text-white/60 hover:text-pink-400 text-xs px-4 py-2.5 rounded-xl transition-all duration-200 font-medium">
                <Instagram className="w-3.5 h-3.5" />
                Instagram
              </a>
            </div>
          </div>

          {/* Countries — 3 cols */}
          <div className="lg:col-span-3">
            <p className="text-white/30 text-[10px] tracking-widest uppercase font-bold mb-5">
              Destinations
            </p>
            <ul className="space-y-2.5">
              {countries.map((c) => (
                <li key={c.slug}>
                  <Link href={`/countries/${c.slug}`}
                    className="group flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200">
                    <span className="text-base">{c.flag}</span>
                    <span>{c.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links — 2 cols */}
          <div className="lg:col-span-2">
            <p className="text-white/30 text-[10px] tracking-widest uppercase font-bold mb-5">
              Company
            </p>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/process", label: "Admission Process" },
                { href: "/eligibility", label: "Eligibility" },
                { href: "/universities", label: "Universities" },
                { href: "/blog", label: "Blog" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 3 cols */}
          <div className="lg:col-span-3">
            <p className="text-white/30 text-[10px] tracking-widest uppercase font-bold mb-5">
              Contact
            </p>
            <div className="space-y-4">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 group">
                <div className="w-7 h-7 rounded-lg bg-success/10 flex items-center justify-center mt-0.5 shrink-0">
                  <Phone className="w-3.5 h-3.5 text-success" />
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-0.5">WhatsApp</p>
                  <p className="text-white/90 text-sm font-medium group-hover:text-success transition-colors">
                    +{waNumber.replace(/^91/, "91 ")}
                  </p>
                </div>
              </a>

              <a href={instagramLink()} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 group">
                <div className="w-7 h-7 rounded-lg bg-pink-500/10 flex items-center justify-center mt-0.5 shrink-0">
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-0.5">Instagram</p>
                  <p className="text-white/90 text-sm font-medium group-hover:text-pink-400 transition-colors">
                    @{igHandle}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center mt-0.5 shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-white/40" />
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-0.5">Office</p>
                  <p className="text-white/70 text-sm">New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center mt-0.5 shrink-0">
                  <Clock className="w-3.5 h-3.5 text-white/40" />
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-0.5">Hours</p>
                  <p className="text-white/70 text-sm">Mon–Sat, 9AM–8PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">© {year} Worldwise Education. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/25 hover:text-white/50 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="text-white/25 hover:text-white/50 text-xs transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container-custom py-3">
          <p className="text-white/20 text-[11px] text-center leading-relaxed">
            All university information is for guidance only. Verify NMC/WDOMS listings independently before making any payments.
            We do not share your information with third parties.
          </p>
        </div>
      </div>
    </footer>
  );
}
