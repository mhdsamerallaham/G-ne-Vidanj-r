"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  MapPin, 
  FileText, 
  Settings, 
  LogOut, 
  Globe,
  PenTool
} from "lucide-react";

const navigation = [
  { name: "Genel Bakış", href: "/admin", icon: LayoutDashboard },
  { name: "Hizmet Sayfaları", href: "/admin/service-pages", icon: PenTool },
  { name: "İlçe Sayfaları", href: "/admin/district-pages", icon: MapPin },
  { name: "Blog Yazıları", href: "/admin/blog-posts", icon: FileText },
  { name: "Ayarlar", href: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-slate-900 text-white min-h-screen">
      <div className="flex items-center justify-center h-16 border-b border-slate-800">
        <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
          <Globe className="h-6 w-6 text-orange-500" />
          <span>Güneş Vidanjör</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-orange-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center space-x-3 px-4 py-3 w-full rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Çıkış Yap</span>
        </button>
      </div>
    </div>
  );
}
