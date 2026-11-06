import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/config/site";
import { JsonLd } from "./JsonLd";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "IPTV Brampton", href: "/" }, ...items];

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href.startsWith("http")
        ? item.href
        : `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center text-sm text-slate-500 py-3 overflow-x-auto whitespace-nowrap"
      >
        <ol className="flex items-center space-x-2">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400 shrink-0" />
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className="text-slate-900 font-semibold truncate max-w-[240px] sm:max-w-none"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-red-600 text-slate-600 transition-colors flex items-center gap-1.5"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
