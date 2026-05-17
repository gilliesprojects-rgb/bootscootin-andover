import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boot Scootin' Andover | Line Dancing in Andover, Hampshire",
  description:
    "A friendly line dancing class in Andover, Hampshire. Beginners and experienced dancers welcome — come for the boots, stay for the buzz.",
  verification: {
    google: "Skg0yVjS8pjBQamSHtdHDJ4fN35yp05L_4Bcdt8lY6I",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
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
