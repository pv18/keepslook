import React from 'react';
import s from './ScrollDowns.module.scss';

export const ScrollDowns = () => {
    return (
        <div className={s.container}>
            <div className={s.chevron} />
            <div className={s.chevron} />
            <div className={s.chevron} />
            <span className={s.text}>прокрутите вниз</span>
        </div>
    );
};
