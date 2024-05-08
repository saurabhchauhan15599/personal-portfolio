import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/shadcn/ui/carousel';
import { Dialog, DialogContent } from '@/components/shadcn/ui/dialog';
import { CardActions, useMediaQuery } from '@mui/material';
import { Card, DocumentRow, Typography } from '@saurabh-chauhan/sc-components-library';
import { useState } from 'react';
import { CAROUSEL_IMAGES, PROJECTS_MAP } from '../../../helpers/constant';
import css from './index.module.scss';

const AddProjects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [carousel, setCarousel] = useState(CAROUSEL_IMAGES);
  const [data, setData] = useState<(typeof PROJECTS_MAP)[0]>();

  function handleCardClick(val: (typeof PROJECTS_MAP)[0]) {
    setOpen(!open);
    setData(val);
    switch (val.id) {
      case 1:
        setCarousel(CAROUSEL_IMAGES.slice(0, 2));
        break;
      case 2:
        setCarousel(CAROUSEL_IMAGES.slice(2, 4));
        break;
      default:
        setCarousel([]);
    }
  }

  return (
    <div className={css.projectsContainer} id="projects-section">
      <section className={css.title}>
        <Typography className={css.label}>Projects,</Typography>
      </section>
      <section className={css.grid}>
        {PROJECTS_MAP.map((val, index) => {
          return (
            <Card key={index} className={css.card} onClick={() => handleCardClick(val)}>
              <Typography variant="h3" className={css.subtext}>
                {val.label}
              </Typography>
              <img src={val.image} alt={val.label} className={css.logo} />
            </Card>
          );
        })}
      </section>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <DialogContent className="sm:max-w-[900px]">
          <Carousel className="w-full">
            <CarouselContent>
              {carousel.map((val, index) => (
                <CarouselItem key={index}>
                  <img src={val.src} className="carousel" alt={val.alt} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '0 1rem',
              paddingTop: '1rem'
            }}
          >
            <Typography variant="h5">{data?.label}</Typography>
            <Typography className={css.desc}>{data?.desc}</Typography>
          </section>
          <CardActions>
            <DocumentRow.View title="Link" document={data?.link as string} />
          </CardActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProjects;
