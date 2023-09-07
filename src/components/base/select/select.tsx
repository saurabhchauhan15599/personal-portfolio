import { Ref, forwardRef, useMemo } from 'react';
import ReactSelect, {
  ControlProps,
  GroupBase,
  MultiValue,
  OptionProps,
  PlaceholderProps,
  Props,
  SelectInstance,
  SingleValue
} from 'react-select';
import DropdownIndicator from './dropdown-indicator';
import './index.style.scss';
import Option from './option';
import ValueContainer from './value-container';

interface ISelectProps {
  id?: string;
  label: string;
  value: string;
}

interface SelectProps {
  tagLimit?: number;
  value?: SingleValue<ISelectProps> | MultiValue<ISelectProps>;
}

function RefSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: Props<Option, IsMulti, Group> & SelectProps,
  ref: Ref<SelectInstance<Option, IsMulti, Group>>
) {
  const { isMulti, value } = props;
  const selectClasses = useMemo(
    () => ({
      container: () => 'select-container',
      control: (props: ControlProps<Option, IsMulti, Group>) => {
        const { isFocused, isDisabled } = props;
        const disabledClass = isDisabled ? 'select-control-disabled' : null;
        const isFocusedClass = isFocused ? 'select-control-focused' : null;
        return `select-control ${disabledClass} ${isFocusedClass}`;
      },
      indicatorsContainer: () => 'select-indicators-wrapper',
      valueContainer: () => 'select-value-container',
      singleValue: () => 'select-single-value',
      placeholder: (props: PlaceholderProps<Option, IsMulti, Group>) => {
        const { isDisabled } = props;
        const disabledClass = isDisabled ? 'select-control-disabled' : null;
        return `select-placeholder ${disabledClass}`;
      },
      multiValue: () => 'select-multi-value',
      menu: () => 'select-menu',
      menuList: () => 'select-menu-list',
      option: (props: OptionProps<Option, IsMulti, Group>) => {
        const { isSelected } = props;
        const selectedClass = isSelected ? 'select-option-selected' : null;
        return `select-option-item ${selectedClass}`;
      }
    }),
    []
  );

  const selectComponents = useMemo(
    () => ({
      IndicatorSeparator: null,
      DropdownIndicator: DropdownIndicator,
      Option: Option,
      ValueContainer: ValueContainer
    }),
    []
  );

  return (
    <ReactSelect
      {...props}
      ref={ref}
      unstyled
      closeMenuOnSelect={!isMulti}
      blurInputOnSelect={!isMulti}
      hideSelectedOptions={false}
      classNames={selectClasses}
      components={selectComponents}
      value={value}
    />
  );
}

const Select = forwardRef(RefSelect);

Select.defaultProps = {
  isSearchable: false,
  placeholder: 'Select',
  isClearable: false,
  captureMenuScroll: true,
  menuShouldScrollIntoView: true,
  menuPlacement: 'auto',
  closeMenuOnScroll: false,
  tagLimit: 2,
  defaultValue: { label: null, value: null }
};

export default Select;
export type { SelectProps };
