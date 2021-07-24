import './navbar-link.module.scss';

export interface NavbarLinkProps {
  title: string;
  href: string;
}

export function NavbarLink(props: NavbarLinkProps) {
  return (
    <a
      className="text-lg underline text-gray-500 hover:text-black dark:text-white dark:hover:text-gray-400"
      href={props.href}
    >
      {props.title}
    </a>
  );
}

export default NavbarLink;
