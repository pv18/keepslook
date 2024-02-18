import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'enums';
import {Button, Drawer} from 'antd';
import {MenuOutlined} from '@ant-design/icons';
import './Navbar.scss';

export const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav-row'>
          <NavLink to={ROUTES.MAIN} className='logo'>
            keepslook
          </NavLink>
          {/*<ul className='nav-list'>
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
          </ul>*/}
          <div>
            <MenuOutlined onClick={showDrawer}/>
            <Drawer
                title="keepslook"
                // closeIcon={false}
                onClose={onClose}
                open={open}
                placement={'right'}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};
