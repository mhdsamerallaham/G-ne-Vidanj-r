import { Metadata } from "next";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User, Phone, MapPin } from "lucide-react";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

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

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post) {
    return generateSeoMetadata({
      title: "Sayfa Bulunamadı",
      description: "Aradığınız blog yazısı bulunamadı.",
    });
  }

  return generateSeoMetadata({
    title: post.title,
    description: post.excerpt,
    canonical: `/blog/${post.slug}`,
  });
}

export async function generateStaticParams() {
  // Return empty array to make pages dynamic during build
  // This prevents build failures when database is not available
  return [];
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  
  try {
    post = await prisma.blogPost.findUnique({
      where: { slug },
    });
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        {post.image && (
          <img 
            src={post.image} 
            alt={post.title} 
            className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-40"
          />
        )}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 text-sm md:text-base text-gray-300 mb-6">
            <div className="flex items-center bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <Calendar className="h-4 w-4 mr-2 text-orange-400" />
              <time dateTime={post.createdAt.toISOString()}>
                {formatDate(post.createdAt)}
              </time>
            </div>
            <div className="flex items-center bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <Clock className="h-4 w-4 mr-2 text-orange-400" />
              <span>{getReadTime(post.content)}</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-10">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
                <User className="h-4 w-4 text-orange-600" />
                <span className="font-medium text-gray-900">Güneş Vidanjör</span>
                <span>•</span>
                <span className="text-orange-600 font-medium">Blog</span>
              </div>
              
              <div 
                className="prose prose-lg prose-orange max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* CTA Section */}
            <div className="mt-8 bg-orange-600 rounded-2xl p-8 md:p-10 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black opacity-10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Hemen Destek Alın</h3>
                  <p className="text-orange-100 text-lg">
                    Tıkanıklık veya vidanjör ihtiyacınız mı var? 7/24 hizmetinizdeyiz.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:05321234567"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-orange-600 bg-white hover:bg-orange-50 transition-colors shadow-sm"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Hemen Ara
                  </a>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-orange-700 transition-colors"
                  >
                    <MapPin className="mr-2 h-5 w-5" />
                    İletişime Geç
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Links Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                Hizmetlerimiz
              </h3>
              <ul className="space-y-3">
                {[
                  { title: "Kanal Açma", href: "/hizmetlerimiz/kanal-acma" },
                  { title: "Logar Temizleme", href: "/hizmetlerimiz/logar-temizleme" },
                  { title: "Foseptik Çekimi", href: "/hizmetlerimiz/foseptik-cekimi" },
                  { title: "Yağ Tutucu Temizliği", href: "/hizmetlerimiz/yag-tutucu-temizleme" },
                  { title: "Vidanjör Kiralama", href: "/hizmetlerimiz/vidanjor-kiralama" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="flex items-center justify-between group p-2 rounded-lg hover:bg-orange-50 transition-colors"
                    >
                      <span className="text-gray-600 group-hover:text-orange-700 font-medium">{item.title}</span>
                      <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Hizmet Bölgeleri
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Kepez", "Muratpaşa", "Konyaaltı", "Aksu", "Döşemealtı"
                  ].map((district) => (
                    <Link
                      key={district}
                      href={`/ilceler/${district.toLowerCase()}`}
                      className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-orange-100 hover:text-orange-700 transition-colors"
                    >
                      {district}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
