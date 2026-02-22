import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { generateDistrictPageMetadata } from "@/lib/seo-helpers";
import { generateServiceSchema } from "@/lib/seo";
import { Phone, CheckCircle, Clock, MapPin, Truck, Sun } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return generateDistrictPageMetadata(slug, {
    title: `${slug} Vidanjör Hizmeti - Güneş Vidanjör`,
    description: `Antalya ${slug} bölgesinde vidanjör, tıkalı gider açma ve foseptik boşaltma hizmetleri.`,
    canonical: `/ilceler/${slug}`,
  });
}

export default async function DistrictPage({ params }: PageProps) {
  const { slug } = await params;
  const district = await prisma.districtPage.findUnique({
    where: { district: slug },
  });

  if (!district || !district.published) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        district.title,
        district.description,
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
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                  <MapPin className="h-5 w-5" />
                  <span className="capitalize">{district.district} Bölgesi Hizmet</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {district.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {district.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+905335817936"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-3 font-semibold text-lg shadow-lg"
                >
                  <Phone className="h-6 w-6" />
                  <span>Hemen Ara</span>
                </a>
              </div>
            </div>
             <div className="relative">
                {district.image ? (
                    <img 
                        src={district.image} 
                        alt={district.title}
                        className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 w-full object-cover h-96" 
                    />
                ) : (
                    <div className="bg-blue-100 rounded-2xl h-96 w-full flex items-center justify-center">
                        <Truck className="h-24 w-24 text-blue-300" />
                    </div>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
            <div 
              className="prose prose-lg prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: district.content }}
            />
          </div>
        </div>
      </section>
      
       {/* Local Info (Could be dynamic if we had neighborhood data in DB) */}
       <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {district.district} ve Çevresinde Hizmetinizdeyiz
            </h3>
            <p className="text-gray-600">
                Tüm mahalle ve köylere servis aracımız mevcuttur.
            </p>
        </div>
       </section>
    </div>
  );
}
