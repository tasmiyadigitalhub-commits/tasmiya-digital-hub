import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ConsultationBannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function ConsultationBanner({
  title = "Ready to Build a Clearer, More Trustworthy Website?",
  description = "Tell us about your business goals in Pakistan or internationally. We will review your needs and prepare a tailored, transparent project quote.",
  primaryLabel = "Get a Free Consultation",
  primaryHref = "/contact",
  secondaryLabel = "View Starter Packages",
  secondaryHref = "/pricing",
}: ConsultationBannerProps) {
  return (
    <section className="bg-[#24143D] py-20 text-[#F8F7FC] sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 rounded-2xl border border-white/12 bg-[#2F1B4E] p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-[#D9CEF7]">{description}</p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-4">
            <Link
              href={primaryHref}
              className="inline-flex min-h-[48px] shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-lg bg-[#9875E8] px-6 py-3 text-sm font-semibold text-[#1B0D30] transition-colors duration-150 hover:bg-[#AE91F0]"
            >
              <span>{primaryLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex min-h-[48px] shrink-0 whitespace-nowrap items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
