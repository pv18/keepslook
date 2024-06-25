import React from 'react';
import { ROUTES } from 'enums';
import Img1 from './2.jpg';
import Img2 from './3.jpg';
import Img3 from './4.jpg';
import Img4 from './1.jpg';
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
            <p className={s.content}>
              «Слоны» - очаровательные существа, покорившие сердца людей во всем
              мире, как своим величественным внешним видом, так и своим духовным
              значением. Во многих культурах слоны являются...
            </p>
            <button
              className={s.button}
              onClick={() => navigate(ROUTES.ELEPHANTS)}
            >
              Далее
            </button>
          </motion.div>
          <motion.div custom={1} variants={blockAnimation} className={s.img}>
            <img src={Img1} alt='Слоны Дали' />
          </motion.div>
          <div className={s.buttonWrapper}>
            <button onClick={() => navigate(ROUTES.ELEPHANTS)}>
              Далее &raquo;
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ amount: 0.5, once: true }}
          className={s.row}
        >
          <motion.div custom={1} variants={blockAnimation} className={s.block}>
            <h2 className={s.header}>Панно Dali</h2>
            <p className={s.content}>
              Все искусство Сальвадора Дали пронизано скрытыми смыслами, шифрами
              и кодами, которые можно разгадывать бесконечно, хотя многие
              считают, что это всего лишь...
            </p>
            <button
              className={s.button}
              onClick={() => navigate(ROUTES.PICTURES)}
            >
              Далее
            </button>
          </motion.div>
          <motion.div custom={1} variants={blockAnimation} className={s.img}>
            <img src={Img2} alt='Панно Дали' />
          </motion.div>
          <div className={s.buttonWrapper}>
            <button onClick={() => navigate(ROUTES.PICTURES)}>
              Далее &raquo;
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ amount: 0.5, once: true }}
          className={s.row}
        >
          <motion.div custom={1} variants={blockAnimation} className={s.block}>
            <h2 className={s.header}>Работы в наличии</h2>
            <p className={s.content}>Готовые работы...</p>
            <button
              className={s.button}
              onClick={() => navigate(ROUTES.READY_WORKS)}
            >
              Далее
            </button>
          </motion.div>
          <motion.div custom={1} variants={blockAnimation} className={s.img}>
            <img src={Img3} alt='Готовые работы' />
          </motion.div>
          <div className={s.buttonWrapper}>
            <button onClick={() => navigate(ROUTES.READY_WORKS)}>
              Далее &raquo;
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ amount: 0.5, once: true }}
          className={s.row}
        >
          <motion.div custom={1} variants={blockAnimation} className={s.block}>
            <h2 className={s.header}>Обо мне</h2>
            <p className={s.content}>
              С самого детства я была очень активным ребенком. Записывалась на
              все кружки и секции, участвовала во всех конкурсах и
              соревнованиях. За свои достижения в техникуме была занесена в
              энциклопедию "Одаренные дети России", также была вручена медаль. И
              только теперь...
            </p>
            <button className={s.button} onClick={() => navigate(ROUTES.ABOUT)}>
              Далее
            </button>
          </motion.div>
          <motion.div custom={1} variants={blockAnimation} className={s.img}>
            <img src={Img4} alt='Обо мне' />
          </motion.div>
          <div className={s.buttonWrapper}>
            <button onClick={() => navigate(ROUTES.ABOUT)}>
              Далее &raquo;
            </button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};
