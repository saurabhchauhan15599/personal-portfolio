import { ChevronDown, ChevronUp } from 'lucide-react';
import { components, DropdownIndicatorProps, GroupBase } from 'react-select';

function DropdownIndicator<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: DropdownIndicatorProps<Option, IsMulti, Group>) {
  const { selectProps } = props;
  const { menuIsOpen } = selectProps;
  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown />}
    </components.DropdownIndicator>
  );
}

export default DropdownIndicator;
