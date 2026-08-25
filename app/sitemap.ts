import type { MetadataRoute } from "next";

const caseStudySlugs = [
  "leakshot",
  "colorproof",
  "roamapply",
  "regretly",
  "flow-api",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ahmadpiracha.online";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];

  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...caseStudyPages];
}
