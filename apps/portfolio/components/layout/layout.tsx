import './layout.module.scss';

import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className="flex flex-col items-center w-100 max-w-4xl mx-auto p-4">
      {children}
    </div>
  );
}

export default Layout;
