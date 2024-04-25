import React from 'react';
import { CardsSection, Footer, MainSection } from 'views';
import { Layout } from 'components';
import s from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <Layout>
      <div className={s.wrapper}>
        <MainSection />
        <CardsSection />
        <Footer />
      </div>
    </Layout>
  );
};
