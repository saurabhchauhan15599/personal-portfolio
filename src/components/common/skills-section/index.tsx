import { useContext } from 'react';
import { DARK_MODE_MAP, skillsArray } from '../../../helpers/constant';
import { AppContext } from '../../../helpers/hooks/AppContext';
import Typography from '../../base/typography';
import css from './index.module.scss';

const Skills = () => {
  const { appState } = useContext(AppContext);
  const { toggleTheme } = appState;
  const { theme } = toggleTheme;
  return (
    <section className={css.skills}>
      <Typography className={css.label}>Skills</Typography>
      <div className={css.container}>
        {skillsArray.map((val, index) => {
          return (
            <val.element key={index} color={theme === DARK_MODE_MAP.dark ? '#ffffff' : '#000000'} />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
