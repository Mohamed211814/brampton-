"use client";

import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, ArrowRight, MessageCircle, Info } from "lucide-react";
import { siteConfig } from "@/config/site";

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
}

export function PricingSection({
  title = "Transparent Canadian Subscription Plans",
  subtitle = "Choose the subscription period that fits your viewing schedule. Billed in Canadian Dollars (CAD) with no hidden fees or contracts.",
}: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 bg-slate-50/70 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            No Contracts • Canadian Currency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-base sm:lg">
            {subtitle}
          </p>
        </div>

        {/* 4 Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {siteConfig.pricingPlans.map((plan) => {
            const whatsAppOrderUrl = `https://wa.me/${siteConfig.contact.whatsAppRawNumber}?text=${encodeURIComponent(
              `Hello, I would like to order the ${plan.name} (${plan.cadPriceFormatted}). My streaming device is:`
            )}`;

            return (
              <div
                key={plan.id}
                className="relative rounded-2xl bg-white border border-slate-200 hover:border-red-600 transition-all duration-300 p-6 flex flex-col justify-between shadow-lg shadow-slate-200/50 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      {plan.duration}
                    </span>
                    <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                      {plan.connectionCount} Screen
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black text-slate-950">
                        ${typeof plan.price === "number" ? plan.price.toFixed(2) : plan.price}
                      </span>
                      <span className="text-red-600 text-xs sm:text-sm font-bold uppercase">
                        CAD
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 block mt-1">
                      {plan.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 border-b border-slate-100 pb-6">
                    {plan.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      Plan Inclusions:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  <a
                    href={whatsAppOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-200 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                      Instant Setup
                    </span>
                    <Link
                      href={`/contact?plan=${encodeURIComponent(plan.id)}&duration=${encodeURIComponent(plan.duration)}`}
                      className="text-slate-600 hover:text-red-600 underline"
                    >
                      Web Inquiry Form
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200 max-w-2xl mx-auto flex items-start gap-3 text-xs text-slate-600 shadow-sm">
          <Info className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <p>
            All prices are in Canadian Dollars (CAD). Subscriptions activate automatically upon completion of account details via WhatsApp or email. You can renew manually or switch durations at the conclusion of your billing period without penalty.
          </p>
        </div>
      </div>
    </section>
  );
}
