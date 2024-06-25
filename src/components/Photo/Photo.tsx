import React, { FC, memo } from 'react';
import s from './Photo.module.scss';

interface IProps {
    src: string;
    callback?: () => void;
}

export const Photo: FC<IProps> = memo(props => {
    const { src, callback } = props;

    return (
        <div className={s.photo} onClick={callback}>
            <div
                style={{ backgroundImage: `url(${src})` }}
                className={s.photo__inner}
            />
        </div>
    );
});
