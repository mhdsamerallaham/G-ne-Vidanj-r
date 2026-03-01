import { Metadata } from "next";
import { generateServiceSchema, generateFAQSchema, generateLocalBusinessSchema } from "@/lib/seo";
import { generateServicePageMetadata } from "@/lib/seo-helpers";
import { Truck, Clock, MapPin, Phone, CheckCircle, Shield, AlertTriangle } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("antalya-vidanjor", {
    title: "Antalya Vidanjör Hizmeti - 7/24 Acil Müdahale",
    description:
      "Antalya'da profesyonel vidanjör hizmeti. Tıkalı kanalizasyon, logar temizleme, foseptik boşaltma için 30 dakikada müdahale. Uygun fiyat.",
    canonical: "/antalya-vidanjor",
  });
}

const faqs = [
  {
    question: "Vidanjör hizmeti ne kadar sürer?",
    answer: "Antalya merkezinde 30 dakika içinde müdahale ediyoruz. İlçelere göre bu süre 30-60 dakika arasında değişebilir."
  },
  {
    question: "Vidanjör fiyatları nasıl belirleniyor?",
    answer: "Fiyatlar mesafeye, işin zorluk derecesine ve kullanılacak ekipmana göre belirlenir. Ücretsiz keşif hizmetimiz vardır."
  },
  {
    question: "Hangi ilçelere hizmet veriyorsunuz?",
    answer: "Kepez, Muratpaşa, Konyaaltı, Döşemealtı, Aksu, Manavgat, Alanya, Kemer, Serik ve Antalya'nın tüm ilçelerine hizmet veriyoruz."
  },
  {
    question: "Acil durumlar için hizmetiniz var mı?",
    answer: "Evet, 7/24 acil vidanjör hizmetimiz bulunmaktadır. Gece, hafta sonu veya tatil günü fark etmeksizin hizmetinizdeyiz."
  },
  {
    question: "Vidanjör araçlarınız modern mi?",
    answer: "Evet, son teknoloji vidanjör araçlarımızla kamera sistemleri ve basınçlı su ekipmanları kullanıyoruz."
  },
  {
    question: "Hizmet kaliteniz nasıl?",
    answer: "Modern vidanjör araçlarımızla kamera sistemleri ve basınçlı su ekipmanları kullanıyoruz."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    generateServiceSchema(
      "Antalya Vidanjör Hizmeti",
      "Antalya'da profesyonel vidanjör hizmeti. Tıkalı kanalizasyon, logar temizleme, foseptik boşaltma için 30 dakikada müdahale.",
      "+90 533 581 79 36"
    ),
    generateFAQSchema(faqs),
    generateLocalBusinessSchema()
  ]
};

export default function AntalyaVidanjor() {
  const districts = [
    "Kepez", "Muratpaşa", "Konyaaltı", "Döşemealtı", "Aksu",
    "Kemer", "Serik", "Demre", "Kaş", "Kumluca"
  ];

  const services = [
    "Tıkalı kanalizasyon açma",
    "Logar temizleme",
    "Yağ tutucu temizliği",
    "Apartman giderleri",
    "Site tesisat temizliği"
  ];

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
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Antalya Vidanjör
                  <span className="text-orange-600"> Hizmeti</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Tıkalı kanalizasyon ve logar sorunlarınız için Antalya'nın en hızlı vidanjör hizmeti. 
                  30 dakikada müdahale, uygun fiyat.
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
                    <p className="font-semibold text-gray-900">30 Dakikada</p>
                    <p className="text-sm text-gray-600">Müdahale</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">7/24</p>
                    <p className="text-sm text-gray-600">Hizmet</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center space-y-6">
                <Truck className="h-24 w-24 text-orange-600 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Acil Vidanjör Hizmeti</h3>
                <p className="text-gray-600">Antalya'nın tüm ilçelerine anında müdahale!</p>
                <a
                  href="tel:+905335817936"
                  className="block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg"
                >
                  +90 533 581 79 36
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Vidanjör Hizmetlerimiz
                </h2>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <p className="text-gray-700">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Neden Güneş Vidanjör?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Hizmet Kalitemiz</h4>
                      <p className="text-gray-600">Modern ekipmanlarımız ve deneyimli personelimizle kaliteli hizmet sunuyoruz.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Truck className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Modern Ekipman</h4>
                      <p className="text-gray-600">Son teknoloji vidanjör araçları ve kamera sistemleri.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Acil Müdahale</h4>
                      <p className="text-gray-600">7/24 acil durumlar için hazır ekibimiz.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Hizmet Alanımız
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {districts.map((district, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-orange-600" />
                      <span className="text-gray-700">{district}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Hızlı Teklif Al
                </h3>
                <p className="text-gray-600 mb-6">
                  Vidanjör hizmetiniz için hemen teklif almak için bize ulaşın.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+905335817936"
                    className="block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-center"
                  >
                    <Phone className="h-5 w-5 inline mr-2" />
                    Hemen Ara
                  </a>
                  <a
                    href="/iletisim"
                    className="block border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center"
                  >
                    Online Teklif Al
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Sıkça Sorulan <span className="text-orange-600">Sorular</span>
            </h2>
            <p className="text-xl text-gray-600">
              Vidanjör hizmetleri hakkında merak edilenler
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
        </div>
      </section>
    </div>
  );
}
