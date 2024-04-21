import React, { FC } from 'react';
import { Empty } from 'antd';
import './EmptyData.scss';

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export const EmptyData: FC<IProps> = (props) => {
  const { children, className } = props;

  return (
    <div className={`empty-data ${className}`}>
      <Empty
        description={<span className='empty-data__title'>{children}</span>}
      />
    </div>
  );
};
