'use client';

import Link from 'next/link';
import { Phone, Clock, CheckCircle, ArrowRight, MapPin, Shield, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentDistrict, setCurrentDistrict] = useState(0);
  const districts = ['Kepez', 'Muratpaşa', 'Konyaaltı', 'Lara', 'Alanya', 'Manavgat'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDistrict((prev) => (prev + 1) % districts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-orange-950 overflow-hidden min-h-screen flex items-center">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-400 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600 rounded-full opacity-5 blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span>7/24 Acil Müdahale Aktif</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                Antalya'nın{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  En Hızlı
                </span>
                <br />
                Vidanjör Hizmeti
              </h1>
              <div className="flex items-center space-x-2 text-gray-300 text-lg">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span>
                  <span className="text-orange-400 font-semibold transition-all duration-500">
                    {districts[currentDistrict]}
                  </span>
                  {' '}ve tüm Antalya ilçelerine hizmet
                </span>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Tıkalı gider, kanalizasyon ve foseptik sorunları için{' '}
                <strong className="text-white">30 dakikada</strong> müdahale.
                Uygun fiyat ve <strong className="text-white">1 yıl garanti</strong>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+905335817936"
                className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-3 font-bold text-lg shadow-2xl shadow-orange-500/30"
              >
                <div className="bg-white/20 rounded-full p-1">
                  <Phone className="h-5 w-5 group-hover:animate-bounce" />
                </div>
                <span>+90 533 581 79 36</span>
              </a>
              <Link
                href="/iletisim"
                className="border-2 border-white/30 hover:border-orange-500 text-white hover:text-orange-400 px-8 py-4 rounded-xl transition-all flex items-center justify-center space-x-3 font-semibold text-lg backdrop-blur-sm hover:bg-orange-500/10"
              >
                <span>Teklif Al</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="bg-green-500/20 border border-green-500/30 rounded-full p-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">30 Dakika</p>
                  <p className="text-xs text-gray-400">Müdahale Süresi</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-full p-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">7/24</p>
                  <p className="text-xs text-gray-400">Kesintisiz Hizmet</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-full p-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">5★ Puan</p>
                  <p className="text-xs text-gray-400">Google Yorumları</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="bg-purple-500/20 border border-purple-500/30 rounded-full p-2">
                  <Shield className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">1 Yıl</p>
                  <p className="text-xs text-gray-400">Garanti</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Emergency Card */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 space-y-6 shadow-2xl">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl mx-auto shadow-lg shadow-orange-500/40">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Acil Müdahale</h3>
                  <p className="text-gray-300">Sorununuzu şimdi çözelim!</p>
                </div>

                {/* Phone button */}
                <a
                  href="tel:+905335817936"
                  className="block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all font-bold text-xl text-center shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transform"
                >
                  +90 533 581 79 36
                </a>

                {/* WhatsApp button */}
                <a
                  href="https://wa.me/905335817936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition-all font-semibold shadow-lg hover:scale-105 transform"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp ile Yaz</span>
                </a>

                {/* Response time grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'Kepez', time: '15 dk' },
                    { name: 'Muratpaşa', time: '20 dk' },
                    { name: 'Konyaaltı', time: '25 dk' },
                    { name: 'Lara', time: '30 dk' },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <p className="text-sm text-gray-300">{item.name}</p>
                      </div>
                      <span className="text-sm font-bold text-green-400">{item.time}</span>
                    </div>
                  ))}
                </div>

                <p className="text-center text-gray-400 text-xs">
                  * Ortalama müdahale süreleri
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-green-500 text-white rounded-xl px-4 py-2 shadow-lg font-bold text-sm z-20 animate-bounce">
              ✓ Şu an aktif
            </div>
            <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-xl px-4 py-2 shadow-lg font-bold text-sm z-20">
              15+ Yıl Tecrübe
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 0 960 80 720 40C480 0 240 80 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
