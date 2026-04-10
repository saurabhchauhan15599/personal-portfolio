import PropTypes from 'prop-types';
import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  memo,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';

import { Check, Minus } from 'lucide-react';
import './index.style.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    indeterminate = false,
    onChange,
    checked,
    defaultChecked,
    className,
    ...otherProps
  } = props;

  const [checkboxState, setCheckboxState] = useState(!!defaultChecked);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

  useEffect(() => {
    if (checked !== undefined) setCheckboxState(!!checked);
  }, [props.checked]);

  const renderCheckbox = useMemo(() => {
    const { disabled } = props;
    const baseClass = 'checkbox-svg flex items-center justify-center rounded-md border text-white transition-colors';

    if (disabled) {
      return (
        <div
          className={`${baseClass} border-gray-300 bg-gray-100 text-gray-400`}
          style={{ width: 18, height: 18 }}
        >
          {indeterminate ? (
            <Minus className="h-4 w-4" strokeWidth={3} />
          ) : checkboxState ? (
            <Check className="h-4 w-4" strokeWidth={3} />
          ) : null}
        </div>
      );
    }

    if (indeterminate) {
      return (
        <div
          className={`${baseClass} border-blue-600 bg-blue-50 text-blue-600`}
          style={{ width: 18, height: 18 }}
        >
          <Minus className="h-4 w-4" strokeWidth={3} />
        </div>
      );
    }

    if (checkboxState) {
      return (
        <div
          className={`${baseClass} border-green-600 bg-green-600`}
          style={{ width: 18, height: 18 }}
        >
          <Check className="h-4 w-4" strokeWidth={4} />
        </div>
      );
    }

    return <div className={`${baseClass} border-gray-400`} style={{ width: 18, height: 18 }} />;
  }, [props.indeterminate, checkboxState, props.disabled]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    if (checked !== undefined) return;
    setCheckboxState(event.currentTarget.checked);
  };

  return (
    <span className={`checkbox-input-wrapper ${className}`}>
      <input
        {...otherProps}
        ref={inputRef}
        checked={checkboxState}
        type="checkbox"
        className="input-checkbox"
        onChange={handleChange}
      />
      <span className="checkbox-ripple"></span>
      {renderCheckbox}
    </span>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
  indeterminate: false,
  disabled: false
};

Checkbox.propTypes = {
  indeterminate: PropTypes.bool
};

export type { CheckboxProps };
export default memo(Checkbox);
