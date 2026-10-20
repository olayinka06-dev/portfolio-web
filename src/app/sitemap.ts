
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://olayinkadev-portfolio.vercel.app/",
      lastModified: new Date(),
    },
  ];
}
