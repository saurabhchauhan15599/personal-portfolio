import React from 'react';
import Typography from '../../base/typography';
import css from './index.module.scss';

const Description: React.FC = () => {
  return (
    <div className={css.descContainer} id="description-section">
      <section className={css.titleSection}>
        <Typography variant="h2" className={css.title}>
          About
        </Typography>
        <div className={css.accentLine} />
      </section>
      <div>
        <Typography className={css.label}>
          Frontend-focused engineer with 4 years of experience building modern, scalable products.
        </Typography>
        <Typography className={css.label}>
          Currently shipping for global e-commerce brands at THG across architecture migration,
          <span className={css.secondarylabel}> Core Web Vitals </span> and secure feature delivery.
        </Typography>
        <Typography className={css.label}>
          I care about performance, DX, and thoughtful UI details that make products feel fast and
          trustworthy.
        </Typography>
      </div>
    </div>
  );
};

export default Description;
