import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Güneş Tıkanıklık Antalya",
    short_name: "Güneş Tıkanıklık",
    description: "Antalya'da 7/24 profesyonel vTıkanıklık Açma, tıkalı gider açma ve kanalizasyon temizleme hizmetleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ea580c",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
