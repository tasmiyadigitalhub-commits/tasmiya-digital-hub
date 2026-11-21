"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/content";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="divide-y divide-[#24143D]/12 border-y border-[#24143D]/12">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-1">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-trigger-${item.id}`}
                onClick={() => toggleItem(item.id)}
                className="flex min-h-[56px] w-full items-center justify-between gap-6 py-4 text-left text-base font-semibold text-[#24143D] transition-colors duration-150 hover:text-[#663EC4] sm:text-lg"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-[#663EC4] transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-trigger-${item.id}`}
              hidden={!isOpen}
              className={cn("pb-5 pr-8 text-sm leading-relaxed text-[#4A3F61] sm:text-base", !isOpen && "hidden")}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
