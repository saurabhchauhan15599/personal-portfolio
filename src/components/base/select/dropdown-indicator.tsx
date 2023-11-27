import { ChevronUpIcon } from '@saurabh-chauhan/sc-components-library';
import { components, DropdownIndicatorProps, GroupBase } from 'react-select';
import ChevronDown from '../../../assets/icons/ChevronDown';

function DropdownIndicator<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: DropdownIndicatorProps<Option, IsMulti, Group>) {
  const { selectProps } = props;
  const { menuIsOpen } = selectProps;
  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? <ChevronUpIcon /> : <ChevronDown />}
    </components.DropdownIndicator>
  );
}

export default DropdownIndicator;
