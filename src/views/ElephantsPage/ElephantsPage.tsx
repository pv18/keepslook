import React, { useCallback, useState } from 'react';
import { Container, Header, MobileMenu, Photo } from 'components';
import Img1 from '../../img/img/elephants/1.jpg';
import Img2 from '../../img/img/elephants/2.jpg';
import Img3 from '../../img/img/elephants/3.jpg';
import Img4 from '../../img/img/elephants/4.jpg';
import Img5 from '../../img/img/elephants/5.jpg';
import Img6 from '../../img/img/elephants/6.jpg';
import Img7 from '../../img/img/elephants/7.jpg';
import Img8 from '../../img/img/elephants/8.jpg';
import Img9 from '../../img/img/elephants/9.jpg';
import Img10 from '../../img/img/elephants/10.jpg';
import Img11 from '../../img/img/elephants/11.jpg';
import Img12 from '../../img/img/elephants/12.jpg';
import Img13 from '../../img/img/elephants/13.jpg';
import Img14 from '../../img/img/elephants/14.jpg';
import Img15 from '../../img/img/elephants/15.jpg';
import Img16 from '../../img/img/elephants/16.jpg';
import Img17 from '../../img/img/elephants/17.jpg';
import Img18 from '../../img/img/elephants/18.jpg';
import Img19 from '../../img/img/elephants/19.jpg';
import Img20 from '../../img/img/elephants/20.jpg';
import Img21 from '../../img/img/elephants/21.jpg';
import Img22 from '../../img/img/elephants/22.jpg';
import Img35 from '../../img/img/elephants/35.png';
import Img36 from '../../img/img/elephants/36.jpg';
import Img37 from '../../img/img/elephants/37.jpg';
import Img38 from '../../img/img/elephants/38.jpg';
import Img39 from '../../img/img/elephants/39.jpg';
import Img40 from '../../img/img/elephants/40.jpg';
import Img41 from '../../img/img/elephants/41.jpg';
import Img42 from '../../img/img/elephants/42.jpg';
import Img43 from '../../img/img/elephants/43.jpg';
import Img44 from '../../img/img/elephants/44.jpg';
import Img45 from '../../img/img/elephants/45.jpg';
import Img46 from '../../img/img/elephants/46.jpg';
import Img47 from '../../img/img/elephants/47.jpg';
import Img48 from '../../img/img/elephants/48.jpg';
import Img50 from '../../img/img/elephants/50.jpg';
import Img51 from '../../img/img/elephants/51.jpg';
import Img52 from '../../img/img/elephants/52.jpg';
import Img53 from '../../img/img/elephants/53.jpg';
import Img54 from '../../img/img/elephants/54.jpg';
import Img55 from '../../img/img/elephants/55.jpg';
import Img56 from '../../img/img/elephants/56.jpg';
import ImageViewer from 'react-simple-image-viewer';
import s from './ElephantsPage.module.scss';

export const ElephantsPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const images = [
    Img1,
    Img2,
    Img11,
    Img4,
    Img5,
    Img37,
    Img38,
    Img39,
    Img40,
    Img41,
    Img42,
    Img6,
    Img7,
    Img10,
    Img43,
    Img9,
    Img8,
    Img44,
    Img3,
    Img12,
    Img13,
    Img14,
    Img15,
    Img45,
    Img35,
    Img46,
    Img17,
    Img18,
    Img19,
    Img20,
    Img21,
    Img22,
    Img16,
    Img36,
    Img47,
    Img48,
    Img50,
    Img51,
    Img52,
    Img53,
    Img54,
    Img55,
    Img56,
  ];

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
      <>
        <p>
          «Слоны» - очаровательные существа, покорившие сердца людей во всем
          мире как своим величественным внешним видом, так и своим духовным
          значением. Во многих культурах слоны являются священным животным и
          символизируют счастье, успех, долголетие и мудрость.
        </p>
        <p>
          Так, например, слоны в Азиатском мире считаются божественными
          животными, сильными и выносливыми наделенные терпением и умом. Они по
          праву носят титул царственного животного.
        </p>
        <p>
          В Китае слон считается символом здоровья и долголетия, он
          символизирует... <button onClick={handleText}>далее &raquo;</button>
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
          животными, сильными и выносливыми наделенные терпением и умом. Они по
          праву носят титул царственного животного.
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
          символов. Наверняка вам знакомы длинные, тонкие ножки слонов, несущих
          на себе таинственные объекты. Для Дали, слоны стали не просто
          животными, а символом – будущего, воплощением бессмертия и мистицизма.
        </p>
        <p>
          В некоторых его работах слоны несут на спинах гигантские столбы,
          мягкие часы или замки. Эти слоны, казалось бы, играют роль несущих
          обрядовые предметы, метафорически обозначая вечность.
        </p>
        <p>
          Интересно, что для самого Дали слоны, помимо символизма, имели
          практическую значимость. Художник утверждал, что слон - это одно из
          немногих животных, которое может держать на себе очень тяжелые
          предметы. Таким образом, символика слонов в его работах становится
          многослойной: от мистического значения до практической
          функциональности. Так что в творчестве Дали, слоны являются не просто
          изображением животного, а особым символом, который помогает художнику
          транслировать свои мысли о времени, памяти и бессмертии.
        </p>
        <p>
          Вот и меня не обошел его мифический образ стороной. Конечно выполняя
          скульптуры по мотивам таких картин, каждый творец видит и берет для
          себя именно те образы и исполнения, которые наиболее близки ему. Эти
          чудесные слоники просто покорили мое сердце, наслаждаясь процессом
          создания, я не замечаю течения времени. Каждый слоник, выполненный с
          любовью и теплом моих рук, уже нашел себе дом радуя своего владельца.
          Слоники приятно удивляют своих хозяев не только своим исполнением, но
          и магическими свойствами, они действительно помогают с легкостью
          длинных ног перешагивать все невзгоды, оставаясь всегда на высоте. Я
          верю, что это все, благодаря положительной энергетики с которой я
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
    <section className={s.wrapper}>
      <Container>
        {/*<Header />*/}
        <MobileMenu />
        <div className={s.description}>
          <h2 className={s.header}>Слоны Dali</h2>
          {isExpanded ? longText() : shortText()}
        </div>
        <div className={s.images}>
          {images.map((src, index) => (
            <Photo
              key={index}
              src={src}
              callback={() => openImageViewer(index)}
            />
          ))}
          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </Container>
    </section>
  );
};
