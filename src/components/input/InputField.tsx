import * as React from 'react';
import { InputFieldProps } from 'types';
import classNames from 'classnames';

import './InputField.scss';

class InputField extends React.Component<InputFieldProps> {
  isCheckable() {
    const { type } = this.props;
    return type === 'checkbox' || type === 'radio';
  }

  render() {
    const {
      id,
      name,
      type,
      refProp,
      value,
      label,
      error,
      className,
      inputClassName,
      labelClassName,
      fileTypes,
      hideError,
    } = this.props;

    const inputComponent = (
      <input
        className={classNames('input-field__input', inputClassName)}
        name={name}
        id={id}
        type={type}
        accept={fileTypes}
        ref={refProp}
        defaultValue={value}
        placeholder={label}
      />
    );
    const errorComponent = error ? (
      <span className="form__error">{error.message}</span>
    ) : (
      !this.isCheckable() && <div className="form__error-placeholder" />
    );
    const labelTextComponent = (label || value) && (
      <span className={classNames('input-field__label', labelClassName)}>{label || value}</span>
    );
    const namedInput = this.isCheckable() ? (
      <>
        {inputComponent}
        {labelTextComponent}
      </>
    ) : (
      <>
        {labelTextComponent}
        {inputComponent}
      </>
    );
    return (
      <>
        <label
          htmlFor={id}
          className={classNames(
            'input-field',
            {
              'input-field__checkbox': type === 'checkbox',
              'input-field__radio': type === 'radio',
            },
            className
          )}
        >
          {namedInput}
        </label>
        {!hideError && errorComponent}
      </>
    );
  }
}

export default InputField;
