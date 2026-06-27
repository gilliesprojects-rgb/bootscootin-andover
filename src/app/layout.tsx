import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, business, venues } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Boot Scootin' Andover | Line Dancing in Andover, Hampshire",
    template: "%s | Boot Scootin' Andover",
  },
  description: business.description,
  keywords: [
    "line dancing Andover",
    "line dance classes Andover",
    "line dancing Hampshire",
    "country dancing Andover",
    "beginner line dancing",
    "Abbotts Ann line dancing",
    "Enham line dancing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Boot Scootin' Andover",
    title: "Boot Scootin' Andover | Line Dancing in Andover, Hampshire",
    description: business.description,
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Boot Scootin' Andover line dance class",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boot Scootin' Andover | Line Dancing in Andover, Hampshire",
    description: business.description,
    images: ["/hero.png"],
  },
  verification: {
    google: "Skg0yVjS8pjBQamSHtdHDJ4fN35yp05L_4Bcdt8lY6I",
  },
};

// LocalBusiness structured data — helps Google understand the business for local
// search and underpins the Google Business Profile listing.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: business.name,
  description: business.description,
  url: SITE_URL,
  email: business.email,
  telephone: `+${business.phoneIntl}`,
  image: `${SITE_URL}/hero.png`,
  logo: `${SITE_URL}/logo.png`,
  priceRange: business.priceRange,
  knowsAbout: ["Line dancing", "Country dancing", "Western dance"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Andover",
    addressRegion: "Hampshire",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "City",
    name: "Andover",
  },
  // The community halls where classes are held.
  location: venues.map((v) => ({
    "@type": "Place",
    name: v.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: v.streetAddress,
      addressLocality: v.locality,
      addressRegion: v.region,
      postalCode: v.postcode,
      addressCountry: "GB",
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XSGG7Y12FV"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XSGG7Y12FV');
          `}
        </Script>
      </body>
    </html>
  );
}
