import MuiTab, { TabProps as MuiTabProps } from '@mui/material/Tab';
import './index.style.scss';

const Tab = (props: MuiTabProps) => {
  return <MuiTab {...props} disableTouchRipple disableRipple disableFocusRipple />;
};

export default Tab;
