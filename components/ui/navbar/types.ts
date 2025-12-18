import { NavItem } from "@/types/navigation";

export type NavLinkProps = {
  item: NavItem;
  className?: string;
  activeClassName?: string;
  onClose?: () => void;
}
