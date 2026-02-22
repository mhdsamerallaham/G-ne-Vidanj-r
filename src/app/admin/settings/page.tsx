import PageHeader from "@/components/admin/PageHeader";
import SettingsForm from "@/components/admin/SettingsForm";
import { getSettings } from "@/app/actions/settings";

export default async function SettingsPage() {
  const settings = await getSettings();

  return (
    <div>
      <PageHeader
        title="Site Ayarları"
        description="SEO, iletişim ve diğer site yapılandırmalarını buradan yönetebilirsiniz."
      />
      <div className="mt-6">
        <SettingsForm initialData={settings} />
      </div>
    </div>
  );
}