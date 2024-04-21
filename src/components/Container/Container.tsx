import React, { FC } from 'react';
import s from './Container.module.scss';

interface IContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export const Container: FC<IContainerProps> = ({ children, className }) => {
  return <div className={`${s.container} ${className}`}>{children}</div>;
};
