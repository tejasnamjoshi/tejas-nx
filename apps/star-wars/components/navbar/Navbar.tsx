/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.module.scss';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useState } from 'react';

import NavbarItem from './components/navbar-item/NavbarItem';

/* eslint-disable-next-line */
export interface NavbarProps {}

interface NavbarItem {
  label: string;
  href: string;
}

const navbarItems: NavbarItem[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    label: 'Films',
    href: '/films',
  },
  {
    label: 'Vehicles',
    href: '/vehicles',
  },
  {
    label: 'Starships',
    href: '/starships',
  },
  {
    label: 'Planets',
    href: '/planets',
  },
];

export function Navbar(props: NavbarProps) {
  const router = useRouter();

  return (
    <div className="Navbar d-flex">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-75">
        <ul className="navbar-nav flex-column">
          <li className="nav-item">
            {navbarItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <NavbarItem
                  label={item.label}
                  href={item.href}
                  isSelected={router.pathname === item.href}
                />
              </Link>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
