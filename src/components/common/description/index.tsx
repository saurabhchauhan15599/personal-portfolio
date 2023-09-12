import React from 'react';
import Typography from '../../base/typography';
import css from './index.module.scss';

const Description: React.FC = () => {
  return (
    <div className={css.container}>
      <Typography className={css.label}>
        Energetic software developer with experience in developing high-performance web
        technologies,
      </Typography>
      <Typography className={css.label}>
        <span className={css.secondarylabel}>Team player</span> with a will-do attitude,
      </Typography>
      <Typography className={css.label}>
        <span className={css.secondarylabel}>excellent communication</span> & software design skills
        with a <span className={css.secondarylabel}>strong user focus.</span>
      </Typography>
    </div>
  );
};

export default Description;
