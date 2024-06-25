import React, { useCallback, useState } from 'react';
import Img1 from '../../img/img/pictures/1.jpg';
import Img2 from '../../img/img/pictures/2.jpg';
import Img3 from '../../img/img/pictures/3.jpg';
import Img4 from '../../img/img/pictures/4.jpg';
import Img5 from '../../img/img/pictures/5.jpg';
import Img6 from '../../img/img/pictures/6.jpg';
import Img7 from '../../img/img/pictures/7.jpg';
import Img8 from '../../img/img/pictures/8.jpg';
import BgImg1 from './img/1.jpg';
import BgImg2 from './img/2.jpg';
import BgImg3 from './img/3.jpg';
import BgImg4 from './img/4.jpg';
import BgImg5 from './img/5.webp';
import { Container, Layout, Photo } from 'components';
import ImageViewer from 'react-simple-image-viewer';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import { IoMdCloseCircle } from 'react-icons/io';
import s from './PicturesPage.module.scss';

export const PicturesPage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const images = [Img1, Img8, Img3, Img4, Img5, Img6, Img7, Img2];

    const openImageViewer = useCallback((index: any) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const shortText = () => {
        return (
            <p>
                Все искусство Сальвадора Дали пронизано скрытыми смыслами,
                шифрами и кодами, которые можно разгадывать бесконечно, хотя
                многие считают, что это всего лишь зарисовки его шизофренических
                фантазий и видений. Для меня лично неважно, художника нет с нами
                уже 35 лет, а его жизнь и наследие, куда входят картины,
                скульптуры, книги и даже логотип всем известной карамельки
                (Chupa-Chups), ...{' '}
                <button className={s.button} onClick={handleText}>
                    далее &raquo;
                </button>
            </p>
        );
    };

    const longText = () => {
        return (
            <>
                <p>
                    Все искусство Сальвадора Дали пронизано скрытыми смыслами,
                    шифрами и кодами, которые можно разгадывать бесконечно, хотя
                    многие считают, что это всего лишь зарисовки его
                    шизофренических фантазий и видений. Для меня лично неважно,
                    художника нет с нами уже 35 лет, а его жизнь и наследие,
                    куда входят картины, скульптуры, книги и даже логотип всем
                    известной карамельки (Chupa-Chups), не дают покоя как
                    знатокам искусства, так и простым обывателям. Признаюсь,
                    конечно же далеко не все его произведения нашли место в моей
                    душе. За всю свою карьеру Сальвадор Дали создал около 2000
                    произведений, несколько сотен из которых стали культовыми.
                    Как раз некоторые из таких работ и вдохновили меня на
                    создание «Панно», по кругу которого расположены фрагменты
                    таких картин как:
                </p>
                <main className={s.main}>
                    <div className={s.mainRow}>
                        <div className={s.mainContent}>
                            <h2 className={s.header}>
                                «Искушение святого Антония» (1946)
                            </h2>
                            <p className={s.mainContentText}>
                                Культовая работа сюрреалиста в настоящее время
                                экспонируется в Королевских музеях изящных
                                искусств Бельгии в Брюсселе. Дали написал
                                «Искушение святого Антония» в 1946 году для
                                конкурса. Его организовал среди ведущих
                                сюрреалистов кинопродюсер Дэвид Лоу для съемок
                                фильма «Личные дела милого друга».
                            </p>
                        </div>
                        <div className={s.mainImg}>
                            <img src={BgImg3} alt="Популярные направления" />
                        </div>
                    </div>

                    <div className={s.mainRow}>
                        <div className={s.mainContent}>
                            <h2 className={s.header}>«Жираф в огне» (1937)</h2>
                            <p className={s.mainContentText}>
                                Это одна из нескольких картин, в которых Дали,
                                как говорят историки, выражает предчувствие
                                Второй мировой войны. Символом войны здесь
                                является пылающий жираф, которого автор описал
                                как «мужского космического апокалиптического
                                монстра». Женская фигура с выдвинутыми ящиками
                                является отсылкой к психоаналитическому методу
                                Зигмунда Фрейда, которым Дали очень восхищался.
                                Он говорил: «Единственное различие между
                                бессмертной Грецией и нашей эпохой — это Зигмунд
                                Фрейд, который обнаружил, что человеческое тело,
                                которое в греческие времена было просто
                                неоплатоническим, теперь наполнено потайными
                                ящиками, которые открываются только с помощью
                                психоанализа».
                            </p>
                        </div>
                        <div
                            className={`${s.mainImg} ${s.mainImg__vertically}`}
                        >
                            <img src={BgImg2} alt="Популярные направления" />
                        </div>
                    </div>

                    <div className={s.mainRow}>
                        <div className={s.mainContent}>
                            <h2 className={s.header}>
                                Призрак "Анжелюса" - Сальвадор Дали
                            </h2>
                            <p className={s.mainContentText}>
                                Картина "Призрак "Анжелюса" была написана
                                Сальвадором Дали в 1934-ом году, и, как явствует
                                уже из названия, посвящена самой "навязчивой" из
                                всех навязчивых идей Сальвадора Дали - его
                                тотальной одержимостью полотном Жана-Франсуа
                                Милле "Анжелюс" (Вечерняя молитва). Пара
                                крестьян - персонажи этой картины - в самых
                                разных интерпретациях встречаются в картинах
                                Дали не менее 30, а то и 50 раз.
                            </p>
                        </div>
                        <div
                            className={`${s.mainImg} ${s.mainImg__vertically}`}
                        >
                            <img src={BgImg1} alt="Популярные направления" />
                        </div>
                    </div>

                    <div className={s.mainRow}>
                        <div className={s.mainContent}>
                            <h2 className={s.header}>
                                «Постоянство памяти» (1931)
                            </h2>
                            <p className={s.mainContentText}>
                                Эта картина из собрания Музея современного
                                искусства в Нью-Йорке — культовое произведение
                                сюрреализма и одна из наиболее узнаваемых работ
                                Сальвадора Дали. Знаменитые мягкие часы он
                                придумал, глядя на сыр камамбер, который
                                плавился на обеденном столе под жарким солнцем.
                                Эту деталь автор добавил к неоконченному виду
                                мыса Креус, который неоднократно появлялся в его
                                работах. Гала, вернувшись в тот день из кино,
                                сказала, что зритель, который увидит картину
                                однажды, уже не сможет её забыть.
                            </p>
                        </div>
                        <div className={s.mainImg}>
                            <img src={BgImg5} alt="Популярные направления" />
                        </div>
                    </div>

                    <div className={s.mainRow}>
                        <div className={s.mainContent}>
                            <h2 className={s.header}>«Сон» («Спящий»), 1937</h2>
                            <p className={s.mainContentText}>
                                Картина "Сон" (также известная под названием
                                "Спящий") была написана Сальвадором Дали в
                                1937-ом году и может по праву считаться одной из
                                самых известных работ художника, выполненных в
                                сюрреалистический период. Интересно, что
                                центральный (и почти единственный) персонаж
                                картины "Сон", представляющий собой огромную
                                голову, лишенную тела и установленную на
                                тончайшие подпорки костылей. Да, верно - в
                                основе каждого образа лежат бесчисленное
                                множество раз воспетые Сальвадором Дали скалы
                                мыса Креус, всегда служившие неиссякаемым
                                источником вдохновения для художника, однако
                                скалы разные: если прототипом автопортрета
                                (Великого Мастурбатора) послужила скала под
                                названием La Roca Cavallera, то прообразом "Сна"
                                стал другой массивный валун, известный среди
                                местных жителей под названием "Спящая голова".
                            </p>
                        </div>
                        <div className={s.mainImg}>
                            <img src={BgImg4} alt="Популярные направления" />
                        </div>
                    </div>
                </main>
                <div className={s.buttonWrapper}>
                    <button className={s.button} onClick={handleText}>
                        &laquo; свернуть
                    </button>
                </div>
            </>
        );
    };

    const handleText = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <Layout>
            <section className={s.wrapper}>
                <Container>
                    <div className={s.description}>
                        <h2 className={s.header}>Панно Dali</h2>
                        <div className={s.divider} />
                        {isExpanded ? longText() : shortText()}
                    </div>
                </Container>
                <div className={s.images}>
                    {images.map((src, index) => (
                        <Photo
                            key={index}
                            src={src}
                            callback={() => openImageViewer(index)}
                        />
                    ))}
                    {isViewerOpen && (
                        <div className={s.viewer}>
                            <ImageViewer
                                src={images}
                                currentIndex={currentImage}
                                disableScroll={false}
                                closeOnClickOutside={true}
                                onClose={closeImageViewer}
                                leftArrowComponent={
                                    <BsArrowLeftSquareFill
                                        style={{ opacity: 1 }}
                                        size={80}
                                        color={'#fff'}
                                    />
                                }
                                rightArrowComponent={
                                    <BsArrowRightSquareFill
                                        size={80}
                                        color={'#fff'}
                                    />
                                }
                                closeComponent={
                                    <IoMdCloseCircle
                                        style={{ opacity: 1 }}
                                        size={40}
                                        color={'#fff'}
                                    />
                                }
                            />
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};
