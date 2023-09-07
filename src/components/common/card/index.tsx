import { ReactNode, SyntheticEvent } from 'react';
import css from './index.module.scss';

interface ICardProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: SyntheticEvent) => void;
}

const Card = (props: ICardProps) => {
  const { children, className, onClick } = props;

  return (
    <div onClick={onClick} className={`${css.cardContainer} ${className}`} aria-hidden>
      {children}
    </div>
  );
};

export default Card;
