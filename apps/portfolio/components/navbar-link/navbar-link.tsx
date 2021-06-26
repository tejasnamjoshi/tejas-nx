import './navbar-link.module.scss';

export interface NavbarLinkProps {
  title: string;
  href: string;
}

export function NavbarLink(props: NavbarLinkProps) {
  return (
    <a
      className=" focus:underline hover:underline text-indigo-600 dark:text-white"
      href={props.href}
    >
      {props.title}
    </a>
  );
}

export default NavbarLink;
