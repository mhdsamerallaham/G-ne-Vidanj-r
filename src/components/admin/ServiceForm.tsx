'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createService, updateService, ServiceState } from '@/app/actions/service';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Submit button component to handle pending state
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Save className="h-4 w-4 mr-2" />
      {pending ? 'Kaydediliyor...' : 'Kaydet'}
    </button>
  );
}

interface ServiceFormProps {
  service?: {
    id: string;
    title: string;
    description: string;
    content: string;
    image: string | null;
    published: boolean;
    slug: string;
  } | null;
}

export default function ServiceForm({ service }: ServiceFormProps) {
  const initialState: ServiceState = { message: '', errors: {} };
  
  // Choose action based on whether we're editing or creating
  const action = service 
    ? updateService.bind(null, service.id) 
    : createService;

  const [state, formAction] = useActionState(action, initialState);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link 
            href="/admin/service-pages" 
            className="p-2 rounded-full hover:bg-gray-200 transition-colors text-gray-600"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {service ? 'Hizmet Düzenle' : 'Yeni Hizmet Ekle'}
            </h1>
            {service && (
              <p className="text-sm text-gray-500">/hizmetler/{service.slug}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        {state.message && (
          <div className={`p-4 mb-6 rounded-md ${state.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {state.message}
          </div>
        )}

        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Başlık
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  defaultValue={service?.title || ''}
                  className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  placeholder="Örn: Tıkanıklık Açma Kiralama"
                />
              </div>
              {state.errors?.title && (
                <p className="mt-1 text-sm text-red-600">{state.errors.title[0]}</p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                Sayfanın ana başlığı (H1 ve Meta Title).
              </p>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Açıklama (Meta Description)
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  defaultValue={service?.description || ''}
                  className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  placeholder="Sayfa içeriğini özetleyen kısa bir açıklama..."
                />
              </div>
              {state.errors?.description && (
                <p className="mt-1 text-sm text-red-600">{state.errors.description[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                İçerik (HTML)
              </label>
              <div className="mt-1">
                <textarea
                  id="content"
                  name="content"
                  rows={10}
                  defaultValue={service?.content || ''}
                  className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border font-mono"
                  placeholder="<p>Sayfa içeriği...</p>"
                />
              </div>
              {state.errors?.content && (
                <p className="mt-1 text-sm text-red-600">{state.errors.content[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Görsel URL
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="image"
                  id="image"
                  defaultValue={service?.image || ''}
                  className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              {state.errors?.image && (
                <p className="mt-1 text-sm text-red-600">{state.errors.image[0]}</p>
              )}
            </div>

            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="published"
                  name="published"
                  type="checkbox"
                  defaultChecked={service?.published ?? true}
                  className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="published" className="font-medium text-gray-700">
                  Yayında
                </label>
                <p className="text-gray-500">Bu sayfayı web sitesinde görünür yap.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-5">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
