import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavLinkProps } from "./types";

export function NavLink({ item, className, onClose }: NavLinkProps) {
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className={cn(className)}
    >
      {item.label}
    </Link>
  );
}