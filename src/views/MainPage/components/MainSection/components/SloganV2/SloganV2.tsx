import React from 'react';
import { motion } from 'framer-motion';
import s from 'views/MainPage/components/MainSection/components/SloganV2/SloganV2.module.scss';

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

export const SloganV2 = () => {
  return (
    <motion.h2 custom={3} variants={textOnLeftAnimation} className={s.wrapper}>
      <span>Подари себе</span>
      <span>искусство</span>
    </motion.h2>
  );
};
