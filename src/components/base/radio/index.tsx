import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode, forwardRef, memo } from 'react';
import './index.style.scss';
import RadioButton from './radio-button';

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  labelClassName?: string;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

const Radio = forwardRef<HTMLInputElement, IRadioProps>((props, ref) => {
  const { label, labelClassName, labelProps, ...otherProps } = props;
  return (
    <label {...labelProps} className={`radio-label-wrapper ${labelClassName}`}>
      {label && <span className="radio-label">{label}</span>}
      <RadioButton {...otherProps} ref={ref} />
    </label>
  );
});

Radio.displayName = 'Radio';

export default memo(Radio);

export { RadioButton };
