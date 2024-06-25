import React, { useState } from 'react';
import { Container, ImageGroup, Layout } from 'components';
import Img1Group1 from './assets/group1/1.jpg';
import Img2Group1 from './assets/group1/2.jpg';
import Img3Group1 from './assets/group1/3.jpg';
import Img4Group1 from './assets/group1/4.jpg';
import Img5Group1 from './assets/group1/5.jpg';
import Img6Group1 from './assets/group1/6.jpg';
import Img1Group2 from './assets/group2/1.jpg';
import Img2Group2 from './assets/group2/2.jpg';
import Img3Group2 from './assets/group2/3.jpg';
import Img4Group2 from './assets/group2/4.jpg';
import Img5Group2 from './assets/group2/5.jpg';
import Img6Group2 from './assets/group2/6.jpg';
import Img7Group2 from './assets/group2/7.jpg';
import Img8Group2 from './assets/group2/8.jpg';
import Img9Group2 from './assets/group2/9.jpg';
import Img1Group3 from './assets/group3/1.jpg';
import Img2Group3 from './assets/group3/2.jpg';
import Img3Group3 from './assets/group3/3.jpg';
import Img4Group3 from './assets/group3/4.jpg';
import Img1Group4 from './assets/group4/1.jpg';
import Img2Group4 from './assets/group4/2.jpg';
import Img3Group4 from './assets/group4/3.jpg';
import Img4Group4 from './assets/group4/4.jpg';
import Img2Group5 from './assets/group5/2.jpg';
import Img3Group5 from './assets/group5/3.jpg';
import Img4Group5 from './assets/group5/4.jpg';
import Img5Group5 from './assets/group5/5.jpg';
import Img6Group5 from './assets/group5/6.jpg';
import Img7Group5 from './assets/group5/7.jpg';
import Img8Group5 from './assets/group5/8.jpg';
import Img1Group6 from './assets/group6/1.jpg';
import Img2Group6 from './assets/group6/2.jpg';
import Img3Group6 from './assets/group6/3.jpg';
import Img1Group7 from './assets/group7/1.jpg';
import Img1Group8 from './assets/group8/1.jpg';
import Img1Group9 from './assets/group9/1.jpg';
import Img1Group10 from './assets/group10/1.jpg';
import Img1Group11 from './assets/group11/1.jpg';
import Img1Group12 from './assets/group12/1.jpg';
import Img2Group12 from './assets/group12/2.jpg';
import Img3Group12 from './assets/group12/3.jpg';
import Img4Group12 from './assets/group12/4.jpg';
import Img5Group12 from './assets/group12/5.jpg';
import Img6Group12 from './assets/group12/6.jpg';
import Img7Group12 from './assets/group12/7.jpg';
import s from './ElephantsPage.module.scss';

