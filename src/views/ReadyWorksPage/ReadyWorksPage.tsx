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
import { ProductCard } from 'views/ReadyWorksPage/components';
import { addSpacesToHundredths, Footer } from 'views';
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
            />
          </div>
        </Container>
        <Footer />
      </section>
    </Layout>
  );
};
