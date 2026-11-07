import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, Zap, Sliders, DollarSign, Laptop } from "lucide-react";

export function WhyChooseUs() {
  const advantages = [
    {
      icon: DollarSign,
      title: "Clear & Predictable CAD Pricing",
      description:
        "No hidden activation fees, equipment lease charges, or sudden rate hikes after promotional periods. You pay the exact advertised Canadian Dollar rate.",
    },
    {
      icon: Sliders,
      title: "Flexible Subscriptions Without Contracts",
      description:
        "Choose month to month, quarterly, or annual plans with complete freedom to renew or pause whenever your viewing requirements shift.",
    },
    {
      icon: Zap,
      title: "5 Minute Guided Setup",
      description:
        "Receive your Xtream Codes API credentials and M3U playlist immediately after ordering, with plain language installation guides for every device.",
    },
    {
      icon: Laptop,
      title: "Hardware Independence",
      description:
        "Use your existing Smart TV, Firestick, Apple TV, or mobile device without buying costly proprietary cable hardware or dishes.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Service Specifications",
      description:
        "We are honest about streaming prerequisites: minimum bandwidth requirements, supported codecs, and realistic device setups.",
    },
    {
      icon: Check,
      title: "Direct Customer Care",
      description:
        "Get responsive assistance directly from knowledgeable team members via WhatsApp and email during Canadian prime time hours.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Statement */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
              Real Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              Why Brampton and Canadian Viewers Choose Us
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Traditional cable providers have burdened Canadian households with rigid 24-month contracts, confusing bundled pricing, and expensive hardware rentals.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We provide a transparent, modern streaming solution built on high-speed internet delivery. No locked hardware, no surprise billing, and no unnecessary friction.
            </p>
            <div className="pt-2">
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 transition-colors text-sm"
              >
                Compare CAD Subscription Plans
              </Link>
            </div>
          </div>

          {/* Right Column: 6 Clear Benefit Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-slate-50/80 border border-slate-200 hover:border-red-500 hover:bg-white hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
