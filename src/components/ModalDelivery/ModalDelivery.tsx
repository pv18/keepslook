import React, { FC } from 'react';
import { ConfigProvider, Modal } from 'antd';
import s from './ModalDelivery.module.scss';

interface ModalDeliveryProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export const ModalDelivery: FC<ModalDeliveryProps> = props => {
    const { open, setOpen } = props;

    return (
        <ConfigProvider
            theme={{
                components: {
                    Modal: {
                        contentBg: '#2e2e2e',
                        colorIcon: '#fff',
                        colorIconHover: '#fff',
                    },
                },
            }}
        >
            <Modal
                className={s.modal}
                open={open}
                onCancel={() => setOpen(false)}
                footer={false}
                centered={true}
            >
                <div className={s.content}>
                    <h3 className={s.title}>Доставка</h3>
                    <p className={s.text}>
                        Ручная работа имеет тонкие и хрупкие элементы, поэтому
                        доставить различными службами доставки не представляется
                        возможным.
                    </p>
                    <p className={s.text}>
                        Доставка осуществляется до ближайшей Вашей станции метро
                        и передаётся лично в руки.
                    </p>
                    <p className={s.text}>
                        Оплата товара происходит после осмотра.
                    </p>
                </div>
            </Modal>
        </ConfigProvider>
    );
};
