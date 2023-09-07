import { ReactNode } from 'react';
import css from './index.module.scss';

interface BoxContainerProps {
  title: ReactNode;
  children: ReactNode;
  subheader?: ReactNode;
  className?: string;
}

const BoxContainer = (props: BoxContainerProps) => {
  const { title, children, className, subheader } = props;
  return (
    <div className={[css.wrapper, className].join(' ')}>
      <section className={css.titleWrapper}>
        {title}
        {subheader}
      </section>
      <div className={css.contentWrapper}>{children}</div>
    </div>
  );
};

export default BoxContainer;
