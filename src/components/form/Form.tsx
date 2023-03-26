import * as React from 'react';
import { FormProps, ValidationError } from 'types';
import classNames from 'classnames';

import './Form.scss';

export class Form extends React.Component<FormProps> {
  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onError([]);
    const errors = this.props.validations
      .map((it) => it())
      .filter((it) => it !== undefined) as ValidationError[];
    errors.length ? this.props.onError(errors) : this.props.onSubmit();
  };

  render() {
    const { children, className, refProp } = this.props;
    return (
      <form className={classNames('form', className)} onSubmit={this.onSubmit} ref={refProp}>
        {children}
      </form>
    );
  }
}
