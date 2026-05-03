import Link from "next/link";
import { Phone, Instagram, MapPin, Clock } from "lucide-react";
import { whatsappLink, instagramLink } from "@/lib/utils";
import { countries } from "@/data/countries";

export default function Footer() {
  const year = new Date().getFullYear();
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999";
  const igHandle = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "nishumbbsabroad";

  return (
    <footer className="bg-text-main text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-lg">NishU MBBS Abroad</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              India&apos;s only doctor-led MBBS abroad consultancy. Our counselors hold
              MBBS degrees from the same universities they recommend — because
              we&apos;ve been where you are.
            </p>
            <p className="text-white/50 text-xs italic">
              &quot;Future Doctors, Guided by Doctors.&quot;
            </p>
          </div>

          {/* Col 2: Countries */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Countries</h3>
            <ul className="space-y-2">
              {countries.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/countries/${c.slug}`}
                    className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/process", label: "Admission Process" },
                { href: "/eligibility", label: "Eligibility" },
                { href: "/universities", label: "Universities" },
                { href: "/blog", label: "Blog" },
                { href: "/faq", label: "FAQ" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-success" />
                  <span>+{waNumber.replace(/^91/, "+91 ")}</span>
                </a>
              </li>
              <li>
                <a
                  href={instagramLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Instagram className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>@{igHandle}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-start gap-2.5 text-white/70 text-sm">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Mon–Sat, 9 AM – 8 PM IST</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-white/50 text-xs">
          <p>© {year} NishU MBBS Abroad. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="bg-black/20">
        <div className="container-custom py-3">
          <p className="text-white/40 text-xs text-center leading-relaxed">
            All university information is provided for guidance only. Students are advised to
            verify NMC/WDOMS listings independently before making any payments. We do not share
            your information with any third parties.
          </p>
        </div>
      </div>
    </footer>
  );
}
