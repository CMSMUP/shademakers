import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";
import ChatWidget from "@/components/ChatWidget";

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
    default: "Office Blinds Dubai | Premium Commercial Blinds & Installation",
    template: "%s | Office Blinds Dubai",
  },
  description:
    "Dubai's premier commercial blinds specialist. Premium roller blinds, venetian blinds, smart motorized blinds, and expert installation for offices across Dubai, UAE. Free quote & site visit.",
  keywords: [
    "office blinds Dubai",
    "commercial blinds Dubai",
    "roller blinds Dubai",
    "venetian blinds Dubai",
    "smart blinds Dubai",
    "motorized blinds Dubai",
    "office window treatments Dubai",
    "blinds installation Dubai",
  ],
  openGraph: {
    title: "Office Blinds Dubai | Premium Commercial Blinds",
    description:
      "Premium commercial blinds for offices in Dubai. Roller, Venetian, Smart, and more. Free quote & installation.",
    url: "https://officeblindsdubai.com",
    siteName: "Office Blinds Dubai",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Blinds Dubai | Premium Commercial Blinds",
    description:
      "Premium commercial blinds for offices in Dubai. Free quote & installation.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://officeblindsdubai.com",
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
              name: "Office Blinds Dubai",
              description:
                "Premium commercial blinds specialist in Dubai, UAE",
              url: "https://officeblindsdubai.com",
              telephone: "+97141234567",
              email: "info@officeblindsdubai.com",
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
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
          <ChatWidget />
        </AuthProvider>
      </body>
    </html>
  );
}