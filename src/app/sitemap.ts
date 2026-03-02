import { prisma } from "@/lib/db";
import type { MetadataRoute } from "next";

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
  let blogPosts: any[] = [];
  let servicePages: any[] = [];
  let districtPages: any[] = [];

  try {
    [blogPosts, servicePages, districtPages] = await Promise.all([
      prisma.blogPost.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true },
      }),
      prisma.servicePage.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true },
      }),
      prisma.districtPage.findMany({
        where: { published: true },
        select: { district: true, updatedAt: true },
      }),
    ]);
  } catch (error) {
    console.error("Error fetching dynamic content for sitemap:", error);
    // Continue with empty arrays if database is not available
  }

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Filter out services that might conflict with static routes (if any)
  // For now, we assume service pages are under /hizmetler/[slug] which doesn't conflict with root static pages
  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: `${baseUrl}/hizmetler/${page.slug}`,
    lastModified: page.updatedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Filter out districts that are already static
  const staticDistricts = ["kepez", "muratpasa", "konyaalti", "akseki", "aksu", "demre", "doser", "elbeyli", "finike", "gazipasa", "gundogmus", "ibradi", "kale", "kas", "kemer", "kumluca", "serik"];
  const districtEntries: MetadataRoute.Sitemap = districtPages
    .filter((page) => !staticDistricts.includes(page.district))
    .map((page) => ({
      url: `${baseUrl}/ilceler/${page.district}`,
      lastModified: page.updatedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  return [...staticEntries, ...blogEntries, ...serviceEntries, ...districtEntries];
}
