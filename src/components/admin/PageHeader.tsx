import Link from "next/link";
import { Plus } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actionUrl?: string;
  actionLabel?: string;
}

export default function PageHeader({
  title,
  description,
  actionUrl,
  actionLabel,
}: PageHeaderProps) {
  return (
    <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
      </div>
      {actionUrl && actionLabel && (
        <div className="mt-4 sm:mt-0">
          <Link
            href={actionUrl}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            {actionLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
