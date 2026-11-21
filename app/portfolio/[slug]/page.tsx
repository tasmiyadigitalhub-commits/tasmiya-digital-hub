import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Info } from "lucide-react";
import { portfolioProjects } from "@/lib/content";
import { SafeImage } from "@/components/ui/SafeImage";
import { ConsultationBanner } from "@/components/sections/ConsultationBanner";

interface PortfolioDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects
    .filter((p) => p.slug !== "edupilot")
    .map((project) => ({
      slug: project.slug,
    }));
}

export async function generateMetadata({
  params,
}: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — ${project.category}`,
    description: project.summary,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — ${project.category} | Tasmiya Digital Hub`,
      description: project.summary,
      url: `/portfolio/${project.slug}`,
    },
    twitter: {
      title: `${project.title} — ${project.category} | Tasmiya Digital Hub`,
      description: project.summary,
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
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
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.sector}</span>
            </div>

            <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-white">
              {project.title} — {project.category}
            </h1>

            <p className="text-base leading-relaxed text-[#D9CEF7] sm:text-lg">
              {project.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F7FC] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-5 sm:px-8">
          {/* Concept Demo Disclosure */}
          <div className="flex items-start gap-3 rounded-2xl border border-[#9875E8]/45 bg-white p-6 text-sm text-[#24143D]">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#663EC4]" aria-hidden="true" />
            <p className="leading-relaxed text-[#4A3F61]">
              <strong className="font-semibold text-[#24143D]">
                Concept Demo Notice:
              </strong>{" "}
              This showcase is an internal Concept Demo created by Tasmiya Digital Hub to
              demonstrate layout structure, user journeys, and SEO hierarchy. It is not a
              live third-party client project.
            </p>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[#24143D]/12 bg-white">
            <SafeImage
              src={project.image}
              alt={project.imageAlt}
              fallbackTitle={project.title}
              priority
              containerClassName="h-full w-full"
              sizes="(max-width: 1200px) 100vw, 1152px"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-5 rounded-2xl border border-[#24143D]/12 bg-white p-7 sm:p-10 lg:col-span-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#24143D]">
                Concept Objectives
              </h2>
              <ul className="space-y-3">
                {project.goals.map((goal) => (
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
                Architecture Highlights &amp; Deliverables
              </h2>
              <ul className="space-y-3">
                {project.solutionHighlights.map((highlight) => (
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
                {project.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#4A3F61]"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[#663EC4]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-[#24143D]/12 bg-white p-8 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-[#24143D]">
                Want to Adapt This Concept Demo for Your Business?
              </h2>
              <p className="text-sm text-[#4A3F61]">
                Tell us about your services and goals to request a tailored website quote.
              </p>
            </div>
            <Link
              href="/contact?service=business-website-design"
              className="inline-flex min-h-[44px] shrink-0 whitespace-nowrap items-center gap-2 rounded-lg bg-[#24143D] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#351F59]"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
