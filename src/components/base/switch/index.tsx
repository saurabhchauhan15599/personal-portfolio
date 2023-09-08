import PropTypes from 'prop-types';
import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import './index.style.scss';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  className?: string;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

const Switch = forwardRef((props: SwitchProps, ref) => {
  const { className, labelProps, defaultChecked, ...otherProps } = props;

  const [switchState, setSwitchState] = useState(!!defaultChecked);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const { checked } = props;
    if (checked !== undefined) setSwitchState(!!checked);
  }, [props.checked]);

  useImperativeHandle(ref, () => inputRef.current, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, checked } = props;
    onChange?.(event);
    if (checked !== undefined) return;
    setSwitchState(event.currentTarget.checked);
  };

  return (
    <label className={`switch ${className}`} {...labelProps}>
      <input type="checkbox" checked={switchState} onChange={handleChange} {...otherProps} />
      <span className="slider round"></span>
    </label>
  );
});

Switch.propTypes = {
  checked: PropTypes.bool
};

Switch.displayName = 'Switch';

export default memo(Switch);
