import React, { FC } from 'react';
import { useScrollToTop } from 'hooks';
import { Navigation, ScrollToTopButton } from 'components';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <ScrollToTopButton />
      {children}
    </>
  );
};
