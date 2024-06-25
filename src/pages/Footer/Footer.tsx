import React from 'react';
import { Container } from 'components/Container';
import { Social } from 'components/Social';
import { FaPhoneAlt } from 'react-icons/fa';
import s from './Footer.module.scss';

const sizeIcon = 20;
const colorIcon = 'rgb(185, 180, 160)';

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.title}>
                    Сайт временно находится в доработке , для заказа обращайтесь
                    в соц. сети
                </div>
                <div className={s.contacts}>
                    <Social />
                    <div className={s.phone}>
                        <span>Телефон :</span>
                        <FaPhoneAlt color={colorIcon} size={sizeIcon} />
                        <a href="tel:+79265905390">+7 (926) 590 53 90</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
