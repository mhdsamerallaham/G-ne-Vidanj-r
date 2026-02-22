import { Metadata } from "next";
import { generateServiceSchema, generateFAQSchema } from "@/lib/seo";
import { generateServicePageMetadata } from "@/lib/seo-helpers";
import { Truck, Clock, Phone, CheckCircle, AlertTriangle, Droplets, Shield } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("antalya-foseptik-bosaltma", {
    title: "Antalya Foseptik Boşaltma - 2025 Fiyatları ve Hizmeti",
    description:
      "Antalya'da profesyonel foseptik çukuru boşaltma hizmeti. 30 dakikada müdahale, uygun fiyat, çevre dostu yöntem. Apartman, site ve villa foseptik temizliği.",
    canonical: "/antalya-foseptik-bosaltma",
  });
}

const faqs = [
  {
    question: "Foseptik çukuru ne sıklıkla boşaltılmalı?",
    answer: "Kullanım yoğunluğuna bağlı olarak 6-12 ayda bir boşaltılması önerilir. Yoğun kullanılan apartman ve sitelerde 6 ayda bir, az kullanılan yerlerde 12 ayda bir idealdir."
  },
  {
    question: "Foseptik boşaltma fiyatları nasıl?",
    answer: "Fiyatlar çukurun büyüklüğüne, doluluk oranına ve ulaşım mesafesine göre belirlenir. Ortalama 1.500-3.000 TL arasında değişmektedir. Ücretsiz keşif hizmetimiz vardır."
  },
  {
    question: "Foseptik dolduğu nasıl anlaşılır?",
    answer: "Yavaş akış, kötü koku, tuvaletlerin zor akması, lavaboda geri tepme ve bahçede nemlenme gibi belirtiler foseptiğin dolduğunu gösterir."
  },
  {
    question: "Boşaltma işlemi ne kadar sürer?",
    answer: "Standart bir foseptik çukuru boşaltma işlemi 1-2 saat sürer. Büyük ve daha karmaşık sistemlerde bu süre 3-4 saate kadar çıkabilir."
  },
  {
    question: "Çevreye zarar veriyor musunuz?",
    answer: "Hayır, tam lisanslı ve çevre dostu yöntemlerle çalışıyoruz. Tüm atıklar belediye atık arıtma tesislerine taşınır ve yasal prosedürlere uygun olarak imha edilir."
  },
  {
    question: "Acil durumlar için hizmetiniz var mı?",
    answer: "Evet, taşan veya dolan foseptikler için 7/24 acil müdahale hizmetimiz bulunmaktadır."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    generateServiceSchema(
      "Antalya Foseptik Boşaltma Hizmeti",
      "Antalya'da profesyonel foseptik çukuru boşaltma. 30 dakikada müdahale, uygun fiyat, çevre dostu yöntem.",
      "+90 533 581 79 36"
    ),
    generateFAQSchema(faqs)
  ]
};

const serviceTypes = [
  {
    name: "Apartman Foseptikleri",
    description: "Apartman ve siteler için düzenli foseptik bakımı",
    icon: <Shield className="h-6 w-6 text-orange-600" />,
    features: ["6 aylık sözleşme", "Öncelikli müdahale", "Yıllık bakım planı"]
  },
  {
    name: "Villa Foseptikleri",
    description: "Müstakil ev ve villalar için foseptik hizmetleri",
    icon: <Droplets className="h-6 w-6 text-blue-600" />,
    features: ["Yıllık bakım", "Acil müdahale", "Küçük kapasite"]
  },
  {
    name: "Endüstriyel Foseptikler",
    description: "Fabrika ve tesisler için büyük kapasiteli hizmet",
    icon: <Truck className="h-6 w-6 text-green-600" />,
    features: ["Büyük kapasite", "Periyodik bakım", "Teknik destek"]
  },
  {
    name: "Restaurant Foseptikleri",
    description: "Restoran ve iş yerleri için yağ tutuculu sistemler",
    icon: <AlertTriangle className="h-6 w-6 text-purple-600" />,
    features: ["Yağ tutucu temizliği", "Aylık bakım", "Sertifikalı hizmet"]
  }
];

const processSteps = [
  {
    step: "1",
    title: "Keşif ve Tespit",
    description: "Foseptik çukurunun konumu, büyüklüğü ve doluluk oranı tespit edilir."
  },
  {
    step: "2", 
    title: "Fiyat Teklifi",
    description: "Tespit sonucuna göre uygun fiyat teklifi sunulur."
  },
  {
    step: "3",
    title: "Profesyonel Boşaltma",
    description: "Modern ekipmanlarla hızlı ve temiz boşaltma işlemi yapılır."
  },
  {
    step: "4",
    title: "Temizlik ve Dezenfekte",
    description: "Çukur temizlenir ve dezenfekte edilerek hazır hale getirilir."
  }
];

export default function AntalyaFoseptikBosaltma() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-green-600 font-semibold">
                  <Droplets className="h-5 w-5" />
                  <span>Çevre Dostu Hizmet</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Foseptik
                  <span className="text-green-600"> Boşaltma</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Antalya'da profesyonel foseptik çukuru boşaltma hizmeti. 
                  30 dakikada müdahale, uygun fiyat, çevre dostu yöntem.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+905335817936"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-3 font-semibold text-lg shadow-lg"
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
                    <p className="font-semibold text-gray-900">Çevre</p>
                    <p className="text-sm text-gray-600">Dostu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Lisanslı</p>
                    <p className="text-sm text-gray-600">Hizmet</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center space-y-6">
                <Droplets className="h-24 w-24 text-green-600 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Foseptik Boşaltma</h3>
                <p className="text-gray-600">Profesyonel ve çevre dostu hizmet!</p>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-600 font-semibold">2025 Fiyatları</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">1.500 - 3.000 TL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Foseptik <span className="text-green-600">Hizmet Türleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı ihtiyaçlar için özel foseptik boşaltma çözümlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-xs text-gray-700 flex items-center space-x-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Foseptik <span className="text-green-600">Boşaltma Süreci</span>
            </h2>
            <p className="text-xl text-gray-600">
              4 adımda profesyonel foseptik hizmeti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-green-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Foseptik <span className="text-green-600">Dolduğunu</span> Gösteren Belirtiler
            </h2>
            <p className="text-xl text-gray-600">
              Bu belirtileri görüyorsanız hemen bizi arayın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Kötü Koku</h3>
              <p className="text-gray-600 text-center">
                Foseptikten gelen kötü koku, doluluk en önemli belirtisidir.
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Droplets className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Yavaş Akış</h3>
              <p className="text-gray-600 text-center">
                Tuvalet ve lavabolardaki suyun yavaş akması veya geri tepmesi.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Nemlenme</h3>
              <p className="text-gray-600 text-center">
                Foseptik çevresindeki toprağın sürekli nemli olması.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Foseptik <span className="text-green-600">SSS</span>
            </h2>
            <p className="text-xl text-gray-600">
              Foseptik boşaltma hizmetleri hakkında merak edilenler
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

          <div className="mt-12 text-center bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Foseptik Sorunu mu Yaşıyorsunuz?
            </h3>
            <p className="text-gray-600 mb-6">
              Hemen arayın, profesyonel ve çevre dostu çözüm sunalım!
            </p>
            <a
              href="tel:+905335817936"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
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
