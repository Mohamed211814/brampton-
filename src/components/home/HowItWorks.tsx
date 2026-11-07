import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a Subscription",
      description:
        "Select the plan duration that fits your needs: 1 Month, 3 Months, 6 Months, or 12 Months. All prices are clearly stated in Canadian Dollars (CAD) with no automatic contracts.",
      badge: "Step 1",
    },
    {
      number: "02",
      title: "Complete Your Order",
      description:
        "Submit your device preference (Firestick, Smart TV, Android box, or Apple device). Receive immediate confirmation and order processing.",
      badge: "Step 2",
    },
    {
      number: "03",
      title: "Receive Credentials & Stream",
      description:
        "Receive your M3U playlist link and Xtream Codes credentials via email and WhatsApp with step by step app setup guides. Start watching in under 5 minutes.",
      badge: "Step 3",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Simple 3 Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            How to Get Started in Minutes
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No technician appointments, no drilling holes in your walls, and no bulky cable boxes to return.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-7 rounded-2xl bg-white border border-slate-200 hover:border-red-600 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-red-600 font-mono">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                    {step.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-red-600 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-red-600" />
                <span>Instant Digital Delivery</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-xl shadow-red-200 transition-colors"
          >
            <span>Choose Your Plan Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
