import { prisma } from "@/lib/db";
import Link from "next/link";
import BlogForm from "@/components/admin/BlogForm";

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } }).catch(() => null);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Yazı Bulunamadı</h2>
        <p className="mt-2 text-gray-600">Aradığınız blog yazısı mevcut değil veya silinmiş.</p>
        <div className="mt-6">
          <Link href="/admin/blog-posts" className="text-blue-600 hover:text-blue-800 font-medium">
            &larr; Listeye Dön
          </Link>
        </div>
      </div>
    );
  }

  return <BlogForm post={post} />;
}
