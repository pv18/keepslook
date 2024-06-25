import React from 'react';
import Img1 from './1.jpg';
import Img2 from './2.jpg';
import { ScrollDowns } from 'components';
import { motion } from 'framer-motion';
import { useResize } from 'hooks';
import { SloganV1, SloganV2 } from './components';
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
                            <img src={Img2} />
                        </div>
                        <div className={s.secondImg}>
                            <img src={Img1} />
                        </div>
                    </div>
                </div>

                {isScreenMd ? <SloganV2 /> : <SloganV1 />}
            </div>
            <ScrollDowns />
        </motion.section>
    );
};
