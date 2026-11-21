import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { siteImages } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { SafeImage } from "@/components/ui/SafeImage";
import { ConsultationBanner } from "@/components/sections/ConsultationBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Tasmiya Digital Hub—a growing digital agency helping small businesses, startups, and academies in Pakistan and internationally build trustworthy websites.",
  alternates: {
    canonical: "/about",
  },
};

const workingPrinciples = [
  {
    number: "01",
    title: "Honesty Over Hype",
    description:
      "We do not invent awards, claim fabricated client counts, or promise overnight search rankings. Every deliverable is scoped plainly and explained in everyday language.",
  },
  {
    number: "02",
    title: "Function & Readability First",
    description:
      "A business website should never force visitors to fight slow animations or crowded menus. Clarity, fast mobile loading, and accessible forms always come first.",
  },
  {
    number: "03",
    title: "Editable, Maintainable Builds",
    description:
      "As your services, pricing, or team details evolve, your website should adapt easily without needing a complete rebuild.",
  },
  {
    number: "04",
    title: "Built for Local & Global Clients",
    description:
      "We understand the practical needs of businesses operating across Pakistan as well as international founders serving customers worldwide.",
  },
];

const audienceFocus = [
  "Small businesses establishing their first credible online home",
  "Startups and entrepreneurs preparing to launch a focused offer",
  "Local service providers relying on direct calls and WhatsApp enquiries",
  "Training academies and educational institutes organizing courses online",
  "International business owners seeking reliable remote web & SEO support",
];

export default function AboutPage() {
  return (
    <>
      {/* Header Band */}
      <section className="bg-[#24143D] py-16 text-[#F8F7FC] sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-medium text-[#C6B1F5]">
              About {siteConfig.shortName}
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-white">
              A Growing Digital Agency Focused on Honest, Practical Web Craft
            </h1>
            <p className="text-base leading-relaxed text-[#D9CEF7] sm:text-lg">
              {siteConfig.tagline} We partner with small businesses, startups,
              academies, and entrepreneurs in Pakistan and internationally to build
              websites that look composed, load quickly, and encourage real customer
              enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Studio Visual */}
      <section className="bg-[#F8F7FC] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <h2 className="text-3xl font-bold tracking-tight text-[#24143D]">
                Why We Built Tasmiya Digital Hub
              </h2>
              <p className="text-base leading-relaxed text-[#4A3F61]">
                Too many growing businesses invest in websites that look cluttered on
                mobile phones, load slowly, or leave visitors unsure of what the company
                actually offers. Others are sold vague digital marketing retainers without
                getting basic website speed and search structure right first.
              </p>
              <p className="text-base leading-relaxed text-[#4A3F61]">
                Tasmiya Digital Hub was created to offer a clearer alternative:
                disciplined web design, structured on-page and technical SEO foundations,
                and practical digital marketing support—delivered with transparent
                communication from discovery through launch.
              </p>

              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#24143D] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#351F59]"
                >
                  <span>Explore Our 6 Core Services</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#24143D]/12">
                <SafeImage
                  src={siteImages.agencyStudio.src}
                  alt={siteImages.agencyStudio.alt}
                  fallbackTitle={siteImages.agencyStudio.caption}
                  containerClassName="h-full w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="border-y border-[#24143D]/10 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold text-[#663EC4]">How We Work</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#24143D]">
              Principles That Guide Every Project
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {workingPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="rounded-2xl border border-[#24143D]/10 bg-[#F8F7FC] p-7 sm:p-8"
              >
                <p className="text-xs font-bold tabular-nums text-[#663EC4]">
                  {principle.number}
                </p>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-[#24143D]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A3F61] sm:text-base">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-[#F8F7FC] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 rounded-2xl border border-[#24143D]/12 bg-white p-8 sm:p-12 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5">
              <p className="text-sm font-semibold text-[#663EC4]">Target Audience</p>
              <h2 className="text-2xl font-bold tracking-tight text-[#24143D] sm:text-3xl">
                Designed for Growing Businesses in Pakistan &amp; Abroad
              </h2>
              <p className="text-base leading-relaxed text-[#4A3F61]">
                Whether you are launching a new local venture or refining an international
                service brand, our workflow adapts to your stage and resources.
              </p>
            </div>

            <ul className="space-y-4 lg:col-span-7">
              {audienceFocus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-[#24143D]/8 pb-4 last:border-b-0 last:pb-0"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#663EC4]"
                    aria-hidden="true"
                  />
                  <span className="text-base text-[#24143D]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
