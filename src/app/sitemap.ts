import { prisma } from "@/lib/db";
import type { MetadataRoute } from "next";
import { safeDatabaseQuery } from "@/lib/database-utils";

const baseUrl = "https://gunesvidanjor.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes that correspond to physical files in the project
  const staticRoutes = [
    "",
    "/blog",
    "/iletisim",
    "/hizmetler",
    "/ilceler",
    "/antalya-vidanjor",
    "/antalya-tikali-gider-acma",
    "/antalya-kanalizasyon-acma",
    "/antalya-logar-temizleme",
    "/antalya-yag-tutucu-temizleme",
    "/ilceler/kepez",
    "/ilceler/muratpasa",
    "/ilceler/konyaalti",
    "/ilceler/akseki",
    "/ilceler/aksu",
    "/ilceler/demre",
    "/ilceler/doser",
    "/ilceler/elbeyli",
    "/ilceler/finike",
    "/ilceler/gazipasa",
    "/ilceler/gundogmus",
    "/ilceler/ibradi",
    "/ilceler/kale",
    "/ilceler/kas",
    "/ilceler/kemer",
    "/ilceler/kumluca",
    "/ilceler/serik",
  ];

  // Fetch dynamic content with error handling
  const blogPosts = await safeDatabaseQuery(
    () => prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    }),
    []
  );

  const servicePages = await safeDatabaseQuery(
    () => prisma.servicePage.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    }),
    []
  );

  const districtPages = await safeDatabaseQuery(
    () => prisma.districtPage.findMany({
      where: { published: true },
      select: { district: true, updatedAt: true },
    }),
    []
  );

  // Ensure arrays are never null
  const blogs = blogPosts || [];
  const services = servicePages || [];
  const districts = districtPages || [];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/hizmetler/${service.slug}`,
    lastModified: service.updatedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const districtEntries: MetadataRoute.Sitemap = districts.map((district) => ({
    url: `${baseUrl}/ilceler/${district.district}`,
    lastModified: district.updatedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...serviceEntries, ...districtEntries];
}
