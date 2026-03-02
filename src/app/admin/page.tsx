import { prisma } from "@/lib/db";
import { Activity, BarChart3, FileText, Globe, MapPin, Users } from "lucide-react";
import Link from "next/link";

async function getStats() {
  const [serviceCount, districtCount, blogCount] = await Promise.all([
    prisma.servicePage.count().catch(() => 0),
    prisma.districtPage.count().catch(() => 0),
    prisma.blogPost.count().catch(() => 0),
  ]);

  return { serviceCount, districtCount, blogCount };
}

export default async function AdminHome() {
  const stats = await getStats();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Hoşgeldiniz</h1>
        <p className="mt-2 text-gray-600">
          Güneş Tıkanıklık SEO yönetim paneline hoşgeldiniz. Buradan sitenizin tüm içeriğini yönetebilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Hizmet Sayfaları Kartı */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
              <Globe className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">
              Yayında
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{stats.serviceCount}</h3>
          <p className="text-gray-500 font-medium">Hizmet Sayfası</p>
          <div className="mt-4 pt-4 border-t border-gray-50">
            <Link 
              href="/admin/service-pages" 
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center group"
            >
              Yönet
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* İlçe Sayfaları Kartı */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-50 rounded-lg text-green-600">
              <MapPin className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">
              Yayında
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{stats.districtCount}</h3>
          <p className="text-gray-500 font-medium">İlçe Sayfası</p>
          <div className="mt-4 pt-4 border-t border-gray-50">
            <Link 
              href="/admin/district-pages" 
              className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center group"
            >
              Yönet
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Blog Yazıları Kartı */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
              <FileText className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">
              Yayında
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{stats.blogCount}</h3>
          <p className="text-gray-500 font-medium">Blog Yazısı</p>
          <div className="mt-4 pt-4 border-t border-gray-50">
            <Link 
              href="/admin/blog-posts" 
              className="text-sm font-semibold text-purple-600 hover:text-purple-700 flex items-center group"
            >
              Yönet
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 flex items-center">
              <Activity className="h-5 w-5 mr-2 text-orange-500" />
              Son Aktiviteler
            </h2>
            <button className="text-sm text-gray-400 hover:text-gray-600">Tümünü Gör</button>
          </div>
          <div className="space-y-4">
            {/* Mock Data - Veritabanı bağlantısı tamamlanınca gerçek veri eklenecek */}
            <div className="flex items-start space-x-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
              <div className="h-2 w-2 mt-2 rounded-full bg-green-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Yeni blog yazısı eklendi</p>
                <p className="text-xs text-gray-500 mt-1">"Antalya Kanalizasyon Temizliği" - 2 saat önce</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
              <div className="h-2 w-2 mt-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Hizmet sayfası güncellendi</p>
                <p className="text-xs text-gray-500 mt-1">"Tıkanıklık Açma Kiralama" - 5 saat önce</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
              <div className="h-2 w-2 mt-2 rounded-full bg-orange-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Sistem güncellemesi</p>
                <p className="text-xs text-gray-500 mt-1">Sitemap ve Robots.txt güncellendi - 1 gün önce</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-orange-500" />
              SEO Durumu
            </h2>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">İyi Durumda</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-600">Sitemap</span>
              <span className="text-sm font-bold text-green-600 flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Aktif
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-600">Robots.txt</span>
              <span className="text-sm font-bold text-green-600 flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Aktif
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-600">Canonical Etiketleri</span>
              <span className="text-sm font-bold text-green-600 flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Kontrol Edildi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
