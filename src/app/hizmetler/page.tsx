import { prisma } from "@/lib/db";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Tüm Hizmetlerimiz - Güneş Vidanjör Antalya",
  description: "Antalya'da sunduğumuz tüm vidanjör ve altyapı hizmetleri. Tıkalı gider açma, logar temizleme ve daha fazlası.",
};

export default async function ServicesIndexPage() {
  // Static services
  const staticServices = [
    {
      title: "Vidanjör Hizmeti",
      description: "Tıkalı kanalizasyon ve logar temizliği",
      href: "/antalya-vidanjor",
    },
    {
      title: "Tıkalı Gider Açma",
      description: "Mutfak, banyo ve lavabo tıkanıklıkları",
      href: "/antalya-tikali-gider-acma",
    },
    {
      title: "Kanalizasyon Açma",
      description: "Ana kanalizasyon hatları temizliği",
      href: "/antalya-kanalizasyon-acma",
    },
    {
      title: "Logar Temizleme",
      description: "Apartman ve site logar temizliği",
      href: "/antalya-logar-temizleme",
    },
    {
      title: "Yağ Tutucu Temizleme",
      description: "Restaurant ve iş yeri yağ tutucuları",
      href: "/antalya-yag-tutucu-temizleme",
    },
  ];

  // Dynamic services from DB
  let dynamicServices: { title: string; description: string; slug: string }[] = [];
  try {
    dynamicServices = await prisma.servicePage.findMany({
      where: { published: true },
      select: { title: true, description: true, slug: true },
    });
  } catch (error) {
    console.error("ServicePage fetch error:", error);
    // Continue with empty array if database is not available
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Hizmetlerimiz
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Profesyonel ekipman ve deneyimli kadromuzla sunduğumuz tüm çözümler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Render Static Services */}
          {staticServices.map((service, i) => (
            <Link 
              key={`static-${i}`} 
              href={service.href}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300"
            >
              <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="h-7 w-7 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-orange-600 font-semibold">
                Detaylı Bilgi <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}

          {/* Render Dynamic Services */}
          {dynamicServices.map((service) => (
            <Link 
              key={service.slug} 
              href={`/hizmetler/${service.slug}`}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="h-7 w-7 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6 line-clamp-2">
                {service.description}
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Detaylı Bilgi <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
