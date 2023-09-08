/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from 'react-router-dom';
import { primaryNavigation, secondaryNavigation } from '../../../helpers/constant';
import Divider from '../../base/divider';
import Typography from '../../base/typography';
import css from './index.module.scss';

interface IHeader {
  theme?: string;
  setTheme?: (theme: string) => void;
}

const Header = (props: IHeader) => {
  const { theme } = props;
  return (
    <div className={css.header}>
      <section className={css.title}>
        <Typography variant="h1" className={css.text}>
          Saurabh Chauhan
        </Typography>
      </section>
      <section className={css.links}>
        <div className={css.primary}>
          {primaryNavigation.map((val, index) => {
            return (
              <Typography key={index} className={css.link}>
                <Link to={val.link}>{val.label}</Link>
              </Typography>
            );
          })}
        </div>
        <Divider className={css.divider} />
        <div className={css.secondary}>
          {secondaryNavigation.map((val, index) => {
            return (
              <a href={val.link} target="_blank" rel="noopener noreferrer" key={index}>
                <val.component className={css.logo} color={!theme ? '#fff' : '#000000'} />
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Header;
