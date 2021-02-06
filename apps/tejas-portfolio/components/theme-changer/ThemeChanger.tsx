import './ThemeChanger.module.scss';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import styles from './ThemeChanger.module.scss';

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <div onClick={toggleTheme} className={styles.icon}>
      {theme === 'dark' ? (
        <i className="fa far fa-2x fa-moon-o" />
      ) : (
        <i className="fa fas fa-2x fa-moon-o" />
      )}
    </div>
  );
};

export default ThemeChanger;
