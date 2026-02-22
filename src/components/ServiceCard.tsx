import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  features: string[];
  emergency?: boolean;
}

export default function ServiceCard({ title, description, href, icon, features, emergency = false }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {emergency && (
        <div className="bg-red-500 text-white text-center py-2 text-sm font-semibold">
          ACİL HİZMET
        </div>
      )}
      
      <div className="p-6 space-y-6">
        {/* Icon and Title */}
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg ${emergency ? 'bg-red-100' : 'bg-orange-100'}`}>
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              <p className="text-gray-700 text-sm">{feature}</p>
            </div>
          ))}
        </div>

        {/* Service Info */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex items-center space-x-2 text-gray-600 text-sm">
            <Clock className="h-4 w-4" />
            <span>30 dakikada müdahale</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Antalya ve tüm ilçeleri</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex space-x-3">
          <Link
            href={href}
            className="flex-1 bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 font-semibold group-hover:shadow-lg"
          >
            <span>Detaylar</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+905335817936"
            className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
