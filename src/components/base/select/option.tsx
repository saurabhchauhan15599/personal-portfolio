import { Check } from 'lucide-react';
import { MouseEvent, useCallback, useMemo } from 'react';
import { GroupBase, OptionProps, components } from 'react-select';
import CheckboxLabel from '../checkbox/checkbox-label';

function Option<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: OptionProps<Option, IsMulti, Group>) {
  const { label, isSelected, isMulti, isDisabled } = props;

  const labelClickHandler = useCallback(
    (event: MouseEvent<HTMLLabelElement>) => event.preventDefault(),
    []
  );

  const labelProps = useMemo(
    () => ({
      onClick: labelClickHandler
    }),
    []
  );
  return (
    <components.Option {...props}>
      {isMulti ? (
        <CheckboxLabel
          label={label}
          checked={isSelected}
          disabled={isDisabled}
          labelProps={labelProps}
        />
      ) : (
        label
      )}
      {isMulti ? null : isSelected ? <Check className="h-4 w-4 text-green-500" /> : null}
    </components.Option>
  );
}

export default Option;
