import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  return (
    <aside aria-label="Customer Support Chat" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={siteConfig.contact.whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with IPTV Brampton support on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-xl shadow-emerald-950/40 border border-emerald-400/30 transition-all duration-200 transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-sm">Chat on WhatsApp</span>
      </a>
      <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-neutral-950 border border-neutral-800 text-neutral-200 text-xs px-2.5 py-1.5 rounded-md shadow-md whitespace-nowrap pointer-events-none">
        Quick Canadian Support ({siteConfig.contact.supportResponseTime})
      </span>
    </aside>
  );
}

