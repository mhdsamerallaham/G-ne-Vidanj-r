'use server';

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const DistrictSchema = z.object({
  district: z.string().min(2, "İlçe adı en az 2 karakter olmalıdır"),
  title: z.string().min(3, "Başlık en az 3 karakter olmalıdır"),
  description: z.string().min(10, "Açıklama en az 10 karakter olmalıdır"),
  content: z.string().optional(),
  image: z.string().optional().nullable(),
  published: z.boolean().optional(),
});

export type DistrictState = {
  errors?: {
    district?: string[];
    title?: string[];
    description?: string[];
    content?: string[];
    image?: string[];
    published?: string[];
    form?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function createDistrict(prevState: DistrictState, formData: FormData): Promise<DistrictState> {
  // Validate form fields
  const validatedFields = DistrictSchema.safeParse({
    district: formData.get("district"),
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

  const { district, title, description, content, image, published } = validatedFields.data;

  try {
    const existing = await prisma.districtPage.findUnique({
      where: { district },
    });

    if (existing) {
      return {
        errors: { form: ["Bu ilçe için zaten bir sayfa mevcut."] },
        message: "Kayıt başarısız.",
        success: false,
      };
    }

    await prisma.districtPage.create({
      data: {
        district,
        title,
        description,
        content: content || "",
        image,
        published: published || false,
      },
    });
  } catch (error) {
    console.error("District create error:", error);
    return {
      message: "Veritabanı hatası oluştu.",
      success: false,
    };
  }

  revalidatePath("/admin/district-pages");
  redirect("/admin/district-pages");
}

export async function updateDistrict(
  id: string,
  prevState: DistrictState,
  formData: FormData
): Promise<DistrictState> {
  const validatedFields = DistrictSchema.safeParse({
    district: formData.get("district"),
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

  const { district, title, description, content, image, published } = validatedFields.data;

  try {
    // Check if district name is taken by another record
    const existing = await prisma.districtPage.findFirst({
      where: {
        district,
        NOT: { id },
      },
    });

    if (existing) {
      return {
        errors: { form: ["Bu ilçe adı başka bir kayıt tarafından kullanılıyor."] },
        message: "Güncelleme başarısız.",
        success: false,
      };
    }

    await prisma.districtPage.update({
      where: { id },
      data: {
        district,
        title,
        description,
        content: content || "",
        image,
        published: published || false,
      },
    });
  } catch (error) {
    console.error("District update error:", error);
    return {
      message: "Veritabanı hatası oluştu.",
      success: false,
    };
  }

  revalidatePath("/admin/district-pages");
  redirect("/admin/district-pages");
}

export async function deleteDistrict(id: string) {
  try {
    await prisma.districtPage.delete({
      where: { id },
    });
    revalidatePath("/admin/district-pages");
    return { success: true };
  } catch (error) {
    console.error("District delete error:", error);
    return { success: false, error: "Silme işlemi başarısız oldu." };
  }
}
