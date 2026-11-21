"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { portfolioProjects } from "@/lib/content";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";

type PortfolioFilter = "all" | "demo" | "client";

export function PortfolioGallery() {
  const [filter, setFilter] = useState<PortfolioFilter>("all");

  const filteredProjects = portfolioProjects.filter((project) => {
    if (filter === "demo") return project.isDemo;
    if (filter === "client") return !project.isDemo;
    return true;
  });

  return (
    <div className="space-y-10">
      {/* Interactive Filter Tabs */}
      <div
        role="tablist"
        aria-label="Filter portfolio work"
        className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-[#24143D]/10 bg-white p-1.5"
      >
        <button
          type="button"
          role="tab"
          aria-selected={filter === "all"}
          onClick={() => setFilter("all")}
          className={cn(
            "min-h-[40px] shrink-0 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150",
            filter === "all"
              ? "bg-[#24143D] text-white"
              : "text-[#4A3F61] hover:bg-[#F8F7FC] hover:text-[#24143D]"
          )}
        >
          All Showcases
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={filter === "demo"}
          onClick={() => setFilter("demo")}
          className={cn(
            "min-h-[40px] shrink-0 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150",
            filter === "demo"
              ? "bg-[#24143D] text-white"
              : "text-[#4A3F61] hover:bg-[#F8F7FC] hover:text-[#24143D]"
          )}
        >
          Concept Demo
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={filter === "client"}
          onClick={() => setFilter("client")}
          className={cn(
            "min-h-[40px] shrink-0 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150",
            filter === "client"
              ? "bg-[#24143D] text-white"
              : "text-[#4A3F61] hover:bg-[#F8F7FC] hover:text-[#24143D]"
          )}
        >
          Verified Client Work
        </button>
      </div>

      {/* Empty State for Client Work (Honesty Policy: No Fake Client Projects) */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-[#24143D]/12 bg-white p-8 sm:p-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold tracking-wide text-[#663EC4]">
              Verified Client Portfolio · Transparency Notice
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-[#24143D]">
              Live Client Case Studies Are Added Only After Launch &amp; Consent
            </h2>
            <p className="text-base leading-relaxed text-[#4A3F61]">
              As a growing digital agency, Tasmiya Digital Hub never presents imaginary
              builds as real client work. Our current showcase features clearly labelled{" "}
              <strong className="text-[#24143D]">Concept Demo</strong> architectures—including
              EduPilot—while verified client launches are documented here only with
              explicit permission.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/portfolio/edupilot"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#24143D] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#351F59]"
              >
                <span>Open EduPilot Concept Demo</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#24143D]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#24143D] transition-colors duration-150 hover:bg-[#F8F7FC]"
              >
                <span>Start Your Project</span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-10">
          {filteredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="grid overflow-hidden rounded-2xl border border-[#24143D]/12 bg-white lg:grid-cols-12"
            >
              <div
                className={cn(
                  "relative aspect-[16/10] lg:col-span-6 lg:aspect-auto lg:min-h-[380px]",
                  index % 2 === 1 && "lg:order-2"
                )}
              >
                <SafeImage
                  src={project.image}
                  alt={project.imageAlt}
                  fallbackTitle={project.title}
                  containerClassName="h-full w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div
                className={cn(
                  "flex flex-col justify-between gap-6 p-7 sm:p-10 lg:col-span-6",
                  index % 2 === 1 && "lg:order-1"
                )}
              >
                <div className="space-y-4">
                  {/* Unboxed Typographic Metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#663EC4]">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-[#4A3F61]">{project.sector}</span>
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-[#24143D] sm:text-3xl">
                    {project.title}
                  </h2>

                  <p className="text-base leading-relaxed text-[#4A3F61]">
                    {project.summary}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {project.deliverables.map((item) => (
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
                    href={project.demoUrl}
                    className="inline-flex min-h-[44px] shrink-0 whitespace-nowrap items-center gap-2 rounded-lg bg-[#24143D] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#351F59]"
                  >
                    <span>View Concept Demo</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/contact?service=${encodeURIComponent("business-website-design")}`}
                    className="inline-flex min-h-[44px] shrink-0 whitespace-nowrap items-center rounded-lg border border-[#24143D]/20 px-4 py-2.5 text-sm font-semibold text-[#24143D] transition-colors duration-150 hover:bg-[#F8F7FC]"
                  >
                    Request Similar Build
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
