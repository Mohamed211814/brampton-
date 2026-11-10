import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { JsonLd } from "@/components/common/JsonLd";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "IPTV Brampton | Premium IPTV Subscription in Brampton, Canada",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Looking for IPTV in Brampton, Canada? Explore our subscription plans, compatible devices, service features and customer support. Find the right plan for your needs.",
  keywords: [
    "IPTV Brampton",
    "IPTV in Brampton",
    "Best IPTV Brampton",
    "IPTV service Brampton",
    "IPTV subscription Brampton",
    "IPTV Canada",
    "Best IPTV Canada",
    "IPTV Ontario",
    "Brampton IPTV service",
  ],
  authors: [{ name: "IPTV Brampton Team" }],
  creator: "IPTV Brampton",
  publisher: "IPTV Brampton",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "IPTV Brampton | Premium IPTV Subscription in Brampton, Canada",
    description:
      "Looking for IPTV in Brampton, Canada? Explore our subscription plans, compatible devices, service features and customer support. Find the right plan for your needs.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "IPTV Brampton High Definition Streaming in Canada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Brampton | Premium IPTV Subscription in Brampton, Canada",
    description:
      "Looking for IPTV in Brampton, Canada? Explore our subscription plans, compatible devices, service features and customer support.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION_ID
    ? {
        google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_ID,
      }
    : undefined,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: ["IPTV Brampton Canada", "IPTV Service Brampton", "IPTV Subscription Brampton"],
        url: siteConfig.url,
        logo: `${siteConfig.url}/brand-flag.png`,
        image: `${siteConfig.url}/hero-bg.jpg`,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phone,
            email: siteConfig.contact.email,
            contactType: "customer service",
            areaServed: "CA",
            availableLanguage: ["en"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Brampton",
          addressRegion: "ON",
          addressCountry: "CA",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: "IPTV Brampton",
        alternateName: "IPTV Brampton - Premium Canadian IPTV Subscription",
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en-CA",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/blog?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/#service`,
        name: "IPTV Brampton Subscription Service",
        serviceType: "Internet Protocol Television (IPTV)",
        description:
          "High definition IPTV subscription services for viewers in Brampton, Ontario and across Canada with flexible CAD pricing and no long term contracts.",
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: [
          {
            "@type": "City",
            name: "Brampton",
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "Ontario",
            },
          },
          {
            "@type": "AdministrativeArea",
            name: "Ontario",
          },
          {
            "@type": "Country",
            name: "Canada",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "IPTV Brampton Subscription Plans",
          itemListElement: siteConfig.pricingPlans.map((plan) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `${plan.name} - IPTV Brampton`,
              description: plan.description,
            },
            price: plan.price,
            priceCurrency: "CAD",
            priceValidUntil: "2027-12-31",
            availability: "https://schema.org/InStock",
            url: `${siteConfig.url}/#pricing`,
          })),
        },
      },
    ],
  };

  return (
    <html lang="en-CA" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="IPTV Brampton" />
        <meta name="theme-color" content="#ffffff" />
        <JsonLd data={globalSchema} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-slate-900 antialiased flex flex-col font-sans`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
