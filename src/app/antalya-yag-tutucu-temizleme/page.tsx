import { Metadata } from "next";
import { generateServiceSchema, generateFAQSchema } from "@/lib/seo";
import { generateServicePageMetadata } from "@/lib/seo-helpers";
import { Droplets, Clock, Phone, CheckCircle, AlertTriangle, Building, FileText } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("antalya-yag-tutucu-temizleme", {
    title: "Antalya Yağ Tutucu Temizleme - Restaurant ve İş Yeri 2025",
    description:
      "Antalya'da profesyonel yağ tutucu temizleme hizmeti. Restaurant, cafe, hotel, iş yeri. Sertifikalı hizmet, periyodik bakım, belge düzenleme. 30 dakikada müdahale.",
    canonical: "/antalya-yag-tutucu-temizleme",
  });
}

const faqs = [
  {
    question: "Yağ tutucu ne sıklıkla temizlenmeli?",
    answer: "Restaurant ve iş yerlerinde yasal olarak ayda bir temizlenmesi zorunludur. Yoğun kullanılan yerlerde 15 günde bir temizlik önerilir."
  },
  {
    question: "Yağ tutucu temizleme fiyatları nasıl?",
    answer: "Fiyatlar yağ tutucunun büyüklüğüne, yağ oranına ve temizlik sıklığına göre belirlenir. Ortalama 500-1.500 TL arasında değişmektedir."
  },
  {
    question: "Sertifika veriyor musunuz?",
    answer: "Evet, yasal zorunluluk olan yağ tutucu temizleme sertifikası ve bakım kayıt defteri tutuyoruz."
  },
  {
    question: "Temizlik nasıl yapılır?",
    answer: "Yağ tamamen boşaltılır, mekanik temizlik yapılır, dezenfekte edilir ve tekrar kullanıma hazır hale getirilir."
  },
  {
    question: "Acil durumlar için hizmetiniz var mı?",
    answer: "Evet, dolan veya taşan yağ tutucular için 7/24 acil müdahale hizmetimiz bulunmaktadır."
  },
  {
    question: "Periyodik bakım sözleşmesi yapıyor musunuz?",
    answer: "Evet, iş yerleri için aylık ve 15 günlük periyodik bakım sözleşmeleri hazırlıyoruz."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    generateServiceSchema(
      "Antalya Yağ Tutucu Temizleme Hizmeti",
      "Antalya'da profesyonel yağ tutucu temizleme. Restaurant, cafe, hotel, iş yeri. Sertifikalı hizmet, periyodik bakım.",
      "+90 533 581 79 36"
    ),
    generateFAQSchema(faqs)
  ]
};

const businessTypes = [
  {
    name: "Restaurantlar",
    description: "Restoran ve yeme-içme mekanları",
    icon: <Building className="h-6 w-6 text-orange-600" />,
    features: ["Aylık bakım", "Sertifika", "Acil müdahale"]
  },
  {
    name: "Hoteller",
    description: "Otel ve konaklama tesisleri",
    icon: <Droplets className="h-6 w-6 text-blue-600" />,
    features: ["Periyodik bakım", "Çoklu ünite", "Belgeleme"]
  },
  {
    name: "Cafeler",
    description: "Kafe ve kahveciler",
    icon: <AlertTriangle className="h-6 w-6 text-green-600" />,
    features: ["15 günlük bakım", "Küçük ünite", "Hızlı hizmet"]
  },
  {
    name: "Sanayi Tesisleri",
    description: "Fabrika ve sanayi mutfakları",
    icon: <FileText className="h-6 w-6 text-purple-600" />,
    features: ["Büyük kapasite", "Özel çözüm", "Teknik destek"]
  }
];

const cleaningProcess = [
  {
    step: "1",
    title: "Yağ Boşaltımı",
    description: "Yağ tutucudaki birikmiş yağ tamamen boşaltılır."
  },
  {
    step: "2", 
    title: "Mekanik Temizlik",
    description: "Yapışmış yağ kalıntıları mekanik olarak temizlenir."
  },
  {
    step: "3",
    title: "Dezenfeksiyon",
    description: "Ünite tamamen dezenfekte edilir ve koku giderilir."
  },
  {
    step: "4",
    title: "Belgeleme",
    description: "Temizlik sertifikası ve bakım kaydı düzenlenir."
  }
];

