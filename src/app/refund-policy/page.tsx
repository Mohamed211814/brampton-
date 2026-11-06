import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Refund Policy | Transparent Canadian Support & Terms",
  description:
    "Review our transparent refund and cancellation policy. Learn about technical onboarding assistance, eligible refund conditions, and how to request support.",
  alternates: {
    canonical: "/refund-policy",
  },
  openGraph: {
    title: "Refund Policy | Transparent Canadian Support & Terms",
    description:
      "Review our transparent refund and cancellation policy. Learn about technical onboarding assistance, eligible refund conditions, and how to request support.",
    url: `${siteConfig.url}/refund-policy`,
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="py-8 sm:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <Breadcrumbs items={[{ label: "Refund Policy", href: "/refund-policy" }]} />

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Customer Guarantee
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: January 1, 2026 • Clear, Honest Canadian Consumer Terms
          </p>
        </div>

        <div className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
          <p>
            At <strong className="text-slate-950 font-semibold">{siteConfig.name}</strong>, our priority is providing subscribers across Brampton, Ontario, and Canada with an exceptional streaming experience. Because IPTV services involve digital credential delivery that activates immediately upon receipt, we have established a clear and honest refund policy.
          </p>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 space-y-1">
              <span className="font-bold text-slate-950 text-sm block">Our Technical Assistance First Commitment</span>
              <p>
                In 95% of cases where a subscriber reports an issue, the difficulty is caused by a device setting, app configuration error, or local 2.4 GHz Wi-Fi interference. Our technical team will work with you via WhatsApp or email to troubleshoot your setup before considering cancellation.
              </p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            1. Eligible Refund Circumstances
          </h2>
          <p>You may be eligible for a full or partial refund under the following verified conditions:</p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-600">
            <li>
              <strong>Unresolvable Server Side Failure:</strong> If our service experiences persistent, unresolvable technical failure on our infrastructure within the first <strong>7 days</strong> of your subscription that our support team cannot rectify.
            </li>
            <li>
              <strong>Failure to Deliver Credentials:</strong> If you placed an order and failed to receive your credentials within 24 hours due to an internal system error.
            </li>
            <li>
              <strong>Duplicate Billing:</strong> If your card was mistakenly charged multiple times for the same subscription duration.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            2. Non Refundable Scenarios
          </h2>
          <p>Refunds cannot be issued under the following circumstances:</p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-600">
            <li>
              <strong>Insufficient Internet Speed:</strong> Subscriptions cannot be refunded if your home internet connection does not satisfy the published minimum speed requirements (15 25 Mbps HD, 35 50 Mbps 4K).
            </li>
            <li>
              <strong>Buyer&apos;s Remorse After Extensive Usage:</strong> Refund requests submitted after several weeks of active daily streaming on 3-month or 12-month plans.
            </li>
            <li>
              <strong>Third Party Application Fees:</strong> Any independent activation fees paid directly to third party app developers (such as TiviMate Premium, IBO Player app license, or Smart IPTV activation) are completely non-refundable through us.
            </li>
            <li>
              <strong>Single Channel Fluctuations:</strong> Temporary maintenance or transmission downtime of an individual broadcaster channel does not qualify for a full subscription refund.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            3. Recommended Evaluation Period
          </h2>
          <p>
            If you are new to IPTV or want to verify compatibility with your specific home router and Smart TV in Brampton, we strongly recommend choosing our <strong>1-Month Access Plan ($19 CAD)</strong> first. This provides an inexpensive, zero obligation trial of our channel lineup and server stability before committing to longer terms.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 pt-4 border-t border-slate-200">
            4. How to Submit a Support or Refund Request
          </h2>
          <p>
            To request assistance or initiate a formal review, contact our customer support team:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-red-700 space-y-1">
            <div>Email: {siteConfig.contact.email}</div>
            <div>WhatsApp: {siteConfig.contact.phoneDisplay}</div>
            <div>Required Details: Your Full Name, Order Reference, and Specific Issue Description</div>
          </div>
          <p className="text-xs text-slate-500">
            All requests are reviewed within 24 to 48 business hours. Approved refunds are credited back to the original method of payment in Canadian Dollars (CAD).
          </p>
        </div>

        <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-bold"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Need Technical Support Instead?</span>
          </Link>
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900"
          >
            <span>View Subscription Options</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
