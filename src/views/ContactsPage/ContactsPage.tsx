import React from 'react';
import { Container, Header, Social } from 'components';
import s from './ContactsPage.module.scss';

export const ContactsPage = () => {
  return (
    <section className={s.wrapper}>
      <Header />
      <Container>
        <div className={s.contacts}>
          <div className={s.phone}>
            <span>Телефон :</span>
            <a href='tel:+79265905390'>+7 (926) 590 53 90</a>
          </div>
          <Social />
        </div>
      </Container>
    </section>
  );
};
