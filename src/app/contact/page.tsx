import type { Metadata } from "next";
import { Mail, Clock, MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us | Customer & Technical Support in Brampton, Canada",
  description:
    "Contact IPTV Brampton customer support. Reach our team via WhatsApp, email, or our inquiry form for device setup guidance and subscription assistance.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Customer & Technical Support in Brampton, Canada",
    description:
      "Contact IPTV Brampton customer support. Reach our team via WhatsApp, email, or our inquiry form for device setup guidance and subscription assistance.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <Breadcrumbs items={[{ label: "Contact Us", href: "/contact" }]} />

        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Canadian Customer Care
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            How Can We Assist You?
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Have questions about device compatibility, channel packages, or need assistance configuring your player app? Our technical support team is here to help 7 days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950">Direct Communication Channels</h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-slate-500">WhatsApp Instant Chat</h3>
                    <a
                      href={siteConfig.contact.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-950 hover:text-red-600 font-bold text-base block mt-0.5"
                    >
                      Chat on WhatsApp
                    </a>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Recommended for quick device setup &amp; screenshot troubleshooting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-slate-500">Email Support</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-slate-950 hover:text-red-600 font-mono text-sm block mt-0.5 font-semibold"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Response time: {siteConfig.contact.supportResponseTime}.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-slate-500">Support Hours</h3>
                    <p className="text-slate-950 font-medium text-sm mt-0.5">
                      {siteConfig.contact.hours}
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      7 Days a Week, Eastern Standard Time (EST).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-slate-500">Target Region</h3>
                    <p className="text-slate-950 font-medium text-sm mt-0.5">
                      Brampton &amp; Peel Region, Ontario, Canada
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      L6W / L6V / L6T / L6S / L6X / L6R / L6Z Postal Areas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2 shadow-sm">
              <div className="flex items-center gap-1.5 text-red-600 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Device Setup Commitment</span>
              </div>
              <p>
                Whether you use an Amazon Fire TV Stick, Samsung TV, LG TV, Apple TV, or Formuler box, our support representatives can walk you through the configuration process step by step.
              </p>
            </div>
          </div>

          {/* Interactive Form Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl font-bold text-slate-950">Send an Online Inquiry</h2>
            <p className="text-xs text-slate-600 mb-4">
              Fill in your details and device preference below to receive setup instructions and channel information.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
