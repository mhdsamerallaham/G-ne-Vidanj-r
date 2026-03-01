import { Metadata } from "next";
import { generateServiceSchema, generateFAQSchema } from "@/lib/seo";
import { generateServicePageMetadata } from "@/lib/seo-helpers";
import { AlertTriangle, Droplets, Clock, Phone, CheckCircle, Shield, Truck } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("antalya-kanalizasyon-acma", {
    title: "Antalya Kanalizasyon Açma - Basınçlı Su ile 30 Dakikada",
    description:
      "Antalya'da profesyonel kanalizasyon açma hizmeti. Basınçlı su, kamera tespit, ana hatlar. 30 dakikada müdahale, uygun fiyat.",
    canonical: "/antalya-kanalizasyon-acma",
  });
}

const faqs = [
  {
    question: "Kanalizasyon açma nasıl yapılır?",
    answer: "Basınçlı su jetleri, kamera tespiti ve mekanik yöntemlerle kanalizasyon hatlarındaki tıkanıklıkları açıyoruz. Modern ekipmanlarımızla hasarsız çözüm sunuyoruz."
  },
  {
    question: "Kanalizasyon fiyatları nasıl?",
    answer: "Fiyatlar tıkanıklığın yerine, zorluğuna ve kullanılacak ekipmana göre belirlenir. Ücretsiz keşif hizmetimiz vardır."
  },
  {
    question: "Hangi kanalizasyonları açıyorsunuz?",
    answer: "Ana kanalizasyon hatları, apartman giderleri, site kanalizasyonları, endüstriyel hatlar ve tüm boru sistemlerini açıyoruz."
  },
  {
    question: "Basınçlı su zarar verir mi?",
    answer: "Hayır, profesyonel ekipmanlarımızla kontrollü basınç uygulayarak borulara zarar vermeden tıkanıklıkları açıyoruz."
  },
  {
    question: "Acil durumlar için hizmetiniz var mı?",
    answer: "Evet, taşan kanalizasyonlar için 7/24 acil müdahale hizmetimiz bulunmaktadır."
  },
  {
    question: "Hizmet kaliteniz nasıl?",
    answer: "Modern ekipmanlarımız ve deneyimli personelimizle kaliteli hizmet sunuyoruz."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    generateServiceSchema(
      "Antalya Kanalizasyon Açma Hizmeti",
      "Antalya'da profesyonel kanalizasyon açma. Basınçlı su, kamera tespit, ana hatlar. 30 dakikada müdahale.",
      "+90 533 581 79 36"
    ),
    generateFAQSchema(faqs)
  ]
};

const problemTypes = [
  {
    name: "Ana Hat Tıkanıklıkları",
    description: "Şehir ana kanalizasyon hatlarındaki tıkanıklıklar",
    icon: <Truck className="h-6 w-6 text-red-600" />,
    problems: ["Kök sızması", "Yabancı cisimler", "Altyapı deformasyonu"]
  },
  {
    name: "Apartman Kanalizasyonları",
    description: "Apartman ve site gider sistemleri",
    icon: <Shield className="h-6 w-6 text-orange-600" />,
    problems: ["Yağ birikimi", "Yapı atıkları", "Tasarım hataları"]
  },
  {
    name: "Endüstriyel Hatlar",
    description: "Fabrika ve tesis kanalizasyonları",
    icon: <AlertTriangle className="h-6 w-6 text-purple-600" />,
    problems: ["Kimyasal birikim", "Atık malzemeler", "Yüksek kullanım"]
  },
  {
    name: "Yağmur Suyu Kanalları",
    description: "Yağmur suyu tahliye sistemleri",
    icon: <Droplets className="h-6 w-6 text-blue-600" />,
    problems: ["Moloz ve çakıl", "Yaprak birikimi", "Tıkanmış ızgaralar"]
  }
];

const methods = [
  {
    name: "Basınçlı Su Jeti",
    description: "Yüksek basınçlı su ile tıkanıklıkları açma",
    icon: <Droplets className="h-8 w-8 text-blue-600" />,
    features: ["Hasarsız", "Etkili", "Hızlı"]
  },
  {
    name: "Kameralı Tespit",
    description: "Kamera ile boru içi inceleme",
    icon: <AlertTriangle className="h-8 w-8 text-orange-600" />,
    features: ["Hassas", "Görsel", "Belgeleme"]
  },
  {
    name: "Mekanik Açma",
    description: "Fiziksel ekipmanlarla tıkanıklık açma",
    icon: <Truck className="h-8 w-8 text-green-600" />,
    features: ["Güçlü", "Dayanıklı", "Profesyonel"]
  }
];

export default function AntalyaKanalizasyonAcma() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-red-600 font-semibold">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Acil Müdahale</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Kanalizasyon
                  <span className="text-red-600"> Açma</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Antalya'da profesyonel kanalizasyon açma hizmeti. 
                  Basınçlı su, kamera tespit, ana hatlar. 30 dakikada müdahale.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+905335817936"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-3 font-semibold text-lg shadow-lg"
                >
                  <Phone className="h-6 w-6" />
                  <span>Acil Ara</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Basınçlı</p>
                    <p className="text-sm text-gray-600">Su Jeti</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">7/24</p>
                    <p className="text-sm text-gray-600">Acil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center space-y-6">
                <AlertTriangle className="h-24 w-24 text-red-600 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Kanalizasyon Taşması</h3>
                <p className="text-gray-600">Acil durumlar için anında müdahale!</p>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-red-600 font-semibold">Müdahale Süresi</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">30 Dakika</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Kanalizasyon <span className="text-red-600">Sorun Türleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı kanalizasyon sistemlerindeki tıkanıklık türleri ve çözümlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problemTypes.map((problem, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{problem.name}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{problem.description}</p>
                <ul className="space-y-1">
                  {problem.problems.map((item, i) => (
                    <li key={i} className="text-xs text-gray-700 flex items-center space-x-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Kullandığımız <span className="text-red-600">Yöntemler</span>
            </h2>
            <p className="text-xl text-gray-600">
              Modern ve etkili kanalizasyon açma yöntemlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{method.name}</h3>
                <p className="text-gray-600 text-center mb-6">{method.description}</p>
                <div className="flex justify-center space-x-2">
                  {method.features.map((feature, i) => (
                    <span key={i} className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Acil <span className="text-red-600">Kanalizasyon</span> Durumları
            </h2>
            <p className="text-xl text-gray-600">
              Bu durumlarda hemen bizi arayın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white p-3 rounded-full flex-shrink-0">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Kanalizasyon Taşması</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Sokaklarda su birikintisi</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Kötü koku ve sağlık riski</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Binalara su basma tehlikesi</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href="tel:+905335817936"
                      className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Acil Çağrı</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 text-white p-3 rounded-full flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Yavaş Akış</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Tuvaletlerin zor akması</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Lavabolarda geri tepme</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Gürültülü akış sesleri</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href="tel:+905335817936"
                      className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Hemen Ara</span>
                    </a>
                  </div>
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
              Kanalizasyon <span className="text-red-600">SSS</span>
            </h2>
            <p className="text-xl text-gray-600">
              Kanalizasyon açma hizmetleri hakkında merak edilenler
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

          <div className="mt-12 text-center bg-red-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Kanalizasyon Acil Durumu mu?
            </h3>
            <p className="text-gray-600 mb-6">
              Taşma veya tıkanık kanalizasyon için hemen arayın!
            </p>
            <a
              href="tel:+905335817936"
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              <Phone className="h-5 w-5" />
              <span>Acil Ara</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
