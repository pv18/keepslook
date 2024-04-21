import React, { useEffect, useState } from 'react';
import ImgBgHeader5 from 'views/MainPage/image/bg-header4.jpg';
import ImgBgHeader4 from 'views/MainPage/image/bg-header3.jpg';
import { ScrollDowns } from 'components';
import { motion } from 'framer-motion';
import { Button, ColorPicker } from 'antd';
import { Color } from 'antd/es/color-picker';
import s from './MainSection.module.scss';
import { findAllByDisplayValue } from '@testing-library/react';

const textOnRightAnimation = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 1 },
  }),
};

const textOnLeftAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 1 },
  }),
};

const appearanceAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 2, duration: 1 },
  },
};

export const MainSection = () => {
  return (
    <motion.section
      initial={'hidden'}
      whileInView={'visible'}
      className={s.wrapper}
    >
      <div className={s.container}>
        <motion.div
          custom={1}
          variants={textOnRightAnimation}
          className={s.titleBlock}
        >
          <h2 className={s.title}>Ручная работа</h2>
          <p className={s.subTitle}>с теплотой нежных рук</p>
        </motion.div>

        <div className={s.mainBlock}>
          <div className={s.logo}>keepslook</div>
          <div className={s.imagesBlock}>
            <div className={s.firstImg}>
              <img src={ImgBgHeader5} />
            </div>
            <div className={s.secondImg}>
              <img src={ImgBgHeader4} />
            </div>
          </div>
        </div>
        <motion.h2
          custom={3}
          variants={textOnLeftAnimation}
          className={s.slogan}
        >
          <span>Подари себе</span>
          <span>искусство</span>
        </motion.h2>
      </div>
      <ScrollDowns />
    </motion.section>
  );
};
