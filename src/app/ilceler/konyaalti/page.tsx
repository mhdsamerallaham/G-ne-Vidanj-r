import { Metadata } from "next";
import { generateServiceSchema, generateFAQSchema } from "@/lib/seo";
import { generateDistrictPageMetadata } from "@/lib/seo-helpers";
import { MapPin, Clock, Phone, CheckCircle, Truck, AlertTriangle, Umbrella } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return generateDistrictPageMetadata("konyaalti", {
    title: "Konyaaltı Vidanjör Hizmeti - Sahil Bölgesi 25 Dakikada",
    description:
      "Konyaaltı'da vidanjör ve tıkalı gider açma hizmetleri. 25 dakikada müdahale, uygun fiyat. Liman, Çaltı, Arapsuyu ve tüm Konyaaltı mahalleleri.",
    canonical: "/ilceler/konyaalti",
  });
}

const faqs = [
  {
    question: "Konyaaltı'ya ne kadar sürede müdahale ediyorsunuz?",
    answer: "Konyaaltı merkezinde 20-25 dakika içinde, uzak mahallelere 30-40 dakika içinde müdahale ediyoruz."
  },
  {
    question: "Konyaaltı'nın hangi mahallelerine hizmet veriyorsunuz?",
    answer: "Liman, Çaltı, Arapsuyu, Kızılarık, Kirişçiler, Namık Kemal, Sitler, Gürsu, Altınova, Akdeniz, Uncalı, Çamlıbel, Kumsal, Yeşilbayır, Hürriyet ve tüm Konyaaltı mahallelerine hizmet veriyoruz."
  },
  {
    question: "Konyaaltı'da vidanjör fiyatları nasıl?",
    answer: "Konyaaltı'da vidanjör fiyatları işin zorluğuna ve kullanılacak ekipmana göre belirlenir. Sahil bölgesi özelinde uygun fiyatlar sunuyoruz."
  },
  {
    question: "Turistik bölgede hizmetiniz var mı?",
    answer: "Evet, Konyaaltı sahili ve turistik bölgelerde 7/24 vidanjör hizmetimiz bulunmaktadır."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    generateServiceSchema(
      "Konyaaltı Vidanjör Hizmeti",
      "Konyaaltı'da vidanjör ve tıkalı gider açma hizmetleri. 25 dakikada müdahale.",
      "+90 533 581 79 36"
    ),
    generateFAQSchema(faqs)
  ]
};

const neighborhoods = [
  "Liman", "Çaltı", "Arapsuyu", "Kızılarık", "Kirişçiler", "Namık Kemal", "Sitler", 
  "Gürsu", "Altınova", "Akdeniz", "Uncalı", "Çamlıbel", "Kumsal", "Yeşilbayır", "Hürriyet"
];

const konyaaltiProblems = [
  "Turistik bölgelerdeki yoğun kullanım",
  "Sahil bölgesi altyapı sorunları",
  "Otel ve restaurant atık sistemleri",
  "Yaz aylarında artan talep",
  "Eski yerleşim alanları"
];

export default function KonyaaltiVidanjor() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                  <Umbrella className="h-5 w-5" />
                  <span>Sahil Bölgesi Hizmet</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Konyaaltı Vidanjör
                  <span className="text-blue-600"> Hizmeti</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Konyaaltı'nın tüm mahallelerine vidanjör ve tıkalı gider açma hizmetleri. 
                  20-40 dakikada müdahale, sahil bölgesi özel hizmet.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+905335817936"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-3 font-semibold text-lg shadow-lg"
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
                    <p className="font-semibold text-gray-900">25 Dakikada</p>
                    <p className="text-sm text-gray-600">Sahil Müdahale</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Umbrella className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Turistik</p>
                    <p className="text-sm text-gray-600">Bölge</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center space-y-6">
                <Umbrella className="h-24 w-24 text-blue-600 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Konyaaltı Sahil Hizmeti</h3>
                <p className="text-gray-600">Turistik bölgeye özel vidanjör hizmeti!</p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-600 font-semibold">Ortalama Müdahale Süresi</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">20-40 Dakika</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Konyaaltı Specific Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Konyaaltı'da <span className="text-blue-600">Sık Karşılaşılan</span> Sorunlar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turistik sahil bölgesinin özel sorunları ve çözümlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {konyaaltiProblems.map((problem, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{problem}</h3>
                    <p className="text-gray-600 text-sm">
                      Konyaaltı'nın dinamik turistik yapısı için özel çözümler sunuyoruz.
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
              Hizmet Verdiğimiz <span className="text-blue-600">Mahalleler</span>
            </h2>
            <p className="text-xl text-gray-600">
              Konyaaltı'nın 15 mahallesine 7/24 vidanjör hizmeti
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">{neighborhood}</p>
                <p className="text-sm text-gray-600">20-40 dk</p>
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
              Turistik Bölge <span className="text-blue-600">Vidanjör Hizmetleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Konyaaltı sahili ve turistik tesisler için özel çözümler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Umbrella className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Otel Hizmetleri</h3>
              <p className="text-gray-600 mb-4">
                Konyaaltı sahili otelleri için vidanjör ve kanal temizliği.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>7/24 acil müdahale</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Misafir memnuniyeti</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Restaurant Hizmetleri</h3>
              <p className="text-gray-600 mb-4">
                Sahil restaurantları için yağ tutucu temizliği ve gider açma.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Periyodik bakım</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Sertifikalı hizmet</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plaj Tesisleri</h3>
              <p className="text-gray-600 mb-4">
                Plaj tesisleri ve turistik alanlar için vidanjör hizmetleri.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Yaz sezonu hazır</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Hızlı müdahale</span>
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
              Konyaaltı Vidanjör <span className="text-blue-600">SSS</span>
            </h2>
            <p className="text-xl text-gray-600">
              Konyaaltı'da vidanjör hizmetleri hakkında merak edilenler
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

          <div className="mt-12 text-center bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Konyaaltı'da Acil Durum mu?
            </h3>
            <p className="text-gray-600 mb-6">
              Turistik bölgede hızlı müdahale için hemen arayın!
            </p>
            <a
              href="tel:+905335817936"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
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
