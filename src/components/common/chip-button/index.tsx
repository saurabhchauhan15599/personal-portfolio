import { SyntheticEvent } from 'react';
import { Typography } from '../../base/index';
import './index.style.scss';

// export type ChipButtonType = 'review' | 'start';

interface IChipProps {
  isCompleted: boolean;
  onClick?: (event: SyntheticEvent) => void;
}

const ChipButton = (props: IChipProps) => {
  const { isCompleted, onClick } = props;
  return (
    <div onClick={onClick} className={`buttonContainer-${isCompleted}`} aria-hidden>
      <Typography className={`typographyContainer`}>{isCompleted ? 'Review' : 'Start'}</Typography>
    </div>
  );
};

export default ChipButton;
