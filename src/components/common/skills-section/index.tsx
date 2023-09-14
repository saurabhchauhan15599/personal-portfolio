import { useContext } from 'react';
import { DARK_MODE_MAP, skillsArray } from '../../../helpers/constant';
import { AppContext } from '../../../helpers/hooks/AppContext';
import Typography from '../../base/typography';
import Tooltip from '../tooltip';
import css from './index.module.scss';

const Skills = () => {
  const { appState } = useContext(AppContext);
  const { toggleTheme } = appState;
  const { theme } = toggleTheme;
  return (
    <section className={css.skills}>
      <div className={css.container}>
        {skillsArray.map((val, index) => {
          return (
            <div key={index} className={css.subContainer}>
              <Tooltip id={`tooltip-animation-${index}`}>
                <Typography>{val.label}</Typography>
              </Tooltip>
              <val.element
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
