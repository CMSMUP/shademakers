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
    default: "Curtain Makers | Premium Curtains & Blinds — Abu Dhabi & Dubai",
    template: "%s | Curtain Makers",
  },
  description:
    "Abu Dhabi's premier curtain and blinds specialist. Premium custom curtains, roller blinds, motorized blinds & expert installation for villas, hotels, offices & commercial projects across Abu Dhabi and Dubai.",
  keywords: [
    "curtains Abu Dhabi",
    "blinds Abu Dhabi",
    "office blinds Dubai",
    "curtain makers Abu Dhabi",
    "curtain shop Abu Dhabi",
    "villa curtains Abu Dhabi",
    "motorized curtains",
    "blackout curtains",
  ],
  openGraph: {
    title: "Curtain Makers | Premium Curtains & Blinds",
    description:
      "Abu Dhabi's premier curtain and blinds specialist. Custom curtains, roller blinds & motorized blinds for villas, hotels & offices.",
    url: "https://curtainmakers.ae",
    siteName: "Curtain Makers",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curtain Makers | Premium Curtains & Blinds",
    description:
      "Abu Dhabi's premier curtain and blinds specialist. Custom curtains & blinds for villas, hotels & commercial projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://curtainmakers.ae",
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
              name: "Curtain Makers",
              description:
                "Premium curtain and blinds specialist in Abu Dhabi and Dubai, UAE",
              url: "https://curtainmakers.ae",
              telephone: "+971****5678",
              email: "info@curtainmakers.ae",
              areaServed: ["Abu Dhabi", "Dubai", "UAE"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abu Dhabi",
                addressCountry: "AE",
              },
              offers: [
                { "@type": "Offer", name: "Custom Curtains" },
                { "@type": "Offer", name: "Roller Blinds" },
                { "@type": "Offer", name: "Motorized Blinds" },
                { "@type": "Offer", name: "Venetian Blinds" },
                { "@type": "Offer", name: "Smart Motorized Blinds" },
                { "@type": "Offer", name: "Zebra Blinds" },
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