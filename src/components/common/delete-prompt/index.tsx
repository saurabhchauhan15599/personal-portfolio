import { Button, Modal, Typography } from '../../../components/base';
import css from './index.module.scss';

interface DeletePromptProps {
  open: boolean;
  onClose: () => void;
  onConfirm?: (data: any) => void;
}

function DeletePrompt(props: DeletePromptProps) {
  const { open, onClose, onConfirm } = props;

  return (
    <Modal open={open} onClose={onClose}>
      <div className={css.modalWrapper}>
        <Typography>Are you sure you want to delete</Typography>
        <div className={css.buttonWrapper}>
          <Button variant="contained" onClick={onConfirm}>
            Confirm
          </Button>
          <Button variant="outlined-secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletePrompt;
