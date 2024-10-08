import React, { FC, memo, useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { Carousel } from 'antd';
import { ProductAmount } from 'pages/ReadyWorksPage/components/ProductAmount';
import { Sale } from 'components';
import s from './ProductCard.module.scss';

interface ProductCardProps {
    images: string[];
    title: string;
    price: string;
    discount?: string;
    color: string;
    size: [number, number, number];
}

export const ProductCard: FC<ProductCardProps> = memo(props => {
    const { images, title, price, discount, color, size } = props;
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index: any) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <div className={s.card}>
            {discount && (
                <div className={s.sale}>
                    <Sale value={'-25%'} />
                </div>
            )}
            {isViewerOpen ? (
                <div className={s.viewer}>
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                    />
                </div>
            ) : (
                <>
                    <Carousel afterChange={onChange}>
                        {images.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                onClick={() => openImageViewer(index)}
                            />
                        ))}
                    </Carousel>
                    <div className={s.productList}>
                        <h3>{title}</h3>
                        <div className={s.color}>{`Цвет: ${color}`}</div>
                        <div className={s.size}>
                            Размер (Д &times; В &times; Г) : {`${size[0]}`}{' '}
                            &times; {`${size[1]}`} &times; {`${size[2]}`}
                        </div>
                        <ProductAmount amount={price} discount={discount} />
                    </div>
                </>
            )}
        </div>
    );
});
