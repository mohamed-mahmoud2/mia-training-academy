import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Cairo } from "next/font/google";
import { Providers } from "./providers";
import { siteUrl } from "@/lib/site-config";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MIA Academy — Maadi International Academy",
  description:
    "Maadi International Academy (MIA) — accredited professional diplomas and hands-on training in journalism, business administration, surveying, nursing, medical analysis, petroleum technology, tourism & hotels, information systems, and languages & translation, in Maadi, Cairo.",
  keywords: [
    "Maadi International Academy",
    "MIA Academy",
    "أكاديمية المعادي الدولية",
    "professional diplomas Egypt",
    "vocational training Cairo",
    "دبلومات مهنية مصر",
  ],
  authors: [{ name: "MIA Academy" }],
  icons: { icon: "/favicon.png" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "MIA Academy",
    locale: "ar_EG",
    alternateLocale: "en_US",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Maadi International Academy",
  alternateName: "MIA Academy",
  url: siteUrl,
  logo: `${siteUrl}/images/mia-logo.webp`,
  foundingDate: "2017",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Road 9",
    addressLocality: "Maadi, Cairo",
    addressCountry: "EG",
  },
  telephone: "+20 2 2358 0100",
  email: "info@mia-academy.edu",
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${fraunces.variable} ${plusJakartaSans.variable} ${cairo.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
