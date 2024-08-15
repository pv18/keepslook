import React from 'react';
import { Container, Layout } from 'components';
import ProductImg1 from './assets/product1/1.jpg';
import ProductImg2 from './assets/product1/2.jpg';
import ProductImg3 from './assets/product1/3.jpg';
import ProductImg4 from './assets/product1/4.jpg';
import ProductImg5 from './assets/product1/5.jpg';
import ProductImg6 from './assets/product1/6.jpg';
import ProductImg7 from './assets/product1/7.jpg';
import Product2Img1 from './assets/product2/1.jpg';
import Product2Img2 from './assets/product2/2.jpg';
import Product2Img3 from './assets/product2/3.jpg';
import Product2Img4 from './assets/product2/4.jpg';
import Product2Img5 from './assets/product2/5.jpg';
import Product2Img6 from './assets/product2/6.jpg';
import Product3Img1 from './assets/product3/1.jpg';
import Product3Img2 from './assets/product3/2.jpg';
import Product3Img3 from './assets/product3/3.jpg';
import Product3Img4 from './assets/product3/4.jpg';
import Product3Img5 from './assets/product3/5.jpg';
import Product3Img6 from './assets/product3/6.jpg';
import Product4Img1 from './assets/product4/1.jpg';
import Product4Img2 from './assets/product4/2.jpg';
import Product4Img3 from './assets/product4/3.jpg';
import Product4Img4 from './assets/product4/4.jpg';
import Product4Img5 from './assets/product4/5.jpg';
import Product4Img6 from './assets/product4/6.jpg';
import Product4Img7 from './assets/product4/7.jpg';
import Product5Img1 from './assets/product5/1.jpeg';
import Product5Img2 from './assets/product5/2.jpeg';
import Product5Img3 from './assets/product5/3.jpeg';
import Product5Img4 from './assets/product5/4.jpeg';
import Product5Img5 from './assets/product5/5.jpeg';
import Product5Img6 from './assets/product5/6.jpeg';
import Product5Img7 from './assets/product5/7.jpeg';
import Product6Img1 from './assets/product6/1.jpg';
import Product6Img2 from './assets/product6/2.jpg';
import Product6Img3 from './assets/product6/3.jpg';
import Product6Img4 from './assets/product6/4.jpg';
import Product6Img5 from './assets/product6/5.jpg';
import Product6Img6 from './assets/product6/6.jpg';
import Product6Img7 from './assets/product6/7.jpg';
import Product6Img8 from './assets/product6/8.jpg';
import { ProductCard } from 'pages/ReadyWorksPage/components';
import { addSpacesToHundredths, Footer } from 'pages';
import s from './ReadyWorksPage.module.scss';

export const ReadyWorksPage = () => {
    const productImages1 = [
        ProductImg1,
        ProductImg2,
        ProductImg3,
        ProductImg4,
        ProductImg5,
        ProductImg6,
        ProductImg7,
    ];
    const productImages2 = [
        Product2Img1,
        Product2Img2,
        Product2Img3,
        Product2Img4,
        Product2Img5,
        Product2Img6,
    ];
    const productImages3 = [
        Product3Img1,
        Product3Img2,
        Product3Img3,
        Product3Img4,
        Product3Img5,
        Product3Img6,
    ];
    const productImages4 = [
        Product4Img1,
        Product4Img2,
        Product4Img3,
        Product4Img4,
        Product4Img5,
        Product4Img6,
        Product4Img7,
    ];
    const productImages5 = [
        Product5Img7,
        Product5Img2,
        Product5Img3,
        Product5Img4,
        Product5Img5,
        Product5Img6,
        Product5Img1,
    ];
    const productImages6 = [
        Product6Img1,
        Product6Img2,
        Product6Img3,
        Product6Img4,
        Product6Img5,
        Product6Img6,
        Product6Img7,
        Product6Img8,
    ];

    return (
        <Layout>
            <section className={s.wrapper}>
                <Container>
                    <h2 className={s.header}>Готовые работы</h2>
                    <div className={s.cards}>
                        <ProductCard
                            images={productImages1}
                            title={'Слон "Идущий" с камнями'}
                            color={'Старая бронза'}
                            size={[27, 59, 21]}
                            price={addSpacesToHundredths(25000)}
                        />
                        <ProductCard
                            images={productImages2}
                            title={'Слон "Весёлый"'}
                            color={'Тёмно-коричневый'}
                            size={[36, 53, 20]}
                            price={addSpacesToHundredths(25000)}
                        />
                        <ProductCard
                            images={productImages3}
                            title={'Слон "Весёлый" с пирамидой'}
                            color={'Старая бронза'}
                            size={[33, 69, 21]}
                            price={addSpacesToHundredths(25000)}
                            // discount={addSpacesToHundredths(18750)}
                        />
                        <ProductCard
                            images={productImages4}
                            title={'Слон "Космический" с камнем Лабрадор'}
                            color={'Коричневый'}
                            size={[30, 63, 20]}
                            price={addSpacesToHundredths(25000)}
                        />
                        <ProductCard
                            images={productImages5}
                            title={'Слон "Веселый"'}
                            color={'Розовая пудра'}
                            size={[36, 53, 20]}
                            price={addSpacesToHundredths(25000)}
                            // discount={addSpacesToHundredths(18750)}
                        />
                        <ProductCard
                            images={productImages6}
                            title={'Слон "Веселый"'}
                            color={'Черненая бронза'}
                            size={[36, 52.5, 23]}
                            price={addSpacesToHundredths(25000)}
                            // discount={addSpacesToHundredths(18750)}
                        />
                    </div>
                </Container>
                <Footer />
            </section>
        </Layout>
    );
};
