import Link from 'next/link';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function Footer() {
  const services = [
    { name: 'Antalya Vidanjör', href: '/antalya-vidanjor' },
    { name: 'Tıkalı Gider Açma', href: '/antalya-tikali-gider-acma' },
    { name: 'Kanalizasyon Açma', href: '/antalya-kanalizasyon-acma' },
    { name: 'Logar Temizleme', href: '/antalya-logar-temizleme' },
    { name: 'Yağ Tutucu Temizleme', href: '/antalya-yag-tutucu-temizleme' },
  ];

  const districts = [
    { name: 'Kepez Vidanjör', href: '/ilceler/kepez' },
    { name: 'Muratpaşa Vidanjör', href: '/ilceler/muratpasa' },
    { name: 'Konyaaltı Vidanjör', href: '/ilceler/konyaalti' },
    { name: 'Döşemealtı Vidanjör', href: '/ilceler/dosemealti' },
    { name: 'Aksu Vidanjör', href: '/ilceler/aksu' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 text-white p-2 rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Güneş Vidanjör</h3>
                <p className="text-sm text-gray-400">7/24 Acil Müdahale</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Antalya'nın tüm ilçelerinde vidanjör, tıkalı gider açma ve kanalizasyon temizleme hizmetleri. Uygun fiyat, kaliteli çözüm.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+905335817936"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2 text-sm"
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">Hemen Ara</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Districts */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Hizmet Alanlarımız</h4>
            <ul className="space-y-2">
              {districts.map((district) => (
                <li key={district.href}>
                  <Link
                    href={district.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {district.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">İletişim Bilgileri</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="text-sm font-medium">Telefon</p>
                  <a href="tel:+905335817936" className="text-gray-300 hover:text-orange-400 transition-colors">
                    +90 533 581 79 36
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="text-sm font-medium">Çalışma Saatleri</p>
                  <p className="text-gray-300">7/24 Hizmet</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="text-sm font-medium">Hizmet Alanı</p>
                  <p className="text-gray-300">Antalya ve Tüm İlçeleri</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Güneş Vidanjör. Tüm hakları saklıdır.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/iletisim" className="text-gray-400 hover:text-orange-400 transition-colors">
                İletişim
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition-colors">
                Blog
              </Link>
              <Link href="/kvkk" className="text-gray-400 hover:text-orange-400 transition-colors">
                KVKK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
