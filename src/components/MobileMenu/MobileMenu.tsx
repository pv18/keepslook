import React, { useState } from 'react';
import { Button, Drawer, Menu, MenuProps } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { itemsMenu } from 'constans';
import s from './MobileMenu.module.scss';

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <Button
        type='primary'
        icon={<MenuFoldOutlined />}
        onClick={showDrawer}
        size={'large'}
        shape='circle'
      />
      <Drawer
        className={s.drawer}
        title={false}
        placement={'right'}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Menu
          style={{ fontSize: 18, backgroundColor: 'inherit' }}
          theme='dark'
          defaultSelectedKeys={[location.pathname]}
          onClick={onClick}
          items={itemsMenu}
        />
      </Drawer>
    </div>
  );
};
