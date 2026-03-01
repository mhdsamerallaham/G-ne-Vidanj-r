import { Metadata } from "next";
import { generateServiceSchema, generateFAQSchema } from "@/lib/seo";
import { generateServicePageMetadata } from "@/lib/seo-helpers";
import { Shield, Clock, Phone, CheckCircle, AlertTriangle, Building, Truck } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("antalya-logar-temizleme", {
    title: "Antalya Logar Temizleme - Apartman ve Site Logarları 30 Dakikada",
    description:
      "Antalya'da profesyonel logar temizleme hizmeti. Apartman, site, bina logarları. Kök ve yabancı maddeler, kokusuz çözüm. 30 dakikada müdahale, uygun fiyat.",
    canonical: "/antalya-logar-temizleme",
  });
}

const faqs = [
  {
    question: "Logar temizleme ne kadar sürer?",
    answer: "Standart bir logar temizleme işlemi 30-60 dakika sürer. Karmaşık ve köklü sorunlarda bu süre 1-2 saate kadar çıkabilir."
  },
  {
    question: "Logar temizleme fiyatları nasıl?",
    answer: "Fiyatlar logarın konumuna, tıkanıklık türüne ve kullanılacak ekipmana göre belirlenir. Ortalama 800-2.000 TL arasında değişmektedir."
  },
  {
    question: "Logar neden tıkanır?",
    answer: "Ağaç kökleri, yabancı cisimler, yağ birikintileri, yapı atıkları ve altyapı sorunları logar tıkanıklıklarının başlıca nedenleridir."
  },
  {
    question: "Kökler nasıl temizlenir?",
    answer: "Özel kök kesme ekipmanları ve yüksek basınçlı su jetleriyle kökler temizlenir. Gerekirse boru içi kamera ile kontrol edilir."
  },
  {
    question: "Acil durumlar için hizmetiniz var mı?",
    answer: "Evet, taşan logarlar için 7/24 acil müdahale hizmetimiz bulunmaktadır."
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
      "Antalya Logar Temizleme Hizmeti",
      "Antalya'da profesyonel logar temizleme. Apartman, site, bina logarları. Kök ve yabancı maddeler, kokusuz çözüm.",
      "+90 533 581 79 36"
    ),
    generateFAQSchema(faqs)
  ]
};

const logarTypes = [
  {
    name: "Apartman Logarları",
    description: "Apartman binalarının ana logar sistemleri",
    icon: <Building className="h-6 w-6 text-blue-600" />,
    problems: ["Kök sızması", "Yağ birikimi", "Yabancı cisimler"]
  },
  {
    name: "Site Logarları",
    description: "Sitelerin ve komplekslerin logar sistemleri",
    icon: <Shield className="h-6 w-6 text-green-600" />,
    problems: ["Yoğun kullanım", "Bakım eksikliği", "Altyapı sorunları"]
  },
  {
    name: "Müstakil Ev Logarları",
    description: "Villa ve müstakil ev logarları",
    icon: <Truck className="h-6 w-6 text-orange-600" />,
    problems: ["Ağaç kökleri", "Bahçe atıkları", "Eski sistemler"]
  },
  {
    name: "Ticari Logarlar",
    description: "İş yerleri ve dükkan logarları",
    icon: <AlertTriangle className="h-6 w-6 text-purple-600" />,
    problems: ["İş yeri atıkları", "Yoğun kullanım", "Yapı malzemeleri"]
  }
];

const cleaningMethods = [
  {
    name: "Yüksek Basınçlı Su",
    description: "Basınçlı su jetleri ile temizlik",
    icon: <AlertTriangle className="h-8 w-8 text-blue-600" />,
    features: ["Etkili", "Hasarsız", "Hızlı"]
  },
  {
    name: "Kök Kesme",
    description: "Özel ekipmanlarla kök temizliği",
    icon: <Shield className="h-8 w-8 text-green-600" />,
    features: ["Kök çözümü", "Kalıcı", "Profesyonel"]
  },
  {
    name: "Mekanik Temizlik",
    description: "Fiziksel ekipmanlarla temizlik",
    icon: <Truck className="h-8 w-8 text-orange-600" />,
    features: ["Güçlü", "Dayanıklı", "Geniş"]
  }
];

export default function AntalyaLogarTemizleme() {
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
                  <Shield className="h-5 w-5" />
                  <span>Kokusuz Çözüm</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Logar
                  <span className="text-blue-600"> Temizleme</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Antalya'da profesyonel logar temizleme hizmeti. 
                  Apartman, site, bina logarları. Kök ve yabancı maddeler, kokusuz çözüm.
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
                    <p className="font-semibold text-gray-900">Kök</p>
                    <p className="text-sm text-gray-600">Temizliği</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Kokusuz</p>
                    <p className="text-sm text-gray-600">Hizmet</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center space-y-6">
                <Shield className="h-24 w-24 text-blue-600 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Logar Temizleme</h3>
                <p className="text-gray-600">Apartman ve site logarları için özel hizmet!</p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-600 font-semibold">Temizlik Süresi</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">30-60 Dakika</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logar Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Logar <span className="text-blue-600">Türleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı yapı tiplerindeki logar sistemleri ve çözümlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {logarTypes.map((logar, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {logar.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{logar.name}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{logar.description}</p>
                <ul className="space-y-1">
                  {logar.problems.map((problem, i) => (
                    <li key={i} className="text-xs text-gray-700 flex items-center space-x-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Kullandığımız <span className="text-blue-600">Temizlik Yöntemleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Modern ve etkili logar temizleme yöntemlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cleaningMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{method.name}</h3>
                <p className="text-gray-600 text-center mb-6">{method.description}</p>
                <div className="flex justify-center space-x-2">
                  {method.features.map((feature, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Root Problems */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Ağaç <span className="text-blue-600">Kök Sorunları</span>
            </h2>
            <p className="text-xl text-gray-600">
              Antalya'da sık karşılaşılan kök sızması sorunları ve çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kök Nedenleri</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Nem arayışı:</strong> Ağaç kökleri nemli ortamlara doğru büyür</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Borulardaki çatlaklar:</strong> Zayıf noktalardan sızma</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Eski altyapı:</strong> Antalya'nın eski bölgelerinde risk daha yüksek</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Belirtiler</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Yavaş akış ve geri tepme</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Gürültülü akış sesleri</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Kötü koku ve nemlenme</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kök Çözüm Süreci</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Kamera Tespiti</h4>
                    <p className="text-gray-600 text-sm">Köklerin yerini ve boyutunu belirleme</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Kök Kesme</h4>
                    <p className="text-gray-600 text-sm">Özel kök kesme ekipmanlarıyla temizlik</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Basınçlı Su</h4>
                    <p className="text-gray-600 text-sm">Kalan kök ve tortuların temizlenmesi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Kontrol ve Kalite</h4>
                    <p className="text-gray-600 text-sm">Son kontrol ve kalite kontrol</p>
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
              Logar Temizleme <span className="text-blue-600">SSS</span>
            </h2>
            <p className="text-xl text-gray-600">
              Logar temizleme hizmetleri hakkında merak edilenler
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
              Logar Sorunu mu Yaşıyorsunuz?
            </h3>
            <p className="text-gray-600 mb-6">
              Kök, tıkanıklık veya taşma sorunları için hemen arayın!
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
