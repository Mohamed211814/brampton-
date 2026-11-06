import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Clock, MapPin, ShieldAlert, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-black border-t border-neutral-900 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-900">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-red-950/30 border border-neutral-800 bg-black flex items-center justify-center shrink-0">
                <Image
                  src="/brand-flag.png"
                  alt="IPTV Brampton Canadian Flag Icon"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  IPTV <span className="text-red-500">BRAMPTON</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-neutral-400">
                  Canadian Streaming Technology
                </span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Providing flexible, high definition IPTV subscriptions for viewers in Brampton, Ontario and across Canada. Compatible with Smart TVs, Firesticks, Android, and Apple devices with transparent Canadian Dollar (CAD) pricing.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> CAD Currency
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> Peel Region Focus
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> No Contracts
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  IPTV Brampton
                </Link>
              </li>
              <li>
                <Link href="/iptv-brampton" className="hover:text-red-400 transition-colors">
                  Brampton Local Service
                </Link>
              </li>
              <li>
                <Link href="/iptv-ontario" className="hover:text-red-400 transition-colors">
                  Ontario Streaming
                </Link>
              </li>
              <li>
                <Link href="/iptv-canada" className="hover:text-red-400 transition-colors">
                  IPTV Canada Guide
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-red-400 transition-colors">
                  Subscription Plans (CAD)
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-red-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-red-400 transition-colors">
                  Streaming Guides &amp; Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Local Brampton Coverage */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Brampton Areas
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/iptv-brampton" className="hover:text-white transition-colors">
                  Downtown Brampton (L6W)
                </Link>
              </li>
              <li>
                <Link href="/iptv-brampton" className="hover:text-white transition-colors">
                  Bramalea &amp; City Centre (L6T)
                </Link>
              </li>
              <li>
                <Link href="/iptv-brampton" className="hover:text-white transition-colors">
                  Mount Pleasant &amp; Northwest (L6X)
                </Link>
              </li>
              <li>
                <Link href="/iptv-brampton" className="hover:text-white transition-colors">
                  Springdale &amp; Castlemore (L6R)
                </Link>
              </li>
              <li>
                <Link href="/iptv-brampton" className="hover:text-white transition-colors">
                  Heart Lake &amp; North Brampton (L6Z)
                </Link>
              </li>
              <li>
                <Link href="/iptv-brampton" className="hover:text-white transition-colors">
                  Fletcher&apos;s Meadow (L6X)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Customer Support
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  Brampton, Ontario, Canada
                  <br />
                  <span className="text-neutral-500">Peel Region, Greater Toronto Area</span>
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-red-400 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.contact.hours}</p>
                  <p className="text-red-400 font-medium">Response: {siteConfig.contact.supportResponseTime}</p>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:border-red-600 transition-colors"
              >
                Inquiry &amp; Trial Form
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Policies & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
          </div>
          <p className="text-center md:text-right">
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Billed securely in CAD.
          </p>
        </div>

        {/* Disclaimer statement */}
        <div className="mt-6 pt-6 border-t border-neutral-900 text-[11px] text-neutral-600 leading-relaxed flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
          <p>
            Disclaimer: All product names, logos, trademarks, and registered trademarks mentioned on this website (including Samsung, LG, Amazon Fire TV, Apple TV, Android TV, Rogers, and Bell) are property of their respective owners. Their mention does not imply endorsement or direct affiliation.
          </p>
        </div>
      </div>
    </footer>
  );
}
