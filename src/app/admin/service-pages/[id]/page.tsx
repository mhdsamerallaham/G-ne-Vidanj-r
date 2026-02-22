import { prisma } from "@/lib/db";
import Link from "next/link";
import ServiceForm from "@/components/admin/ServiceForm";

export default async function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = await prisma.servicePage.findUnique({ where: { id } }).catch(() => null);

  if (!service) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Sayfa Bulunamadı</h2>
        <p className="mt-2 text-gray-600">Aradığınız hizmet sayfası mevcut değil veya silinmiş.</p>
        <div className="mt-6">
          <Link href="/admin/service-pages" className="text-blue-600 hover:text-blue-800 font-medium">
            &larr; Listeye Dön
          </Link>
        </div>
      </div>
    );
  }

  return <ServiceForm service={service} />;
}
