import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { servicesList, processSteps } from "@/lib/content";
import { ConsultationBanner } from "@/components/sections/ConsultationBanner";

export const metadata: Metadata = {
  title: {
    absolute: "Website Design Services in Pakistan | Tasmiya Digital Hub",
  },
  description:
    "Professional website design services in Pakistan, landing pages, SEO setup, mobile speed optimization, and social media marketing by Tasmiya Digital Hub.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Website Design Services in Pakistan | Tasmiya Digital Hub",
    description:
      "Professional website design services in Pakistan, landing pages, SEO setup, mobile speed optimization, and social media marketing by Tasmiya Digital Hub.",
    url: "/services",
  },
  twitter: {
    title: "Website Design Services in Pakistan | Tasmiya Digital Hub",
    description:
      "Professional website design services in Pakistan, landing pages, SEO setup, mobile speed optimization, and social media marketing by Tasmiya Digital Hub.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Header Band */}
      <section className="bg-[#24143D] py-16 text-[#F8F7FC] sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-medium text-[#C6B1F5]">
              Our Services · Pakistan &amp; International
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-white">
              Website Design Services in Pakistan, SEO &amp; Digital Marketing
            </h1>
            <p className="text-base leading-relaxed text-[#D9CEF7] sm:text-lg">
              Every service is built to work together: clear website design, fast
              mobile performance, structured SEO services, and consistent social media
              marketing across your digital channels.
            </p>
          </div>

          {/* Quick In-Page Jump Links */}
          <nav
            aria-label="Jump to service"
            className="mt-10 flex flex-wrap gap-3 border-t border-white/12 pt-8"
          >
            {servicesList.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="inline-flex min-h-[40px] shrink-0 whitespace-nowrap items-center rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-[#D9CEF7] transition-colors duration-150 hover:border-[#9875E8] hover:text-white"
              >
                {service.number}. {service.shortTitle}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="bg-[#F8F7FC] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-10 px-5 sm:px-8">
          {servicesList.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-24 grid gap-8 rounded-2xl border border-[#24143D]/12 bg-white p-7 sm:p-10 lg:grid-cols-12"
            >
              <div className="space-y-4 lg:col-span-6">
                <p className="text-xs font-bold tabular-nums text-[#663EC4]">
                  {service.number}. Service Scope
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-[#24143D] sm:text-3xl">
                  {service.title}
                </h2>
                <p className="text-base leading-relaxed text-[#4A3F61]">
                  {service.description}
                </p>
                <p className="pt-1 text-sm text-[#4A3F61]">
                  <strong className="font-semibold text-[#24143D]">Ideal for:</strong>{" "}
                  {service.idealFor}
                </p>
              </div>

              <div className="flex flex-col justify-between gap-6 border-t border-[#24143D]/10 pt-6 lg:col-span-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-[#24143D]">
                    What Is Included
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#4A3F61]"
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

                <div className="pt-2">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.id)}`}
                    className="inline-flex min-h-[44px] shrink-0 whitespace-nowrap items-center gap-2 rounded-lg bg-[#24143D] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#351F59]"
                  >
                    <span>Enquire About {service.shortTitle}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Workflow Overview */}
      <section className="border-t border-[#24143D]/10 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold text-[#663EC4]">Delivery Workflow</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#24143D]">
              How Every Service Engagement Progresses
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[#24143D]/10 bg-[#F8F7FC] p-6"
              >
                <p className="text-xs font-bold tabular-nums text-[#663EC4]">
                  Step {step.number}
                </p>
                <h3 className="mt-2 text-lg font-bold text-[#24143D]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A3F61]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
