import { Button } from '@mui/material';
import React, { useState } from 'react';
import { CAROUSEL_IMAGES } from '../../../helpers/constant';
import css from './index.module.scss';

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % CAROUSEL_IMAGES.length;
    console.log(nextIndex);
    setCurrentIndex(nextIndex);
  };

  return (
    <div className={css.imageCarousel}>
      <img
        src={CAROUSEL_IMAGES[currentIndex].src}
        alt={CAROUSEL_IMAGES[currentIndex].alt}
        className={css.carouselImage}
      />
      <Button onClick={handleNextClick} className={css.carouselButton}>
        Next
      </Button>
    </div>
  );
};

export default ImageCarousel;
