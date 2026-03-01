import { prisma } from "@/lib/db";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hizmet Bölgelerimiz - Güneş Vidanjör Antalya",
  description: "Antalya'nın tüm ilçelerinde vidanjör, tıkalı gider açma ve kanalizasyon temizleme hizmeti veriyoruz. Kepez, Muratpaşa, Konyaaltı ve tüm ilçeler.",
};

export default async function DistrictsIndexPage() {
  // Static districts that have physical folders
  const staticDistricts = [
    { name: "Kepez", slug: "kepez" },
    { name: "Muratpaşa", slug: "muratpasa" },
    { name: "Konyaaltı", slug: "konyaalti" },
  ];

  // Dynamic districts from DB
  let dynamicDistricts: { title: string; district: string }[] = [];
  try {
    dynamicDistricts = await prisma.districtPage.findMany({
      where: { published: true },
      select: { title: true, district: true },
    });
  } catch (error) {
    console.error("DistrictPage fetch error:", error);
    // Continue with empty array if database is not available
  }

  // Filter out dynamic districts that are already in static list (if any conflict)
  const filteredDynamic = dynamicDistricts.filter(
    (d) => !staticDistricts.some((s) => s.slug === d.district)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-1 text-sm font-semibold mb-4">
            Hizmet Ağı
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Hizmet Bölgelerimiz
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Antalya'nın her noktasına 7/24 kesintisiz hizmet sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render Static Districts */}
          {staticDistricts.map((district) => (
            <Link
              key={district.slug}
              href={`/ilceler/${district.slug}`}
              className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {district.name}
                  </h3>
                  <p className="text-sm text-gray-500">Antalya</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}

          {/* Render Dynamic Districts */}
          {filteredDynamic.map((district) => (
            <Link
              key={district.district}
              href={`/ilceler/${district.district}`}
              className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-orange-50 p-3 rounded-lg group-hover:bg-orange-100 transition-colors">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {district.title}
                  </h3>
                  <p className="text-sm text-gray-500">Antalya</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Bölgeniz listede yok mu?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Antalya'nın tüm ilçelerine ve çevre illere hizmet veriyoruz. Özel durumlar ve uzak mesafeler için hemen bizi arayın.
          </p>
          <a
            href="tel:+905335817936"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors"
          >
            Hemen Arayın: +90 533 581 79 36
          </a>
        </div>
      </div>
    </div>
  );
}
