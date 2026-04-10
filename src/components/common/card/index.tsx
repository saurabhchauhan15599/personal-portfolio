import { ReactNode, SyntheticEvent } from 'react';
import css from './index.module.scss';

interface ICardProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: SyntheticEvent) => void;
}

const Card = (props: ICardProps) => {
  const { children, className, onClick } = props;
  const clickable = Boolean(onClick);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${css.cardContainer} ${className}`}
      disabled={!clickable}
      aria-label={clickable ? 'Open project details' : undefined}
    >
      {children}
    </button>
  );
};

export default Card;
