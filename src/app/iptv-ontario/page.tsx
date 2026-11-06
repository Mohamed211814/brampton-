import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Wifi, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { JsonLd } from "@/components/common/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "IPTV Ontario | High Definition Streaming in the GTA & Across Ontario",
  description:
    "Comprehensive guide to IPTV service across Ontario, Canada. Low latency Toronto TorIX peering, regional Ontario channels (CP24, TVO, Sportsnet Ontario), and CAD subscription plans.",
  alternates: {
    canonical: "/iptv-ontario",
  },
  openGraph: {
    title: "IPTV Ontario | High Definition Streaming in the GTA & Across Ontario",
    description:
      "Comprehensive guide to IPTV service across Ontario, Canada. Low latency Toronto TorIX peering, regional Ontario channels (CP24, TVO, Sportsnet Ontario), and CAD subscription plans.",
    url: `${siteConfig.url}/iptv-ontario`,
  },
};

export default function IptvOntarioPage() {
  const ontarioFaqs = [
    {
      question: "Why does TorIX and Ontario CDN routing matter for streaming?",
      answer:
        "The Toronto Internet Exchange (TorIX) is one of the largest telecommunications interconnection points in North America. By routing our IPTV streaming servers directly through Ontario data centers, traffic hops are minimized between your home router and the video source. This eliminates the buffering spikes often seen with offshore IPTV services during high-demand events like NHL playoff games.",
    },
    {
      question: "Are regional Ontario channels like CP24 and CHCH included?",
      answer:
        "Yes. Our channel directory includes Ontario domestic and regional feeds such as CP24 (Toronto Breaking News & Weather), CHCH Hamilton, TVO (Ontario Educational Broadcasts), CTV News Toronto, and regional sports networks including Sportsnet Ontario and TSN 4.",
    },
    {
      question: "Which areas in Ontario are covered by the service?",
      answer:
        "Our service is accessible across the entire province of Ontario: Peel Region (Brampton, Mississauga), Toronto, York Region (Vaughan, Markham, Richmond Hill), Halton Region (Oakville, Burlington), Durham Region (Oshawa, Pickering), Ottawa, Hamilton, Kitchener-Waterloo, London, Windsor, and Northern Ontario communities.",
    },
    {
      question: "Does the service work with rural Ontario internet (Starlink, Xplore)?",
      answer:
        "Yes. Subscribers in rural or semi rural Ontario using low earth orbit satellite internet like Starlink or fixed wireless broadband can stream reliably, provided their download speed meets the minimum 15 25 Mbps recommendation.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ontarioFaqs.map((faq) => ({
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <Breadcrumbs items={[{ label: "IPTV Ontario", href: "/iptv-ontario" }]} />

        {/* Page Hero */}
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-red-600" />
            <span>Ontario Provincial Streaming Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            IPTV Ontario: High Definition Streaming for the Greater Toronto Area &amp; Beyond
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Ontario is Canada&apos;s most populous province and the technological hub of Canadian broadband infrastructure. Discover how <strong className="text-slate-950 font-semibold">IPTV Ontario</strong> leverages local edge data centers, regional broadcast feeds, and transparent Canadian pricing to deliver an optimal television experience.
          </p>
        </div>

        {/* Regional Ontario Hubs */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Key Ontario Regions &amp; Municipalities Covered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-red-500 hover:bg-white transition-all space-y-3 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">
                Peel Region &amp; Greater Toronto
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dense residential hubs across <strong>Brampton</strong>, Mississauga, Toronto, Vaughan, and Markham with immediate access to 1 Gbps+ fiber connections and high-density 4K sports streaming.
              </p>
              <div className="pt-2 text-xs">
                <Link href="/iptv-brampton" className="text-red-600 hover:underline flex items-center gap-1 font-bold">
                  View Brampton Local Service <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-red-500 hover:bg-white transition-all space-y-3 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">
                Hamilton, Niagara &amp; Halton
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Coverage across Hamilton, Burlington, Oakville, St. Catharines, and Niagara Falls with complete feeds of regional news and cross border Buffalo, NY broadcast stations.
              </p>
              <div className="pt-2 text-xs text-slate-500">
                <span>CHCH, CTV News &amp; US Networks</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-red-500 hover:bg-white transition-all space-y-3 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">
                Ottawa &amp; Eastern Ontario
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bilingual television streaming serving the National Capital Region (Ottawa-Gatineau), Kingston, and Cornwall with simultaneous English and French Canadian channel packages.
              </p>
              <div className="pt-2 text-xs text-slate-500">
                <span>TVA, Radio-Canada, TSN &amp; Sportsnet</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical TorIX Peering Overview */}
        <section className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider">
              <Wifi className="w-4 h-4" />
              <span>Low Hop CDN Routing</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Why Local Ontario Server Architecture Matters
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              When watching a fast paced hockey game in 60 frames per second, network delay is paramount. If a stream must travel across international subsea cables before reaching your television in Ontario, packet loss and buffering spikes inevitably occur during prime time.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our streaming network utilizes low latency proxy nodes positioned within major Ontario data facilities. This keeps round-trip latency to residential Bell, Rogers, and Cogeco modems under 30 milliseconds, ensuring instant channel zapping and pristine playback.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs text-slate-400">Target Latency</span>
              <div className="text-xl font-bold text-red-500 mt-1">&lt; 30 ms</div>
              <span className="text-[11px] text-slate-500">Ontario ISP routing</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs text-slate-400">Sports Framerate</span>
              <div className="text-xl font-bold text-white mt-1">60 FPS</div>
              <span className="text-[11px] text-slate-500">Fluid puck &amp; ball tracking</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs text-slate-400">Currency</span>
              <div className="text-xl font-bold text-red-500 mt-1">100% CAD</div>
              <span className="text-[11px] text-slate-500">No USD conversion fees</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs text-slate-400">Uptime Metric</span>
              <div className="text-xl font-bold text-white mt-1">99.9%</div>
              <span className="text-[11px] text-slate-500">Redundant server failover</span>
            </div>
          </div>
        </section>

        {/* Ontario FAQ Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700">
              Provincial FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Ontario IPTV Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={ontarioFaqs} defaultOpenIndex={0} />
        </section>

        {/* Pricing CTA */}
        <div className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-950">
            Experience High Definition Television Across Ontario
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Choose from flexible 1-month, 3-month, or 12-month plans in Canadian Dollars.
          </p>
          <div className="pt-2">
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-200 transition-colors"
            >
              <span>View Subscription Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
