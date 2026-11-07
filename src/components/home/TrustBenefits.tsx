import React from "react";
import { Tv, Film, Trophy, Sparkles, Smartphone, Headset } from "lucide-react";

export function TrustBenefits() {
  const benefits = [
    {
      icon: Tv,
      title: "Available Channel Selection",
      description:
        "Access comprehensive live television lineups including major Canadian networks (CBC, CTV, Global, Citytv), US regional feeds, and specialty broadcast programming.",
      badge: "Live Broadcasts",
    },
    {
      icon: Film,
      title: "Movies and TV Shows",
      description:
        "Explore an extensive, regularly updated on demand library featuring blockbuster films, binge worthy series, and multi season classic collections.",
      badge: "On Demand VOD",
    },
    {
      icon: Trophy,
      title: "Sports and Entertainment",
      description:
        "Watch NHL hockey, NBA basketball, MLB baseball, soccer leagues, combat sports, and international cricket tournaments with dedicated sports feeds.",
      badge: "Live Sports Feeds",
    },
    {
      icon: Sparkles,
      title: "HD and 4K Support",
      description:
        "Enjoy crystal clear high definition (1080p @ 60fps) across standard broadcasts, with select 4K Ultra HD streams available where provided by original source networks.",
      badge: "High Resolution",
    },
    {
      icon: Smartphone,
      title: "Multiple Device Compatibility",
      description:
        "One subscription runs smoothly across your preferred hardware: Amazon Fire TV, Smart TVs (Samsung & LG), Android TV boxes, Apple TV, PCs, and mobile devices.",
      badge: "Universal Hardware",
    },
    {
      icon: Headset,
      title: "Dedicated Customer Support",
      description:
        "Receive direct technical assistance, playlist troubleshooting, and onboarding guidance via email and WhatsApp 7 days a week during Canadian viewing hours.",
      badge: "Human Assistance",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Core Service Features
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Designed for Modern Canadian Entertainment
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need for a complete, reliable, and flexible home television setup without proprietary hardware lock ins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 hover:border-red-500 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-md shadow-red-600/20 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {benefit.badge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-red-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
