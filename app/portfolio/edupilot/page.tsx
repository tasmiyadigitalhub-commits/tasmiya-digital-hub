import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Info } from "lucide-react";
import { portfolioProjects } from "@/lib/content";
import { SafeImage } from "@/components/ui/SafeImage";
import { EduPilotDemoPreview } from "@/components/sections/EduPilotDemoPreview";
import { ConsultationBanner } from "@/components/sections/ConsultationBanner";

export const metadata: Metadata = {
  title: "EduPilot — Concept Demo Academy Website",
  description:
    "Interactive Concept Demo and case study for EduPilot, a demonstration academy website layout built by Tasmiya Digital Hub.",
  alternates: {
    canonical: "/portfolio/edupilot",
  },
};

export default function EduPilotCaseStudyPage() {
  const edupilot = portfolioProjects[0];

  const architectureModules = [
    {
      number: "01",
      title: "Clear Program & Course Directory",
      detail:
        "Replaces scattered social media flyers and heavy PDF downloads with scannable course cards organized by skill level, duration, and study format.",
    },
    {
      number: "02",
      title: "Mobile-First Admission & Enquiry Flow",
      detail:
        "Built for students and parents browsing on smartphones—featuring single-tap course questions, clear fee-enquiry paths, and accessible form controls.",
    },
    {
      number: "03",
      title: "Education-Focused SEO Structure",
      detail:
        "Each course track follows a logical H1–H3 heading hierarchy, clean URL slug structure, and unique metadata so prospective learners can find specific programs in search.",
    },
    {
      number: "04",
      title: "Calm Visual Contrast & Legibility",
      detail:
        "High-contrast typography on soft white surfaces paired with deep purple navigation anchors helps learners read syllabi and FAQs comfortably.",
    },
  ];

  return (
    <>
      {/* Header Band */}
      <section className="bg-[#24143D] py-16 text-[#F8F7FC] sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Link
            href="/portfolio"
            className="mb-8 inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-[#D9CEF7] transition-colors duration-150 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="max-w-3xl space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#C6B1F5]">
              <span>{edupilot.category}</span>
              <span aria-hidden="true">·</span>
              <span>{edupilot.sector}</span>
              <span aria-hidden="true">·</span>
              <span>Architecture &amp; Interactive Preview</span>
            </div>

            <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-white">
              EduPilot — Concept Demo Academy Website
            </h1>

            <p className="text-base leading-relaxed text-[#D9CEF7] sm:text-lg">
              {edupilot.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Main Case Study Body */}
      <section className="bg-[#F8F7FC] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-14 px-5 sm:px-8">
          {/* Mandatory Concept Demo Disclosure */}
          <div className="flex items-start gap-3 rounded-2xl border border-[#9875E8]/45 bg-white p-6 text-sm text-[#24143D]">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#663EC4]" aria-hidden="true" />
            <p className="leading-relaxed text-[#4A3F61]">
              <strong className="font-semibold text-[#24143D]">
                Concept Demo Notice:
              </strong>{" "}
              EduPilot is an internal Concept Demo created by Tasmiya Digital Hub. It is
              not a live commercial institution and does not represent real client
              enrollment numbers or business revenue claims.
            </p>
          </div>

          {/* Showcase Visual */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[#24143D]/12 bg-white">
            <SafeImage
              src={edupilot.image}
              alt={edupilot.imageAlt}
              fallbackTitle="EduPilot Concept Demo"
              priority
              containerClassName="h-full w-full"
              sizes="(max-width: 1200px) 100vw, 1152px"
            />
          </div>

          {/* Interactive Concept Demo Course Directory */}
          <EduPilotDemoPreview />

          {/* Goals & Deliverables Grid */}
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-5 rounded-2xl border border-[#24143D]/12 bg-white p-7 sm:p-10 lg:col-span-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#24143D]">
                Design Challenge &amp; Goals
              </h2>
              <p className="text-base leading-relaxed text-[#4A3F61]">
                Many local and online academies rely entirely on social media posts or
                unformatted messaging threads to explain courses. The EduPilot Concept Demo
                was structured to solve three practical friction points:
              </p>
              <ul className="space-y-3 pt-1">
                {edupilot.goals.map((goal) => (
                  <li
                    key={goal}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#24143D] sm:text-base"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[#663EC4]"
                      aria-hidden="true"
                    />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5 rounded-2xl border border-[#24143D]/12 bg-white p-7 sm:p-10 lg:col-span-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#24143D]">
                Solution Highlights &amp; Scope
              </h2>
              <p className="text-base leading-relaxed text-[#4A3F61]">
                Every layout decision in EduPilot prioritizes fast comprehension on mobile
                devices and clean separation of course tracks, schedules, and enquiries:
              </p>
              <ul className="space-y-3 pt-1">
                {edupilot.solutionHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#24143D] sm:text-base"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[#663EC4]"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4 Architecture Modules */}
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <p className="text-sm font-semibold text-[#663EC4]">
                System Breakdown
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#24143D]">
                Key Structural Pillars in the EduPilot Concept Demo
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {architectureModules.map((mod) => (
                <div
                  key={mod.number}
                  className="rounded-2xl border border-[#24143D]/10 bg-white p-7"
                >
                  <p className="text-xs font-bold tabular-nums text-[#663EC4]">
                    {mod.number}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-[#24143D]">{mod.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4A3F61] sm:text-base">
                    {mod.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Action Box */}
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-[#24143D]/12 bg-white p-8 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-[#24143D]">
                Building an Academy or Training Institute Website?
              </h2>
              <p className="text-sm text-[#4A3F61]">
                We can adapt this course-first architecture for your institute&apos;s exact
                programs and admissions flow.
              </p>
            </div>
            <Link
              href="/contact?service=business-website-design"
              className="inline-flex min-h-[44px] shrink-0 whitespace-nowrap items-center gap-2 rounded-lg bg-[#24143D] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#351F59]"
            >
              <span>Request Academy Consultation</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
