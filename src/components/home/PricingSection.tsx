"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, ArrowRight, MessageCircle, Info } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PricingPlan } from "@/types";

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
}

export function PricingSection({
  title = "Transparent Canadian Subscription Plans",
  subtitle = "Choose the subscription period that fits your viewing schedule. Billed in Canadian Dollars (CAD) with no hidden fees or contracts.",
}: PricingSectionProps) {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const handleOrderClick = (plan: PricingPlan) => {
    setSelectedPlan(plan);
  };

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

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteConfig.pricingPlans.map((plan) => {
            return (
              <div
                key={plan.id}
                className="relative rounded-2xl bg-white border border-slate-200 hover:border-red-600 transition-all duration-300 p-7 flex flex-col justify-between shadow-lg shadow-slate-200/50 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      {plan.duration}
                    </span>
                    <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                      {plan.connectionCount} Active Screen
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-black text-slate-950">
                        ${plan.price}
                      </span>
                      <span className="text-red-600 text-sm font-bold uppercase">
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
                  <button
                    type="button"
                    onClick={() => handleOrderClick(plan)}
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-200 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get {plan.duration} Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                    Instant Setup via Email / WhatsApp
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200 max-w-2xl mx-auto flex items-start gap-3 text-xs text-slate-600 shadow-sm">
          <Info className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <p>
            All prices are in Canadian Dollars (CAD). Subscriptions activate automatically upon completion of account details. You can renew manually or switch durations at the conclusion of your billing period without penalty.
          </p>
        </div>
      </div>

      {/* Clean Order / Inquiry Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-left">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  Order {selectedPlan.duration} Subscription
                </h3>
                <p className="text-xs text-red-600 font-semibold">
                  {selectedPlan.cadPriceFormatted} • Canadian Dollar Billing
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPlan(null)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="py-5 space-y-4 text-sm text-slate-700">
              <p>
                To provide you with the correct server setup and playlist configuration for your specific device, please choose your preferred activation method:
              </p>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/19055550199?text=${encodeURIComponent(
                    `Hello IPTV Brampton team, I would like to order the ${selectedPlan.name} (${selectedPlan.cadPriceFormatted}). My device is:`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-red-50 border border-red-200 hover:bg-red-100 text-red-900 font-semibold transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <MessageCircle className="w-5 h-5 text-red-600" />
                    Instant WhatsApp Activation
                  </span>
                  <ArrowRight className="w-4 h-4 text-red-600" />
                </a>

                <a
                  href={`/contact?plan=${encodeURIComponent(selectedPlan.id)}&duration=${encodeURIComponent(selectedPlan.duration)}`}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-900 font-semibold transition-colors"
                >
                  <span>Submit Web Order / Inquiry</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </a>
              </div>

              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                Need setup help first? Email us at{" "}
                <span className="text-red-600 font-medium">{siteConfig.contact.email}</span>.
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedPlan(null)}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
