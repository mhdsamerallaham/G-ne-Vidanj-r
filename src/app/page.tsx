import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { TestimonialsSection } from "@/components/Testimonial";
import FAQSection from "@/components/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { safeDatabaseQuery } from "@/lib/database-utils";
import {
  Truck,
  Droplets,
  AlertTriangle,
  Shield,
  Wrench,
  Phone,
  CheckCircle,
  Clock,
  Users,
  MapPin,
  ArrowRight,
  Zap,
  Camera,
  Award,
  ThumbsUp,
} from "lucide-react";

export default async function Home() {
  const recentPosts = await safeDatabaseQuery(
    () => prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
      take: 3,
    }),
    []
  );

  // Ensure recentPosts is never null
  const posts = recentPosts || [];

  const services = [
    {
      title: "Tıkanıklık Açma Hizmeti",
      description: "Tıkalı kanalizasyon ve logar temizliği",
      href: "/antalya-vidanjor",
      icon: <Truck className="h-6 w-6 text-orange-600" />,
      features: [
        "7/24 Acil müdahale",
        "Modern vidanjör araçları",
        "Hızlı ve etkili çözüm",
        "Antalya tüm ilçeler",
      ],
      emergency: true,
    },
    {
      title: "Tıkalı Gider Açma",
      description: "Mutfak, banyo ve lavabo tıkanıklıkları",
      href: "/antalya-tikali-gider-acma",
      icon: <Droplets className="h-6 w-6 text-orange-600" />,
      features: [
        "Kameralı tespit",
        "Kimyasal kullanmadan çözüm",
        "Kaliteli hizmet",
        "Uygun fiyat",
      ],
    },
    {
      title: "Kanalizasyon Açma",
      description: "Ana kanalizasyon hatları temizliği",
      href: "/antalya-kanalizasyon-acma",
      icon: <AlertTriangle className="h-6 w-6 text-orange-600" />,
      features: [
        "Basınçlı su ile temizlik",
        "Kamera ile tespit",
        "Önleyici bakım",
        "Acil müdahale",
      ],
      emergency: true,
    },
    {
      title: "Logar Temizleme",
      description: "Apartman ve site logar temizliği",
      href: "/antalya-logar-temizleme",
      icon: <Shield className="h-6 w-6 text-orange-600" />,
      features: [
        "Profesyonel ekipman",
        "Düzenli bakım",
        "Kök ve yabancı maddeler",
        "Kokusuz çözüm",
      ],
    },
    {
      title: "Yağ Tutucu Temizleme",
      description: "Restaurant ve iş yeri yağ tutucuları",
      href: "/antalya-yag-tutucu-temizleme",
      icon: <Wrench className="h-6 w-6 text-orange-600" />,
      features: [
        "İş yeri sertifikası",
        "Periyodik sözleşme",
        "Hijyenik temizlik",
        "Belge düzenleme",
      ],
    },
  ];

  const stats = [
    { value: "5.000+", label: "Mutlu Müşteri", icon: <Users className="h-7 w-7" /> },
    { value: "15+", label: "Yıl Tecrübe", icon: <Award className="h-7 w-7" /> },
    { value: "30 dk", label: "Ortalama Müdahale", icon: <Clock className="h-7 w-7" /> },
    { value: "7/24", label: "Kesintisiz Hizmet", icon: <Zap className="h-7 w-7" /> },
  ];

  const districts = [
    { name: "Kepez", href: "/ilceler/kepez", time: "15 dk" },
    { name: "Muratpaşa", href: "/ilceler/muratpasa", time: "20 dk" },
    { name: "Konyaaltı", href: "/ilceler/konyaalti", time: "25 dk" },
    { name: "Döşemealtı", href: "/ilceler/dosemealti", time: "35 dk" },
    { name: "Aksu", href: "/ilceler/aksu", time: "30 dk" },
    { name: "Kemer", href: "/ilceler/kemer", time: "45 dk" },
    { name: "Serik", href: "/ilceler/serik", time: "40 dk" },
  ];

  const whyUs = [
    {
      icon: <Zap className="h-7 w-7 text-orange-600" />,
      bg: "bg-orange-100",
      title: "Hızlı Müdahale",
      desc: "Antalya merkezinde 30 dakika, ilçelerde 60 dakika içinde yanınızdayız.",
    },
    {
      icon: <Camera className="h-7 w-7 text-blue-600" />,
      bg: "bg-blue-100",
      title: "Kameralı Tespit",
      desc: "Modern kamera sistemleriyle tıkanıklığın kesin yerini tespit ediyoruz.",
    },
    {
      icon: <Award className="h-7 w-7 text-green-600" />,
      bg: "bg-green-100",
      title: "Hizmet Kalitemiz",
      desc: "Modern ekipmanlarımız ve deneyimli personelimizle kaliteli hizmet sunuyoruz.",
    },
    {
      icon: <ThumbsUp className="h-7 w-7 text-purple-600" />,
      bg: "bg-purple-100",
      title: "Uygun Fiyat",
      desc: "Şeffaf fiyatlandırma, sürpriz ücret yok. Ücretsiz keşif ve fiyat teklifi.",
    },
    {
      icon: <CheckCircle className="h-7 w-7 text-teal-600" />,
      bg: "bg-teal-100",
      title: "Lisanslı Ekip",
      desc: "Sertifikalı ve deneyimli teknisyenlerimiz profesyonel hizmet sunar.",
    },
    {
      icon: <Clock className="h-7 w-7 text-red-600" />,
      bg: "bg-red-100",
      title: "7/24 Hizmet",
      desc: "Gece, gündüz, hafta sonu ve tatil günlerinde kesintisiz hizmetinizdeyiz.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-orange-100 text-orange-600 p-3 rounded-xl mb-3">
                  {stat.icon}
                </div>
                <p className="text-3xl font-extrabold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4 text-white">
              <div className="bg-white/20 rounded-full p-3 animate-pulse">
                <Phone className="h-7 w-7" />
              </div>
              <div>
                <p className="font-bold text-xl">Acil Durum?</p>
                <p className="text-red-100 text-sm">7/24 hızlı müdahale için hemen arayın!</p>
              </div>
            </div>
            <a
              href="tel:+905335817936"
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-xl font-extrabold text-xl transition-all hover:scale-105 shadow-lg whitespace-nowrap"
            >
              +90 533 581 79 36
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <span className="inline-block bg-orange-100 text-orange-600 rounded-full px-4 py-1 text-sm font-semibold">
              Tüm Hizmetlerimiz
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              Hizmet <span className="text-orange-600">Alanlarımız</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Antalya&apos;da vidanjör, tıkalı gider açma ve daha birçok hizmet
              için uzman ekibimizle 7/24 hizmetinizdeyiz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <span className="inline-block bg-orange-100 text-orange-600 rounded-full px-4 py-1 text-sm font-semibold">
              Farkımız
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              Neden <span className="text-orange-600">Güneş Tıkanıklık?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15 yıllık tecrübe, binlerce mutlu müşteri ve Antalya&apos;nın en hızlı vidanjör hizmeti
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className={`${item.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <span className="inline-block bg-orange-500/20 border border-orange-500/40 text-orange-400 rounded-full px-4 py-1 text-sm font-semibold">
              Hizmet Bölgelerimiz
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
              Antalya&apos;nın Tüm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                İlçelerinde
              </span>{" "}
              Hizmet
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Antalya merkez ve tüm ilçelere en hızlı sürede ulaşıyoruz
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {districts.map((district, i) => (
              <Link
                key={i}
                href={district.href}
                className="group bg-white/10 hover:bg-orange-500 border border-white/20 hover:border-orange-500 rounded-xl p-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-5 w-5 text-orange-400 group-hover:text-white" />
                </div>
                <p className="font-semibold text-white text-sm">{district.name}</p>
                <p className="text-xs text-gray-400 group-hover:text-orange-100 mt-1">
                  ~{district.time}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Listede bulunmayan ilçeler için de{" "}
              <a href="tel:+905335817936" className="text-orange-400 hover:text-orange-300 font-semibold">
                bizi arayın
              </a>
              , her yere hizmet veriyoruz!
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <span className="inline-block bg-orange-100 text-orange-600 rounded-full px-4 py-1 text-sm font-semibold">
              Nasıl Çalışıyoruz
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              4 Adımda <span className="text-orange-600">Çözüm</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-orange-200 z-0"></div>
            {[
              {
                step: "01",
                title: "Bizi Arayın",
                desc: "7/24 hattımızı arayın veya WhatsApp'tan yazın",
                icon: <Phone className="h-6 w-6 text-white" />,
              },
              {
                step: "02",
                title: "Ücretsiz Keşif",
                desc: "Ekibimiz gelir, sorunu kameralı sistemle tespit eder",
                icon: <Camera className="h-6 w-6 text-white" />,
              },
              {
                step: "03",
                title: "Hızlı Müdahale",
                desc: "Profesyonel ekipmanlarla sorunu kökünden çözüyoruz",
                icon: <Zap className="h-6 w-6 text-white" />,
              },
              {
                step: "04",
                title: "Kalite Kontrol",
                desc: "İşimizi kalite kontrol ile teslim ediyoruz",
                icon: <Award className="h-6 w-6 text-white" />,
              },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center z-10">
                <div className="bg-orange-500 rounded-2xl w-20 h-20 flex items-center justify-center mb-4 shadow-xl shadow-orange-200">
                  {item.icon}
                </div>
                <span className="absolute -top-2 -right-2 md:right-auto md:-right-2 bg-gray-900 text-orange-400 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                  {item.step}
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {posts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Son <span className="text-orange-600">Blog Yazıları</span>
              </h2>
              <p className="text-xl text-gray-600">
                Tıkanıklık açma ve kanal temizleme hakkında uzman tavsiyeleri
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {posts.map((post) => (
                <div key={post.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
                  ) : (
                    <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-400">
                      <span className="font-bold opacity-30">BLOG</span>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-orange-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-1">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="text-orange-600 font-medium hover:text-orange-700 text-sm flex items-center mt-auto">
                      Devamını Oku <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/blog" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                Tüm Yazıları Gör
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">
            Hızlı Çözüm İçin
            <br />
            Hemen İletişime Geçin!
          </h2>
          <p className="text-xl text-orange-100">
            7/24 acil hizmet. Antalya&apos;nın her köşesine en hızlı müdahale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905335817936"
              className="inline-flex items-center justify-center space-x-3 bg-white text-orange-600 hover:bg-orange-50 px-10 py-4 rounded-xl font-extrabold text-xl transition-all hover:scale-105 shadow-2xl"
            >
              <Phone className="h-6 w-6" />
              <span>+90 533 581 79 36</span>
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center space-x-3 border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-xl font-semibold text-xl transition-all"
            >
              <span>Form Doldur</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* WhatsApp Float Button */}
      <WhatsAppButton />
    </div>
  );
}
