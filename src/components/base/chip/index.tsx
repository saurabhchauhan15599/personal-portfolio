import PropTypes from 'prop-types';
import { HTMLAttributes, MouseEvent, ReactNode, memo, useCallback, useMemo } from 'react';
import CloseIcon from '../../../assets/icons/CloseIcon';
import Typography from '../typography';
import './index.style.scss';

export type chipVariantType =
  | 'filled'
  | 'outlined'
  | 'filled-blue'
  | 'filled-red'
  | 'filled-yellow'
  | 'filled-green';

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  variant?: chipVariantType;
  label: ReactNode;
  className?: string;
  showCloseIcon?: boolean;
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconProps?: HTMLAttributes<HTMLButtonElement>;
  clickable?: boolean;
}

function Chip(props: ChipProps) {
  const {
    startIcon,
    endIcon,
    label,
    variant,
    showCloseIcon,
    className,
    iconProps,
    clickable,
    ...otherProps
  } = props;

  const handleCloseClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const { onClose, clickable } = props;
      clickable && event.stopPropagation();
      onClose?.(event);
    },
    [props.onClose, props.clickable]
  );

  const rootClickableClass = useMemo(
    () => (clickable ? 'chip-clickable' : null),
    [props.clickable]
  );

  return (
    <div className={`chip-root chip-${variant} ${rootClickableClass} ${className}`} {...otherProps}>
      {startIcon}
      <Typography variant="span" className="chip-label">
        {label}
      </Typography>
      {endIcon}
      {showCloseIcon && (
        <button className="close-icon-wrapper" onClick={handleCloseClick} {...iconProps}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

Chip.defaultProps = {
  variant: 'outlined',
  showCloseIcon: false,
  clickable: true
};

Chip.propTypes = {
  variant: PropTypes.oneOf([
    'filled',
    'outlined',
    'filled-blue',
    'filled-red',
    'filled-yellow',
    'filled-green'
  ]),
  showCloseIcon: PropTypes.bool,
  className: PropTypes.string,
  clickable: PropTypes.bool
};

export default memo(Chip);
