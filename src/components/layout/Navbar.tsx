"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "IPTV Brampton", href: "/" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQs", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      setMobileMenuOpen(false);
      const id = href.replace("/#", "");
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo with Canadian Flag Icon */}
          <Link
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-lg p-1"
            aria-label="IPTV Brampton Home"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md border border-slate-200 bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Image
                src="/brand-flag.png"
                alt="IPTV Brampton Canadian Flag Icon"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-red-600 border-2 border-white"></div>
            </div>
            <span className="text-xl font-black tracking-tight text-slate-950 flex items-center gap-1">
              IPTV <span className="text-red-600">BRAMPTON</span>
            </span>
          </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-red-600 bg-red-50 border border-red-200"
                        : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/#pricing"
                onClick={(e) => handleLinkClick(e, "/#pricing")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                href="/#pricing"
                onClick={(e) => handleLinkClick(e, "/#pricing")}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-red-600 text-white sm:hidden"
              >
                Plans
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-down navigation drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-3 duration-200 shadow-xl">
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "text-red-600 bg-red-50 border border-red-200"
                        : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
                <Link
                  href="/#pricing"
                  onClick={(e) => handleLinkClick(e, "/#pricing")}
                  className="w-full text-center py-3 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/30 cursor-pointer"
                >
                  Explore Subscription Plans
                </Link>
                <a
                  href={siteConfig.contact.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-xl font-bold text-slate-800 border border-slate-300 bg-slate-50 hover:bg-slate-100"
                >
                  WhatsApp Assistance
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    );
  }
