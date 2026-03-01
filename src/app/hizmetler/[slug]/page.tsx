import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { generateServicePageMetadata } from "@/lib/seo-helpers";
import { generateServiceSchema } from "@/lib/seo";
import { Phone, CheckCircle, Clock, Shield } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return generateServicePageMetadata(slug, {
    title: `${slug} Hizmeti - Güneş Vidanjör`,
    description: "Antalya profesyonel vidanjör ve altyapı hizmetleri.",
    canonical: `/hizmetler/${slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  let service;
  
  try {
    service = await prisma.servicePage.findUnique({
      where: { slug },
    });
  } catch (error) {
    console.error("Error fetching service page:", error);
    notFound();
  }

  if (!service || !service.published) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        service.title,
        service.description,
        "+90 533 581 79 36"
      ),
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+905335817936"
                className="bg-orange-600 text-white px-8 py-4 rounded-xl hover:bg-orange-700 transition-all transform hover:scale-105 flex items-center space-x-3 font-bold text-lg shadow-lg shadow-orange-200"
              >
                <Phone className="h-6 w-6" />
                <span>Hemen Ara</span>
              </a>
              <Link
                href="/iletisim"
                className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all font-semibold text-lg"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
            {service.image && (
              <div className="mb-10 rounded-xl overflow-hidden shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            
            <div 
              className="prose prose-lg prose-orange max-w-none"
              dangerouslySetInnerHTML={{ __html: service.content }}
            />
          </div>
        </div>
      </section>

      {/* Features Grid (Static for now, could be dynamic) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <Clock className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hızlı Müdahale</h3>
              <p className="text-gray-600">Acil durumlarda en kısa sürede adresinizdeyiz.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Profesyonel Çözüm</h3>
              <p className="text-gray-600">Yaptığımız işlemlerde kalite standartlarını koruyoruz.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <CheckCircle className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Uygun Fiyat</h3>
              <p className="text-gray-600">Rekabetçi fiyatlar ve şeffaf ücretlendirme.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
