"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogArticles } from "@/lib/content";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";

export function BlogFilterList() {
  const categories = ["All", ...Array.from(new Set(blogArticles.map((a) => a.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleArticles =
    selectedCategory === "All"
      ? blogArticles
      : blogArticles.filter((article) => article.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Buttons */}
      <div
        role="tablist"
        aria-label="Filter blog articles by category"
        className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-[#24143D]/10 bg-white p-1.5"
      >
        {categories.map((category) => {
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "min-h-[40px] shrink-0 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150",
                active
                  ? "bg-[#24143D] text-white"
                  : "text-[#4A3F61] hover:bg-[#F8F7FC] hover:text-[#24143D]"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Articles Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {visibleArticles.map((article) => (
          <article
            key={article.slug}
            className="flex flex-col overflow-hidden rounded-2xl border border-[#24143D]/12 bg-white transition-colors duration-150 hover:border-[#9875E8]/60"
          >
            <Link
              href={`/blog/${article.slug}`}
              className="block aspect-[16/10] w-full overflow-hidden"
            >
              <SafeImage
                src={article.image}
                alt={article.imageAlt}
                fallbackTitle={article.title}
                containerClassName="h-full w-full"
                className="transition-transform duration-300 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Link>

            <div className="flex flex-1 flex-col justify-between gap-6 p-7 sm:p-8">
              <div className="space-y-3">
                {/* Clean unboxed metadata */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#4A3F61]">
                  <span className="text-[#663EC4]">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.publishedLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-xl font-bold leading-snug tracking-tight text-[#24143D] sm:text-2xl">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="transition-colors duration-150 hover:text-[#663EC4]"
                  >
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm leading-relaxed text-[#4A3F61] sm:text-base">
                  {article.excerpt}
                </p>
              </div>

              <div>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[#24143D] transition-colors duration-150 hover:text-[#663EC4]"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
