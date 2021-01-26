import React from 'react';

import styles from './NavbarItem.module.scss';

export interface NavbarItemProps {
  label: string;
  href: string;
  isSelected: boolean;
}

const NavbarItem = React.forwardRef((props: NavbarItemProps, _ref) => {
  return (
    <a
      className={`${styles.Item} nav-link ${props.isSelected ? 'active' : ''}`}
      aria-current="page"
      href={props.href}
    >
      {props.label}
    </a>
  );
});

export default NavbarItem;
