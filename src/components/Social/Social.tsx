import React from 'react';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { Tooltip } from 'antd';
import s from './Social.module.scss';

const sizeIcon = 40;
const colorIcon = 'rgb(185, 180, 160)';
const phone = process.env.REACT_APP_PHONE;

export const Social = () => {
  return (
    <ul className={s.social}>
      <li className={s.social__item}>
        <Tooltip title={'WhatsApp'}>
          <a href={`https://api.whatsapp.com/send?phone=${phone}`}>
            <FaWhatsapp color={colorIcon} size={sizeIcon} />
          </a>
        </Tooltip>
      </li>
      <li className={s.social__item}>
        <Tooltip title={'Telegram'}>
          <a href={`tg://resolve?phone=${phone}`}>
            <FaTelegram color={colorIcon} size={sizeIcon} />
          </a>
        </Tooltip>
      </li>
      <li className={s.social__item}>
        <Tooltip title={'Mail'}>
          <a href='mailto:Genya227@mail.ru'>
            <CiMail color={colorIcon} size={sizeIcon} />
          </a>
        </Tooltip>
      </li>
    </ul>
  );
};
