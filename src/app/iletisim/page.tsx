'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send, CheckCircle } from 'lucide-react';

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'vidanjor',
    district: 'kepez',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { value: 'vidanjor', label: 'Tıkanıklık Açma Hizmeti' },
    { value: 'tikali-gider', label: 'Tıkalı Gider Açma' },
    { value: 'foseptik', label: 'Foseptik Boşaltma' },
    { value: 'kanalizasyon', label: 'Kanalizasyon Açma' },
    { value: 'logar', label: 'Logar Temizleme' },
    { value: 'yag-tutucu', label: 'Yağ Tutucu Temizleme' }
  ];

  const districts = [
    { value: 'kepez', label: 'Kepez' },
    { value: 'muratpasa', label: 'Muratpaşa' },
    { value: 'konyaalti', label: 'Konyaaltı' },
    { value: 'dosemealti', label: 'Döşemealtı' },
    { value: 'aksu', label: 'Aksu' },
    { value: 'manavgat', label: 'Manavgat' },
    { value: 'alanya', label: 'Alanya' },
    { value: 'kemer', label: 'Kemer' },
    { value: 'serik', label: 'Serik' },
    { value: 'diger', label: 'Diğer' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        service: 'vidanjor',
        district: 'kepez',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              İletişim
              <span className="text-orange-600"> Bilgileri</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              7/24 vidanjör ve kanal temizleme hizmetleri için bize ulaşın. 
              Acil durumlar için hemen arayın!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-xl p-8 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Telefon</h3>
              <a 
                href="tel:+905335817936" 
                className="text-2xl font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                +90 533 581 79 36
              </a>
              <p className="text-gray-600 mt-2">7/24 Acil Müşteri Hattı</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Çalışma Saatleri</h3>
              <p className="text-2xl font-semibold text-blue-600">7/24</p>
              <p className="text-gray-600 mt-2">Haftanın 7 günü hizmet</p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hizmet Alanı</h3>
              <p className="text-2xl font-semibold text-green-600">Antalya</p>
              <p className="text-gray-600 mt-2">Tüm İlçeler</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Hızlı <span className="text-orange-600">Teklif Al</span>
            </h2>
            <p className="text-xl text-gray-600">
              Formu doldurun, en kısa sürede size dönüş yapalım
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Adınızı girin"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon Numaranız *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Hizmet Türü *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {services.map(service => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-2">
                    İlçe *
                  </label>
                  <select
                    id="district"
                    name="district"
                    required
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {districts.map(district => (
                      <option key={district.value} value={district.value}>
                        {district.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Sorununuzu veya talebinizi buraya yazabilirsiniz..."
                />
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Gönderiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Teklif Gönder</span>
                    </>
                  )}
                </button>

                <a
                  href="tel:+905335817936"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Hemen Ara</span>
                </a>
              </div>
            </form>
          ) : (
            <div className="bg-green-50 rounded-2xl shadow-xl p-12 text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mesajınız Gönderildi!
              </h3>
              <p className="text-gray-600 mb-6">
                En kısa sürede sizinle iletişime geçeceğiz. Acil durumlar için lütfen bizi arayın.
              </p>
              <a
                href="tel:+905335817936"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                <Phone className="h-5 w-5" />
                <span>Hemen Ara</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Acil Durum mu?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Tıkanıklık, taşma veya acil vidanjör ihtiyacınızda hemen arayın!
          </p>
          <a
            href="tel:+905335817936"
            className="inline-flex items-center space-x-3 bg-white text-orange-600 px-12 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-xl shadow-xl"
          >
            <Phone className="h-6 w-6" />
            <span>ACİL ÇAĞRI: +90 533 581 79 36</span>
          </a>
        </div>
      </section>
    </div>
  );
}
