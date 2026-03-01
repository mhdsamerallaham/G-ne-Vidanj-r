'use client';

import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: 'Vidanjör', href: '/antalya-vidanjor' },
    { name: 'Tıkalı Gider Açma', href: '/antalya-tikali-gider-acma' },
    { name: 'Kanalizasyon Açma', href: '/antalya-kanalizasyon-acma' },
    { name: 'Logar Temizleme', href: '/antalya-logar-temizleme' },
    { name: 'Yağ Tutucu Temizleme', href: '/antalya-yag-tutucu-temizleme' },
  ];

  const districts = [
    { name: 'Kepez', href: '/ilceler/kepez' },
    { name: 'Muratpaşa', href: '/ilceler/muratpasa' },
    { name: 'Konyaaltı', href: '/ilceler/konyaalti' },
    { name: 'Döşemealtı', href: '/ilceler/dosemealti' },
    { name: 'Aksu', href: '/ilceler/aksu' },
    { name: 'Kemer', href: '/ilceler/kemer' },
    { name: 'Serik', href: '/ilceler/serik' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo size="md" withText />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Hizmetlerimiz
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 first:rounded-t-lg transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100">
                  <Link
                    href="/hizmetler"
                    className="block px-4 py-3 text-sm font-semibold text-orange-600 hover:bg-orange-50 last:rounded-b-lg transition-colors"
                  >
                    Tüm Hizmetleri Gör →
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                İlçeler
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {districts.map((district) => (
                  <Link
                    key={district.href}
                    href={district.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 first:rounded-t-lg transition-colors"
                  >
                    {district.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100">
                  <Link
                    href="/ilceler"
                    className="block px-4 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-50 last:rounded-b-lg transition-colors"
                  >
                    Tüm İlçeleri Gör →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/blog" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Blog
            </Link>

            <Link href="/iletisim" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              İletişim
            </Link>

            <a
              href="tel:+905335817936"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">Hemen Ara</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <div className="space-y-1">
                <p className="text-gray-600 font-semibold px-3 py-2 text-sm">Hizmetlerimiz</p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-1 pt-2">
                <p className="text-gray-600 font-semibold px-3 py-2 text-sm">İlçeler</p>
                {districts.map((district) => (
                  <Link
                    key={district.href}
                    href={district.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {district.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/iletisim"
                className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                İletişim
              </Link>

              <a
                href="tel:+905335817936"
                className="block mx-3 mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-center font-semibold"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
