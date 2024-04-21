import React from 'react';
import { Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import s from './DesktopMenu.module.scss';
import { itemsMenu } from 'constans';

export const DesktopMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
      className={s.menu}
      theme='dark'
      mode='horizontal'
      defaultSelectedKeys={[location.pathname]}
      onClick={onClick}
      items={itemsMenu}
    />
  );
};
