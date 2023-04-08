import { FC } from 'react';

import { SelectFieldProps } from 'types';

import './SelectField.scss';

const SelectField: FC<SelectFieldProps> = (props) => {
  const { error, options, register, label } = props;
  const id = `select-${label}`;
  const registerData = register ? register() : {};
  return (
    <label htmlFor={id} className="select-field">
      <span>{label}</span>
      <select id={id} {...registerData} className="select-field__select">
        {options.map((it) => (
          <option key={it} value={it}>
            {it}
          </option>
        ))}
      </select>
      {error && <span>{error}</span>}
    </label>
  );
};

export default SelectField;
