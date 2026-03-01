'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h3 className="font-semibold text-gray-900 pr-4">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-orange-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-orange-600" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const faqs = [
    {
      question: "Vidanjör hizmeti ne kadar sürer?",
      answer: "Antalya merkezinde 30 dakika içinde müdahale ediyoruz. İlçelere göre bu süre 30-60 dakika arasında değişebilir. Acil durumlar için öncelikli hizmet veriyoruz."
    },
    {
      question: "Fiyatlar nasıl belirleniyor?",
      answer: "Fiyatlar hizmet türüne, mesafeye ve işin zorluk derecesine göre belirlenir. Bize telefonla ulaşarak ücretsiz teklif alabilirsiniz. Şeffaf fiyat politikamız vardır, sürpriz ücretler çıkmaz."
    },
    {
      question: "7/24 hizmet veriyor musunuz?",
      answer: "Evet, 7 gün 24 saat hizmet vermekteyiz. Gece, hafta sonu veya tatil günü fark etmeksizin acil durumlarınız için her zaman hazırız."
    },
    {
      question: "Hangi ilçelere hizmet veriyorsunuz?",
      answer: "Antalya'nın tüm ilçelerine hizmet veriyoruz: Kepez, Muratpaşa, Konyaaltı, Döşemealtı, Aksu, Kemer, Serik ve diğer tüm ilçeler."
    },
    {
      question: "Kameralı tespit hizmeti var mı?",
      answer: "Evet, modern kameralı sistemlerimizle tıkanıklığın yerini ve nedenini tam olarak tespit ediyoruz. Bu sayede daha hızlı ve isabetli çözüm sunuyoruz."
    },
    {
      question: "Kalite güvencesi veriyor musunuz?",
      answer: "Yaptığımız tüm işlerde kalite standartlarını koruyoruz. Aynı sorunun tekrar etmesi durumunda ücretsiz müdahale ediyoruz."
    },
    // removed: foseptik boşaltma FAQ
    {
      question: "Ödeme seçenekleri nelerdir?",
      answer: "Nakit, kredi kartı ve havale/EFT ile ödeme kabul ediyoruz. Büyük işler için taksit imkanı da sağlıyoruz."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Sıkça Sorulan <span className="text-orange-600">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600">
            Vidanjör ve kanal temizleme hizmetleri hakkında merak edilenler
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 text-center bg-orange-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sorunuz mu var?
          </h3>
          <p className="text-gray-600 mb-6">
            Hizmetlerimiz hakkında daha fazla bilgi almak için uzman ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a
              href="tel:+905335817936"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center space-x-2"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Hemen Ara</span>
            </a>
            <a
              href="/iletisim"
              className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
            >
              Online Sor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
