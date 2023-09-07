import {
  ChangeEvent,
  InputHTMLAttributes,
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';

import RadioCheckedDisabled from '../../../assets/icons/RadioCheckedDisabled';
import SelectedRadio from '../../../assets/icons/SelectedRadio';
import UnSelectedRadio from '../../../assets/icons/UnselectedRadio';
import './index.style.scss';

const Radio = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  const { checked, defaultChecked, ...otherProps } = props;
  const [radioState, setRadioState] = useState(!!defaultChecked);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

  useEffect(() => {
    if (checked !== undefined) setRadioState(!!checked);
  }, [props.checked]);

  const renderIcon = useMemo(() => {
    const { disabled } = props;
    if (disabled)
      return radioState ? (
        <RadioCheckedDisabled className="radio-icon" />
      ) : (
        <UnSelectedRadio className="radio-icon" />
      );
    return radioState ? (
      <SelectedRadio className="radio-icon" />
    ) : (
      <UnSelectedRadio className="radio-icon" />
    );
  }, [props.disabled, props.checked, radioState]);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, checked } = props;
    const radioStatus = event.currentTarget.checked;
    onChange?.(event);
    if (checked !== undefined) return;
    setRadioState(radioStatus);
  };

  return (
    <span className="radio-button-icon">
      <input
        {...otherProps}
        type="radio"
        ref={inputRef}
        checked={radioState}
        className="radio-input"
        onChange={handleRadioChange}
      />
      <span className="radio-ripple"></span>
      {renderIcon}
    </span>
  );
});

Radio.displayName = 'Radio';

export default memo(Radio);
