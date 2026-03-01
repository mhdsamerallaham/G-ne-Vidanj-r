import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { prisma } from "@/lib/db";
import { BlogPost } from "@prisma/client";

export const metadata: Metadata = generateMetadata({
  title: "Vidanjör Blog - Antalya Kanal Temizleme Rehberi",
  description: "Antalya vidanjör hizmetleri ve tıkalı gider açma hakkında bilgilendirici blog yazıları. Uzman tavsiyeleri ve çözümler.",
  canonical: "/blog",
});

// Helper to format date
function formatDate(date: Date) {
  return new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

// Helper to estimate read time
function getReadTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} dk`;
}

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error("Blog posts fetch error:", error);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Blog ve Haberler
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Kanal temizleme, vidanjör hizmetleri ve altyapı sorunları hakkında güncel bilgiler ve uzman tavsiyeleri.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-4xl font-bold opacity-20">BLOG</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Blog
                </div>
              </div>
              
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-orange-600" />
                    <time dateTime={post.createdAt.toISOString()}>
                      {formatDate(post.createdAt)}
                    </time>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-orange-600" />
                    <span>{getReadTime(post.content)}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-orange-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Güneş Vidanjör</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    Devamını Oku
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500 text-lg">Henüz yayınlanmış blog yazısı bulunmamaktadır.</p>
            <p className="text-gray-400 text-sm mt-2">Daha sonra tekrar kontrol ediniz.</p>
          </div>
        )}
      </div>
    </div>
  );
}
