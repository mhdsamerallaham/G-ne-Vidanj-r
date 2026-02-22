export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  canonical,
  noindex = false,
  image,
}: SEOProps) {
  const siteName = "Güneş Vidanjör";
  const baseUrl = "https://gunesvidanjor.com";
  const defaultTitle = "Antalya Vidanjör Hizmeti - 7/24 Acil Müdahale | Güneş Vidanjör";
  const defaultDescription = "Antalya'da vidanjör, tıkalı gider açma, foseptik boşaltma, kanalizasyon temizleme hizmetleri. 7/24 acil müdahale, uygun fiyat, garantili çözüm.";

  const finalTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const finalImage = image || `${baseUrl}/vercel.svg`;

  return {
    title: finalTitle,
    description: finalDescription,
    alternates: {
      canonical: finalCanonical,
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: finalCanonical,
      siteName,
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [finalImage],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
      },
    },
  };
}

export function generateServiceSchema(serviceName: string, description: string, phone: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Güneş Vidanjör",
      "telephone": phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      }
    },
    "areaServed": "Antalya",
    "availableChannel": {
      "@type": "ServiceChannel",
      "telephone": phone
    }
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Güneş Vidanjör",
    "description": "Antalya vidanjör, kanal açma, logar temizleme hizmeti",
    "telephone": "+90 533 581 79 36",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antalya",
      "addressCountry": "TR"
    },
    "areaServed": "Antalya",
    "openingHours": "Mo-Su 00:00-23:59",
    "serviceType": ["Vidanjör Hizmeti", "Kanal Açma", "Logar Temizleme", "Foseptik Boşaltma"]
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
