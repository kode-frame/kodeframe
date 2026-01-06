import logo from "@/public/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

export function Logo({ 
  href = "/",
  className = "" 
}: LogoProps) {
  return (
    <Link href={href} className={`inline-block ${className}`}>
      <Image
        src={logo}
        alt="Kodeframe Logo"
        className="w-full h-8 object-contain"
        priority
      />
    </Link>
  );
}