const legalRequirements = [
  {
    title: "Çevre Kanunu",
    description: "Yağlı atıkların doğaya salınmasını önleyen yasal düzenleme",
    icon: <FileText className="h-8 w-8 text-red-600" />
  },
  {
    title: "Belediye Yönetmeliği",
    description: "İş yeri yağ tutucularının periyodik bakım zorunluluğu",
    icon: <AlertTriangle className="h-8 w-8 text-orange-600" />
  },
  {
    title: "Sağlık Müfettişliği",
    description: "Gıda işletmelerinin hijyenik koşulları için denetim",
    icon: <CheckCircle className="h-8 w-8 text-green-600" />
  }
];

export default function AntalyaYagTutucuTemizleme() {
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
                  <FileText className="h-5 w-5" />
                  <span>Sertifikalı Hizmet</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Yağ Tutucu
                  <span className="text-orange-600"> Temizleme</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Antalya'da profesyonel yağ tutucu temizleme hizmeti. 
                  Restaurant, cafe, hotel, iş yeri. Sertifikalı hizmet, periyodik bakım.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+905335817936"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-3 font-semibold text-lg shadow-lg"
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
                    <p className="font-semibold text-gray-900">Yasal</p>
                    <p className="text-sm text-gray-600">Uygun</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sertifika</p>
                    <p className="text-sm text-gray-600">Garantisi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center space-y-6">
                <FileText className="h-24 w-24 text-orange-600 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Yağ Tutucu Temizliği</h3>
                <p className="text-gray-600">İş yerleri için yasal zorunluluk!</p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-orange-600 font-semibold">2025 Fiyatları</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">500 - 1.500 TL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Hizmet Verdiğimiz <span className="text-orange-600">İşletmeler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı işletme türleri için özel yağ tutucu temizleme çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTypes.map((business, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {business.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{business.name}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{business.description}</p>
                <ul className="space-y-1">
                  {business.features.map((feature, i) => (
                    <li key={i} className="text-xs text-gray-700 flex items-center space-x-2">
                      <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Yasal <span className="text-orange-600">Zorunluluklar</span>
            </h2>
            <p className="text-xl text-gray-600">
              Yağ tutucu temizliğinin yasal dayanakları ve gereklilikleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {legalRequirements.map((requirement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {requirement.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{requirement.title}</h3>
                <p className="text-gray-600 text-center text-sm">{requirement.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-50 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Yasal Sorumluluklarınız</h3>
              <p className="text-gray-600 mb-6">
                İş yerinizde yağ tutucu temizliği yaptırmamak, çevre kanununa aykırıdır ve 
                yüksek cezalarla sonuçlanabilir. Periyodik bakım ve belgeleme zorunludur.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Aylık Bakım</h4>
                  <p className="text-sm text-gray-600">Restaurant ve iş yerleri için zorunlu</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Bakım Kayıt Defteri</h4>
                  <p className="text-sm text-gray-600">Tüm işlemlerin kaydı tutulmalı</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Temizlik Sertifikası</h4>
                  <p className="text-sm text-gray-600">Her temizlik için belge düzenlenmeli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Temizlik <span className="text-orange-600">Süreci</span>
            </h2>
            <p className="text-xl text-gray-600">
              4 adımda profesyonel yağ tutucu temizliği
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cleaningProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < cleaningProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-orange-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Periyodik <span className="text-orange-600">Bakım Sözleşmeleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              İş yeriniz için düzenli yağ tutucu bakım çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Aylık Bakım Paketi</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Ayda bir profesyonel temizlik</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Bakım kayıt defteri tutma</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Temizlik sertifikası</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">7/24 acil müdahale</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600 mb-2">800-1.500 TL</p>
                <p className="text-gray-600 mb-6">Aylık</p>
                <a
                  href="tel:+905335817936"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                >
                  Teklif Al
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">15 Günlük Bakım Paketi</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">15 günde bir temizlik</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Öncelikli hizmet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Tüm belgeleme</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Yıllık bakım planı</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600 mb-2">1.200-2.000 TL</p>
                <p className="text-gray-600 mb-6">Aylık</p>
                <a
                  href="tel:+905335817936"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                >
                  Teklif Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Yağ Tutucu <span className="text-orange-600">SSS</span>
            </h2>
            <p className="text-xl text-gray-600">
              Yağ tutucu temizleme hizmetleri hakkında merak edilenler
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-orange-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Yağ Tutucu Bakımı Gerekli mi?
            </h3>
            <p className="text-gray-600 mb-6">
              Yasal zorunluluk ve hijyenik koşullar için hemen bizi arayın!
            </p>
            <a
              href="tel:+905335817936"
              className="inline-flex items-center space-x-2 bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
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
