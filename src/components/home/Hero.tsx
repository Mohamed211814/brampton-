import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 bg-neutral-950 text-white border-b border-neutral-800"
    >
      {/* Background Movie Poster Collage - Balanced cinematic tone */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="IPTV Brampton Entertainment Cinema Movies and TV Shows"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-65"
        />
        {/* Balanced gradient overlays: slightly darker for contrast while preserving artwork */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45)_0%,transparent_75%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center space-y-6">
        {/* H1 Heading (Centered with drop shadow for clarity) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] max-w-3xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
          IPTV Brampton{" "}
          <span className="text-red-500 drop-shadow-[0_2px_8px_rgba(239,68,68,0.4)]">
            Premium Streaming Experience
          </span>{" "}
          in Canada
        </h1>

        {/* Supporting Text (Centered) */}
        <p className="text-base sm:text-lg lg:text-xl text-neutral-100 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Discover flexible IPTV subscription options designed for viewers in Brampton and across Canada. Explore available channels, entertainment options, compatible devices and subscription plans.
        </p>

        {/* Value Checkpoints */}
        <div className="pt-1 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-white font-semibold">
          <span className="flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
            <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
            Transparent CAD Pricing
          </span>
          <span className="flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
            <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
            Zero Cable Contracts
          </span>
          <span className="flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
            <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
            Multi Device Ready
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 shadow-2xl shadow-black/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Explore Subscription Plans</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-black/60 hover:bg-black/80 border border-white/30 backdrop-blur-md shadow-lg transition-all duration-200 cursor-pointer"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
