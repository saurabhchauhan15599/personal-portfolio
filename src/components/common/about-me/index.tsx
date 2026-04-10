import { ChevronDown } from 'lucide-react';
import React, { useContext } from 'react';
import { AppContext } from '../../../helpers/hooks/AppContext';
import Typography from '../../base/typography';
import css from './index.module.scss';

const AboutMe: React.FC = () => {
  const { appState } = useContext(AppContext);
  const { toggleTheme } = appState;
  const { theme } = toggleTheme;

  return (
    <div className={css.aboutContainer} id="aboutMe-section">
      <section className={css.subcontainer}>
        <Typography className={css.greeting}>Hi, I am</Typography>
        <section className={css.titleSection}>
          <Typography className={css.label}>
            <span className={css.secondarylabel}>Saurabh Chauhan</span>
          </Typography>
          <div className={css.accentLine} />
        </section>
        <Typography className={css.role}>Frontend Engineer</Typography>
        <Typography className={css.caption}>
          Building high-traffic e-commerce experiences with performance, personalization, and
          reliability in mind.
        </Typography>
        <span className={css.svg}>
          <ChevronDown
            className="transition ease-in-out hover:-translate-y-1 hover:duration-300"
            color={theme === 'dark' ? '#34d399' : '#0f766e'}
            size={48}
            strokeWidth={2.5}
          />
        </span>
      </section>
    </div>
  );
};

export default AboutMe;
