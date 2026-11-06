import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck, X } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PricingSection } from "@/components/home/PricingSection";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { JsonLd } from "@/components/common/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans & CAD Pricing | IPTV Brampton",
  description:
    "Explore transparent IPTV subscription plans for Brampton and Canada in Canadian Dollars (CAD). 1 Month, 3 Months, and 12 Months plans with no contracts or hidden fees.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "IPTV Subscription Plans & CAD Pricing | IPTV Brampton",
    description:
      "Explore transparent IPTV subscription plans for Brampton and Canada in Canadian Dollars (CAD). 1 Month, 3 Months, and 12 Months plans with no contracts or hidden fees.",
    url: `${siteConfig.url}/pricing`,
  },
};

export default function PricingPage() {
  const pricingFaqs = [
    {
      question: "Are there any hidden fees or equipment charges?",
      answer:
        "No. You only pay the advertised Canadian Dollar (CAD) subscription rate. There are zero activation fees, zero hardware rental costs, and zero cancellation penalties.",
    },
    {
      question: "Will my subscription automatically rebill my credit card?",
      answer:
        "No recurring auto rebill is forced upon you. When your subscription period nears expiration, our team will send a friendly renewal reminder via email or WhatsApp. You decide whether to renew.",
    },
    {
      question: "Can I use one subscription on multiple devices?",
      answer:
        "You can install your IPTV credentials on multiple devices (for example, your living room Smart TV, bedroom Firestick, and your smartphone), but standard plans permit one active simultaneous stream at a time. If you require multi screen simultaneous streaming for larger households, contact our team for multi connection add-on options.",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "We support standard Canadian payment methods including major credit cards and Interac e-Transfer for instant Canadian Dollar settlements without foreign exchange transaction fees.",
    },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "IPTV Brampton Subscription Access",
    description:
      "High-definition IPTV streaming access for Brampton, Ontario and Canadian households.",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: siteConfig.pricingPlans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price.toString(),
      priceCurrency: "CAD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/pricing`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const comparisonFeatures = [
    { name: "Live TV Channels (Canadian, US & World)", m1: true, m3: true, m12: true },
    { name: "Canadian Regional Sports (TSN & Sportsnet)", m1: true, m3: true, m12: true },
    { name: "Full HD (1080p @ 60fps) Streams", m1: true, m3: true, m12: true },
    { name: "4K Ultra HD Feeds (Select Events)", m1: true, m3: true, m12: true },
    { name: "Electronic Program Guide (EPG)", m1: true, m3: true, m12: true },
    { name: "On Demand Movies & TV Series (VOD)", m1: true, m3: true, m12: true },
    { name: "Xtream Codes API & M3U URL Support", m1: true, m3: true, m12: true },
    { name: "Smart TV, Firestick, Android, iOS & PC", m1: true, m3: true, m12: true },
    { name: "Priority Playlist Updates & VIP Support", m1: false, m3: true, m12: true },
    { name: "Free Channel Relocation / Favorite Setup", m1: false, m3: true, m12: true },
  ];

  return (
    <div className="py-8 sm:py-12 bg-white">
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />

        {/* Pricing Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            100% Canadian Currency (CAD)
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Flexible IPTV Subscription Plans
          </h1>
          <p className="text-base sm:text-lg text-slate-700">
            Enjoy premium live television, high definition sports, and extensive on demand entertainment with clear pricing in Canadian Dollars and zero lock in contracts.
          </p>
        </div>

        {/* 3 Pricing Cards Component */}
        <PricingSection
          title="Choose Your Subscription Duration"
          subtitle="All subscriptions come with full access to Canadian, US, and international channel lineups."
        />

        {/* Feature Comparison Matrix Table */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Detailed Plan Feature Comparison
            </h2>
            <p className="text-slate-600 text-sm">
              Review every feature included across our 1-month, 3-month, and 12-month access plans.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-xs font-bold uppercase text-slate-900 border-b border-slate-200">
                  <tr>
                    <th scope="col" className="py-4 px-6">Feature</th>
                    <th scope="col" className="py-4 px-4 text-center">1 Month ($19 CAD)</th>
                    <th scope="col" className="py-4 px-4 text-center">3 Months ($49 CAD)</th>
                    <th scope="col" className="py-4 px-4 text-center">12 Months ($129 CAD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-6 font-medium text-slate-900">{row.name}</td>
                      <td className="py-3.5 px-4 text-center">
                        {row.m1 ? (
                          <Check className="w-4 h-4 text-red-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        {row.m3 ? (
                          <Check className="w-4 h-4 text-red-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        {row.m12 ? (
                          <Check className="w-4 h-4 text-red-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Transparent Guarantee Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-red-600 text-sm font-bold">
              <ShieldCheck className="w-5 h-5" />
              <span>Transparent Canadian Refund &amp; Support Policy</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950">
              Technical Onboarding Assistance with Every Subscription
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed">
              If you experience any difficulty configuring your device or player app, our team will assist you via step by step guidance. Read our full{" "}
              <Link href="/refund-policy" className="text-red-600 underline hover:text-red-700 font-bold">
                refund policy
              </Link>{" "}
              for complete details.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-black transition-colors"
          >
            Ask a Question First
          </Link>
        </div>

        {/* Pricing FAQ */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700">
              Billing Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Subscription &amp; Billing Questions
            </h2>
          </div>
          <FaqAccordion items={pricingFaqs} defaultOpenIndex={0} />
        </section>
      </div>
    </div>
  );
}
