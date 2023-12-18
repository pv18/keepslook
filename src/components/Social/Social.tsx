import React from 'react';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import './Social.scss';

const sizeIcon = 40;
const colorIcon = '#fff';
const phone = process.env.REACT_APP_PHONE;

export const Social = () => {
  return (
    <ul className='social'>
      <li className='social__item'>
        <a href={`https://api.whatsapp.com/send?phone=${phone}`}>
          <FaWhatsapp color={colorIcon} size={sizeIcon} />
        </a>
      </li>
      <li className='social__item'>
        <a href={`tg://resolve?phone=${phone}`}>
          <FaTelegram color={colorIcon} size={sizeIcon} />
        </a>
      </li>
      <li className='social__item'>
        <a href='mailto:Genya227@mail.ru'>
          <CiMail color={colorIcon} size={sizeIcon} />
        </a>
      </li>
    </ul>
  );
};
