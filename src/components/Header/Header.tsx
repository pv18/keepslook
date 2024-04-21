import React from 'react';
import { DesktopMenu, MobileMenu } from 'components';
import { Container } from 'components/Container';
import { NavLink } from 'react-router-dom';
import { useResize } from 'hooks';
import { ROUTES } from 'enums';
import s from './Header.module.scss';

export const Header = () => {
  const { isScreenLg } = useResize();

  return (
    <header className={s.wrapper}>
      <Container>
        <div className={s.header}>
          <NavLink to={ROUTES.MAIN} className={s.logo}>
            keepslook
          </NavLink>
          <MobileMenu />
          {/*{isScreenLg ? <DesktopMenu /> : <MobileMenu />}*/}
        </div>
      </Container>
    </header>
  );
};
