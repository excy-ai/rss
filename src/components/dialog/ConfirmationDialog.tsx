import * as React from 'react';

import './ConfirmationDialog.scss';

type ConfirmationDialogProps = {
  text: string;
  okText?: string;
  onOkClick: () => void;
};

export class ConfirmationDialog extends React.Component<ConfirmationDialogProps> {
  render() {
    const { okText, text, onOkClick } = this.props;
    return (
      <div className="dialog">
        <h3 className="dialog__text">{text}</h3>
        <button className="dialog__ok" onClick={onOkClick}>
          {okText || 'OK'}
        </button>
      </div>
    );
  }
}
