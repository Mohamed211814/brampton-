import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms and Conditions | IPTV Brampton (Canada)",
  description:
    "Review the Terms and Conditions governing IPTV Brampton subscription services, acceptable use, device limits, service availability, and governing law.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | IPTV Brampton (Canada)",
    description:
      "Review the Terms and Conditions governing IPTV Brampton subscription services, acceptable use, device limits, service availability, and governing law.",
    url: `${siteConfig.url}/terms-and-conditions`,
  },
};

export default function TermsPage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/terms-and-conditions#webpage`,
    url: `${siteConfig.url}/terms-and-conditions`,
    name: "Terms and Conditions | IPTV Brampton (Canada)",
    description:
      "Review the Terms and Conditions governing IPTV Brampton subscription services, acceptable use, device limits, service availability, and governing law.",
    inLanguage: "en-CA",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
  };

  return (
    <div className="py-8 sm:py-12 bg-white">
      <JsonLd data={termsSchema} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <Breadcrumbs items={[{ label: "Terms and Conditions", href: "/terms-and-conditions" }]} />

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Legal Agreement
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: January 1, 2026 • Governed by the Laws of the Province of Ontario, Canada
          </p>
        </div>

        <div className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
          <p>
            Welcome to <strong className="text-slate-950 font-semibold">{siteConfig.name}</strong>. By accessing our website or purchasing a subscription plan, you agree to be bound by these Terms and Conditions. Please read them thoroughly prior to placing an order.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            1. Service Provision &amp; Subscription Terms
          </h2>
          <p>
            {siteConfig.name} provides internet-delivered television media playlists and Xtream Codes access parameters for personal, domestic entertainment. Subscriptions are billed in Canadian Dollars (CAD) for the fixed duration purchased (1 Month, 3 Months, 6 Months, or 12 Months).
          </p>
          <p>
            Unless explicitly requested, accounts do not renew automatically. You retain sole discretion over whether to renew upon expiration of your active period.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            2. Device Allocation &amp; Connection Restrictions
          </h2>
          <p>
            Standard subscription plans permit <strong>one (1) active simultaneous stream</strong> at any single moment in time. You may install your credentials across multiple household devices (such as a living room Smart TV and a bedroom Firestick), but simultaneous concurrent streaming on multiple screens requires a designated multi screen upgrade. Sharing credentials outside your immediate residential household is strictly prohibited and may result in automated temporary lockouts by middleware security systems.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            3. Subscriber Internet Requirements
          </h2>
          <p>
            Subscribers are solely responsible for ensuring their home broadband connection meets minimum streaming standards (minimum 15 25 Mbps download for HD and 35 50 Mbps for 4K). We are not responsible for streaming degradation caused by local ISP throttling, congested residential 2.4 GHz Wi-Fi channels, or inadequate internal home network hardware.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            4. Service Availability &amp; Scheduled Maintenance
          </h2>
          <p>
            While we target high availability (99.9% target uptime across Canadian edge servers), television feeds are subject to periodic server updates, channel source maintenance, and broadcaster transmission interruptions beyond our direct control. Temporary channel downtime during scheduled maintenance does not constitute a breach of service.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            5. Intellectual Property &amp; Trademarks Disclaimer
          </h2>
          <p>
            All third party brand names, channel logos, trademarks, and device registered trademarks (including Samsung, LG, Amazon Fire TV, Apple TV, Google TV, Android, Rogers, and Bell) displayed on this website are the property of their respective trademark holders. Their reference serves purely descriptive identification purposes and does not imply sponsorship, endorsement, or direct legal affiliation.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            6. Governing Jurisdiction
          </h2>
          <p>
            These Terms and Conditions shall be construed and governed in accordance with the substantive laws of the <strong>Province of Ontario</strong> and the federal laws of Canada applicable therein. Any legal disputes arising out of these terms shall be submitted to the exclusive jurisdiction of the courts of Ontario.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            7. Contact Information
          </h2>
          <p>
            For questions concerning these terms, please contact our administrative desk:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-red-700">
            Email: {siteConfig.contact.email}
            <br />
            Subject: Terms of Service Inquiry
          </div>
        </div>
      </div>
    </div>
  );
}
