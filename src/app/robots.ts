import type { MetadataRoute } from "next";
import { personalInfo } from "@/data/personal";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = personalInfo.siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
