import { FunctionComponent, SVGProps } from 'react';
import AlertError from '../icons/AlertError';
import AlertInfo from '../icons/AlertInfo';
import AlertSuccess from '../icons/AlertSuccess';
import AlertWarning from '../icons/AlertWarning';
import CrossBlue from '../icons/CrossBlue';
import CrossGreen from '../icons/CrossGreen';
import CrossRed from '../icons/CrossRed';
import CrossYellow from '../icons/CrossYellow';

const Images: Record<string, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  alertError: AlertError,
  alertSuccess: AlertSuccess,
  alertInfo: AlertInfo,
  alertWarning: AlertWarning,
  crossRed: CrossRed,
  crossGreen: CrossGreen,
  crossBlue: CrossBlue,
  crossYellow: CrossYellow
};

export default Images;
