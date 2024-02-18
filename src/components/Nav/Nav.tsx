import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {ROUTES} from 'enums';
import {MenuOutlined} from '@ant-design/icons';
import './Nav.scss'

export const Nav = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    const [open, setOpen] = useState(false);

    return (
            <header className="menu">
        <div className='container'>
                <div className="menu-wrap">
                    <NavLink to={ROUTES.MAIN} className='logo'>
                        keepslook
                    </NavLink>
                    {open && (
                        <nav>
                            <ul>
                                <li className='nav-list__item'>
                                    <NavLink
                                        to={ROUTES.MAIN}
                                        className={({ isActive }) =>
                                            isActive ? activeLink : normalLink
                                        }
                                    >
                                        Главная
                                    </NavLink>
                                </li>
                                <li className='nav-list__item'>
                                    <NavLink
                                        to={ROUTES.ELEPHANTS}
                                        className={({ isActive }) =>
                                            isActive ? activeLink : normalLink
                                        }
                                    >
                                        Слоны Дали
                                    </NavLink>
                                </li>
                                <li className='nav-list__item'>
                                    <NavLink
                                        to={ROUTES.PICTURES}
                                        className={({ isActive }) =>
                                            isActive ? activeLink : normalLink
                                        }
                                    >
                                        Пано Дали
                                    </NavLink>
                                </li>
                                <li className='nav-list__item'>
                                    <NavLink
                                        to={ROUTES.READY_WORKS}
                                        className={({ isActive }) =>
                                            isActive ? activeLink : normalLink
                                        }
                                    >
                                        Готовые работы
                                    </NavLink>
                                </li>
                                <li className='nav-list__item'>
                                    <NavLink
                                        to={ROUTES.ABOUT}
                                        className={({ isActive }) =>
                                            isActive ? activeLink : normalLink
                                        }
                                    >
                                        Обо мне
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    )}
                    <MenuOutlined
                        className='menu-icon'
                        onClick={()=>setOpen(!open)}
                    />
                </div>
        </div>
            </header>
    );
};

