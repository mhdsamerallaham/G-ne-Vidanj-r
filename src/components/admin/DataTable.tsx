import Link from "next/link";
import { Edit, Eye, Trash2 } from "lucide-react";

interface Column<T> {
  header: string;
  accessor: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onDelete?: (id: string) => void;
  editUrl?: (item: T) => string;
  viewUrl?: (item: T) => string;
}

export default function DataTable<T extends { id: string }>({
  data,
  columns,
  editUrl,
  viewUrl,
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <p className="text-gray-500">Kayıt bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${col.className || ""}`}
                >
                  {col.header}
                </th>
              ))}
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">İşlemler</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                {columns.map((col, index) => (
                  <td
                    key={index}
                    className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${col.className || ""}`}
                  >
                    {col.accessor(item)}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    {viewUrl && (
                      <Link
                        href={viewUrl(item)}
                        target="_blank"
                        className="text-gray-400 hover:text-gray-600"
                        title="Görüntüle"
                      >
                        <Eye className="h-5 w-5" />
                      </Link>
                    )}
                    {editUrl && (
                      <Link
                        href={editUrl(item)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Düzenle"
                      >
                        <Edit className="h-5 w-5" />
                      </Link>
                    )}
                    <button className="text-red-600 hover:text-red-900" title="Sil">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
