import React from 'react';
import ImgBgHeader5 from 'views/MainPage/image/bg-header4.jpg';
import ImgBgHeader4 from 'views/MainPage/image/bg-header3.jpg';
import ImgMobileBG from './bg-mobile.png';
import { ScrollDowns } from 'components';
import { motion } from 'framer-motion';
import { useResize } from 'hooks';
import { SloganV1, SloganV2 } from 'views/MainSection/components';
import Typewriter from 'typewriter-effect';
import s from './MainSection.module.scss';

export const MainSection = () => {
  const { isScreenMd } = useResize();

  return (
    <motion.section
      initial={'hidden'}
      whileInView={'visible'}
      className={s.wrapper}
    >
      <div className={s.container}>
        {isScreenMd ? <SloganV1 /> : <SloganV2 />}

        <div className={s.mainBlock}>
          <div className={s.logo}>
            <Typewriter
              options={{
                strings: ['keepslook.ru'],
                //@ts-ignore
                pauseFor: 6000,
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 50,
              }}
            />
          </div>
          <div className={s.imagesBlock}>
            <div className={s.firstImg}>
              <img src={ImgBgHeader5} />
            </div>
            <div className={s.secondImg}>
              <img src={ImgBgHeader4} />
            </div>
          </div>
        </div>

        {isScreenMd ? <SloganV2 /> : <SloganV1 />}
      </div>
      {/*<div className={s.mobileImg}>*/}
      {/*  <img src={ImgMobileBG} />*/}
      {/*</div>*/}
      <ScrollDowns />
    </motion.section>
  );
};
