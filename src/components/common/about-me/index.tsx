import React, { useContext } from 'react';
import ChevronDown from '../../../assets/icons/ChevronDown';
import { AppContext } from '../../../helpers/hooks/AppContext';
import Typography from '../../base/typography';
import css from './index.module.scss';

const AboutMe: React.FC = () => {
  const { appState } = useContext(AppContext);
  const { toggleTheme } = appState;
  const { theme } = toggleTheme;

  return (
      <section className={css.container}>
        <Typography className={css.label}>Hello, </Typography>
        <Typography className={css.label}>
          I am <span className={css.secondarylabel}>Saurabh</span>
          <span className={css.svg}>
            <ChevronDown
              color={theme === 'dark' ? '#D2FF85' : '#0EB1D2'}
            />
          </span>
        </Typography>
        <Typography className={css.label}>Software Developer </Typography>
      </section>
  );
};

export default AboutMe;
