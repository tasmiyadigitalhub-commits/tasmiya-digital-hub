"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, MessageSquare, X } from "lucide-react";
import { siteConfig, getWhatsAppHref } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#24143D]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        {/* Zone 1: Clickable Brand Wordmark linking to Homepage */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="shrink-0 whitespace-nowrap text-sm font-bold tracking-tight text-white transition-opacity duration-150 hover:opacity-90 sm:text-base lg:text-lg"
        >
          {siteConfig.brandName}
        </Link>

        {/* Zone 2: Visible Home + 5 Navigation Links on Desktop */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-6"
        >
          {siteConfig.navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "shrink-0 whitespace-nowrap border-b-2 py-1 text-sm font-medium transition-colors duration-150",
                  active
                    ? "border-[#9875E8] text-white"
                    : "border-transparent text-[#D9CEF7] hover:border-[#9875E8]/60 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Clickable WhatsApp + Get Consultation CTA + Mobile Menu Toggle */}
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat on WhatsApp at ${siteConfig.contact.whatsappNumberDisplay}`}
            className="inline-flex min-h-[40px] shrink-0 whitespace-nowrap items-center gap-1.5 rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:border-[#9875E8] hover:bg-white/10 sm:text-sm"
          >
            <MessageSquare className="h-4 w-4 text-[#9875E8]" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/contact"
            className="hidden min-h-[40px] shrink-0 whitespace-nowrap items-center rounded-lg bg-[#9875E8] px-4 py-2 text-sm font-semibold text-[#1B0D30] transition-colors duration-150 hover:bg-[#AE91F0] sm:inline-flex"
          >
            Get Consultation
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/15 text-white transition-colors duration-150 hover:bg-white/10 lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-white/10 bg-[#24143D] px-5 pb-6 pt-4 lg:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {siteConfig.allPages.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors duration-150",
                    active
                      ? "bg-[#341E57] text-white"
                      : "text-[#D9CEF7] hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 flex flex-col gap-2.5 border-t border-white/10 pt-4 sm:hidden">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#9875E8] px-4 py-2.5 text-sm font-semibold text-[#1B0D30]"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
