import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: "https://www.drasutoshrout.com/sitemap.xml",
    host: "https://www.drasutoshrout.com",
  };
}
