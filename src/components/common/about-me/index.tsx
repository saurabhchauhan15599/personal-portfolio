import { useMediaQuery } from '@mui/material';
import { Typography } from '@saurabh-chauhan/sc-components-library';
import React, { useContext } from 'react';
import ChevronDown from '../../../assets/icons/ChevronDown';
import { AppContext } from '../../../helpers/hooks/AppContext';
import css from './index.module.scss';

const AboutMe: React.FC = () => {
  const { appState } = useContext(AppContext);
  const { toggleTheme } = appState;
  const { theme } = toggleTheme;
  const mobileLayout = useMediaQuery('(max-width:480px)');
  const tabletLayout = useMediaQuery('(max-width:768px)');

  return (
    <div className={css.aboutContainer} id="aboutMe-section">
      <section className={css.subcontainer}>
        <Typography className={css.label}>Hello, </Typography>
        <Typography className={css.label}>
          I am, <span className={css.secondarylabel}>Saurabh</span>
          <span className={css.svg}>
            <ChevronDown
              height={mobileLayout ? 30 : tabletLayout ? 50 : ''}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
              color={theme === 'dark' ? '#D2FF85' : '#0EB1D2'}
            />
          </span>
        </Typography>
        <Typography className={css.label}>Software Developer </Typography>
      </section>
    </div>
  );
};

export default AboutMe;
