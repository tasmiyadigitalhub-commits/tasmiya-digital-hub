import type { Metadata } from "next";
import { BlogFilterList } from "@/components/sections/BlogFilterList";
import { ConsultationBanner } from "@/components/sections/ConsultationBanner";

export const metadata: Metadata = {
  title: "Website Design, SEO & Marketing Blog",
  description:
    "Practical guides on website design, SEO services, mobile speed optimization, and social media marketing from Tasmiya Digital Hub.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Website Design, SEO & Marketing Blog | Tasmiya Digital Hub",
    description:
      "Practical guides on website design, SEO services, mobile speed optimization, and social media marketing from Tasmiya Digital Hub.",
    url: "/blog",
  },
  twitter: {
    title: "Website Design, SEO & Marketing Blog | Tasmiya Digital Hub",
    description:
      "Practical guides on website design, SEO services, mobile speed optimization, and social media marketing from Tasmiya Digital Hub.",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Header Band */}
      <section className="bg-[#24143D] py-16 text-[#F8F7FC] sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-medium text-[#C6B1F5]">
              Editorial Notes &amp; Guides
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-white">
              Practical Advice on Web Design, SEO, and Online Enquiries
            </h1>
            <p className="text-base leading-relaxed text-[#D9CEF7] sm:text-lg">
              Clear, jargon-free articles written for business owners, founders, and
              academy directors looking to build a stronger digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="bg-[#F8F7FC] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <BlogFilterList />
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
