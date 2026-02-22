import { Metadata } from "next";
import { generateServiceSchema, generateFAQSchema } from "@/lib/seo";
import { generateServicePageMetadata } from "@/lib/seo-helpers";
import { Droplets, Camera, Clock, Phone, CheckCircle, AlertTriangle, Home } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("antalya-tikali-gider-acma", {
    title: "Antalya Tıkalı Gider Açma - Kameralı Tespit 30 Dakikada",
    description:
      "Antalya'da tıkalı gider açma hizmeti. Kameralı tespit ile mutfak, banyo, lavabo tıkanıklıklarına çözüm. 30 dakikada müdahale, garantili hizmet, uygun fiyat.",
    canonical: "/antalya-tikali-gider-acma",
  });
}

const faqs = [
  {
    question: "Tıkalı gider nasıl açılır?",
    answer: "Modern kamera sistemleriyle tıkanıklığın yerini tespit edip, basınçlı su veya mekanik yöntemlerle açıyoruz. Kimyasal kullanmıyoruz."
  },
  {
    question: "Kameralı tespit ne kadar sürer?",
    answer: "Kameralı tespit işlemi 15-30 dakika sürer. Tıkanıklığın tam yerini ve nedenini belirleyerek isabetli çözüm sunar."
  },
  {
    question: "Tıkalı gider açma fiyatları nasıl?",
    answer: "Fiyatlar tıkanıklığın yerine, zorluğuna ve kullanılacak yönteme göre belirlenir. Ücretsiz keşif hizmetimiz vardır."
  },
  {
    question: "Hangi giderleri açıyorsunuz?",
    answer: "Mutfak giderleri, banyo lavaboları, duş giderleri, klozetler, çamaşır makinesi giderleri ve tüm boru hatlarını açıyoruz."
  },
  {
    question: "Garanti veriyor musunuz?",
    answer: "Evet, yaptığımız tüm gider açma işlemlerine 6 ay garanti veriyoruz."
  },
  {
    question: "Acil durumlar için hizmetiniz var mı?",
    answer: "Evet, 7/24 acil tıkalı gider açma hizmetimiz bulunmaktadır."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    generateServiceSchema(
      "Antalya Tıkalı Gider Açma Hizmeti",
      "Antalya'da kameralı tıkalı gider açma. Mutfak, banyo, lavabo tıkanıklıklarına çözüm. 30 dakikada müdahale.",
      "+90 533 581 79 36"
    ),
    generateFAQSchema(faqs)
  ]
};

const drainTypes = [
  {
    name: "Mutfak Giderleri",
    description: "Yağ ve yemek artıkları nedeniyle tıkanan mutfak giderleri",
    icon: <Home className="h-6 w-6 text-orange-600" />,
    problems: ["Yağ birikimi", "Yemek artıkları", "Meyve sebze atıkları"]
  },
  {
    name: "Banyo Giderleri",
    description: "Kıl ve sabun birikintileri nedeniyle tıkanan banyo giderleri",
    icon: <Droplets className="h-6 w-6 text-blue-600" />,
    problems: ["Kıl birikimi", "Sabun kalıntıları", "Kişisel bakım ürünleri"]
  },
  {
    name: "Lavabo Giderleri",
    description: "Genel kullanım nedeniyle tıkanan lavabo giderleri",
    icon: <AlertTriangle className="h-6 w-6 text-green-600" />,
    problems: ["Diş macunu", "Tüyler", "Yabancı cisimler"]
  },
  {
    name: "Klozet Giderleri",
    description: "Yabancı cisimler nedeniyle tıkanan klozet giderleri",
    icon: <Camera className="h-6 w-6 text-purple-600" />,
    problems: ["Yabancı cisimler", "Kağıt birikimi", "Organik maddeler"]
  }
];

const processSteps = [
  {
    step: "1",
    title: "Kameralı Tespit",
    description: "Modern kamera sistemleriyle tıkanıklığın yerini ve nedenini tespit ediyoruz."
  },
  {
    step: "2", 
    title: "Çözüm Planı",
    description: "Tespit sonucuna göre en uygun çözüm yöntemini belirliyoruz."
  },
  {
    step: "3",
    title: "Profesyonel Müdahale",
    description: "Basınçlı su veya mekanik yöntemlerle tıkanıklığı açıyoruz."
  },
  {
    step: "4",
    title: "Kontrol ve Garanti",
    description: "Sistemin çalıştığını kontrol edip 6 ay garanti veriyoruz."
  }
];

export default function AntalyaTikaliGiderAcma() {
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
                  <Camera className="h-5 w-5" />
                  <span>Kameralı Tespit</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Tıkalı Gider
                  <span className="text-blue-600"> Açma</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Antalya'da kameralı tespit ile tıkalı gider açma. 
                  Mutfak, banyo, lavabo tıkanıklıklarına çözüm. 30 dakikada müdahale.
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
                    <p className="font-semibold text-gray-900">Kimyasalsız</p>
                    <p className="text-sm text-gray-600">Çözüm</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Camera className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Kameralı</p>
                    <p className="text-sm text-gray-600">Tespit</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center space-y-6">
                <Camera className="h-24 w-24 text-blue-600 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Kameralı Gider Tespiti</h3>
                <p className="text-gray-600">Tıkanıklığın yerini tam olarak tespit ediyoruz!</p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-600 font-semibold">Tespit Süresi</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">15-30 Dakika</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drain Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Tıkanan <span className="text-blue-600">Gider Türleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En sık karşılaşılan tıkanıklık türleri ve çözümlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {drainTypes.map((drain, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {drain.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{drain.name}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{drain.description}</p>
                <ul className="space-y-1">
                  {drain.problems.map((problem, i) => (
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

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Tıkalı Gider <span className="text-blue-600">Açma Süreci</span>
            </h2>
            <p className="text-xl text-gray-600">
              4 adımda profesyonel çözüm sürecimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-blue-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Kullandığımız <span className="text-blue-600">Yöntemler</span>
            </h2>
            <p className="text-xl text-gray-600">
              Modern ve etkili gider açma yöntemlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Kameralı Tespit</h3>
              <p className="text-gray-600 text-center mb-4">
                Yüksek çözünürlüklü kameralarla boru içini görüntüleyerek sorunun tam yerini tespit ediyoruz.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Hassas tespit</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Zaman kaybı yok</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-xl p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Droplets className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Basınçlı Su</h3>
              <p className="text-gray-600 text-center mb-4">
                Yüksek basınçlı su jetleriyle borulardaki birikintileri ve tıkanıklıkları temizliyoruz.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Çevre dostu</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Etkili temizlik</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <AlertTriangle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Mekanik Açma</h3>
              <p className="text-gray-600 text-center mb-4">
                Profesyonel ekipmanlarla mekanik yöntemlerle en zorlu tıkanıklıkları açıyoruz.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Kimyasalsız</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Güçlü çözüm</span>
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
              Tıkalı Gider <span className="text-blue-600">SSS</span>
            </h2>
            <p className="text-xl text-gray-600">
              Gider açma hizmetleri hakkında merak edilenler
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
              Tıkalı Gider Sorunu mu?
            </h3>
            <p className="text-gray-600 mb-6">
              Hemen arayın, kameralı tespit ile sorunu kökten çözelim!
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
