import { forwardRef, memo, SVGProps } from 'react';
import LoaderSpinner from '../../../assets/icons/LoaderSpinner';

const Spinner = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
  const { className, ...otherProps } = props;
  return <LoaderSpinner {...otherProps} ref={ref} className={`spinner-wrapper ${className}`} />;
});

Spinner.displayName = 'Spinner';
export default memo(Spinner);
