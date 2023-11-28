import React from 'react';
import css from './index.module.scss';
import { Typography } from '@saurabh-chauhan/sc-components-library';

const Description: React.FC = () => {
  return (
    <div className={css.descContainer} id="description-section">
      <div>
        <Typography className={css.title}>About, </Typography>
      </div>
      <div>
        <Typography className={css.label}>
          Energetic software developer with experience in developing high-performance web
          technologies,
        </Typography>
        <Typography className={css.label}>
          <span className={css.secondarylabel}>Team player</span> with a will-do attitude,
        </Typography>
        <Typography className={css.label}>
          <span className={css.secondarylabel}>excellent communication</span> & software design
          skills with a <span className={css.secondarylabel}>strong user focus.</span>
        </Typography>
      </div>
    </div>
  );
};

export default Description;
