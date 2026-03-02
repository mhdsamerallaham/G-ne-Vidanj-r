import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demre Vidanjör - 7/24 Tıkalı Gider Açma | Güneş Tıkanıklık",
  description: "Demre'de vidanjör, tıkalı gider açma, kanalizasyon temizleme ve logar boşaltma hizmetleri. 7/24 acil müdahale, uygun fiyat.",
};

export default function DemrePage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Demre Vidanjör Hizmeti
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Demre Hizmetlerimiz</h2>
            <ul className="space-y-2">
              <li>✓ Vidanjör hizmetleri</li>
              <li>✓ Tıkalı gider açma</li>
              <li>✓ Kanalizasyon temizleme</li>
              <li>✓ Logar temizleme</li>
              <li>✓ Foseptik boşaltma</li>
              <li>✓ Yağ tutucu temizleme</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <ul className="space-y-2">
              <li>✓ 7/24 Acil hizmet</li>
              <li>✓ Uygun fiyat garantisi</li>
              <li>✓ Profesyonel ekipman</li>
              <li>✓ Deneyimli personel</li>
              <li>✓ Hızlı müdahale</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">7/24 Acil Vidanjör Hizmeti</h2>
          <p className="text-lg mb-6">
            Demre'nin tüm mahallelerinde acil vidanjör hizmeti vermekteyiz.
            Uygun fiyat ve garantili çözüm için hemen arayın!
          </p>
          <a 
            href="tel:05551234567" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Hemen Ara: 0555 123 45 67
          </a>
        </div>
      </div>
    </div>
  );
}
