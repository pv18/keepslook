import React, { FC, ReactNode } from 'react';
import {Navbar, Footer, Nav} from 'components';
import {Navigation} from 'components/Navigation/Navigation';

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      {/*<Navbar />*/}
      {/*  <Nav/>*/}
        <Navigation/>
      <div className='layout-main'>
        <div className='layout-container'>{children}</div>
        <Footer />
      </div>
    </div>
  );
};
