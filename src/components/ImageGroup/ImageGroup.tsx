import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { Carousel } from 'antd';
import { PiCardsBold, PiCardsFill } from 'react-icons/pi';
import s from './ImageGroup.module.scss';

interface ImageGroupProps {
  images: string[];
}

export const ImageGroup: FC<ImageGroupProps> = memo(({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className={s.wrapper}>
      {isViewerOpen ? (
        <div className={s.viewer}>
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        </div>
      ) : (
        <Carousel>
          {images.map((item, index) => (
            <div
              key={index}
              className={s.imageWrapper}
              onClick={() => openImageViewer(index)}
            >
              <img src={item} />
              {images.length > 1 && index === 0 && (
                <div className={s.info}>
                  <PiCardsFill size={'40px'} color={'#fff'} />
                </div>
              )}
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
});
