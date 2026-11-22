import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { siteImages } from "@/lib/images";
import {
  servicesList,
  whyChooseItems,
  processSteps,
  portfolioProjects,
  testimonialPlaceholders,
  faqItems,
} from "@/lib/content";
import { SafeImage } from "@/components/ui/SafeImage";
import { SubtleReveal } from "@/components/ui/MotionPrimitives";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ConsultationBanner } from "@/components/sections/ConsultationBanner";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: "Website Design Services | Tasmiya Digital Hub",
  },
  description:
    "Tasmiya Digital Hub offers website design services, SEO, and digital marketing for businesses in Pakistan and international clients. Request a consultation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Website Design Services | Tasmiya Digital Hub",
    description:
      "Tasmiya Digital Hub offers website design services, SEO, and digital marketing for businesses in Pakistan and international clients. Request a consultation.",
    url: "/",
  },
  twitter: {
    title: "Website Design Services | Tasmiya Digital Hub",
    description:
      "Tasmiya Digital Hub offers website design services, SEO, and digital marketing for businesses in Pakistan and international clients. Request a consultation.",
  },
};

export default function HomePage() {
  const featuredProject = portfolioProjects[0];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* 1. Hero Section — Deep Purple #24143D */}
      <section className="bg-[#24143D] pb-20 pt-14 text-[#F8F7FC] sm:pb-24 sm:pt-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Copy Column */}
            <div className="flex flex-col justify-center space-y-6 lg:col-span-6">
              <p className="text-sm font-medium text-[#C6B1F5]">
                {siteConfig.tagline} · {siteConfig.regionsServed}
              </p>

              <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white">
                Website Design Services That Build a Stronger Digital Presence.
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-[#D9CEF7] sm:text-lg">
                As a digital marketing agency serving Pakistan and international
                founders, Tasmiya Digital Hub delivers fast website design, practical
                SEO services, and social media marketing built to earn genuine enquiries.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/services"
                  className="inline-flex min-h-[48px] shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-lg bg-[#9875E8] px-6 py-3 text-sm font-semibold text-[#1B0D30] transition-colors duration-150 hover:bg-[#AE91F0]"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] shrink-0 whitespace-nowrap items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/10"
                >
                  Get a Free Consultation
                </Link>
              </div>
            </div>

            {/* Right Visual Anchor */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 lg:h-full lg:min-h-[420px]">
                <SafeImage
                  src={siteImages.heroStudio.src}
                  alt={siteImages.heroStudio.alt}
                  fallbackTitle={siteImages.heroStudio.caption}
                  priority
                  containerClassName="h-full w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Grounded Audience Strip */}
          <div className="mt-14 grid gap-6 border-t border-white/12 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm font-semibold text-white">Who We Serve</p>
              <p className="mt-1 text-sm text-[#D9CEF7]">
                Small businesses, startups, entrepreneurs &amp; local brands
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Education Focus</p>
              <p className="mt-1 text-sm text-[#D9CEF7]">
                Training academies &amp; institutes needing structured course pages
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Geographic Reach</p>
              <p className="mt-1 text-sm text-[#D9CEF7]">
                Pakistan &amp; international clients working remotely
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Core Standard</p>
              <p className="mt-1 text-sm text-[#D9CEF7]">
                Fast mobile layouts, clean SEO hygiene &amp; honest scope
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Preview — Soft White #F8F7FC */}
      <section className="bg-[#F8F7FC] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SubtleReveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl space-y-3">
                <p className="text-sm font-semibold text-[#663EC4]">Core Services</p>
                <h2 className="text-3xl font-bold tracking-tight text-[#24143D] sm:text-4xl">
                  Design, Search Foundations, and Marketing Support Under One Roof
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex min-h-[44px] shrink-0 whitespace-nowrap items-center gap-2 text-sm font-semibold text-[#24143D] underline underline-offset-4 transition-colors duration-150 hover:text-[#663EC4]"
              >
                <span>View All Service Scopes</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </SubtleReveal>

          {/* Asymmetric Bento Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service) => (
              <SubtleReveal
                key={service.id}
                className={cn(
                  "flex flex-col justify-between rounded-2xl border border-[#24143D]/10 bg-white p-7 transition-colors duration-150 hover:border-[#9875E8]/60",
                  service.featured && "lg:col-span-2"
                )}
              >
                <div className="space-y-4">
                  <p className="text-xs font-semibold tabular-nums text-[#663EC4]">
                    {service.number}. {service.shortTitle}
                  </p>
                  <h3 className="text-xl font-bold tracking-tight text-[#24143D]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4A3F61] sm:text-base">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#24143D]/8 pt-4">
                  <span className="text-xs text-[#4A3F61]">{service.idealFor}</span>
                  <Link
                    href={`/services#${service.id}`}
                    aria-label={`Read details for ${service.title}`}
                    className="ml-4 inline-flex min-h-[40px] shrink-0 items-center gap-1 text-sm font-semibold text-[#24143D] transition-colors duration-150 hover:text-[#663EC4]"
                  >
                    <span>Details</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </SubtleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us — White Surface */}
      <section className="border-y border-[#24143D]/10 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="space-y-5 lg:col-span-5">
              <p className="text-sm font-semibold text-[#663EC4]">Why Choose Us</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#24143D] sm:text-4xl">
                Practical Craft Built Around Real Business Enquiries
              </h2>
              <p className="text-base leading-relaxed text-[#4A3F61]">
                We focus on what actually helps growing businesses earn trust online:
                readable structure, fast performance on mobile connections, and clear
                enquiry pathways without bloated gimmicks.
              </p>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#24143D]/10">
                <SafeImage
                  src={siteImages.agencyStudio.src}
                  alt={siteImages.agencyStudio.alt}
                  fallbackTitle={siteImages.agencyStudio.caption}
                  containerClassName="h-full w-full"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="divide-y divide-[#24143D]/10 lg:col-span-7">
              {whyChooseItems.map((item) => (
                <div key={item.number} className="py-7 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-5">
                    <span className="mt-1 shrink-0 text-sm font-bold tabular-nums text-[#663EC4]">
                      {item.number}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold tracking-tight text-[#24143D]">
                        {item.title}
                      </h3>
                      <p className="text-base leading-relaxed text-[#4A3F61]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Process — Deep Purple #24143D */}
      <section className="bg-[#24143D] py-20 text-[#F8F7FC] sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold text-[#C6B1F5]">Our Process</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From Initial Conversation to a Search-Ready Launch
            </h2>
            <p className="text-base leading-relaxed text-[#D9CEF7]">
              A straightforward four-step workflow so you always know what is being built
              and why.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col justify-between rounded-2xl border border-white/12 bg-[#2F1B4E] p-7"
              >
                <div className="space-y-4">
                  <p className="text-sm font-bold tabular-nums text-[#9875E8]">
                    Step {step.number}
                  </p>
                  <h3 className="text-lg font-bold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#D9CEF7]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Selected Projects — Soft White #F8F7FC */}
      <section className="bg-[#F8F7FC] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-[#663EC4]">
                Selected Showcase · Concept Demo
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#24143D] sm:text-4xl">
                Featured Concept Demo: EduPilot
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex min-h-[44px] shrink-0 whitespace-nowrap items-center gap-2 text-sm font-semibold text-[#24143D] underline underline-offset-4 transition-colors duration-150 hover:text-[#663EC4]"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-2xl border border-[#24143D]/12 bg-white lg:grid-cols-12">
            <div className="relative aspect-[16/10] lg:col-span-6 lg:aspect-auto lg:min-h-[380px]">
              <SafeImage
                src={featuredProject.image}
                alt={featuredProject.imageAlt}
                fallbackTitle={featuredProject.title}
                containerClassName="h-full w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-between gap-6 p-7 sm:p-10 lg:col-span-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#663EC4]">
                  <span>{featuredProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#4A3F61]">{featuredProject.sector}</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-[#24143D] sm:text-3xl">
                  {featuredProject.title} — Academy Website Concept Demo
                </h3>

                <p className="text-base leading-relaxed text-[#4A3F61]">
                  {featuredProject.summary}
                </p>

                <ul className="space-y-2.5 pt-1">
                  {featuredProject.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#24143D]"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#663EC4]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4 border-t border-[#24143D]/10 pt-6">
                <Link
                  href="/portfolio/edupilot"
                  className="inline-flex min-h-[44px] shrink-0 whitespace-nowrap items-center gap-2 rounded-lg bg-[#24143D] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#351F59]"
                >
                  <span>Open EduPilot Concept Demo</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <span className="text-xs text-[#4A3F61]">
                  Clearly labelled Concept Demo — not a live client claim
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section — Clearly Labelled Sample Placeholders */}
      <section className="border-y border-[#24143D]/10 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold text-[#663EC4]">
              Client Feedback · Sample Placeholder Layout
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#24143D] sm:text-4xl">
              How Verified Testimonials Will Appear Here
            </h2>
            <p className="text-base leading-relaxed text-[#4A3F61]">
              We do not publish fake reviews or invented ratings. The cards below are
              clearly labelled sample placeholders showing our layout for upcoming
              verified client feedback.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonialPlaceholders.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-dashed border-[#24143D]/25 bg-[#F8F7FC] p-7"
              >
                <div className="space-y-4">
                  <p className="text-xs font-semibold text-[#663EC4]">
                    {item.placeholderLabel}
                  </p>
                  <p className="text-sm leading-relaxed text-[#4A3F61]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 border-t border-[#24143D]/10 pt-4 text-xs text-[#4A3F61]">
                  <p className="font-semibold text-[#24143D]">{item.sectorLabel}</p>
                  <p className="mt-0.5">{item.projectType}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="bg-[#F8F7FC] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-10 space-y-3">
            <p className="text-sm font-semibold text-[#663EC4]">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#24143D] sm:text-4xl">
              Straight Answers Before We Begin
            </h2>
          </div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* 8. Final Consultation CTA */}
      <ConsultationBanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
