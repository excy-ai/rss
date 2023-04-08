import { FC } from 'react';

import './ConfirmationDialog.scss';

type ConfirmationDialogProps = {
  text: string;
  okText?: string;
  onOkClick: () => void;
};

export const ConfirmationDialog: FC<ConfirmationDialogProps> = (props) => {
  const { okText, text, onOkClick } = props;
  return (
    <div className="dialog">
      <h3 className="dialog__text">{text}</h3>
      <button className="dialog__ok" onClick={onOkClick}>
        {okText || 'OK'}
      </button>
    </div>
  );
};
