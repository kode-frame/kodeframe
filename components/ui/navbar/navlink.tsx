import { isActiveRoute } from "@/lib/navigations/nav";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "./types";

export function NavLink({
  item,
  className,
  activeClassName = "bg-teal-500 font-semibold",
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = isActiveRoute(pathname, item.href, item.exact);

  return (
    <Link
      href={item.href}
      className={cn(className, isActive && activeClassName)}
    >
      {item.label}
    </Link>
  );
}