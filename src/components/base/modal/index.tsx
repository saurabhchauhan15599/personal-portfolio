import MuiModal, { ModalProps as MuiModalProps } from '@mui/material/Modal';
import './index.style.scss';

const Modal = (props: MuiModalProps) => {
  const { children, ...otherProps } = props;
  return <MuiModal {...otherProps}>{children}</MuiModal>;
};

export default Modal;
export type { MuiModalProps as ModalProps };
