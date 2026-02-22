import { prisma } from "@/lib/db";
import Link from "next/link";
import DistrictForm from "@/components/admin/DistrictForm";

export default async function EditDistrictPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const district = await prisma.districtPage.findUnique({ where: { id } }).catch(() => null);

  if (!district) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Sayfa Bulunamadı</h2>
        <p className="mt-2 text-gray-600">Aradığınız ilçe sayfası mevcut değil veya silinmiş.</p>
        <div className="mt-6">
          <Link href="/admin/district-pages" className="text-blue-600 hover:text-blue-800 font-medium">
            &larr; Listeye Dön
          </Link>
        </div>
      </div>
    );
  }

  return <DistrictForm districtPage={district} />;
}
