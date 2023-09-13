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
    <div className="animate-fade-out-down w-full flex justify-end pt-20 pr-4 [animation-timeline:scroll()] [animation-range:0px_300px]"> 
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
