import PropTypes from 'prop-types';
import { Children, cloneElement, ReactElement } from 'react';
import './index.style.scss';

interface ButtonGroupProps {
  orientation: 'horizontal' | 'vertical';
  children: ReactElement[];
}

function ButtonGroup(props: ButtonGroupProps) {
  const { children, orientation } = props;

  const flexDirection = orientation === 'horizontal' ? 'row' : 'column';

  return (
    <div role="group" style={{ flexDirection }} className="button-group-root">
      {Children.map(children, (child) =>
        cloneElement(child, {
          className: `button-group-children-${orientation}`,
        }),
      )}
    </div>
  );
}

ButtonGroup.defaultProps = {
  orientation: 'horizontal',
};

ButtonGroup.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default ButtonGroup;
