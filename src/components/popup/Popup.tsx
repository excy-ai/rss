import React from 'react';
import './Popup.scss';

interface PopupProps {
  children: React.ReactNode;
  onBackgroundClick?: () => void;
  offset?: number;
}

export class Popup extends React.Component<PopupProps> {
  render() {
    const offset = this.props.offset || 1;
    return (
      <div
        onClick={this.props.onBackgroundClick}
        style={{ zIndex: offset }}
        className="popup__background"
      >
        <div className="popup">{this.props.children}</div>
      </div>
    );
  }
}
