import Link from "next/link";
import { siteConfig, getWhatsAppHref } from "@/lib/site-config";
import { servicesList } from "@/lib/content";
import { MessageSquare, ArrowUpRight, Globe } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-white/10 bg-[#24143D] text-[#F8F7FC]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block text-lg font-bold tracking-tight text-white transition-opacity duration-150 hover:opacity-90"
            >
              {siteConfig.brandName}
            </Link>
            <p className="text-sm leading-relaxed text-[#D9CEF7]">
              {siteConfig.tagline}
            </p>
            <p className="flex items-start gap-2 text-xs leading-relaxed text-[#B9AADF]">
              <Globe className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9875E8]" aria-hidden="true" />
              <span>{siteConfig.contact.locationDisplay}</span>
            </p>
          </div>

          {/* Pages Column */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">Navigation</h2>
            <ul className="space-y-2.5 text-sm text-[#D9CEF7]">
              {siteConfig.allPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-4"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">Services</h2>
            <ul className="space-y-2.5 text-sm text-[#D9CEF7]">
              {servicesList.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-4"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official WhatsApp & Consultation Column */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">Direct Contact</h2>
            <div className="space-y-4 text-sm text-[#D9CEF7]">
              <div className="space-y-1">
                <p className="text-xs text-[#B9AADF]">Official WhatsApp</p>
                <p className="font-semibold tabular-nums text-white">
                  {siteConfig.contact.whatsappNumberDisplay}
                </p>
              </div>

              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#9875E8] px-4 py-2.5 text-sm font-semibold text-[#1B0D30] transition-colors duration-150 hover:bg-[#AE91F0]"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#C6B1F5] transition-colors duration-150 hover:text-white"
              >
                <span>Open Project Enquiry Form</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Bar */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#B9AADF] sm:flex-row sm:items-center">
          <p>
            © {currentYear} {siteConfig.shortName}. All rights reserved.
          </p>
          <p>
            Website Design, SEO Foundations &amp; Digital Marketing · Pakistan &amp; International
          </p>
        </div>
      </div>
    </footer>
  );
}
