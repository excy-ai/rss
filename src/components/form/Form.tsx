import { FC } from 'react';

import classNames from 'classnames';

import { FormProps } from 'types';

import './Form.scss';

const Form: FC<FormProps> = (props) => {
  const { children, className } = props;
  return (
    <form className={classNames('form', className)} onSubmit={props.onSubmit}>
      {children}
    </form>
  );
};

export default Form;
