import { Button } from '@mui/material';
import React, { useState } from 'react';
import css from './index.module.scss';

interface IImageCarousel {
  CAROUSEL_IMAGES: { src: string; alt: string }[];
  fallBack?: string;
}

const ImageCarousel: React.FC<IImageCarousel> = ({ CAROUSEL_IMAGES, fallBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % CAROUSEL_IMAGES.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className={css.imageCarousel}>
      <img
        src={CAROUSEL_IMAGES[currentIndex] ? CAROUSEL_IMAGES[currentIndex].src : fallBack}
        alt={CAROUSEL_IMAGES[currentIndex] ? CAROUSEL_IMAGES[currentIndex].alt : 'image'}
        className={css.carouselImage}
      />
      <Button
        onClick={handleNextClick}
        className={css.carouselButton}
        disabled={!CAROUSEL_IMAGES[currentIndex]}
      >
        Next
      </Button>
    </div>
  );
};

export default ImageCarousel;
