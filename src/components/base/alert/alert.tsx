import PropTypes from 'prop-types';
import { CSSProperties, ReactNode, SyntheticEvent } from 'react';
import { AlertCircle, AlertTriangle, CheckCircle2, Info, X } from 'lucide-react';
import AlertTitle from './alert-title';
import './index.style.scss';

const alertIcons = {
  error: AlertCircle,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  none: Info
};

const crossIcons = {
  error: X,
  info: X,
  success: X,
  warning: X,
  none: X
};
export type severityType = 'error' | 'info' | 'success' | 'warning' | 'none';
export interface AlertProps {
  style?: CSSProperties;
  title?: ReactNode;
  severity?: severityType;
  children: ReactNode;
  icon?: boolean;
  actions?: ReactNode;
  onClose?: (event: SyntheticEvent) => void;
}

const Alert = (props: AlertProps) => {
  const { title, icon, style, children, actions, onClose, severity = 'success' } = props;

  const AlertIcon = alertIcons[severity];
  const CrossIcon = crossIcons[severity];

  return (
    <div role="alert" style={style} className={`alert-root alert-${severity}`}>
      {icon && (
        <div className="alert-icon-wrapper">
          <AlertIcon className="alert-icon" />
        </div>
      )}
      <div className="alert-message">
        {title && <AlertTitle>{title}</AlertTitle>}
        {children}
      </div>
      {!actions && onClose && (
        <button
          className="alert-close-icon-wrapper"
          onClick={onClose}
          type="button"
          aria-label="Close alert"
        >
          <CrossIcon className="alert-icon" />
        </button>
      )}
      {actions}
    </div>
  );
};

Alert.defaultProps = {
  severity: 'success',
  icon: true
};

Alert.propTypes = {
  severity: PropTypes.oneOf(['error', 'info', 'warning', 'success', 'none'])
};

export default Alert;
