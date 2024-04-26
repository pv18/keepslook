import React, { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { Modal } from 'antd';
import { ROUTES } from 'enums';
import s from './Navigation.module.scss';
import { ModalDelivery } from 'components/ModalDelivery';

const sizeIcon = 30;
const colorIcon = '#000';

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setOpen(false);
  };

  return (
    <div className={s.nav}>
      <div className={s.icon}>
        {open ? (
          <IoMdClose size={sizeIcon} color={colorIcon} onClick={toggleOpen} />
        ) : (
          <MdOutlineMenu
            size={sizeIcon}
            color={colorIcon}
            onClick={toggleOpen}
          />
        )}
      </div>
      {open && (
        <nav>
          <ul>
            <li>
              <NavLink
                to={ROUTES.MAIN}
                className={({ isActive }) => (isActive ? `${s.active}` : '')}
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.ELEPHANTS}
                className={({ isActive }) => (isActive ? `${s.active}` : '')}
              >
                Слоны Dali
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.PICTURES}
                className={({ isActive }) => (isActive ? `${s.active}` : '')}
              >
                Панно Dali
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.READY_WORKS}
                className={({ isActive }) => (isActive ? `${s.active}` : '')}
              >
                Готовые работы
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.ABOUT}
                className={({ isActive }) => (isActive ? `${s.active}` : '')}
              >
                Обо мне
              </NavLink>
            </li>
            <li onClick={openModal}>Доставка</li>
          </ul>
        </nav>
      )}
      <ModalDelivery open={isModalOpen} setOpen={setIsModalOpen} />
    </div>
  );
};
