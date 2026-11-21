import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { ConsultationBanner } from "@/components/sections/ConsultationBanner";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio & Concept Demo Showcases",
  description:
    "Explore Tasmiya Digital Hub Concept Demo websites and architecture showcases, including our interactive EduPilot academy website Concept Demo.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Header Band */}
      <section className="bg-[#24143D] py-16 text-[#F8F7FC] sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-medium text-[#C6B1F5]">
              Portfolio &amp; Concept Demo Showcases
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-white">
              Structured Digital Work &amp; Concept Demo Case Studies
            </h1>
            <p className="text-base leading-relaxed text-[#D9CEF7] sm:text-lg">
              Inspect how we structure business and academy websites. Every sample
              project is clearly labelled as a <strong className="text-white">Concept Demo</strong> so
              you can always distinguish demonstration builds from verified client work.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="bg-[#F8F7FC] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-10 px-5 sm:px-8">
          {/* Transparency Banner */}
          <div className="flex items-start gap-3 rounded-2xl border border-[#9875E8]/40 bg-white p-5 text-sm text-[#24143D]">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#663EC4]" aria-hidden="true" />
            <p className="leading-relaxed text-[#4A3F61]">
              <strong className="font-semibold text-[#24143D]">
                Concept Demo vs. Verified Client Work:
              </strong>{" "}
              Every sample showcase marked <em>Concept Demo</em> (including{" "}
              <strong className="text-[#24143D]">EduPilot</strong>) is an internal
              design and architecture demonstration created by Tasmiya Digital Hub. We
              never present imaginary projects as real client work.
            </p>
          </div>

          <PortfolioGallery />
        </div>
      </section>

      <ConsultationBanner
        title="Want a Similar Structure Tailored to Your Business?"
        description="Share your sector, goals, and timeline. We will walk you through how a custom layout and SEO foundation can be built for your brand."
      />
    </>
  );
}
