import React from "react";
import Link from "next/link";
import { ArrowRight, Play, Wifi, CheckCircle, ShieldCheck, Monitor, Film } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-white border-b border-slate-100">
      {/* Background ambient lighting effects in subtle Canadian Red */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span>Canada&apos;s Leading High Definition Streaming Solution</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
              IPTV Brampton {" "}
              <span className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 bg-clip-text text-transparent">
                Premium Streaming Experience
              </span>{" "}
              in Canada
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Discover flexible IPTV subscription options designed for viewers in Brampton and across Canada. Explore available channels, entertainment options, compatible devices and subscription plans.
            </p>

            {/* Value Checkpoints */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-800 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                Transparent CAD Pricing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                Zero Cable Contracts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                Multi Device Ready
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 shadow-xl shadow-red-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Subscription Plans</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-red-600/60 transition-all duration-200 shadow-xs"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Trust snippet */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                Optimized for Bell &amp; Rogers Fiber
              </span>
              <span className="flex items-center gap-1.5">
                <Wifi className="w-4 h-4 text-red-600" />
                Ontario CDN Low Latency
              </span>
            </div>
          </div>

          {/* Visual Column: Streaming Interface Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl p-1 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black shadow-2xl shadow-slate-900/20 border border-neutral-800">
              {/* Window Header */}
              <div className="bg-black/95 rounded-t-xl px-4 py-3 flex items-center justify-between border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                  <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
                  <span className="text-xs font-mono text-neutral-400 ml-2">IPTV Player • Live EPG</span>
                </div>
                <div className="flex items-center gap-1.5 bg-red-950/70 border border-red-700/60 px-2.5 py-0.5 rounded text-[10px] font-mono text-red-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  LIVE 4K 60FPS
                </div>
              </div>

              {/* Player Body */}
              <div className="bg-black p-4 rounded-b-xl space-y-4">
                {/* Active Stream Preview Card */}
                <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 flex flex-col justify-between p-4 group">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-red-600 text-white font-black text-[10px] tracking-wide uppercase">
                      LIVE HOCKEY
                    </span>
                    <span className="text-[11px] font-mono text-white bg-neutral-950/90 px-2 py-0.5 rounded border border-neutral-800">
                      TOR vs MON (Period 2)
                    </span>
                  </div>

                  <div className="flex items-center justify-center my-auto">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/50 group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-neutral-300">
                    <span className="font-semibold text-white">Canadian Sports Feeds HD</span>
                    <span className="text-neutral-400 text-[11px]">Buffer: 0.1s | 1080p</span>
                  </div>
                </div>

                {/* Simulated EPG Grid Channels */}
                <div className="space-y-2 text-xs">
                  <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    Quick Channel Guide (Ontario/EST)
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 hover:border-red-600/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-neutral-500 font-mono text-[11px]">01</span>
                      <div className="w-7 h-7 rounded bg-red-950/70 border border-red-800/60 flex items-center justify-center text-[10px] font-bold text-red-300">
                        CAN
                      </div>
                      <div>
                        <div className="font-semibold text-white">TSN &amp; Sportsnet Live</div>
                        <div className="text-[11px] text-neutral-400">NHL Hockey &amp; Raptors Basketball</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-white bg-red-950/60 px-2 py-0.5 rounded border border-red-800/60">
                      1080p 60fps
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-900/50 border border-neutral-800/80 hover:border-red-600/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-neutral-500 font-mono text-[11px]">02</span>
                      <div className="w-7 h-7 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[10px] font-bold text-neutral-300">
                        GTA
                      </div>
                      <div>
                        <div className="font-semibold text-white">CP24 &amp; Local Toronto News</div>
                        <div className="text-[11px] text-neutral-400">Brampton &amp; Peel Traffic &amp; Weather</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-neutral-300 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                      Full HD
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-900/50 border border-neutral-800/80 hover:border-red-600/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-neutral-500 font-mono text-[11px]">03</span>
                      <div className="w-7 h-7 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[10px] font-bold text-neutral-300">
                        INT
                      </div>
                      <div>
                        <div className="font-semibold text-white">South Asian &amp; World Feeds</div>
                        <div className="text-[11px] text-neutral-400">Punjabi, Hindi, European &amp; Arabic</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-neutral-300 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                      HD / 4K
                    </span>
                  </div>
                </div>

                {/* Bottom stats row */}
                <div className="pt-2 border-t border-neutral-900 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <Monitor className="w-3.5 h-3.5 text-red-500" />
                    Multi Screen Ready
                  </span>
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <Film className="w-3.5 h-3.5 text-red-500" />
                    VOD Library Included
                  </span>
                  <span className="text-white font-semibold">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
