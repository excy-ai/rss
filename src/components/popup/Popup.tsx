import React, { FC } from 'react';

import './Popup.scss';

interface PopupProps {
  children: React.ReactNode;
  onBackgroundClick?: () => void;
  offset?: number;
}

const Popup: FC<PopupProps> = (props) => {
  const offset = props.offset || 1;
  return (
    <div onClick={props.onBackgroundClick} style={{ zIndex: offset }} className="popup__background">
      <div className="popup">{props.children}</div>
    </div>
  );
};

export default Popup;
