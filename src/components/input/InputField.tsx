import React, { FC } from 'react';

import classNames from 'classnames';

import { InputFieldProps } from 'types';

import './InputField.scss';

const InputField: FC<InputFieldProps> = (props) => {
  const {
    id,
    name,
    type,
    value,
    label,
    error,
    className,
    inputClassName,
    labelClassName,
    fileTypes,
    hideError,
    register,
  } = props;

  const isCheckable = type === 'checkbox' || type === 'radio';
  const registerData = register ? register() : {};
  const inputComponent = (
    <input
      {...registerData}
      className={classNames('input-field__input', inputClassName)}
      name={name}
      id={id}
      type={type}
      accept={fileTypes}
      defaultValue={value}
      placeholder={label}
    />
  );
  const errorComponent = error ? (
    <span className="form__error">{error}</span>
  ) : (
    !isCheckable && <div className="form__error-placeholder" />
  );
  const labelTextComponent = (label || value) && (
    <span className={classNames('input-field__label', labelClassName)}>{label || value}</span>
  );
  const namedInput = isCheckable ? (
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
};

export default InputField;
