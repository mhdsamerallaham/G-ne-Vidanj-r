import { Metadata } from "next";
import { generateServiceSchema, generateFAQSchema } from "@/lib/seo";
import { generateDistrictPageMetadata } from "@/lib/seo-helpers";
import { MapPin, Clock, Phone, CheckCircle, Truck, AlertTriangle, Building } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return generateDistrictPageMetadata("muratpasa", {
    title: "Muratpaşa Tıkanıklık Açma Hizmeti - 20 Dakikada Müdahale",
    description:
      "Muratpaşa'da vidanjör ve tıkalı gider açma hizmetleri. 20 dakikada müdahale, uygun fiyat. Konyaaltı, Lara, Yenişehir ve tüm Muratpaşa mahalleleri.",
    canonical: "/ilceler/muratpasa",
  });
}

const faqs = [
  {
    question: "Muratpaşa'ya ne kadar sürede müdahale ediyorsunuz?",
    answer: "Muratpaşa merkezinde 15-20 dakika içinde, uzak mahallelere 30 dakika içinde müdahale ediyoruz."
  },
  {
    question: "Muratpaşa'nın hangi mahallelerine hizmet veriyorsunuz?",
    answer: "Konyaaltı, Lara, Yenişehir, Kılıçarslan, Selçuk, Çağlayan, Kırcami, Balbey, Muratpaşa, Şirinyalı, Kızıltoprak, Güllük, Çamlıtepe, Yeşilbahçe, Kızılcahamam, Akdeniz, Antalya, Yenigöl, Sinan, Çaybaşı, Varlık, Hürriyet, Demirciler, Saraçlı, Güzeloluk, Topçular, Işıklar ve tüm Muratpaşa mahallelerine hizmet veriyoruz."
  },
  {
    question: "Muratpaşa'da vidanjör fiyatları nasıl?",
    answer: "Muratpaşa'da vidanjör fiyatları işin zorluğuna ve kullanılacak ekipmana göre belirlenir. Merkezi konum nedeniyle daha uygun fiyatlar sunuyoruz."
  },
  {
    question: "Ticari yerler için hizmetiniz var mı?",
    answer: "Evet, Muratpaşa'daki oteller, restoranlar ve iş yerleri için özel vidanjör hizmetleri sunuyoruz."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    generateServiceSchema(
      "Muratpaşa Tıkanıklık Açma Hizmeti",
      "Muratpaşa'da vidanjör ve tıkalı gider açma hizmetleri. 20 dakikada müdahale.",
      "+90 533 581 79 36"
    ),
    generateFAQSchema(faqs)
  ]
};

const neighborhoods = [
  "Konyaaltı", "Lara", "Yenişehir", "Kılıçarslan", "Selçuk", "Çağlayan", "Kırcami", "Balbey", 
  "Muratpaşa", "Şirinyalı", "Kızıltoprak", "Güllük", "Çamlıtepe", "Yeşilbahçe", "Kızılcahamam", 
  "Akdeniz", "Antalya", "Yenigöl", "Sinan", "Çaybaşı", "Varlık", "Hürriyet", "Demirciler", 
  "Saraçlı", "Güzeloluk", "Topçular", "Işıklar"
];

const muratpasaProblems = [
  "Turistik bölgelerdeki yoğun kullanım",
  "Otel ve restoran yağ tutucu sorunları",
  "Eski binaların altyapı sorunları",
  "Ticari alanların atık yönetimi",
  "Yaz aylarında artan talep"
];

export default function MuratpasaVidanjor() {
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
                  <MapPin className="h-5 w-5" />
                  <span>Muratpaşa Özel Hizmet</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Muratpaşa Tıkanıklık Açma
                  <span className="text-blue-600"> Hizmeti</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Muratpaşa'nın tüm mahallelerine vidanjör ve tıkalı gider açma hizmetleri. 
                  15-30 dakikada müdahale, turistik bölge özel hizmet.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+905335817936"
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-3 font-semibold text-lg shadow-lg"
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
                    <p className="font-semibold text-gray-900">20 Dakikada</p>
                    <p className="text-sm text-gray-600">Merkez Müdahale</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ticari</p>
                    <p className="text-sm text-gray-600">Hizmet</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center space-y-6">
                <Building className="h-24 w-24 text-blue-600 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Muratpaşa Merkez</h3>
                <p className="text-gray-600">Turistik bölge ve ticari merkeze özel hizmet!</p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-600 font-semibold">Ortalama Müdahale Süresi</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">15-30 Dakika</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Muratpaşa Specific Issues */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  Muratpaşa'da <span className="text-blue-600">Sık Karşılaşılan</span> Sorunlar
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Turistik ve ticari merkez olan Muratpaşa'da sık karşılaşılan sorunlar ve çözümlerimiz
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {muratpasaProblems.map((problem, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{problem}</h3>
                        <p className="text-gray-600 text-sm">
                          Muratpaşa'nın dinamik yapısı için özel çözümler sunuyoruz.
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
                  Muratpaşa'nın 28 mahallesine 7/24 vidanjör hizmeti
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                    <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">{neighborhood}</p>
                    <p className="text-sm text-gray-600">15-30 dk</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Commercial Services */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  Ticari <span className="text-blue-600">Tıkanıklık Açma Hizmetleri</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Muratpaşa'daki oteller, restoranlar ve iş yerleri için özel çözümler
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Building className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Otel Hizmetleri</h3>
                  <p className="text-gray-600 mb-4">
                    Lara ve Konyaaltı'daki oteller için vidanjör ve kanal temizliği.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Restoran Hizmetleri</h3>
                  <p className="text-gray-600 mb-4">
                    Yağ tutucu temizliği ve mutfak atık sistemleri için özel çözümler.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">İş Merkezleri</h3>
                  <p className="text-gray-600 mb-4">
                    AVM'ler ve iş merkezleri için kapsamlı vidanjör hizmetleri.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Büyük kapasite</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Önleyici bakım</span>
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
                  Muratpaşa Tıkanıklık Açma <span className="text-blue-600">SSS</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Muratpaşa'da vidanjör hizmetleri hakkında merak edilenler
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
                  Muratpaşa'da Acil Durum mu?
                </h3>
                <p className="text-gray-600 mb-6">
                  Turistik ve ticari merkezde hızlı müdahale için hemen arayın!
                </p>
                <a
                  href="tel:+905335817936"
                  className="inline-flex items-center space-x-2 bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
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
