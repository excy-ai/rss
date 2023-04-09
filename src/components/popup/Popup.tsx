import { FC, ReactNode } from 'react';

import { createPortal } from 'react-dom';

import { BASIC_OFFSET } from 'components/constants';

import './Popup.scss';

interface PopupProps {
  children: ReactNode;
  onBackgroundClick?: () => void;
  offset?: number;
}

const Popup: FC<PopupProps> = (props) => {
  const offset = props.offset || BASIC_OFFSET;
  return createPortal(
    <div onClick={props.onBackgroundClick} style={{ zIndex: offset }} className="popup__background">
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button onClick={props.onBackgroundClick} className="popup__cross">
          &#215;
        </button>
        {props.children}
      </div>
    </div>,
    document.body
  );
};

export default Popup;
