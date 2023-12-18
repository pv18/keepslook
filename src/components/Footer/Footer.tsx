import React from 'react';
import { Social } from 'components/Social';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <div className='phone'>
            <span>Телефон :</span>
            <a href='tel:+79265905390'>+7 (926) 590 53 90</a>
          </div>
          <Social />
        </div>
      </div>
    </footer>
  );
};
