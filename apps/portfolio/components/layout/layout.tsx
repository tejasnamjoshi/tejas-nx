import './layout.module.scss';

import { ReactNode } from 'react';

import Navbar from '../navbar/navbar';

export interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className="flex flex-col items-center w-100 max-w-4xl mx-auto p-4">
      <Navbar />
      <main className="flex flex-col h-screen w-full px-24">{children}</main>
      <footer className="d-flex h-24">Footer</footer>
    </div>
  );
}

export default Layout;
