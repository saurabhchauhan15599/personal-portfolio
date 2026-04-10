import { skillsArray } from '../../../helpers/constant';
import Typography from '../../base/typography';
import css from './index.module.scss';

const Skills = () => {
  return (
    <section className={css.skills} id="skills-section">
      <section className={css.titleSection}>
        <Typography variant="h2" className={css.label}>
          Skills
        </Typography>
        <div className={css.accentLine} />
      </section>
      <div className={css.skillsContainer}>
        {skillsArray.map((val) => {
          return (
            <div key={val.id} className={css.subContainer}>
              <img
                src={val.iconUrl}
                alt={val.label}
                className={css.skillIcon}
                data-tooltip-target={`tooltip-animation-${val.id}`}
                loading="lazy"
              />
              <Typography className={css.skillLabel}>{val.label}</Typography>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
