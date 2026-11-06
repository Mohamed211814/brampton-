import type { Metadata } from "next";
import Link from "next/link";
import { Tv, ShieldCheck, Heart, Server, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us | IPTV Brampton & Canadian Streaming Solutions",
  description:
    "Learn about IPTV Brampton, our technological philosophy, local Canadian edge routing, and our commitment to transparent streaming television for Peel Region households.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | IPTV Brampton & Canadian Streaming Solutions",
    description:
      "Learn about IPTV Brampton, our technological philosophy, local Canadian edge routing, and our commitment to transparent streaming television for Peel Region households.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />

        {/* Page Hero */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Our Streaming Philosophy
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Building a Modern Streaming Alternative for Brampton
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            We are dedicated to providing viewers in <strong className="text-slate-950 font-semibold">Brampton, Ontario</strong> and throughout Canada with reliable, flexible, and affordable television entertainment powered by modern internet technology.
          </p>
        </div>

        {/* Our Story & Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Why We Started
            </h2>
            <p>
              For years, television in Canada was dominated by traditional telecommunications companies that locked subscribers into expensive 24-month contracts, charged monthly rental fees for proprietary set top boxes, and forced customers to buy massive bundles just to watch a handful of channels.
            </p>
            <p>
              As high-speed residential fiber and gigabit broadband expanded across <strong className="text-slate-950 font-semibold">Peel Region</strong>, we recognized that television no longer needed to depend on physical coaxial cables or satellite dishes. By leveraging open Internet Protocol Television (IPTV) standards, viewers can enjoy crystal clear broadcasts on the hardware they already own including Samsung TVs, LG OLEDs, Amazon Firesticks, and Apple TV.
            </p>
            <p>
              Our focus from day one has been simple: provide transparent Canadian Dollar (CAD) pricing, route video packets through low latency North American edge networks, and offer genuine human support when subscribers need setup guidance.
            </p>
          </div>

          <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950 border-b border-slate-200 pb-3">
              Core Principles
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-950">Zero Hidden Costs</h4>
                  <p className="text-xs text-slate-600">
                    No equipment fees, no activation charges, and no surprise auto rebills.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Server className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-950">Canadian CDN Peering</h4>
                  <p className="text-xs text-slate-600">
                    Routing optimized for Bell, Rogers, Cogeco, and TekSavvy to minimize prime time buffering.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-950">Multicultural Lineup</h4>
                  <p className="text-xs text-slate-600">
                    Extensive programming in Punjabi, Hindi, Urdu, European, and Caribbean languages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 text-center">
            What Sets Our Platform Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-red-500 hover:bg-white transition-all space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                <Tv className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Hardware Freedom</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never force you to buy or rent proprietary boxes. Our service works seamlessly with industry-standard apps like TiviMate, IBO Player, and IPTV Smarters on any display.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-red-500 hover:bg-white transition-all space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Canadian Viewer Centric</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From CBC and CTV to regional TSN and Sportsnet feeds, our channel selection reflects the daily lives and passions of Canadian households.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-red-500 hover:bg-white transition-all space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Honest Technical Standards</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We provide clear guidance regarding necessary internet speeds, bandwidth requirements, and Wi-Fi tips to ensure you enjoy optimal playback.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-slate-950">
            Join Viewers Across Brampton &amp; Ontario
          </h3>
          <p className="text-sm text-slate-600">
            Explore our subscription options or talk to our technical support team today.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/#pricing"
              className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-200"
            >
              View CAD Pricing
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-black transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
