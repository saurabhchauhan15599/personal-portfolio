import { HTMLAttributes, memo } from 'react';
import css from './index.module.scss';

const Divider = (props: HTMLAttributes<HTMLHRElement>) => {
  const { className, ...otherProps } = props;
  return <hr {...otherProps} className={`${css.dividerRoot} ${className}`} role="presentation" />;
};

export default memo(Divider);
