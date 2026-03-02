import Image from "next/image";
import Link from "next/link";

type Props = {
  size?: "sm" | "md" | "lg";
  withText?: boolean;
};

export default function Logo({ size = "md", withText = true }: Props) {
  const dims =
    size === "sm" ? { w: 48, h: 48 } : size === "lg" ? { w: 80, h: 80 } : { w: 64, h: 64 };

  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="overflow-hidden rounded-lg">
        <Image
          src="/logo.png"
          alt="Güneş Tıkanıklık"
          width={dims.w}
          height={dims.h}
          priority
        />
      </div>
      {withText && (
        <div>
          <h1 className="text-xl font-bold text-gray-900">Güneş Tıkanıklık</h1>
          <p className="text-xs text-gray-600">7/24 Acil Müdahale</p>
        </div>
      )}
    </Link>
  );
}
