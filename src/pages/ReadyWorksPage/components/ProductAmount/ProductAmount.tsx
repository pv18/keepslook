import React, { FC, memo } from 'react';
import s from './ProductAmount.module.scss';

interface IProps {
    amount: string;
    discount?: string;
}

export const ProductAmount: FC<IProps> = memo(props => {
    const { amount, discount } = props;

    return (
        <div className={s['product-amount']}>
            {!!discount ? (
                <>
                    <span className={s['amount']}>Цена:</span>
                    <del>
                        <span className={s['amount']}>{amount}</span>
                    </del>
                    <ins>
                        <span className={s['amount']}>{discount}</span>
                    </ins>
                </>
            ) : (
                <span>{`Цена: ${amount}`}</span>
            )}
        </div>
    );
});
