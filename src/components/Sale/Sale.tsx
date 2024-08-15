import s from './Sale.module.scss';
import { FC } from 'react';

interface IProps {
    value: string;
}

export const Sale: FC<IProps> = ({ value }) => {
    return (
        <div className={s['sale']}>
            <span className={s['title']}>скидка</span>
            <span className={s['sale-value']}>{value}</span>
        </div>
    );
};
