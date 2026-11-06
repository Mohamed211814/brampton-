import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { JsonLd } from "@/components/common/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | IPTV Brampton & Canada",
  description:
    "Find answers to common questions about IPTV in Brampton, Ontario. Learn about compatible devices, subscription costs in CAD, internet speed recommendations, and setup steps.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | IPTV Brampton & Canada",
    description:
      "Find answers to common questions about IPTV in Brampton, Ontario. Learn about compatible devices, subscription costs in CAD, internet speed recommendations, and setup steps.",
    url: `${siteConfig.url}/faq`,
  },
};

export default function FaqPage() {
  const generalFaqs = [
    {
      question: "What is IPTV in Brampton?",
      answer:
        "IPTV (Internet Protocol Television) delivers television programming, live sports, news, and on demand movies over your existing high-speed internet connection instead of traditional coaxial cable or satellite dishes. For Brampton residents connected via Bell Fibe, Rogers Ignite, TekSavvy, or Cogeco, IPTV offers a flexible, modern streaming alternative that works seamlessly on Smart TVs, Firesticks, and mobile devices.",
    },
    {
      question: "Can I use IPTV in Canada?",
      answer:
        "Yes, you can use IPTV services in Canada across all provinces and territories. Viewers in Brampton and throughout Ontario simply need a stable broadband internet connection with recommended download speeds of at least 15 25 Mbps for smooth HD streaming and 30 50 Mbps for 4K content.",
    },
    {
      question: "Can I test the service before purchasing a long term plan?",
      answer:
        "Yes, we offer short term 1-month subscriptions ($19 CAD) with zero commitment so you can thoroughly test stream stability, channel selection, and device compatibility in your Brampton home before committing to a longer subscription.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 7 days a week from 9:00 AM to 11:00 PM EST via WhatsApp and email at support@iptvbrampton.ca. Typical response time is under two hours.",
    },
  ];

  const deviceFaqs = [
    {
      question: "Which devices support IPTV?",
      answer:
        "Our service is compatible with virtually all modern streaming hardware: Amazon Fire TV Sticks (all generations), Samsung & LG Smart TVs, Android TV boxes (including Nvidia Shield and Chromecast with Google TV), Apple TV, iPhones, iPads, Android smartphones, Windows PCs, Mac computers, and dedicated IPTV hardware such as Formuler and MAG devices.",
    },
    {
      question: "Does IPTV work on Smart TVs?",
      answer:
        "Yes. Smart TVs running Android TV, Google TV, Samsung Tizen, or LG webOS can easily install compatible IPTV player applications such as IPTV Smarters Pro, IBO Player, or Smart IPTV directly from their respective app stores.",
    },
    {
      question: "How do I set up an IPTV subscription on an Amazon Firestick?",
      answer:
        "Installing on Firestick takes 5 minutes using the free Downloader app. You download an IPTV player like TiviMate or IPTV Smarters Pro, enter the Xtream Codes server URL and credentials provided upon subscribing, and your channels will automatically populate with full TV guide data.",
    },
    {
      question: "Can I use the service on MAG or Formuler boxes?",
      answer:
        "Yes. We support Stalker Portal for MAG devices and MyTVOnline 2 & 3 for Formuler boxes. Simply provide your MAC address when completing your order inquiry.",
    },
  ];

  const speedFaqs = [
    {
      question: "What internet speed do I need for IPTV streaming in Brampton?",
      answer:
        "We recommend a minimum download speed of 15 25 Mbps for steady Full HD (1080p @ 60fps) streaming and 35 50 Mbps for 4K Ultra HD streams. For households where multiple family members stream simultaneously, an internet package of 100 Mbps or greater from Bell, Rogers, or TekSavvy is optimal.",
    },
    {
      question: "Are HD and 4K streams available?",
      answer:
        "Yes, high definition (HD) streams are standard across all major channels, and 4K Ultra HD feeds are provided for select live sports, special events, and high-production movie content where the original broadcaster transmits in 4K resolution.",
    },
    {
      question: "Why do some streams buffer during evening prime time?",
      answer:
        "Buffering usually stems from two factors: Wi-Fi interference on 2.4 GHz frequencies or overseas server routing. We recommend connecting your streaming device to 5 GHz Wi-Fi or wired Ethernet, while our CDN routes your data through low latency Toronto peering exchanges to keep buffering at near zero.",
    },
  ];

  const billingFaqs = [
    {
      question: "How much does an IPTV subscription cost in Brampton?",
      answer:
        "Our IPTV subscription plans for Brampton and Canadian customers are billed in Canadian Dollars (CAD). We offer flexible options: $19 CAD for 1 Month, $49 CAD for 3 Months, and $129 CAD for 12 Months. There are no contracts, no hidden installation fees, and no equipment rental charges.",
    },
    {
      question: "Are there contracts or cancellation penalties?",
      answer:
        "No. All subscriptions are prepaid for the duration selected with no automatic contracts or cancellation penalties. You can choose whether to renew when your period expires.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We provide dedicated technical onboarding support to resolve any app or device configuration issues. If technical problems cannot be resolved within the eligible refund window, refund requests are reviewed transparently under our published Refund Policy.",
    },
  ];

  const allFaqs = [...generalFaqs, ...deviceFaqs, ...speedFaqs, ...billingFaqs];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="py-8 sm:py-12 bg-white">
      <JsonLd data={faqSchema} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <Breadcrumbs items={[{ label: "Frequently Asked Questions", href: "/faq" }]} />

        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Knowledge Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Everything you need to know about IPTV service in Brampton, Ontario, and Canada. Browse by category below or contact us directly if you need personalized setup advice.
          </p>
        </div>

        {/* Category 1: General */}
        <section className="space-y-5">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">General &amp; Service Overview</h2>
          </div>
          <FaqAccordion items={generalFaqs} defaultOpenIndex={0} />
        </section>

        {/* Category 2: Device Setup */}
        <section className="space-y-5">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">Device Setup &amp; Hardware Compatibility</h2>
          </div>
          <FaqAccordion items={deviceFaqs} defaultOpenIndex={null} />
        </section>

        {/* Category 3: Speed & Quality */}
        <section className="space-y-5">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">Internet Speed &amp; Streaming Quality</h2>
          </div>
          <FaqAccordion items={speedFaqs} defaultOpenIndex={null} />
        </section>

        {/* Category 4: Billing */}
        <section className="space-y-5">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950">Plans, CAD Pricing &amp; Billing</h2>
          </div>
          <FaqAccordion items={billingFaqs} defaultOpenIndex={null} />
        </section>

        {/* Help Banner */}
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4 shadow-sm">
          <HelpCircle className="w-10 h-10 text-red-600 mx-auto" />
          <h3 className="text-2xl font-bold text-slate-950">Still have a question?</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Our Canadian support team is available 7 days a week to help you choose the right plan or configure your device.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-200"
            >
              Contact Support
            </Link>
            <a
              href={siteConfig.contact.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-900 bg-white border border-slate-300 hover:bg-slate-100 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-red-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
