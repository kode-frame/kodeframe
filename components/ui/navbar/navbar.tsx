import { NAV_ITEMS } from "@/constants/navigation";
import { NavLink } from "./navlink";

export function Navbar() {
  return (
    <>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.href}
          item={item}
          className="text-soft-grey hover:text-electric-teal transition-colors"
        />
      ))}
    </>
  )
}