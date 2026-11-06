"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FaqItem } from "@/types";

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
}

export function FaqAccordion({ items, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3.5 w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-red-50/40 border-red-300 shadow-sm shadow-red-100"
                : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-4.5 sm:p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-900 flex items-start gap-3 text-base sm:text-lg">
                <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isOpen ? "text-red-600" : "text-slate-400"}`} />
                <span>{item.question}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 ml-3 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-red-600" : "text-slate-400"
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-red-100/80 pl-12.5">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
