import type { Metadata } from "next";
import { Suspense } from "react";
import { MessageSquare, Clock, Globe } from "lucide-react";
import { siteConfig, getWhatsAppHref } from "@/lib/site-config";
import { ContactEnquiryForm } from "@/components/sections/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Contact Our Digital Marketing Agency",
  description:
    "Contact Tasmiya Digital Hub on WhatsApp (+92 306 5469314) for website design, SEO services, and social media marketing support in Pakistan and globally.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Our Digital Marketing Agency | Tasmiya Digital Hub",
    description:
      "Contact Tasmiya Digital Hub on WhatsApp (+92 306 5469314) for website design, SEO services, and social media marketing support in Pakistan and globally.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Our Digital Marketing Agency | Tasmiya Digital Hub",
    description:
      "Contact Tasmiya Digital Hub on WhatsApp (+92 306 5469314) for website design, SEO services, and social media marketing support in Pakistan and globally.",
  },
};

function FormFallback() {
  return (
    <div className="rounded-2xl border border-[#24143D]/12 bg-white p-8 text-sm text-[#4A3F61]">
      Loading enquiry form...
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Header Band */}
      <section className="bg-[#24143D] py-16 text-[#F8F7FC] sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-medium text-[#C6B1F5]">
              Contact {siteConfig.shortName}
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-white">
              Start a Conversation About Your Digital Presence
            </h1>
            <p className="text-base leading-relaxed text-[#D9CEF7] sm:text-lg">
              Reach us directly on WhatsApp at{" "}
              <strong className="font-semibold text-white">
                {siteConfig.contact.whatsappNumberDisplay}
              </strong>{" "}
              or prepare your project brief using the validated enquiry form below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="bg-[#F8F7FC] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Enquiry Form */}
            <div className="lg:col-span-7">
              <Suspense fallback={<FormFallback />}>
                <ContactEnquiryForm />
              </Suspense>
            </div>

            {/* Direct WhatsApp Contact Sidebar */}
            <aside className="space-y-6 lg:col-span-5">
              <div className="space-y-6 rounded-2xl border border-[#24143D]/12 bg-white p-7 sm:p-8">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-[#663EC4]">
                    Official Direct Channel
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-[#24143D]">
                    Chat With Us on WhatsApp
                  </h2>
                  <p className="text-sm leading-relaxed text-[#4A3F61]">
                    For the fastest response in Pakistan or internationally, message
                    Tasmiya Digital Hub directly on WhatsApp.
                  </p>
                </div>

                {/* Official WhatsApp Button */}
                <div className="space-y-4 border-t border-[#24143D]/10 pt-5">
                  <div className="flex items-start gap-3">
                    <MessageSquare
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#663EC4]"
                      aria-hidden="true"
                    />
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-[#24143D]">
                        Official WhatsApp Number
                      </h3>
                      <p className="text-base font-bold tabular-nums text-[#24143D]">
                        {siteConfig.contact.whatsappNumberDisplay}
                      </p>
                    </div>
                  </div>
                  <a
                    href={getWhatsAppHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#24143D] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#351F59]"
                  >
                    <MessageSquare className="h-4 w-4 text-[#9875E8]" aria-hidden="true" />
                    <span>Message on WhatsApp</span>
                  </a>
                  <p className="text-xs leading-relaxed text-[#4A3F61]">
                    Opens WhatsApp with a pre-filled message:{" "}
                    <em>&ldquo;{siteConfig.contact.whatsappDefaultMessage}&rdquo;</em>
                  </p>
                </div>

                {/* Service Area & Working Hours */}
                <div className="space-y-4 border-t border-[#24143D]/10 pt-5 text-sm text-[#4A3F61]">
                  <div className="flex items-start gap-3">
                    <Globe
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#663EC4]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-[#24143D]">Service Coverage</p>
                      <p>{siteConfig.contact.locationDisplay}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#663EC4]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-[#24143D]">Consultation Availability</p>
                      <p>{siteConfig.contact.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
