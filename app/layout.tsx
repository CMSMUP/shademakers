import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";
import ChatWidget from "@/components/ChatWidget";
import StickyMobileCta from "@/components/StickyMobileCta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ShadeMakers | Commercial Office Blinds Dubai",
    template: "%s | ShadeMakers",
  },
  description:
    "Dubai's commercial blinds specialist for offices, towers & fit-out projects. Custom roller, venetian, smart motorized blinds with expert installation. Free project quote & site survey.",
  keywords: [
    "office blinds Dubai",
    "commercial blinds Dubai",
    "project blinds Dubai",
    "roller blinds Dubai",
    "venetian blinds Dubai",
    "smart blinds Dubai",
    "motorized blinds Dubai",
    "office window treatments Dubai",
    "blinds installation Dubai",
    "fit out blinds UAE",
  ],
  openGraph: {
    title: "ShadeMakers | Commercial Office Blinds Dubai",
    description:
      "Commercial blinds for offices & projects in Dubai. Roller, Venetian, Smart, and more. Free quote & installation.",
    url: "https://shademakers.ae",
    siteName: "ShadeMakers",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShadeMakers | Commercial Office Blinds Dubai",
    description:
      "Commercial blinds for offices & projects in Dubai. Free quote & installation.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://shademakers.ae",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ShadeMakers",
              description:
                "Commercial blinds specialist for offices & projects in Dubai, UAE",
              url: "https://shademakers.ae",
              telephone: "+971****4567",
              email: "info@shademakers.ae",
              areaServed: "Dubai, UAE",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              offers: [
                { "@type": "Offer", name: "Roller Blinds" },
                { "@type": "Offer", name: "Venetian Blinds" },
                { "@type": "Offer", name: "Smart Motorized Blinds" },
                { "@type": "Offer", name: "Zebra Blinds" },
                { "@type": "Offer", name: "Vertical Blinds" },
                { "@type": "Offer", name: "Roman Blinds" },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <Header />
          <main className="flex-1 pt-16 md:pt-20 pb-16 lg:pb-0">{children}</main>
          <Footer />
          <ChatWidget />
          <StickyMobileCta />
        </AuthProvider>
      </body>
    </html>
  );
}