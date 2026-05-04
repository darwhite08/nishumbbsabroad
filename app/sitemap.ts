import { MetadataRoute } from "next";
import { countries } from "@/data/countries";
import { universities } from "@/data/universities";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://worldwiseducation.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/countries`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/universities`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/process`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/eligibility`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/faq`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const countryPages = countries.map((c) => ({
    url: `${BASE_URL}/countries/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const universityPages = universities.map((u) => ({
    url: `${BASE_URL}/universities/${u.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: new Date(p.publishedAt),
  }));

  return [...staticPages, ...countryPages, ...universityPages, ...blogPages];
}
