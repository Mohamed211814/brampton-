import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  return (
    <section id="get-started" className="py-20 relative overflow-hidden bg-white border-t border-slate-200">
      {/* Decorative Red Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full">
          Get Started Today
        </span>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
          Ready to Explore IPTV in Brampton?
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Upgrade your home entertainment with flexible Canadian Dollar pricing, crystal clear sports broadcasts, on demand movies, and zero cable contracts.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 shadow-xl shadow-red-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Subscription Plans</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white bg-slate-900 hover:bg-black transition-all duration-200 shadow-sm"
          >
            <span>Contact Support</span>
          </Link>

          <a
            href={siteConfig.contact.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 text-red-600" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="pt-4 text-xs text-slate-500">
          No credit card commitment required for inquiries. Canadian customer support 7 days a week.
        </div>
      </div>
    </section>
  );
}
