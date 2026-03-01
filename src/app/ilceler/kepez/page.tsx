import { Metadata } from "next";
import { generateServiceSchema, generateFAQSchema } from "@/lib/seo";
import { generateDistrictPageMetadata } from "@/lib/seo-helpers";
import { MapPin, Clock, Phone, CheckCircle, Truck, AlertTriangle } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return generateDistrictPageMetadata("kepez", {
    title: "Kepez Vidanjör Hizmeti - 30 Dakikada Müdahale",
    description: "Kepez'de vidanjör, tıkalı gider açma hizmetleri. 30 dakikada müdahale, uygun fiyat. Çağlayan, Varsak, Kütükçü ve tüm Kepez mahalleleri.",
    canonical: "/ilceler/kepez",
  });
}

const faqs = [
  {
    question: "Kepez'e ne kadar sürede müdahale ediyorsunuz?",
    answer: "Kepez merkezinde 15-20 dakika içinde, uzak mahallelere 30 dakika içinde müdahale ediyoruz."
  },
  {
    question: "Kepez'in hangi mahallelerine hizmet veriyorsunuz?",
    answer: "Çağlayan, Varsak, Kütükçü, Altınova, Baraj, Gazi, Gülveren, Kızılcahamam, Kirişçiler, Kozlar, Küçük Sanayi, Orta, Özgürlük, Şelale, Sinan, Soğuksu, Teoman, Yenişehir, Zeytinköy ve tüm Kepez mahallelerine hizmet veriyoruz."
  },
  {
    question: "Kepez'de vidanjör fiyatları nasıl?",
    answer: "Kepez'de vidanjör fiyatları işin zorluğuna ve kullanılacak ekipmana göre belirlenir. Ücretsiz keşif hizmetimiz vardır."
  },
  {
    question: "Acil durumlar için hizmetiniz var mı?",
    answer: "Evet, Kepez'de 7/24 acil vidanjör hizmetimiz bulunmaktadır."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    generateServiceSchema(
      "Kepez Vidanjör Hizmeti",
      "Kepez'de vidanjör, tıkalı gider açma hizmetleri. 30 dakikada müdahale.",
      "+90 533 581 79 36"
    ),
    generateFAQSchema(faqs)
  ]
};

const neighborhoods = [
  "Çağlayan", "Varsak", "Kütükçü", "Altınova", "Baraj", "Gazi", "Gülveren", 
  "Kızılcahamam", "Kirişçiler", "Kozlar", "Küçük Sanayi", "Orta", "Özgürlük", 
  "Şelale", "Sinan", "Soğuksu", "Teoman", "Yenişehir", "Zeytinköy"
];

const kepezProblems = [
  "Eski altyapı nedeniyle sık tıkanıklıklar",
  "Yoğun nüfus ve konut yoğunluğu",
  "Küçük sanayi sitesi atık sorunları",
  "Yağmur suyu kanallarının tıkanması",
  "Apartman ve site gider sorunları"
];

export default function KepezVidanjor() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-orange-600 font-semibold">
                  <MapPin className="h-5 w-5" />
                  <span>Kepez Özel Hizmet</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Kepez Vidanjör
                  <span className="text-orange-600"> Hizmeti</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kepez'in tüm mahallelerine vidanjör ve tıkalı gider açma hizmetleri. 
                  15-30 dakikada müdahale, uygun fiyat.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+905335817936"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-3 font-semibold text-lg shadow-lg"
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
                    <p className="font-semibold text-gray-900">15 Dakikada</p>
                    <p className="text-sm text-gray-600">Merkez Müdahale</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">19 Mahalle</p>
                    <p className="text-sm text-gray-600">Hizmet Alanı</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center space-y-6">
                <MapPin className="h-24 w-24 text-orange-600 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Kepez Hizmet Noktası</h3>
                <p className="text-gray-600">Kepez'in tüm mahallelerine anında müdahale!</p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-orange-600 font-semibold">Ortalama Müdahale Süresi</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">15-30 Dakika</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kepez Specific Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Kepez'de <span className="text-orange-600">Sık Karşılaşılan</span> Sorunlar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepez'in altyapı yapısı nedeniyle sık karşılaşılan sorunlar ve çözümlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kepezProblems.map((problem, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{problem}</h3>
                    <p className="text-gray-600 text-sm">
                      Modern ekipmanlarımızla Kepez'de yaşanan bu sorunlara hızlı ve etkili çözümler sunuyoruz.
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
              Hizmet Verdiğimiz <span className="text-orange-600">Mahalleler</span>
            </h2>
            <p className="text-xl text-gray-600">
              Kepez'in 19 mahallesine 7/24 vidanjör hizmeti
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <MapPin className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">{neighborhood}</p>
                <p className="text-sm text-gray-600">15-30 dk</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Kepez'de <span className="text-orange-600">Vidanjör Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tüm vidanjör ve kanal temizleme ihtiyaçlarınız için profesyonel çözümler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vidanjör Hizmeti</h3>
              <p className="text-gray-600 mb-4">
                Kepez'de tıkalı kanalizasyon ve logar temizliği için modern vidanjör araçları.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>7/24 Acil müdahale</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Modern ekipman</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tıkalı Gider Açma</h3>
              <p className="text-gray-600 mb-4">
                Mutfak, banyo ve lavabo giderlerindeki tıkanıklıklar için kameralı tespit.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Kameralı tespit</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Kimyasalsız çözüm</span>
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
              Kepez Vidanjör <span className="text-orange-600">SSS</span>
            </h2>
            <p className="text-xl text-gray-600">
              Kepez'de vidanjör hizmetleri hakkında merak edilenler
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

          <div className="mt-12 text-center bg-orange-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Kepez'de Acil Durum mu?
            </h3>
            <p className="text-gray-600 mb-6">
              Hemen arayın, en kısa sürede müdahale edelim!
            </p>
            <a
              href="tel:+905335817936"
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
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
