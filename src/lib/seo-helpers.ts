import { Metadata } from "next";
import { prisma } from "@/lib/db";
import { generateMetadata, SEOProps } from "@/lib/seo";

async function safe<T>(p: Promise<T>): Promise<T | null> {
  try {
    return await p;
  } catch {
    return null;
  }
}

export async function generateServicePageMetadata(
  slug: string,
  fallback: SEOProps
): Promise<Metadata> {
  const service = await safe(
    prisma.servicePage.findUnique({ where: { slug } })
  );
  const title = service?.title ?? fallback.title;
  const description = service?.description ?? fallback.description;
  const image = service?.image ?? fallback.image;
  return generateMetadata({
    title,
    description,
    canonical: `/${slug}`,
    image,
  });
}

export async function generateDistrictPageMetadata(
  slug: string,
  fallback: SEOProps
): Promise<Metadata> {
  const district = await safe(
    prisma.districtPage.findUnique({ where: { district: slug } })
  );
  const title = district?.title ?? fallback.title;
  const description = district?.description ?? fallback.description;
  const image = district?.image ?? fallback.image;
  return generateMetadata({
    title,
    description,
    canonical: `/ilceler/${slug}`,
    image,
  });
}

export async function generateBlogPostMetadata(
  slug: string,
  fallback: SEOProps
): Promise<Metadata> {
  const post = await safe(
    prisma.blogPost.findUnique({ where: { slug } })
  );
  const title = post?.title ?? fallback.title;
  const description = post?.excerpt ?? fallback.description;
  const image = post?.image ?? fallback.image;
  return generateMetadata({
    title,
    description,
    canonical: `/blog/${slug}`,
    image,
  });
}

