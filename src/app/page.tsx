import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { TrustBenefits } from "@/components/home/TrustBenefits";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ContentCategories } from "@/components/home/ContentCategories";
import { CompatibleDevices } from "@/components/home/CompatibleDevices";
import { PricingSection } from "@/components/home/PricingSection";
import { BramptonLocalSection } from "@/components/home/BramptonLocalSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FinalCta } from "@/components/home/FinalCta";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { JsonLd } from "@/components/common/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "IPTV Brampton | Premium IPTV Subscription in Brampton, Canada",
  description:
    "Looking for IPTV in Brampton, Canada? Explore our subscription plans, compatible devices, service features and customer support. Find the right plan for your needs.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IPTV Brampton | Premium IPTV Subscription in Brampton, Canada",
    description:
      "Looking for IPTV in Brampton, Canada? Explore our subscription plans, compatible devices, service features and customer support. Find the right plan for your needs.",
    url: siteConfig.url,
  },
};

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: "IPTV Brampton | Premium IPTV Subscription in Brampton, Canada",
        description:
          "Looking for IPTV in Brampton, Canada? Explore our subscription plans, compatible devices, service features and customer support. Find the right plan for your needs.",
        inLanguage: "en-CA",
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#service`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/hero-bg.jpg`,
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "IPTV Brampton",
              item: siteConfig.url,
            },
          ],
        },
      },
      {
        "@type": "Product",
        "@id": `${siteConfig.url}/#product`,
        name: "IPTV Brampton Subscription",
        description:
          "High definition IPTV streaming subscription designed for Brampton and Canadian viewers. Access thousands of live TV channels, regional sports networks, on demand movies, and 4K streams with no contracts.",
        image: `${siteConfig.url}/hero-bg.jpg`,
        brand: {
          "@type": "Brand",
          name: "IPTV Brampton",
        },
        category: "Electronics > Video > Television Streaming Services",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "CAD",
          lowPrice: "12.99",
          highPrice: "79.99",
          offerCount: "4",
          offers: siteConfig.pricingPlans.map((plan) => ({
            "@type": "Offer",
            name: `${plan.name} - IPTV Brampton`,
            price: plan.price,
            priceCurrency: "CAD",
            priceValidUntil: "2027-12-31",
            availability: "https://schema.org/InStock",
            url: `${siteConfig.url}/#pricing`,
          })),
        },
      },
      {
        "@type": "HowTo",
        "@id": `${siteConfig.url}/#howto`,
        name: "How to Set Up IPTV in Brampton in 3 Steps",
        description:
          "Simple 3-step guide to choosing an IPTV subscription, ordering via WhatsApp or web, and streaming on your Smart TV or Firestick.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Choose a Subscription",
            text: "Select your preferred subscription duration: 1 Month ($12.99 CAD), 3 Months ($25.50 CAD), 6 Months ($50.99 CAD), or 12 Months ($79.99 CAD).",
            url: `${siteConfig.url}/#pricing`,
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Complete Your Order on WhatsApp",
            text: "Submit your streaming hardware preference (Firestick, Smart TV, Android box, or Apple device) and receive instant order confirmation.",
            url: `${siteConfig.url}/#pricing`,
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Receive Credentials & Stream",
            text: "Receive your M3U playlist link and Xtream Codes credentials via WhatsApp and email. Follow the simple app setup instructions and start streaming in under 5 minutes.",
            url: `${siteConfig.url}/#pricing`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: siteConfig.homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={homeSchema} />

      {/* Hero Section */}
      <Hero />

      {/* How It Works (3 Steps) */}
      <HowItWorks />

      {/* Subscription Plans (CAD) */}
      <PricingSection />

      {/* Trust and Benefits Feature Cards */}
      <TrustBenefits />

      {/* Why Choose Our IPTV Service */}
      <WhyChooseUs />

      {/* Content Categories Showcase */}
      <ContentCategories />

      {/* Compatible Devices */}
      <CompatibleDevices />

      {/* In-Depth Local & Technical SEO Article Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
              Brampton Streaming Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              IPTV Brampton Discover a Better Streaming Experience
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              If you live in <strong className="text-slate-950 font-semibold">Brampton, Ontario</strong>, you understand how television viewing has evolved. With major telecommunications bills continually rising, hundreds of households across the <strong className="text-slate-950 font-semibold">Greater Toronto Area (GTA)</strong> and <strong className="text-slate-950 font-semibold">Peel Region</strong> are searching for high definition streaming solutions that deliver superior channel selection, low latency live sports, and multi device convenience without long term contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700 leading-relaxed">
            <div className="space-y-4 p-6 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                <span>Optimized for Brampton Broadband Networks</span>
              </h3>
              <p>
                An IPTV service is only as good as the internet connection feeding it. Brampton features a modern network backbone anchored by Bell Fibe gigabit fiber, Rogers Ignite broadband, and independent providers such as TekSavvy, Start.ca, and Cogeco.
              </p>
              <p>
                Our Content Delivery Network (CDN) peers directly with major Ontario internet exchange hubs in downtown Toronto. This strategic routing ensures that video packets avoid unnecessary international hops, delivering near-zero latency, rapid channel changing times, and buffer free live sports broadcasts during Saturday night hockey or international cricket matches.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-600 shrink-0" />
                <span>Authentic Canadian Content &amp; Local Focus</span>
              </h3>
              <p>
                Many offshore IPTV subscriptions fail to provide the Canadian channels local viewers need on a daily basis. With our service, Brampton households enjoy comprehensive access to regional Canadian news feeds (including CP24, CTV News Toronto, and Global News GTA), nationwide broadcasters (CBC and Citytv), and domestic sports networks (TSN and Sportsnet).
              </p>
              <p>
                In addition, our playlists cater directly to Brampton&apos;s vibrant multicultural community, featuring high-quality South Asian (Punjabi, Hindi, Urdu, Tamil), European (Portuguese, Italian, Spanish), and Caribbean programming alongside premium Hollywood and international cinema.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Understanding Device Compatibility for Peel Region Homes
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Whether your living room features a brand new 65-inch Samsung Neo QLED, an LG OLED running webOS, or an Amazon Fire TV Stick 4K plugged into a bedroom display, setting up your IPTV service is straightforward. We supply standard Xtream Codes API credentials and M3U playlist URLs compatible with top-rated applications such as <strong>TiviMate IPTV Player</strong>, <strong>IBO Player</strong>, <strong>IPTV Smarters Pro</strong>, and <strong>XCIPTV</strong>.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold">
              <Link href="/iptv-brampton" className="text-red-600 hover:text-red-700 flex items-center gap-1">
                Explore Brampton Neighborhood Streaming <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/iptv-ontario" className="text-slate-700 hover:text-slate-950 flex items-center gap-1">
                Ontario Regional Coverage <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/iptv-canada" className="text-slate-700 hover:text-slate-950 flex items-center gap-1">
                Canada Nationwide Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Brampton Customers Choose Us (Local Neighborhood Focus) */}
      <BramptonLocalSection />

      {/* Frequently Asked Questions Accordion */}
      <section id="faq" className="py-20 bg-slate-50/70 relative border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Frequently Asked Questions About IPTV in Brampton
            </h2>
            <p className="text-slate-600 text-base">
              Clear, transparent answers about IPTV subscriptions, device compatibility, setup instructions, and streaming in Canada.
            </p>
          </div>

          <FaqAccordion items={siteConfig.homeFaqs} defaultOpenIndex={0} />

          <div className="mt-12 text-center text-xs text-slate-600 flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-red-600" />
            <span>Have a technical question not answered here?</span>
            <Link href="/contact" className="text-red-600 hover:underline font-bold">
              Contact our Canadian team
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <FinalCta />
    </>
  );
}
