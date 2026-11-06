import React from "react";
import Link from "next/link";
import { MapPin, Wifi, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function BramptonLocalSection() {
  return (
    <section id="brampton" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full">
            Peel Region Focused
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Why Brampton Viewers Rely on Our Streaming Platform
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From modern subdivisions to established neighborhoods, our Content Delivery Network is strategically routed to Ontario peering exchanges to provide buffer free streaming across Brampton.
          </p>
        </div>

        {/* Neighborhood Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {siteConfig.bramptonAreas.map((area, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-red-500 hover:bg-white transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-red-600">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <h3 className="font-bold text-slate-950 text-lg">
                      {area.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {area.postalPrefix}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {area.description}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-200">
                {area.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Internet Service Provider Compatibility Note for Brampton */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-neutral-900 to-slate-950 border border-slate-800 p-8 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-red-400 text-sm font-semibold">
                <Wifi className="w-4 h-4" />
                <span>Tested Across Major Brampton &amp; Ontario ISPs</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Smooth Streaming on Bell Fibe, Rogers Ignite, Cogeco &amp; TekSavvy
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether your home uses pure fiber to the home (FTTH) or hybrid fiber cable in Brampton, our streaming infrastructure utilizes low hop routing through Toronto and Montreal data centers. This mitigates peak-hour congestion during high-profile sporting events.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/iptv-brampton"
                className="w-full text-center px-5 py-3 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-950/40 transition-colors text-sm flex items-center justify-center gap-2"
              >
                <span>Read Full Brampton Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
