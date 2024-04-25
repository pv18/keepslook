import React from 'react';
import { motion } from 'framer-motion';
import s from 'views/MainPage/components/MainSection/components/SloganV1/SloganV1.module.scss';

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

export const SloganV1 = () => {
  return (
    <motion.div
      custom={1}
      variants={textOnRightAnimation}
      className={s.wrapper}
    >
      <h2 className={s.title}>Ручная работа</h2>
      <p className={s.subTitle}>с теплом нежных рук</p>
    </motion.div>
  );
};
