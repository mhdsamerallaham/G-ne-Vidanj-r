import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import * as dotenv from 'dotenv'

dotenv.config()

const connectionString = process.env.DATABASE_URL

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  // Clear existing data
  await prisma.lead.deleteMany()
  await prisma.blogPost.deleteMany()
  await prisma.servicePage.deleteMany()
  await prisma.districtPage.deleteMany()

  // Create sample leads
  await prisma.lead.createMany({
    data: [
      {
        name: 'Ahmet Yılmaz',
        phone: '5551234567',
        service: 'Vidanjör Hizmeti',
        district: 'Kadıköy',
        source: 'website',
      },
      {
        name: 'Mehmet Demir',
        phone: '5329876543',
        service: 'Kanal Açma',
        district: 'Üsküdar',
        source: 'google',
      },
      {
        name: 'Ayşe Kaya',
        phone: '5051112233',
        service: 'Logar Temizleme',
        district: 'Maltepe',
        source: 'referans',
      },
    ],
  })

  // Create sample blog posts
  await prisma.blogPost.createMany({
    data: [
      {
        title: 'Vidanjör Nedir ve Ne İşe Yarar?',
        slug: 'vidanjor-nedir-ne-ise-yarar',
        content: 'Vidanjör, atık su ve kanalizasyon sistemlerinin temizlenmesinde kullanılan özel donanımlı araçtır...',
        excerpt: 'Vidanjör hizmetleri hakkında detaylı bilgi ve kullanım alanları.',
        published: true,
        image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Tıkanıklık Açma Yöntemleri',
        slug: 'tikaniklik-acma-yontemleri',
        content: 'Ev ve iş yerlerinde karşılaşılan tıkanıklık sorunları için profesyonel çözümler...',
        excerpt: 'Lavabo, tuvalet ve gider tıkanıklıklarını açmak için kullanılan modern yöntemler.',
        published: true,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Logar Temizliği Neden Önemlidir?',
        slug: 'logar-temizligi-neden-onemlidir',
        content: 'Düzenli logar temizliği, kötü kokuların önlenmesi ve tıkanıklıkların engellenmesi için kritiktir...',
        excerpt: 'Periyodik logar bakımının önemi ve sağladığı avantajlar.',
        published: false,
        image: 'https://images.unsplash.com/photo-1621905251189-08b9bfd5f578?auto=format&fit=crop&q=80&w=800',
      },
    ],
  })

  // Create sample service pages
  await prisma.servicePage.createMany({
    data: [
      {
        title: 'Vidanjör Hizmeti',
        slug: 'vidanjor-hizmeti',
        content: 'İstanbul genelinde 7/24 profesyonel vidanjör hizmeti sunuyoruz...',
        description: 'Güvenilir ve hızlı vidanjör çözümleri.',
        published: true,
      },
      {
        title: 'Kanal Açma',
        slug: 'kanal-acma',
        content: 'Robotik cihazlarla kırmadan dökmeden kanal açma hizmeti...',
        description: 'Son teknoloji kanal açma ekipmanları.',
        published: true,
      },
    ],
  })

  // Create sample district pages
  await prisma.districtPage.createMany({
    data: [
      {
        title: 'Kadıköy Vidanjör',
        district: 'kadikoy',
        content: 'Kadıköy bölgesinde acil vidanjör ihtiyaçlarınız için yanınızdayız...',
        description: 'Kadıköy ilçesi için özel vidanjör hizmetleri.',
        published: true,
      },
      {
        title: 'Üsküdar Vidanjör',
        district: 'uskudar',
        content: 'Üsküdar ve çevresinde profesyonel kanal temizleme hizmetleri...',
        description: 'Üsküdar bölgesi vidanjör ve kanal açma.',
        published: true,
      },
    ],
  })

  // Create default site settings
  await prisma.siteSettings.deleteMany()
  await prisma.siteSettings.create({
    data: {
      googleVerification: '',
      bingVerification: '',
      yandexVerification: '',
      googleAnalyticsId: '',
      googleMapsApiKey: '',
      contactPhone: '+905335817936',
      contactEmail: 'info@gunesvidanjor.com',
      contactAddress: 'Antalya, Türkiye',
    },
  })

  console.log('Seed data inserted successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
