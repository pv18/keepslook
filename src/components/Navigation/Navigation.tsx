import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {ROUTES} from 'enums';
import s from './Navigation.module.scss'
import {MenuOutlined} from '@ant-design/icons';

export const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log('+')
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={s.navigation}>
            <NavLink to={ROUTES.MAIN} className={s.logo}>
                keepslook
            </NavLink>
            <div className={`${s.menu} ${isMenuOpen ? s.open : ''}`}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={s.mobileMenu} onClick={toggleMenu}>
                <MenuOutlined />
            </div>
        </nav>
    );
};

