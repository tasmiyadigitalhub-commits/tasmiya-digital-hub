import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you requested could not be found on Tasmiya Digital Hub.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="bg-[#24143D] py-24 text-[#F8F7FC] sm:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-sm font-semibold tabular-nums text-[#9875E8]">
          Error 404
        </p>
        <h1 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-white">
          This Page Could Not Be Found
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#D9CEF7]">
          The link you followed may have moved or been mistyped. You can return to
          the homepage or jump straight to our services and contact page.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[48px] shrink-0 whitespace-nowrap items-center gap-2 rounded-lg bg-[#9875E8] px-6 py-3 text-sm font-semibold text-[#1B0D30] transition-colors duration-150 hover:bg-[#AE91F0]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-[48px] shrink-0 whitespace-nowrap items-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/10"
          >
            <span>Explore Services</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] shrink-0 whitespace-nowrap items-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
