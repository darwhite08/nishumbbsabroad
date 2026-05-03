import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NishU MBBS Abroad — Doctor-Led MBBS Abroad Consultancy",
    template: "%s | NishU MBBS Abroad",
  },
  description:
    "India's only doctor-led MBBS abroad consultancy. Our counselors hold MBBS degrees from the same universities. Get honest, expert guidance for MBBS in Russia, Georgia, Kazakhstan, and 5 more countries.",
  keywords: [
    "mbbs abroad",
    "mbbs abroad consultancy",
    "mbbs in russia",
    "mbbs in georgia",
    "nmc approved universities",
    "mbbs abroad for indian students",
    "doctor led mbbs counseling",
  ],
  authors: [{ name: "NishU MBBS Abroad" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "NishU MBBS Abroad",
    title: "NishU MBBS Abroad — Doctor-Led MBBS Consultancy",
    description:
      "Guided by doctors who've been there. Get honest MBBS abroad counseling from a team with MBBS degrees from Russia, Georgia, Kazakhstan, and Philippines.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NishU MBBS Abroad",
    description:
      "Doctor-led MBBS abroad consultancy. Honest guidance from doctors who studied abroad.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
        >
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
