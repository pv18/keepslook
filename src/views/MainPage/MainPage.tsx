import React from 'react';
import { MobileMenu } from 'components';
import { CardsSection, Footer, MainSection } from 'views';
import s from './MainPage.module.scss';
import { Menu } from 'components/Menu/Menu';

export const MainPage = () => {
  return (
    <div className={s.wrapper}>
      <MobileMenu />
      {/*<Menu/>*/}
      <MainSection />
      <CardsSection />
      <Footer />
    </div>
  );
};
