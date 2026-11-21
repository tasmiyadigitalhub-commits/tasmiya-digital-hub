import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { blogArticles } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { SafeImage } from "@/components/ui/SafeImage";
import { ConsultationBanner } from "@/components/sections/ConsultationBanner";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.metaDescription,
      url: `/blog/${article.slug}`,
    },
    twitter: {
      title: article.seoTitle,
      description: article.metaDescription,
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = blogArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    author: {
      "@type": "Organization",
      name: siteConfig.shortName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.shortName,
    },
    mainEntityOfPage: `${siteConfig.siteUrl}/blog/${article.slug}`,
  };

  return (
    <>
      <article>
        {/* Header Band */}
        <header className="bg-[#24143D] py-16 text-[#F8F7FC] sm:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Link
              href="/blog"
              className="mb-8 inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-[#D9CEF7] transition-colors duration-150 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Back to All Articles</span>
            </Link>

            <div className="space-y-5">
              {/* Unboxed Metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#C6B1F5]">
                <span>{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{article.publishedLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>

              <h1 className="text-[clamp(1.85rem,3.6vw,3rem)] font-bold leading-[1.15] tracking-tight text-white">
                {article.title}
              </h1>

              <p className="text-base leading-relaxed text-[#D9CEF7] sm:text-lg">
                {article.excerpt}
              </p>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="bg-[#F8F7FC] py-14 sm:py-20">
          <div className="mx-auto max-w-4xl space-y-12 px-5 sm:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[#24143D]/12 bg-white">
              <SafeImage
                src={article.image}
                alt={article.imageAlt}
                fallbackTitle={article.title}
                priority
                containerClassName="h-full w-full"
                sizes="(max-width: 900px) 100vw, 896px"
              />
            </div>

            <div className="space-y-10 rounded-2xl border border-[#24143D]/12 bg-white p-7 sm:p-12">
              {article.sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight text-[#24143D]">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="max-w-[70ch] text-base leading-relaxed text-[#4A3F61]"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-3 pt-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-base leading-relaxed text-[#24143D]"
                        >
                          <Check
                            className="mt-1 h-4 w-4 shrink-0 text-[#663EC4]"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Key Takeaway Summary */}
              <div className="rounded-xl border border-[#9875E8]/40 bg-[#F8F7FC] p-6">
                <h3 className="text-sm font-bold text-[#24143D]">Key Takeaway</h3>
                <p className="mt-2 text-base leading-relaxed text-[#4A3F61]">
                  {article.takeaway}
                </p>
              </div>

              {/* Contextual Internal Links */}
              <section className="space-y-4 border-t border-[#24143D]/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-[#24143D]">
                  Related Services &amp; Next Steps
                </h2>
                <ul className="space-y-3">
                  {article.internalLinks.map((link) => (
                    <li
                      key={link.href}
                      className="flex flex-col justify-between gap-2 rounded-xl border border-[#24143D]/10 bg-[#F8F7FC] p-4 sm:flex-row sm:items-center"
                    >
                      <span className="text-sm text-[#4A3F61]">{link.context}</span>
                      <Link
                        href={link.href}
                        className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[#24143D] underline underline-offset-4 transition-colors duration-150 hover:text-[#663EC4]"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Related Articles */}
            <div className="space-y-6 pt-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#24143D]">
                Continue Reading
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="flex flex-col justify-between rounded-2xl border border-[#24143D]/12 bg-white p-6 transition-colors duration-150 hover:border-[#9875E8]"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-[#4A3F61]">
                        <span className="font-medium text-[#663EC4]">
                          {related.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{related.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold leading-snug text-[#24143D]">
                        {related.title}
                      </h3>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#663EC4]">
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <ConsultationBanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