export const ElephantsPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const group1 = [
    Img4Group1,
    Img1Group1,
    Img2Group1,
    Img3Group1,
    Img5Group1,
    Img6Group1,
  ];
  const group2 = [
    Img1Group2,
    Img4Group2,
    Img2Group2,
    Img3Group2,
    Img5Group2,
    Img6Group2,
    Img7Group2,
    Img8Group2,
    Img9Group2,
  ];
  const group3 = [Img1Group3, Img2Group3, Img3Group3, Img4Group3];
  const group4 = [Img2Group4, Img1Group4, Img3Group4, Img4Group4];
  const group5 = [
    Img3Group5,
    Img4Group5,
    Img5Group5,
    Img7Group5,
    Img8Group5,
    Img2Group5,
    Img6Group5,
  ];
  const group6 = [Img3Group6, Img1Group6, Img2Group6];
  const group7 = [Img1Group7];
  const group8 = [Img1Group8];
  const group9 = [Img1Group9];
  const group10 = [Img1Group10];
  const group11 = [Img1Group11];
  const group12 = [
    Img6Group12,
    Img1Group12,
    Img2Group12,
    Img3Group12,
    Img4Group12,
    Img5Group12,
    Img7Group12,
  ];

  const shortText = () => {
    return (
      <>
        <p>
          «Слоны» - очаровательные существа, покорившие сердца людей во всем
          мире, как своим величественным внешним видом, так и своим духовным
          значением. Во многих культурах слоны являются священным животным и
          символизируют счастье, успех, долголетие и мудрость.
        </p>
        <p>
          Так, например, слоны в Азиатском мире считаются...{' '}
          <button onClick={handleText}>далее &raquo;</button>
        </p>
      </>
    );
  };

  const longText = () => {
    return (
      <>
        <p>
          «Слоны» - очаровательные существа, покорившие сердца людей во всем
          мире как своим величественным внешним видом, так и своим духовным
          значением. Во многих культурах слоны являются священным животным и
          символизируют счастье, успех, долголетие и мудрость.
        </p>
        <p>
          Так, например, слоны в Азиатском мире считаются божественными
          животными, сильными и выносливыми, наделенными терпением и умом. Они
          по праву носят титул царственного животного.
        </p>
        <p>
          В Китае слон считается символом здоровья и долголетия, он
          символизирует духовные знания и служит символом гармонии. В
          буддистских текстах сказано, что белый слон поможет освободится людям
          от земных оков.
        </p>
        <p>
          В Таиланде слонам поклоняются как могущественному и мудрому животному,
          который защищает от злых духов. Местная архитектура практически у
          каждого здания имеет алтарь со статуэтками божеств, на которых в
          обязательном порядке присутствуют слоны.
        </p>
        <p>В Индии слон - это царь зверей, символ благоразумия и мудрости.</p>
        <p>
          В Христианстве слоны так же обнаружили себя, слон символизирует победу
          Христа над злом, и изображен он как растаптывающий змею.
        </p>
        <p>
          Считается, что символы слона в доме создают прочный фундамент для
          устойчивого образа жизни, устраняют конфликты и проблемы, оказывают
          поддержку и процветание, приносят тягу к духовному развитию и
          проявлению мудрости.
        </p>
        <p>
          Именно поэтому многие люди предпочитают иметь у себя дома хотя бы один
          символ этого величественного животного в виде картины или статуэтки.
        </p>
        <p>
          Не обошел стороной этот символ и великого испанского живописца,
          писателя, режиссера и скульптора Сальвадора Дали. Если рассматривать
          его произведения, то слоны стали одним из его самых узнаваемых
          символов. Наверняка вам знакомы длинные, тонкие ноги слонов, несущих
          на себе таинственные объекты. Для Дали слоны стали не просто
          животными, а символом – будущего, воплощением бессмертия и мистицизма.
        </p>
        <p>
          Для самого Дали, помимо символизма, слоны имели практическую
          значимость. Так, например, в некоторых его работах они несут на спинах
          гигантские столбы, мягкие часы или замки. Эти слоны, казалось бы,
          играют роль несущих обрядовые предметы, метафорически обозначая
          вечность. В творчестве Дали слоны, являются не просто изображением
          животного, а особым символом, который помогает художнику транслировать
          свои мысли о времени, памяти и бессмертие.
        </p>
        <p>
          Вот и меня не обошел его мифический образ стороной. Конечно, выполняя
          скульптуры по мотивам таких картин, каждый творец видит и берет для
          себя именно те образы и исполнения, которые наиболее близки ему. Эти
          чудесные слоники просто покорили мое сердце, наслаждаясь процессом
          создания, я не замечаю течения времени. Каждый слоник, выполненный с
          любовью и теплом моих рук, уже нашел себе дом, радуя своего владельца.
          Слоники приятно удивляют своих хозяев не только своим исполнением, но
          и магическими свойствами, они действительно помогают с легкостью
          длинных ног перешагивать все невзгоды, оставаясь всегда на высоте. Я
          верю, что это все благодаря положительной энергетике, с которой я
          выполняю каждого любимца.{' '}
          <button onClick={handleText}>&laquo; свернуть</button>
        </p>
      </>
    );
  };

  const handleText = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Layout>
      <section className={s.wrapper}>
        <Container>
          <div className={s.description}>
            <h2 className={s.header}>Слоны Dali</h2>
            <div className={s.divider} />
            {isExpanded ? longText() : shortText()}
          </div>
        </Container>
        <ImageGroup images={group1} />
        <ImageGroup images={group2} />
        <ImageGroup images={group8} />
        <ImageGroup images={group3} />
        <ImageGroup images={group4} />
        <ImageGroup images={group5} />
        <ImageGroup images={group9} />
        <ImageGroup images={group7} />
        <ImageGroup images={group6} />
        <ImageGroup images={group10} />
        <ImageGroup images={group11} />
        <ImageGroup images={group12} />
      </section>
    </Layout>
  );
};
