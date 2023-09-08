import React, { ChangeEvent, useEffect, useId, useMemo, useState } from 'react';
import Radio from '../radio';
import './index.style.scss';
export interface IRadioGroupValue {
  label: string;
  value: string;
}

interface IRadioGroups {
  name?: string;
  checked?: IRadioGroupValue;
  defaultChecked?: IRadioGroupValue;
  options: IRadioGroupValue[];
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: IRadioGroupValue) => void;
}

function RadioGroup(props: IRadioGroups) {
  const id = useId();
  const { options, defaultChecked = null } = props;
  const [radioState, setRadioState] = useState<IRadioGroupValue | null>(defaultChecked);

  useEffect(() => {
    const { checked } = props;
    if (checked !== undefined) setRadioState(checked || null);
  }, [props.checked]);

  const radioName = useMemo(() => {
    const { name } = props;
    return name ? name : id;
  }, []);

  const handleRadioChange = (item: IRadioGroupValue) => (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, checked } = props;
    onChange && onChange(event, item);
    if (checked !== undefined) return;
    setRadioState(item);
  };

  return (
    <div className="radio-group-wrapper">
      {options?.map((item, index) => (
        <Radio
          key={index}
          name={radioName}
          checked={item.value === radioState?.value}
          onChange={handleRadioChange(item)}
          label={item.label}
          value={item.value}
        />
      ))}
    </div>
  );
}

export default React.memo(RadioGroup);
