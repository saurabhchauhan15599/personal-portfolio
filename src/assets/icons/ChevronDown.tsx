import React from 'react';
import { SVGProps } from '../../helpers/types';

const ChevronDown: React.FC<SVGProps> = ({ color = '#000000', ...props }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.59 0.540955L6 5.12095L1.41 0.540955L0 1.95095L6 7.95095L12 1.95095L10.59 0.540955Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronDown;
