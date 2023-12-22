import React, { useCallback, useState } from 'react';
import { Layout, Photo } from 'components';
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
import ImageViewer from 'react-simple-image-viewer';
import './ElephantsPage.scss';

export const ElephantsPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
    Img18,
    Img19,
    Img20,
    Img21,
    Img22,
  ];

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <Layout>
      <div className={'elephants-page'}>
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
    </Layout>
  );
};
