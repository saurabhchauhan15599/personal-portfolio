import { LinearProgress } from '@mui/material';
import Modal, { ModalProps } from '../modal';
import './index.style.scss';
import Spinner from './spinner';

export interface LoaderProps extends Omit<ModalProps, 'children'> {
  open: boolean;
  hideSpinner?: boolean;
}

const Loader = (props: LoaderProps) => {
  const { hideSpinner, ...otherProps } = props;

  return (
    <Modal {...otherProps}>
      <div className="loaderContainer">
        <div className="loader-wrapper">
          {!hideSpinner && <Spinner className="loader-spinner" />}
        </div>
        <div className="progress">
          <LinearProgress />
        </div>
      </div>
    </Modal>
  );
};

Loader.defaultProps = {
  hideSpinner: false
};

export default Loader;
export { Spinner };
