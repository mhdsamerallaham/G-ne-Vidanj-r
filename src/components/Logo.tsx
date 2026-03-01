import Image from "next/image";
import Link from "next/link";

type Props = {
  size?: "sm" | "md" | "lg";
  withText?: boolean;
};

export default function Logo({ size = "md", withText = true }: Props) {
  const dims =
    size === "sm" ? { w: 28, h: 28 } : size === "lg" ? { w: 56, h: 56 } : { w: 40, h: 40 };

  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="overflow-hidden rounded-lg">
        <Image
          src="/logo.png"
          alt="Güneş Vidanjör"
          width={dims.w}
          height={dims.h}
          priority
        />
      </div>
      {withText && (
        <div>
          <h1 className="text-xl font-bold text-gray-900">Güneş Vidanjör</h1>
          <p className="text-xs text-gray-600">7/24 Acil Müdahale</p>
        </div>
      )}
    </Link>
  );
}
