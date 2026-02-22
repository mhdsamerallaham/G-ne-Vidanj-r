import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateMetadata as baseGenerateMetadata } from "@/lib/seo";
import { getSettings } from "@/app/actions/settings";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  
  return {
    metadataBase: new URL("https://gunesvidanjor.com"),
    ...baseGenerateMetadata({
      title: "Antalya Vidanjör Hizmeti - 7/24 Acil Müdahale",
      description:
        "Antalya'da vidanjör, tıkalı gider açma, foseptik boşaltma, kanalizasyon temizleme hizmetleri. 7/24 acil müdahale, uygun fiyat, garantili çözüm.",
    }),
    verification: {
      google: settings?.googleVerification || undefined,
      other: {
        ...(settings?.bingVerification ? { "msvalidate.01": settings.bingVerification } : {}),
        ...(settings?.yandexVerification ? { "yandex-verification": settings.yandexVerification } : {}),
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleAnalytics gaId={settings?.googleAnalyticsId || ""} />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
