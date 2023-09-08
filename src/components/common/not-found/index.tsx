import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/notFound.png';
import styles from './notFound.module.scss';

export const NotFound = () => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate('/');
  };

  const onErrorImage = ({ currentTarget }: SyntheticEvent<HTMLImageElement, Event>): void => {
    currentTarget.onerror = null;
    currentTarget.src =
      'https://t4.ftcdn.net/jpg/01/98/86/63/360_F_198866399_vQambmqMEK9975X1Yg7686t4nFpSaubL.jpg';
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="404" className={styles.img} onError={onErrorImage} />
      <div className={styles['msg']}>
        <p className={styles.link_text}>
          Let&apos;s go
          <span onClick={() => onNavigate()} className={styles.link} aria-hidden={true}>
            {' '}
            Register{' '}
          </span>
          and try again...
        </p>
      </div>
    </div>
  );
};

export default NotFound;
