"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoCourse {
  id: string;
  title: string;
  track: "Design" | "Development" | "Marketing";
  duration: string;
  format: string;
  summary: string;
  modules: string[];
}

const demoCourses: DemoCourse[] = [
  {
    id: "ui-ux-foundations",
    title: "UI/UX & Responsive Web Design",
    track: "Design",
    duration: "8 Weeks · Sample Schedule",
    format: "Live Online & Studio Lab",
    summary:
      "Sample course entry demonstrating how academies can outline module progression, weekly hours, and beginner entry requirements clearly.",
    modules: ["User Flows & Wireframes", "Typography & Color Systems", "Responsive Mobile Breakpoints"],
  },
  {
    id: "frontend-web-track",
    title: "Modern Frontend Web Development",
    track: "Development",
    duration: "12 Weeks · Sample Schedule",
    format: "Cohort-Based Workshop",
    summary:
      "Demonstrates structured curriculum blocks so prospective students understand prerequisites and project milestones before enquiring.",
    modules: ["Semantic HTML & CSS Layouts", "JavaScript & React Components", "Performance & Accessibility Basics"],
  },
  {
    id: "search-content-marketing",
    title: "Practical SEO & Digital Content Strategy",
    track: "Marketing",
    duration: "6 Weeks · Sample Schedule",
    format: "Evening Hybrid Track",
    summary:
      "Shows how business and marketing courses can pair plain-language outcomes with a friction-free admission enquiry action.",
    modules: ["On-Page SEO Architecture", "Search Intent & Content Planning", "Campaign Landing Optimization"],
  },
];

const tracks = ["All Tracks", "Design", "Development", "Marketing"] as const;

export function EduPilotDemoPreview() {
  const [selectedTrack, setSelectedTrack] = useState<(typeof tracks)[number]>("All Tracks");

  const visibleCourses =
    selectedTrack === "All Tracks"
      ? demoCourses
      : demoCourses.filter((course) => course.track === selectedTrack);

  return (
    <div className="space-y-8 rounded-2xl border border-[#24143D]/12 bg-white p-7 sm:p-10">
      <div className="flex flex-col justify-between gap-4 border-b border-[#24143D]/10 pb-6 md:flex-row md:items-end">
        <div className="space-y-2">
          <p className="text-xs font-semibold text-[#663EC4]">
            Interactive Concept Demo · Sample Academy Course Directory
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-[#24143D]">
            Preview the EduPilot Course Filtering Experience
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[#4A3F61]">
            Click a track below to see how an academy can organize programs cleanly on
            desktop and mobile. Sample courses shown here are demonstration entries only.
          </p>
        </div>

        {/* Interactive Track Filter */}
        <div
          role="tablist"
          aria-label="Filter EduPilot concept demo courses"
          className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-[#24143D]/10 bg-[#F8F7FC] p-1"
        >
          {tracks.map((track) => {
            const active = selectedTrack === track;
            return (
              <button
                key={track}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedTrack(track)}
                className={cn(
                  "min-h-[38px] shrink-0 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-150",
                  active
                    ? "bg-[#24143D] text-white"
                    : "text-[#4A3F61] hover:bg-white hover:text-[#24143D]"
                )}
              >
                {track}
              </button>
            );
          })}
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {visibleCourses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col justify-between rounded-xl border border-[#24143D]/10 bg-[#F8F7FC] p-6"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#4A3F61]">
                <span className="font-semibold text-[#663EC4]">{course.track}</span>
                <span aria-hidden="true">·</span>
                <span>Concept Demo</span>
              </div>

              <h3 className="text-lg font-bold tracking-tight text-[#24143D]">
                {course.title}
              </h3>

              <div className="space-y-1 text-xs text-[#4A3F61]">
                <p className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#663EC4]" aria-hidden="true" />
                  <span>{course.duration}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-[#663EC4]" aria-hidden="true" />
                  <span>{course.format}</span>
                </p>
              </div>

              <p className="text-sm leading-relaxed text-[#4A3F61]">
                {course.summary}
              </p>

              <ul className="space-y-1.5 border-t border-[#24143D]/10 pt-3 text-xs text-[#24143D]">
                {course.modules.map((mod) => (
                  <li key={mod}>• {mod}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-2">
              <Link
                href={`/contact?service=business-website-design`}
                className="inline-flex min-h-[40px] w-full items-center justify-center gap-1.5 rounded-lg bg-[#24143D] px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-[#351F59]"
              >
                <span>Enquire About This Layout</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
