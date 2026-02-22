import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  district: string;
  service: string;
  rating: number;
  content: string;
  date: string;
}

export default function Testimonial({ name, district, service, rating, content, date }: TestimonialProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4 hover:shadow-xl transition-shadow">
      {/* Rating */}
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>

      {/* Quote */}
      <div className="relative">
        <Quote className="h-8 w-8 text-orange-200 absolute -top-2 -left-2" />
        <p className="text-gray-700 italic leading-relaxed pl-6">
          {content}
        </p>
      </div>

      {/* Customer Info */}
      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-600">{district} - {service}</p>
          </div>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      district: "Kepez",
      service: "Vidanjör",
      rating: 5,
      content: "Gece yarısı tıkanan logar için aradım, 30 dakika içinde geldiler. Hızlı ve profesyonel hizmet için teşekkür ederim.",
      date: "2 gün önce"
    },
    {
      name: "Ayşe Kaya",
      district: "Muratpaşa",
      service: "Tıkalı Gider Açma",
      rating: 5,
      content: "Mutfak giderimiz tıkanmıştı, kameralı sistemle sorunu tespit edip hızlıca çözdüler. Kesinlikle tavsiye ederim.",
      date: "1 hafta önce"
    },
    {
      name: "Mehmet Demir",
      district: "Konyaaltı",
      service: "Foseptik Boşaltma",
      rating: 5,
      content: "Fiyatları çok uygun, hizmet kaliteli. Sitemizin foseptik çukurunu düzenli olarak boşaltıyorlar.",
      date: "2 hafta önce"
    },
    {
      name: "Fatma Öztürk",
      district: "Lara",
      service: "Kanalizasyon Açma",
      rating: 5,
      content: "Acil durum için aramama rağmen çok hızlı müdahale ettiler. Ekip çok ilgili ve işini iyi yapıyor.",
      date: "3 hafta önce"
    },
    {
      name: "Ali Veli",
      district: "Aksu",
      service: "Yağ Tutucu Temizleme",
      rating: 5,
      content: "Restoranımızın yağ tutucularını düzenli temizliyorlar. Hijyenik ve hızlı hizmet.",
      date: "1 ay önce"
    },
    {
      name: "Zeynep Çelik",
      district: "Manavgat",
      service: "Logar Temizleme",
      rating: 5,
      content: "Uygun fiyatlı ve güvenilir bir firma. Sorunu kökten çözüyorlar, tekrar tekrar tercih ediyorum.",
      date: "1 ay önce"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Müşteri <span className="text-orange-600">Yorumları</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Antalya'nın tüm ilçelerinden binlerce mutlu müşteri. Hizmet kalitemizi müşterilerimiz anlatıyor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold"
          >
            <span>Google'da tüm yorumları gör</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
