import './navbar.module.scss';

import { useEffect, useState } from 'react';

import NavbarLink from '../navbar-link/navbar-link';

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Me',
    href: '/aboutme',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
];

export function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeChange = () => {
    setDarkMode((value) => {
      if (!value) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');

      return !value;
    });
  };

  return (
    <nav className="flex flex-wrap sticky top-0 justify-between items-center p-10 mx-auto my-4 w-full backdrop-filter backdrop-blur-md">
      <button
        className="my-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 cursor-pointer py-2 px-3 rounded dark:bg-gray-700 dark:hover:bg-gray-800 dark:active:bg-gray-900 text-black dark:text-white"
        onClick={handleModeChange}
      >
        {darkMode ? <i className="far fa-sun" /> : <i className="fas fa-sun" />}
      </button>
      <ul className="flex my-2 space-x-6">
        {links.map((link) => (
          <NavbarLink {...link} key={link.href} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
