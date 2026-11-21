import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Info, Minus } from "lucide-react";
import { pricingPackages } from "@/lib/content";
import { ConsultationBanner } from "@/components/sections/ConsultationBanner";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing & Starter Packages",
  description:
    "Explore quote-based website and SEO setup packages from Tasmiya Digital Hub with clear deliverables, page limits, revisions, delivery estimates, and exclusions.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      {/* Header Band */}
      <section className="bg-[#24143D] py-16 text-[#F8F7FC] sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-medium text-[#C6B1F5]">
              Starter Packages · Quote-Based Scope
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-white">
              Transparent Starting Scopes Tailored to Your Business
            </h1>
            <p className="text-base leading-relaxed text-[#D9CEF7] sm:text-lg">
              Every website has different page requirements, language needs, and content
              readiness. Compare deliverables, page limits, revisions, delivery estimates,
              and exclusions below, then request a custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="bg-[#F8F7FC] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPackages.map((pkg) => (
              <article
                key={pkg.id}
                className={cn(
                  "flex flex-col justify-between rounded-2xl border p-7 sm:p-8",
                  pkg.highlighted
                    ? "border-[#9875E8] bg-[#24143D] text-[#F8F7FC]"
                    : "border-[#24143D]/12 bg-white text-[#24143D]"
                )}
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p
                      className={cn(
                        "text-xs font-semibold",
                        pkg.highlighted ? "text-[#C6B1F5]" : "text-[#663EC4]"
                      )}
                    >
                      {pkg.highlighted ? "Most Comprehensive Foundation" : "Quote-Based Package"}
                    </p>
                    <h2
                      className={cn(
                        "text-2xl font-bold tracking-tight",
                        pkg.highlighted ? "text-white" : "text-[#24143D]"
                      )}
                    >
                      {pkg.name}
                    </h2>
                    <p
                      className={cn(
                        "text-sm leading-relaxed",
                        pkg.highlighted ? "text-[#D9CEF7]" : "text-[#4A3F61]"
                      )}
                    >
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Scope Specs: Page Limit, Revisions, Delivery Estimate */}
                  <dl
                    className={cn(
                      "space-y-2.5 border-y py-4 text-xs leading-relaxed",
                      pkg.highlighted
                        ? "border-white/12 text-[#D9CEF7]"
                        : "border-[#24143D]/10 text-[#4A3F61]"
                    )}
                  >
                    <div>
                      <dt className={cn("font-semibold", pkg.highlighted ? "text-white" : "text-[#24143D]")}>
                        Target Audience
                      </dt>
                      <dd>{pkg.idealFor}</dd>
                    </div>
                    <div>
                      <dt className={cn("font-semibold", pkg.highlighted ? "text-white" : "text-[#24143D]")}>
                        Page Limit
                      </dt>
                      <dd>{pkg.pageLimit}</dd>
                    </div>
                    <div>
                      <dt className={cn("font-semibold", pkg.highlighted ? "text-white" : "text-[#24143D]")}>
                        Revisions Included
                      </dt>
                      <dd>{pkg.revisions}</dd>
                    </div>
                    <div>
                      <dt className={cn("font-semibold", pkg.highlighted ? "text-white" : "text-[#24143D]")}>
                        Estimated Delivery
                      </dt>
                      <dd>{pkg.deliveryEstimate}</dd>
                    </div>
                  </dl>

                  {/* Deliverables */}
                  <div className="space-y-2.5">
                    <h3
                      className={cn(
                        "text-xs font-semibold uppercase tracking-wide",
                        pkg.highlighted ? "text-[#C6B1F5]" : "text-[#663EC4]"
                      )}
                    >
                      Deliverables Included
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.included.map((feature) => (
                        <li
                          key={feature}
                          className={cn(
                            "flex items-start gap-2.5 text-sm leading-relaxed",
                            pkg.highlighted ? "text-[#F8F7FC]" : "text-[#24143D]"
                          )}
                        >
                          <Check
                            className={cn(
                              "mt-0.5 h-4 w-4 shrink-0",
                              pkg.highlighted ? "text-[#9875E8]" : "text-[#663EC4]"
                            )}
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div
                    className={cn(
                      "space-y-2.5 border-t pt-5",
                      pkg.highlighted ? "border-white/12" : "border-[#24143D]/10"
                    )}
                  >
                    <h3
                      className={cn(
                        "text-xs font-semibold",
                        pkg.highlighted ? "text-[#C6B1F5]" : "text-[#4A3F61]"
                      )}
                    >
                      Not Included (Available Separately)
                    </h3>
                    <ul className="space-y-2">
                      {pkg.exclusions.map((exclusion) => (
                        <li
                          key={exclusion}
                          className={cn(
                            "flex items-start gap-2 text-xs leading-relaxed",
                            pkg.highlighted ? "text-[#D9CEF7]/90" : "text-[#4A3F61]"
                          )}
                        >
                          <Minus
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-70"
                            aria-hidden="true"
                          />
                          <span>{exclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 space-y-4 pt-4">
                  <Link
                    href={`/contact?package=${encodeURIComponent(pkg.id)}`}
                    className={cn(
                      "inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-150",
                      pkg.highlighted
                        ? "bg-[#9875E8] text-[#1B0D30] hover:bg-[#AE91F0]"
                        : "bg-[#24143D] text-white hover:bg-[#351F59]"
                    )}
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <p
                    className={cn(
                      "text-xs leading-relaxed",
                      pkg.highlighted ? "text-[#C6B1F5]" : "text-[#4A3F61]"
                    )}
                  >
                    {pkg.note}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Quote Policy & Custom Scope Box */}
          <div className="flex items-start gap-4 rounded-2xl border border-[#24143D]/12 bg-white p-7 sm:p-8">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#663EC4]" aria-hidden="true" />
            <div className="space-y-2 text-sm leading-relaxed text-[#4A3F61]">
              <h2 className="text-base font-bold text-[#24143D]">
                How Quoting Works (Pakistan &amp; International Clients)
              </h2>
              <p>
                We keep pricing quote-based instead of showing arbitrary flat figures so
                you only pay for the exact pages, revisions, and features your business
                requires. After a short consultation, we provide a written scope covering
                deliverables, page limits, exclusions, and timeline. No online payments or
                automated checkout are processed on this website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConsultationBanner
        title="Need a Custom Scope Beyond These Three Starting Packages?"
        description="Whether you need landing page support alongside social media content or a focused speed overhaul, let us know what you have in mind."
        primaryLabel="Request a Custom Quote"
        primaryHref="/contact"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}
