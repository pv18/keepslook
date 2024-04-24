import React from 'react';
import { Navigation, ScrollToTopButton } from 'components';
import { CardsSection, Footer, MainSection } from 'views';
import { useScrollToTop } from 'hooks';
import s from './MainPage.module.scss';

export const MainPage = () => {
  useScrollToTop();
  return (
    <div className={s.wrapper}>
      <Navigation />
      <ScrollToTopButton />
      <MainSection />
      <CardsSection />
      <Footer />
    </div>
  );
};
