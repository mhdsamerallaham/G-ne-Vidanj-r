'use client';

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { updateSettings } from "@/app/actions/settings";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
          Kaydediliyor...
        </>
      ) : (
        "Kaydet"
      )}
    </button>
  );
}

export default function SettingsForm({ initialData }: { initialData: any }) {
  const [state, formAction] = useActionState(updateSettings, null);

  return (
    <form action={formAction} className="space-y-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      {state?.message && (
        <div className={`p-4 rounded-md ${state.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {state.message}
        </div>
      )}
      
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">SEO Ayarları</h3>
          <p className="mt-1 text-sm text-gray-500">
            Arama motoru doğrulama kodlarını ve takip ID'lerini buradan girebilirsiniz.
          </p>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="googleVerification" className="block text-sm font-medium text-gray-700">
                Google Search Console
              </label>
              <input
                type="text"
                name="googleVerification"
                id="googleVerification"
                defaultValue={initialData?.googleVerification || ''}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="google-site-verification=..."
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="googleAnalyticsId" className="block text-sm font-medium text-gray-700">
                Google Analytics ID
              </label>
              <input
                type="text"
                name="googleAnalyticsId"
                id="googleAnalyticsId"
                defaultValue={initialData?.googleAnalyticsId || ''}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="G-XXXXXXXXXX"
              />
            </div>
            
             <div className="col-span-6 sm:col-span-4">
              <label htmlFor="bingVerification" className="block text-sm font-medium text-gray-700">
                Bing Webmaster Tools
              </label>
              <input
                type="text"
                name="bingVerification"
                id="bingVerification"
                defaultValue={initialData?.bingVerification || ''}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

             <div className="col-span-6 sm:col-span-4">
              <label htmlFor="yandexVerification" className="block text-sm font-medium text-gray-700">
                Yandex Webmaster
              </label>
              <input
                type="text"
                name="yandexVerification"
                id="yandexVerification"
                defaultValue={initialData?.yandexVerification || ''}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="googleMapsApiKey" className="block text-sm font-medium text-gray-700">
                Google Maps API Key
              </label>
              <input
                type="text"
                name="googleMapsApiKey"
                id="googleMapsApiKey"
                defaultValue={initialData?.googleMapsApiKey || ''}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">İletişim Bilgileri</h3>
          <p className="mt-1 text-sm text-gray-500">
            Site genelinde kullanılacak iletişim bilgileri.
          </p>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
                Telefon Numarası
              </label>
              <input
                type="text"
                name="contactPhone"
                id="contactPhone"
                defaultValue={initialData?.contactPhone || '+905335817936'}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                E-posta Adresi
              </label>
              <input
                type="email"
                name="contactEmail"
                id="contactEmail"
                defaultValue={initialData?.contactEmail || 'info@gunesvidanjor.com'}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="contactAddress" className="block text-sm font-medium text-gray-700">
                Adres
              </label>
              <textarea
                name="contactAddress"
                id="contactAddress"
                rows={3}
                defaultValue={initialData?.contactAddress || 'Antalya, Türkiye'}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}