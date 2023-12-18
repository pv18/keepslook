import React, { FC, memo } from 'react';
import './Photo.scss';

interface IProps {
  src: string;
  callback?: () => void;
}

export const Photo: FC<IProps> = memo((props) => {
  const { src, callback } = props;

  return (
    <div className={'photo'} onClick={callback}>
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={'photo__inner'}
      />
    </div>
  );
});
