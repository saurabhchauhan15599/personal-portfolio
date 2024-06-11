import { useContext } from 'react';
import { DARK_MODE_MAP, skillsArray } from '../../../helpers/constant';
import { AppContext } from '../../../helpers/hooks/AppContext';
import Typography from '../../base/typography';
import Tooltip from '../tooltip';
import css from './index.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';

const Skills = () => {
  const { appState } = useContext(AppContext);
  const { toggleTheme } = appState;
  const { theme } = toggleTheme;
  const mobileLayout = useMediaQuery('(max-width:480px)');
  const tabletLayout = useMediaQuery('(max-width:768px)');

  return (
    <section className={css.skills} id="skills-section">
      <section className={css.title}>
        <Typography className={css.label}>Skills,</Typography>
      </section>
      <div className={css.skillsContainer}>
        {skillsArray.map((val, index) => {
          return (
            <div key={index} className={css.subContainer}>
              <val.element
                height={mobileLayout ? 80 : tabletLayout ? 150 : ''}
                data-tooltip-target={`tooltip-animation-${index}`}
                color={theme === DARK_MODE_MAP.dark ? '#ffffff' : '#000000'}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
