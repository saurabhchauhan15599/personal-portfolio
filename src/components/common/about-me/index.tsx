import React, { useContext } from 'react';
import ChevronDown from '../../../assets/icons/ChevronDown';
import { AppContext } from '../../../helpers/hooks/AppContext';
import css from './index.module.scss';
import { Typography } from '@saurabh-chauhan/sc-components-library';

const AboutMe: React.FC = () => {
  const { appState } = useContext(AppContext);
  const { toggleTheme } = appState;
  const { theme } = toggleTheme;

  return (
    <div className="w-auto flex justify-end pt-20 pr-4">
      <section className={css.subcontainer}>
        <Typography className={css.label}>Hello, </Typography>
        <Typography className={css.label}>
          I am <span className={css.secondarylabel}>Saurabh</span>
          <span className={css.svg}>
            <ChevronDown
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
