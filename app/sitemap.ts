import type { MetadataRoute } from "next";
import { SITE_URL, absoluteUrl, servicePages } from "@/lib/seo";

const lastModified = new Date("2026-06-05T00:00:00-03:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl("/images/hero-braids.jpg")],
    },
    {
      url: absoluteUrl("/agendar"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/trancas"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [absoluteUrl("/images/box-braids.jpg")],
    },
  ];

  const semanticRoutes: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: absoluteUrl(`/trancas/${page.slug}`),
    lastModified,
    changeFrequency: page.kind === "service" ? "monthly" : "weekly",
    priority: page.kind === "service" ? 0.82 : 0.76,
    images: [absoluteUrl(page.image)],
  }));

  return [...staticRoutes, ...semanticRoutes];
}
