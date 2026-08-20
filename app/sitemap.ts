import type { MetadataRoute } from "next";
import { faculties, posts } from "@/data/site";
import { siteUrl } from "@/lib/site-config";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/programs", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/academics", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/admissions", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/staff", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/faqs", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const facultyEntries: MetadataRoute.Sitemap = faculties.map((faculty) => ({
    url: `${siteUrl}/programs/${faculty.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...facultyEntries, ...postEntries];
}
