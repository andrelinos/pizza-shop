import { Link, LinkProps, NavLinkProps, useLocation } from 'react-router-dom'

export type NavLinkItemProps = NavLinkProps & LinkProps

export function NavLink(props: NavLinkItemProps) {
  const { pathname } = useLocation()
  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
