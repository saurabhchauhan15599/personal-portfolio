import PropTypes from 'prop-types';
import { HTMLAttributes, MouseEvent, ReactNode, memo } from 'react';
import CrossBlack from '../../../assets/icons/CrossBlack';
import Typography from '../typography';
import './index.style.scss';

interface TagsProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  showCloseIcon?: boolean;
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
  iconProps?: HTMLAttributes<HTMLButtonElement>;
  className?: string;
}

function Tags(props: TagsProps) {
  const { label, startIcon, endIcon, onClose, showCloseIcon, iconProps, className, ...otherProps } =
    props;
  return (
    <div className={`tag-root ${className}`} {...otherProps}>
      {startIcon}
      <Typography variant="span" className="tag-label">
        {label}
      </Typography>
      {endIcon}
      {showCloseIcon && (
        <button {...iconProps} className="tag-close-wrapper" onClick={onClose}>
          <CrossBlack />
        </button>
      )}
    </div>
  );
}

Tags.propTypes = {
  showCloseIcon: PropTypes.bool
};

Tags.defaultProps = {
  showCloseIcon: true
};

export default memo(Tags);
