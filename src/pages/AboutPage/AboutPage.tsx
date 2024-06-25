import React from 'react';
import { Layout } from 'components';
import s from './AboutPage.module.scss';

export const AboutPage = () => {
    return (
        <Layout>
            <section className={s.wrapper}>
                <div className={s.block}>
                    <div className={s.about}>
                        <div className={s.about__title}>Обо мне...</div>
                        <div className={s.about__divider} />
                        <p className={s.about__text}>
                            С самого детства я была очень активным ребенком.
                            Записывалась на все кружки и секции, участвовала во
                            всех конкурсах и соревнованиях. За свои достижения в
                            техникуме была занесена в энциклопедию "Одаренные
                            дети России", и была вручена медаль. И только теперь
                            я понимаю значение слов "Я - творческая личность".
                            Именно сейчас, когда жизнь подарила мне возможность
                            заниматься любимым делом каждый день, я понимаю, что
                            это неотъемлемая часть моей души. Я очень люблю
                            создавать что-то новое и интересное.
                        </p>
                        <p className={s.about__text}>
                            Для меня самое ценное явление в любом произведении,
                            это то, как оно способно держать Ваше внимание
                            долгое время, именно держать и не отпускать Ваш
                            взгляд. Моя цель - именно такие работы, отсюда
                            собственно и название "Keepslook", сокращенное от
                            Keeps a look (держит взгляд). Чаще всего это чувство
                            у меня вызывают произведения знаменитого испанского
                            художника, писателя, режиссера и скульптора
                            Сальвадора Дали.
                        </p>
                        <p className={s.about__text}>
                            Признаюсь, далеко не все его произведения нашли
                            место в моём сердце, но многие работы, особенно те,
                            что выполнены в направление сюрреализма, и
                            вдохновили меня на создание необычных предметов
                            интерьера. Некоторые из них, выполненные как раз по
                            его мотивам, с удовольствием выкладываю на страницах
                            этого сайта. Эти работы уже давно нашли своих
                            ценителей, и я с радостью делюсь ими со всеми
                            желающими, ведь искусство должно быть доступно всем.
                            В дальнейшем надеюсь представить весь ассортимент
                            моих работ, а также воплотить в реальность все, что
                            давно не дает покоя моей голове.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
