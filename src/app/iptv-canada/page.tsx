import type { Metadata } from "next";
import Link from "next/link";
import { Flag, ShieldCheck, Tv, Trophy, Globe2, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { JsonLd } from "@/components/common/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "IPTV Canada | Nationwide High Definition Streaming Guide",
  description:
    "Discover IPTV streaming across Canada. Complete coverage of Canadian networks, NHL, CFL, Raptors, Blue Jays, French & English feeds, and CAD subscription plans.",
  alternates: {
    canonical: "/iptv-canada",
  },
  openGraph: {
    title: "IPTV Canada | Nationwide High Definition Streaming Guide",
    description:
      "Discover IPTV streaming across Canada. Complete coverage of Canadian networks, NHL, CFL, Raptors, Blue Jays, French & English feeds, and CAD subscription plans.",
    url: `${siteConfig.url}/iptv-canada`,
  },
};

export default function IptvCanadaPage() {
  const canadaFaqs = [
    {
      question: "Can I use an IPTV subscription anywhere in Canada?",
      answer:
        "Yes. As long as you have an active high-speed broadband or mobile data connection in Canada (via Bell, Rogers, Telus, Shaw, Videotron, SaskTel, or independent providers), your IPTV subscription works whether you are at home in Brampton, traveling across Ontario, or visiting family in British Columbia, Alberta, or Quebec.",
    },
    {
      question: "Are French Canadian channels included?",
      answer:
        "Yes. Our Canadian channel directory features major French language networks including TVA, RDS 1 & 2, Ici Radio-Canada Télé, Noovo, and Télé-Québec alongside comprehensive English broadcast networks.",
    },
    {
      question: "How does the Electronic Program Guide (EPG) adjust for Canadian time zones?",
      answer:
        "Our EPG XMLTV feeds support automatic time zone offsets. When you install your IPTV player (such as TiviMate or IPTV Smarters) on your device, the app reads your device's system clock (e.g. Eastern Standard Time for Ontario or Pacific Time for British Columbia) and displays program times accurately for your local market.",
    },
    {
      question: "Is billing handled in Canadian Dollars (CAD)?",
      answer:
        "Yes, all subscription plans are billed transparently in Canadian Dollars (CAD). You will never experience surprise foreign exchange transaction fees or fluctuating conversion rates on your bank statement.",
    },
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/iptv-canada#webpage`,
        url: `${siteConfig.url}/iptv-canada`,
        name: "IPTV Canada: Premium Canadian Streaming Service Guide",
        description:
          "Explore flexible IPTV subscription plans for viewers across Canada. High definition live Canadian TV, sports networks, compatible hardware, and CAD pricing.",
        inLanguage: "en-CA",
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@type": "Service",
          name: "IPTV Canada Streaming Service",
          serviceType: "Internet Protocol Television",
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
          areaServed: {
            "@type": "Country",
            name: "Canada",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/iptv-canada#faq`,
        mainEntity: canadaFaqs.map((faq) => ({
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
    <div className="py-8 sm:py-12 bg-white">
      <JsonLd data={pageSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <Breadcrumbs items={[{ label: "IPTV Canada", href: "/iptv-canada" }]} />

        {/* Page Hero */}
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
            <Flag className="w-3.5 h-3.5 text-red-600" />
            <span>Canadian National Streaming Overview</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            IPTV Canada: Premium Television for Canadian Viewers
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            From coast to coast, Canadian television audiences are cutting the cord on legacy cable monopolies in favor of flexible, internet-delivered television. Learn how <strong className="text-slate-950 font-semibold">IPTV Canada</strong> combines domestic news, Canadian sports franchises, and international channels into a unified high definition experience.
          </p>
        </div>

        {/* 4 Pillars of Canadian Streaming */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-red-500 hover:bg-white transition-all space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950">All 7 Canadian NHL Teams</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Complete home, away, and regional broadcast feeds for Toronto, Montreal, Ottawa, Calgary, Edmonton, Vancouver, and Winnipeg.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-red-500 hover:bg-white transition-all space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
              <Tv className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950">Domestic Broadcast Networks</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full national and regional affiliates for CBC, CTV, Global, Citytv, and CP24 across Eastern, Central, and Western editions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-red-500 hover:bg-white transition-all space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950">English &amp; French Feeds</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bilingual Canadian programming including TVA, RDS, and Radio-Canada alongside US networks (ABC, CBS, NBC, FOX, PBS).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-red-500 hover:bg-white transition-all space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950">100% CAD Billing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Straightforward pricing in Canadian Dollars with no foreign currency conversion markups or automatic contract renewals.
            </p>
          </div>
        </div>

        {/* Detailed Guide Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-950">
              The Evolution of Television in Canada
            </h2>
            <p>
              For decades, Canadian households had minimal choice when subscribing to television services. Cable companies divided territory regionally, and consumers were forced to pay substantial equipment rental fees for proprietary digital boxes, plus mandatory add-on tiers just to watch their favorite sports or international programs.
            </p>
            <p>
              With the expansion of high-speed fiber to the home and gigabit cable broadband across Ontario, Quebec, Alberta, and British Columbia, the Canadian Radio-television and Telecommunications Commission (CRTC) and the broader market have shifted toward open internet delivery. Modern IPTV platforms allow subscribers to stream high definition television directly using their internet bandwidth, breaking the monopoly of proprietary hardware.
            </p>

            <h3 className="text-xl font-bold text-slate-950 pt-4">
              Cross Provincial Network Compatibility
            </h3>
            <p>
              Whether your home connects through <strong className="text-slate-950 font-semibold">Bell Canada</strong>, <strong className="text-slate-950 font-semibold">Rogers Communications</strong>, <strong className="text-slate-950 font-semibold">Telus PureFibre</strong>, <strong className="text-slate-950 font-semibold">Videotron</strong>, <strong className="text-slate-950 font-semibold">Shaw/Rogers</strong>, or third party ISPs like <strong className="text-slate-950 font-semibold">TekSavvy</strong> and <strong className="text-slate-950 font-semibold">Start.ca</strong>, our CDN network routes streams through low latency North American edge servers to maintain steady bitrates during peak Canadian viewing hours.
            </p>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
              <span className="font-semibold text-slate-950 block">Canadian Time Zones Synchronized EPG:</span>
              <p className="text-xs text-slate-600">
                Our guide accurately synchronizes schedules for Eastern Standard Time (EST), Central Time (CST), Mountain Time (MST), Pacific Time (PST), and Atlantic Time (AST) so you never miss a puck drop or premiere broadcast.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">Ready to Compare Plans?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Explore our transparent CAD pricing plans starting from just $12.99 CAD per month.
              </p>
              <Link
                href="/#pricing"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-200 transition-colors"
              >
                <span>View CAD Subscription Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="pt-2 text-[11px] text-slate-500 text-center">
                Instant digital setup on Smart TV, Firestick &amp; Apple TV
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
              <h4 className="text-sm font-bold text-slate-950">Related Regional Guides:</h4>
              <ul className="space-y-2 text-xs text-red-600 font-semibold">
                <li>
                  <Link href="/iptv-brampton" className="hover:underline flex items-center gap-1">
                    IPTV Brampton &amp; Peel Region Guide <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/iptv-ontario" className="hover:underline flex items-center gap-1">
                    IPTV Ontario Provincial Guide <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-to-choose-iptv-subscription-canada" className="hover:underline flex items-center gap-1">
                    How to Choose an IPTV Subscription in Canada <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* National Canadian FAQ */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700">
              National FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Frequently Asked Questions: IPTV Across Canada
            </h2>
          </div>
          <FaqAccordion items={canadaFaqs} defaultOpenIndex={0} />
        </section>
      </div>
    </div>
  );
}
