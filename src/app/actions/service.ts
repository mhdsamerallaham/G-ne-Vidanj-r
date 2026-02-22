'use server';

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { slugify } from "@/lib/utils";
import { z } from "zod";

const ServiceSchema = z.object({
  title: z.string().min(3, "Başlık en az 3 karakter olmalıdır"),
  description: z.string().min(10, "Açıklama en az 10 karakter olmalıdır"),
  content: z.string().optional(),
  image: z.string().optional().nullable(),
  published: z.boolean().optional(),
});

export type ServiceState = {
  errors?: {
    title?: string[];
    description?: string[];
    content?: string[];
    image?: string[];
    form?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function createService(prevState: ServiceState, formData: FormData): Promise<ServiceState> {
  const validatedFields = ServiceSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    content: formData.get("content"),
    image: formData.get("image") || null,
    published: formData.get("published") === "on",
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Lütfen form alanlarını kontrol ediniz.",
      success: false,
    };
  }

  const { title, description, content, image, published } = validatedFields.data;
  const slug = slugify(title);

  try {
    // Check if slug exists
    const existing = await prisma.servicePage.findUnique({
      where: { slug },
    });

    if (existing) {
      return {
        errors: { form: ["Bu başlıkla bir hizmet sayfası zaten mevcut."] },
        message: "Kayıt başarısız.",
        success: false,
      };
    }

    await prisma.servicePage.create({
      data: {
        title,
        slug,
        description,
        content: content || "",
        image,
        published: published || false,
      },
    });
  } catch (error) {
    console.error("Service create error:", error);
    return {
      message: "Veritabanı hatası oluştu.",
      success: false,
    };
  }

  revalidatePath("/admin/service-pages");
  redirect("/admin/service-pages");
}

export async function updateService(
  id: string,
  prevState: ServiceState,
  formData: FormData
): Promise<ServiceState> {
  const validatedFields = ServiceSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    content: formData.get("content"),
    image: formData.get("image") || null,
    published: formData.get("published") === "on",
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Lütfen form alanlarını kontrol ediniz.",
      success: false,
    };
  }

  const { title, description, content, image, published } = validatedFields.data;
  // Note: We generally don't update slug on edit to preserve SEO URLs, or make it optional.
  // Here we keep the slug as is.

  try {
    await prisma.servicePage.update({
      where: { id },
      data: {
        title,
        description,
        content: content || "",
        image,
        published: published || false,
      },
    });
  } catch (error) {
    console.error("Service update error:", error);
    return {
      message: "Güncelleme sırasında bir hata oluştu.",
      success: false,
    };
  }

  revalidatePath("/admin/service-pages");
  revalidatePath(`/admin/service-pages/${id}`);
  
  return {
    message: "Hizmet sayfası başarıyla güncellendi.",
    success: true,
  };
}
