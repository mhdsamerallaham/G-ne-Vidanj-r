'use server';

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getSettings() {
  try {
    const settings = await prisma.siteSettings.findFirst();
    return settings;
  } catch (error) {
    console.error("Error fetching settings:", error);
    return null;
  }
}

export async function updateSettings(prevState: any, formData: FormData) {
  const googleVerification = formData.get("googleVerification") as string;
  const bingVerification = formData.get("bingVerification") as string;
  const yandexVerification = formData.get("yandexVerification") as string;
  const googleAnalyticsId = formData.get("googleAnalyticsId") as string;
  const googleMapsApiKey = formData.get("googleMapsApiKey") as string;
  const contactPhone = formData.get("contactPhone") as string;
  const contactEmail = formData.get("contactEmail") as string;
  const contactAddress = formData.get("contactAddress") as string;

  try {
    const existing = await prisma.siteSettings.findFirst();

    if (existing) {
      await prisma.siteSettings.update({
        where: { id: existing.id },
        data: {
          googleVerification,
          bingVerification,
          yandexVerification,
          googleAnalyticsId,
          googleMapsApiKey,
          contactPhone,
          contactEmail,
          contactAddress,
        },
      });
    } else {
      await prisma.siteSettings.create({
        data: {
          googleVerification,
          bingVerification,
          yandexVerification,
          googleAnalyticsId,
          googleMapsApiKey,
          contactPhone,
          contactEmail,
          contactAddress,
        },
      });
    }

    revalidatePath("/admin/settings");
    revalidatePath("/"); // Update home page meta tags
    return { message: "Ayarlar başarıyla güncellendi", success: true };
  } catch (error) {
    console.error("Settings update error:", error);
    return { message: "Ayarlar güncellenirken bir hata oluştu: " + (error as Error).message, success: false };
  }
}
