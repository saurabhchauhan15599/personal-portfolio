import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/shadcn/ui/carousel';
import { Dialog, DialogContent } from '@/components/shadcn/ui/dialog';
import { CardActions } from '@mui/material';
import { useMemo, useState } from 'react';
import { CAROUSEL_IMAGES, PROJECTS_MAP } from '../../../helpers/constant';
import Card from '../card';
import Typography from '../../base/typography';
import css from './index.module.scss';

type PortfolioProject = (typeof PROJECTS_MAP)[number];

const AddProjects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<PortfolioProject | null>(null);

  function handleCardClick(val: PortfolioProject) {
    setOpen(true);
    setData(val);
  }

  const carousel = useMemo(() => {
    if (!data?.isNda) return [];
    if (data.id === 1) return CAROUSEL_IMAGES.slice(0, 3);
    if (data.id === 3) return CAROUSEL_IMAGES.slice(2, 5);
    return CAROUSEL_IMAGES.slice(0, 2);
  }, [data]);

  return (
    <div className={css.projectsContainer} id="projects-section">
      <section className={css.titleSection}>
        <Typography variant="h2" className={css.label}>
          Projects
        </Typography>
        <div className={css.accentLine} />
      </section>
      <section className={css.grid}>
        {PROJECTS_MAP.map((val) => {
          return (
            <Card key={val.id} className={css.card} onClick={() => handleCardClick(val)}>
              <Typography variant="subheading2" className={css.subheading1}>
                {val.label}
              </Typography>
              <Typography className={css.client}>{val.client}</Typography>
              {val.image ? (
                <img src={val.image} alt={val.label} className={css.logo} />
              ) : (
                <div className={css.logoPlaceholder}>
                  <Typography className={css.logoPlaceholderText}>
                    NDA-safe visual preview available in modal carousel
                  </Typography>
                </div>
              )}
              <Typography className={css.impact}>{val.impact}</Typography>
            </Card>
          );
        })}
      </section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[900px]">
          {carousel.length > 0 && (
            <Carousel className="w-full">
              <CarouselContent>
                {carousel.map((val) => (
                  <CarouselItem key={val.src}>
                    <img src={val.src} className="carousel" alt={val.alt} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
          <section className={css.modalContent}>
            <Typography variant="h5">{data?.label}</Typography>
            <Typography className={css.desc}>{data?.desc}</Typography>
            <div className={css.stackContainer}>
              {data?.stack?.map((item) => (
                <span className={css.stackPill} key={item}>
                  {item}
                </span>
              ))}
            </div>
            {data?.isNda && (
              <Typography className={css.note}>
                NDA-safe summary. Detailed implementation remains confidential.
              </Typography>
            )}
          </section>
          {data?.link && (
            <CardActions>
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Visit project
              </a>
            </CardActions>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProjects;
