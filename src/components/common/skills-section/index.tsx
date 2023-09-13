import css from './index.module.scss';
import { skillsArray } from '../../../helpers/constant';
import Typography from '../../base/typography';
import Tooltip from '../tooltip';

const Skills = () => {
  return (
    <div className={css.container}>
      {skillsArray.map((val, index) => {
        return (
          <div key={index} className={css.subContainer}>
            <Tooltip id={`tooltip-animation`}>
              <Typography>{val.label}</Typography>
            </Tooltip>
            <val.element data-tooltip-target={`tooltip-animation`} />
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
