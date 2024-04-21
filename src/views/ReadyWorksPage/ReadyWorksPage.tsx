import React from 'react';
import { EmptyData, Header, MobileMenu } from 'components';
import s from './ReadyWorksPage.module.scss';

export const ReadyWorksPage = () => {
  return (
    <section className={s.wrapper}>
      {/*<Header />*/}
      <MobileMenu />
      <EmptyData>Готовых работ на данный момент нет!</EmptyData>
    </section>
  );
};
