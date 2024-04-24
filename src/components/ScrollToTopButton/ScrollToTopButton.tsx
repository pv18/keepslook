import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import s from './ScrollToTopButton.module.scss';

const sizeIcon = 30;
const colorIcon = '#000';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${s.scroll} ${isVisible ? `${s.visible}` : ''}`}
      onClick={scrollToTop}
    >
      <MdOutlineKeyboardDoubleArrowUp size={sizeIcon} color={colorIcon} />
    </div>
  );
};
