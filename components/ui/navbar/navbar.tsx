import { NAV_ITEMS } from "@/constants/navigation";
import { NavLink } from "./navlink";

interface NavbarProps {
  onClose?: () => void;
}

export function Navbar({ onClose }: NavbarProps) {
  return (
    <>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.href}
          item={item}
          onClose={onClose}
          className="text-soft-grey hover:text-electric-teal transition-colors"
        />
      ))}
    </>
  )
}