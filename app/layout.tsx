import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const dmSerif = DM_Serif_Display({
  subsets: ["latin"], weight: "400", style: ["normal", "italic"],
  variable: "--font-display", display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"], weight: ["400", "700"],
  variable: "--font-mono", display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://worldwiseducation.in"),
  title: { default: "Worldwise Education — MBBS Abroad Consultancy", template: "%s | Worldwise Education" },
  description: "Premium MBBS abroad consultancy. Doctor-led guidance for NMC-approved universities in Russia, Georgia, Kazakhstan and 5 more countries.",
  keywords: ["mbbs abroad", "mbbs consultancy", "nmc approved universities", "mbbs russia", "mbbs georgia"],
  authors: [{ name: "Worldwise Education" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo_512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website", locale: "en_IN", siteName: "Worldwise Education",
    title: "Worldwise Education — For the Doctors, By the Doctors",
    description: "Doctor-led MBBS abroad consultancy. Free counseling from doctors who studied at the same universities they recommend.",
    images: [{ url: "/images/logo_512.png", width: 512, height: 512, alt: "Worldwise Education Logo" }],
  },
  twitter: { card: "summary_large_image", title: "Worldwise Education", description: "Doctor-led MBBS abroad consultancy.", images: ["/images/logo_512.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} ${spaceMono.variable}`}>
      <body className="bg-white text-ink antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-surgical text-white px-4 py-2 z-50">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
