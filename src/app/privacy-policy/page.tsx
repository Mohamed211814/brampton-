import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | IPTV Brampton (PIPEDA Compliant)",
  description:
    "Read our Privacy Policy. Learn how IPTV Brampton collects, handles, and protects customer data in compliance with Canadian privacy legislation (PIPEDA).",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | IPTV Brampton (PIPEDA Compliant)",
    description:
      "Read our Privacy Policy. Learn how IPTV Brampton collects, handles, and protects customer data in compliance with Canadian privacy legislation (PIPEDA).",
    url: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  const policySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/privacy-policy#webpage`,
    url: `${siteConfig.url}/privacy-policy`,
    name: "Privacy Policy | IPTV Brampton (PIPEDA Compliant)",
    description:
      "Read our Privacy Policy. Learn how IPTV Brampton collects, handles, and protects customer data in compliance with Canadian privacy legislation (PIPEDA).",
    inLanguage: "en-CA",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
  };

  return (
    <div className="py-8 sm:py-12 bg-white">
      <JsonLd data={policySchema} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Legal Documentation
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: January 1, 2026 • Governed under Canadian Privacy Law (PIPEDA)
          </p>
        </div>

        <div className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
          <p>
            At <strong className="text-slate-950 font-semibold">{siteConfig.name}</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we take the privacy of our Canadian subscribers and visitors seriously. This Privacy Policy details how we collect, use, disclose, and safeguard personal information collected through our website (<strong className="text-slate-950 font-semibold">{siteConfig.url}</strong>) and associated customer support communication channels in accordance with the <em>Personal Information Protection and Electronic Documents Act (PIPEDA)</em> and applicable Ontario privacy standards.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            1. Information We Collect
          </h2>
          <p>We collect only the information necessary to provide, manage, and support your IPTV subscription:</p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-600">
            <li><strong>Contact Details:</strong> Your name and email address when you submit an inquiry, order, or request setup guidance.</li>
            <li><strong>Hardware Information:</strong> Device model (e.g. Amazon Firestick, Samsung TV, Android TV) and MAC address where necessary for hardware bound middleware activation (e.g. MAG or Formuler boxes).</li>
            <li><strong>Communication Records:</strong> Customer assistance transcripts, support inquiries, and feedback provided via email or WhatsApp.</li>
            <li><strong>Technical Access Logs:</strong> IP address and standard connection metadata used strictly for server routing optimization and anti abuse protection.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            2. How We Use Your Information
          </h2>
          <p>Collected data is used strictly for legitimate business and operational purposes:</p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-600">
            <li>Generating and delivering your M3U playlist link and Xtream Codes login credentials.</li>
            <li>Providing technical onboarding, device installation instructions, and customer support.</li>
            <li>Notifying you of scheduled server maintenance, playlist updates, or subscription expiration reminders.</li>
            <li>Preventing fraudulent orders and maintaining server security across Ontario and Canadian network nodes.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            3. Non Disclosure &amp; Third Party Policy
          </h2>
          <p>
            We do not sell, rent, trade, or monetize your personal information to third party marketing agencies or advertising brokers under any circumstances. Information is only shared with third party service providers (such as secure Canadian payment processors or transactional email delivery services) to the extent required to execute your transaction.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            4. Data Retention &amp; Security Standards
          </h2>
          <p>
            We implement administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, loss, theft, alteration, or disclosure. Inactive subscription accounts and expired credentials are regularly purged from our active databases.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            5. Your Rights Under PIPEDA
          </h2>
          <p>
            Under Canadian privacy legislation, you have the right to request access to the personal data we hold about you, request corrections to erroneous information, or request the deletion of your customer profile upon conclusion of your subscription.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            6. Contacting Our Privacy Officer
          </h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to exercise your statutory privacy rights, please reach out via email at:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-red-700">
            Email: {siteConfig.contact.email}
            <br />
            Subject: Privacy Rights Inquiry IPTV Brampton
          </div>
        </div>
      </div>
    </div>
  );
}
