import { SyntheticEvent } from 'react';
import CompletedStatus from '../../../assets/icons/CompletedStatus';
import LockIcon from '../../../assets/icons/LockIcon';
import NotStarted from '../../../assets/icons/NotStartedStatus';
import AdaptiveTypography from '../../base/adaptive-typography';
import Card from '../card/index';
import ChipButton from '../chip-button/index';
import './index.style.scss';

export type IStepCardType = 'enabled' | 'disabled';

interface IStepCardProps {
  status: boolean;
  stepNumber: number;
  stepDescription: string;
  variant: IStepCardType;
  className?: string;
  onButtonClick?: (event: SyntheticEvent) => void;
}

const StepCard = (props: IStepCardProps) => {
  const { status, stepNumber, stepDescription, className, variant, onButtonClick } = props;

  return (
    <Card onClick={onButtonClick} className={`cardContainer-${variant} ${className}`}>
      <div className={`stepperContainer-${variant}`}>
        {variant == 'enabled' && (
          <div className={`statusContainer-${variant}`}>
            {status && <CompletedStatus />}
            {!status && <NotStarted />}
          </div>
        )}
        {variant == 'disabled' && (
          <div className={`statusContainer-${variant}`}>
            <LockIcon />
          </div>
        )}
        <div className={`contentContainer-${variant}`}>
          <AdaptiveTypography variant="label2" mobileVariant="label">{`Step ${stepNumber}`}</AdaptiveTypography>
          <AdaptiveTypography variant="label2" mobileVariant="subheading2">
            {stepDescription}
          </AdaptiveTypography>
        </div>
        <div className={`buttonContainer-${variant}`}>
          {variant == 'enabled' && <ChipButton isCompleted={status} />}
        </div>
      </div>
    </Card>
  );
};

export default StepCard;
