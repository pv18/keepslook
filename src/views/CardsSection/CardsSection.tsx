import React from 'react';
import { ROUTES } from 'enums';
import Img1 from 'views/MainPage/image/3.jpg';
import Img2 from 'views/MainPage/image/8.jpg';
import Img3 from 'views/MainPage/image/10.jpg';
import Img4 from 'views/MainPage/image/2.jpg';
import { useNavigate } from 'react-router-dom';
import { Container } from 'components';
import { motion } from 'framer-motion';
import s from './CardsSection.module.scss';

const blockAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 1 },
  }),
};

export const CardsSection = () => {
  const navigate = useNavigate();

  return (
    <div className={s.cards}>
      <Container>
        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ amount: 0.5, once: true }}
          className={s.row}
        >
          <motion.div custom={1} variants={blockAnimation} className={s.block}>
            <h2 className={s.header}>Слоны Dali</h2>
            <div className={s.content}>
              <p>
                Слоны Сальвадора Дали - это известная оптическая иллюзия,
                созданная испанским художником Сальвадором Дали в 1952 году.
                Работа представляет собой изображение трех массивных фигур
                слонов на фоне закатного неба...
              </p>
            </div>
            <button
              className={s.button}
              onClick={() => navigate(ROUTES.ELEPHANTS)}
            >
              Далее
            </button>
          </motion.div>
          <motion.div custom={1} variants={blockAnimation} className={s.img}>
            <img src={Img1} alt='Популярные направления' />
          </motion.div>
        </motion.div>

        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ amount: 0.5, once: true }}
          className={s.row}
        >
          <motion.div custom={2} variants={blockAnimation} className={s.block}>
            <h2 className={s.header}>Панно Dali</h2>
            <div className={s.content}>
              <p>
                Слоны Сальвадора Дали - это известная оптическая иллюзия,
                созданная испанским художником Сальвадором Дали в 1952 году.
                Работа представляет собой изображение трех массивных фигур
                слонов на фоне закатного неба...
              </p>
            </div>
            <button
              className={s.button}
              onClick={() => navigate(ROUTES.PICTURES)}
            >
              Далее
            </button>
          </motion.div>
          <motion.div custom={2} variants={blockAnimation} className={s.img}>
            <img src={Img2} alt='Популярные направления' />
          </motion.div>
        </motion.div>

        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ amount: 0.5, once: true }}
          className={s.row}
        >
          <motion.div custom={3} variants={blockAnimation} className={s.block}>
            <h2 className={s.header}>Работы в наличии</h2>
            <div className={s.content}>
              <p>
                Слоны Сальвадора Дали - это известная оптическая иллюзия,
                созданная испанским художником Сальвадором Дали в 1952 году.
                Работа представляет собой изображение трех массивных фигур
                слонов на фоне закатного неба...
              </p>
            </div>
            <button
              className={s.button}
              onClick={() => navigate(ROUTES.READY_WORKS)}
            >
              Далее
            </button>
          </motion.div>
          <motion.div custom={3} variants={blockAnimation} className={s.img}>
            <img src={Img3} alt='Популярные направления' />
          </motion.div>
        </motion.div>

        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ amount: 0.5, once: true }}
          className={s.row}
        >
          <motion.div custom={4} variants={blockAnimation} className={s.block}>
            <h2 className={s.header}>Обо мне</h2>
            <div className={s.content}>
              <p>
                С самого детства я была очень активным ребенком. Записывалась на
                все кружки и секции, участвовала во всех конкурсах и
                соревнованиях. За свои достижения в техникуме была занесена в
                энциклопедию "Одаренные дети России", также была вручена медаль.
                И только теперь...
              </p>
            </div>
            <button className={s.button} onClick={() => navigate(ROUTES.ABOUT)}>
              Далее
            </button>
          </motion.div>
          <motion.div custom={4} variants={blockAnimation} className={s.img}>
            <img src={Img4} alt='Обо мне' />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};
