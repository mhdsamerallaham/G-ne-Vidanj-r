import { Metadata } from "next";
import { generateServiceSchema, generateFAQSchema } from "@/lib/seo";
import { generateDistrictPageMetadata } from "@/lib/seo-helpers";
import { MapPin, Clock, Phone, CheckCircle, Truck, AlertTriangle, Sun } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return generateDistrictPageMetadata("alanya", {
    title: "Alanya Vidanjör Hizmeti - Turistik Bölge 45 Dakikada",
    description:
      "Alanya'da vidanjör, tıkalı gider açma, foseptik boşaltma hizmetleri. 45 dakikada müdahale, uygun fiyat, garantili çözüm. Damlataş, Kleopatra, Mahmutlar ve tüm Alanya mahalleleri.",
    canonical: "/ilceler/alanya",
  });
}

const faqs = [
  {
    question: "Alanya'ya ne kadar sürede müdahale ediyorsunuz?",
    answer: "Alanya merkezinde 30-40 dakika içinde, uzak mahallelere 45-60 dakika içinde müdahale ediyoruz."
  },
  {
    question: "Alanya'nın hangi mahallelerine hizmet veriyorsunuz?",
    answer: "Damlataş, Kleopatra, Mahmutlar, Kestel, Oba, Tosmur, Cikcilli, Saray, Güllerpınarı, Toslak, Cumhuriyet, Hacı Mehmetli, Okurcalar, Avsallar, Türkler ve tüm Alanya mahallelerine hizmet veriyoruz."
  },
  {
    question: "Alanya'da vidanjör fiyatları nasıl?",
    answer: "Alanya'da vidanjör fiyatları mesafe ve işin zorluğuna göre belirlenir. Turistik bölge olmasına rağmen uygun fiyat garantisi sunuyoruz."
  },
  {
    question: "Turistik sezon için özel hizmetiniz var mı?",
    answer: "Evet, yaz sezonunda oteller ve turistik tesisler için 7/24 acil vidanjör hizmetimiz bulunmaktadır."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    generateServiceSchema(
      "Alanya Vidanjör Hizmeti",
      "Alanya'da vidanjör, tıkalı gider açma, foseptik boşaltma hizmetleri. 45 dakikada müdahale.",
      "+90 533 581 79 36"
    ),
    generateFAQSchema(faqs)
  ]
};

const neighborhoods = [
  "Damlataş", "Kleopatra", "Mahmutlar", "Kestel", "Oba", "Tosmur", "Cikcilli", "Saray", 
  "Güllerpınarı", "Toslak", "Cumhuriyet", "Hacı Mehmetli", "Okurcalar", "Avsallar", "Türkler"
];

const alanyaProblems = [
  "Turistik sezon yoğunluğu",
  "Otel ve apartman atık sistemleri",
  "Sahil bölgesi altyapısı",
  "Yazlık sitelerin artan kullanımı",
  "Eski yerleşim alanları"
];

export default function AlanyaVidanjor() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-yellow-600 font-semibold">
                  <Sun className="h-5 w-5" />
                  <span>Turistik Cennet Hizmet</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Alanya Vidanjör
                  <span className="text-yellow-600"> Hizmeti</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Alanya'nın tüm mahallelerine vidanjör, tıkalı gider açma ve foseptik hizmetleri. 
                  30-60 dakikada müdahale, turistik cennet özel hizmet.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+905335817936"
                  className="bg-yellow-500 text-white px-8 py-4 rounded-lg hover:bg-yellow-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-3 font-semibold text-lg shadow-lg"
                >
                  <Phone className="h-6 w-6" />
                  <span>Hemen Ara</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">45 Dakikada</p>
                    <p className="text-sm text-gray-600">Maksimum Süre</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Sun className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Turistik</p>
                    <p className="text-sm text-gray-600">Odaklı</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center space-y-6">
                <Sun className="h-24 w-24 text-yellow-600 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Alanya Turistik Hizmet</h3>
                <p className="text-gray-600">Akdeniz'in incisi için özel vidanjör hizmeti!</p>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-yellow-600 font-semibold">Ortalama Müdahale Süresi</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">30-60 Dakika</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alanya Specific Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Alanya'da <span className="text-yellow-600">Sık Karşılaşılan</span> Sorunlar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turistik cennetin özel sorunları ve çözümlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alanyaProblems.map((problem, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{problem}</h3>
                    <p className="text-gray-600 text-sm">
                      Alanya'nın turistik dinamikleri için özel çözümler sunuyoruz.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Hizmet Verdiğimiz <span className="text-yellow-600">Mahalleler</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alanya'nın 15 mahallesine 7/24 vidanjör hizmeti
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <MapPin className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">{neighborhood}</p>
                <p className="text-sm text-gray-600">30-60 dk</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Touristic Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Turistik Sezon <span className="text-yellow-600">Vidanjör Hizmetleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alanya'nın turistik tesisleri için özel çözümler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Sun className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">5 Yıldızlı Oteller</h3>
              <p className="text-gray-600 mb-4">
                Kleopatra ve Damlataş bölgesi lüks oteller için vidanjör hizmetleri.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>7/24 acil müdahale</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Lüks otel standartı</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apart Oteller</h3>
              <p className="text-gray-600 mb-4">
                Mahmutlar ve Kestel bölgesi apart oteller için özel çözümler.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Yoğun sezon hazır</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Ekonomik çözümler</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Yazlık Siteler</h3>
              <p className="text-gray-600 mb-4">
                Türkler ve Avsallar yazlık siteleri için vidanjör hizmetleri.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Sezon öncesi kontrol</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Yıllık bakım</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Alanya Vidanjör <span className="text-yellow-600">SSS</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alanya'da vidanjör hizmetleri hakkında merak edilenler
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-yellow-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Alanya'da Acil Durum mu?
            </h3>
            <p className="text-gray-600 mb-6">
              Turistik cennette hızlı müdahale için hemen arayın!
            </p>
            <a
              href="tel:+905335817936"
              className="inline-flex items-center space-x-2 bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
            >
              <Phone className="h-5 w-5" />
              <span>Hemen Ara</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
