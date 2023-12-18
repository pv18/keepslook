import React, { useCallback, useState } from 'react';
import Img1 from 'img/pictures/1.jpg';
import Img2 from 'img/pictures/2.jpg';
import Img3 from 'img/pictures/3.jpg';
import Img4 from 'img/pictures/4.jpg';
import { Layout, Photo } from 'components';
import ImageViewer from 'react-simple-image-viewer';
import './PicturesPage.scss';

export const PicturesPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [Img1, Img2, Img3, Img4];

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
      <div className={'pictures-page'}>
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
