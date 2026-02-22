'use server';

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { slugify } from "@/lib/utils";
import { z } from "zod";
import fs from "fs";
import path from "path";

const BlogSchema = z.object({
  title: z.string().min(3, "Başlık en az 3 karakter olmalıdır"),
  excerpt: z.string().min(10, "Özet en az 10 karakter olmalıdır"),
  content: z.string().min(20, "İçerik en az 20 karakter olmalıdır"),
  image: z.string().optional().nullable(),
  published: z.boolean().optional(),
});

export type BlogState = {
  errors?: {
    title?: string[];
    excerpt?: string[];
    content?: string[];
    image?: string[];
    published?: string[];
    form?: string[];
  };
  message?: string;
  success?: boolean;
};

async function handleImageUpload(file: FormDataEntryValue | null, slug: string): Promise<string | null> {
  if (!file || typeof file === "string") return null;

  const imageFile = file as File;
  if (!imageFile.size) return null;

  const bytes = await imageFile.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public", "uploads", "blog");
  await fs.promises.mkdir(uploadDir, { recursive: true });

  const originalName = imageFile.name || "image";
  const ext = originalName.includes(".") ? originalName.split(".").pop() || "jpg" : "jpg";
  const fileName = `${slug}-${Date.now()}.${ext}`;
  const filePath = path.join(uploadDir, fileName);

  await fs.promises.writeFile(filePath, buffer);

  return `/uploads/blog/${fileName}`;
}

export async function createBlogPost(prevState: BlogState, formData: FormData): Promise<BlogState> {
  const titleValue = formData.get("title");
  const titleString = typeof titleValue === "string" ? titleValue : "";
  const slug = slugify(titleString);
  const uploadedImagePath = await handleImageUpload(formData.get("image"), slug);

  const validatedFields = BlogSchema.safeParse({
    title: titleValue,
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    image: uploadedImagePath || null,
    published: formData.get("published") === "on",
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Lütfen form alanlarını kontrol ediniz.",
      success: false,
    };
  }

  const { title, excerpt, content, image, published } = validatedFields.data;

  try {
    const existing = await prisma.blogPost.findUnique({
      where: { slug },
    });

    if (existing) {
      return {
        errors: {
          form: ["Bu başlıkla bir blog yazısı zaten mevcut. Lütfen farklı bir başlık seçiniz."],
        },
        message: "Kayıt başarısız.",
        success: false,
      };
    }

    await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        image,
        published: published || false,
      },
    });
  } catch (error) {
    console.error("Blog create error:", error);
    return {
      message: "Veritabanı hatası oluştu.",
      success: false,
    };
  }

  // Revalidate the cache for the blog page and redirect the user.
  revalidatePath("/admin/blog-posts");
  revalidatePath("/blog");
  redirect("/admin/blog-posts");
}

export async function updateBlogPost(
  id: string,
  prevState: BlogState,
  formData: FormData
): Promise<BlogState> {
  const titleValue = formData.get("title");
  const titleString = typeof titleValue === "string" ? titleValue : "";
  const slug = slugify(titleString);

  const existingPost = await prisma.blogPost.findUnique({
    where: { id },
  });

  if (!existingPost) {
    return {
      message: "Blog yazısı bulunamadı.",
      success: false,
    };
  }

  const uploadedImagePath = await handleImageUpload(formData.get("image"), slug);
  const finalImage = uploadedImagePath || existingPost.image || null;

  const validatedFields = BlogSchema.safeParse({
    title: titleValue,
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    image: finalImage,
    published: formData.get("published") === "on",
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Lütfen form alanlarını kontrol ediniz.",
      success: false,
    };
  }

  const { title, excerpt, content, image, published } = validatedFields.data;

  try {
    const existing = await prisma.blogPost.findFirst({
      where: {
        slug,
        NOT: {
          id,
        },
      },
    });

    if (existing) {
      return {
        errors: {
          form: ["Bu başlıkla başka bir blog yazısı zaten mevcut."],
        },
        message: "Güncelleme başarısız.",
        success: false,
      };
    }

    await prisma.blogPost.update({
      where: { id },
      data: {
        title,
        slug,
        excerpt,
        content,
        image,
        published: published || false,
      },
    });
  } catch (error) {
    console.error("Blog update error:", error);
    return {
      message: "Veritabanı hatası oluştu.",
      success: false,
    };
  }

  // Revalidate the cache for the blog page and redirect the user.
  revalidatePath("/admin/blog-posts");
  revalidatePath("/blog");
  redirect("/admin/blog-posts");
}

export async function deleteBlogPost(id: string) {
  try {
    await prisma.blogPost.delete({
      where: { id },
    });
    revalidatePath("/admin/blog-posts");
    revalidatePath("/blog");
    return { success: true };
  } catch (error) {
    console.error("Blog delete error:", error);
    return { success: false, error: "Silme işlemi başarısız oldu." };
  }
}
