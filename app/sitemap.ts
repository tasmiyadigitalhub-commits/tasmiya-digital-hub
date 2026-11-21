import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { blogArticles, portfolioProjects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/pricing",
    "/blog",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-11-21"),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const portfolioEntries: MetadataRoute.Sitemap = portfolioProjects.map(
    (project) => ({
      url: `${baseUrl}${project.demoUrl}`,
      lastModified: new Date("2026-11-21"),
      changeFrequency: "monthly",
      priority: 0.75,
    })
  );

  const blogEntries: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date("2026-11-21"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...portfolioEntries, ...blogEntries];
}
