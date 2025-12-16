export function isActiveRoute(
  pathname: string,
  href: string,
  exact?: boolean
) {
  return exact ? pathname === href : pathname.startsWith(href);
}