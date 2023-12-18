import React, { FC, ReactNode } from 'react';
import { Navbar, Footer } from 'components';

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      <div className='layout-main'>
        <div className='layout-container'>{children}</div>
        <Footer />
      </div>
    </div>
  );
};
