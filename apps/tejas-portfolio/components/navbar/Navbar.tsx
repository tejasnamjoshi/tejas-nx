/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.module.scss';

import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.scss';

import ThemeChanger from '../theme-changer/ThemeChanger';

export function Navbar() {
  return (
    <nav
      className={`sticky flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60 top-0 ${styles.Navbar}`}
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <ThemeChanger />
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div
          className="flex lg:flex-grow items-center"
          id="example-navbar-info"
        >
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <Link href="/home">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75">
                  Settings
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
