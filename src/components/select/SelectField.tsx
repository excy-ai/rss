import * as React from 'react';
import { SelectFieldProps } from 'types';

import './SelectField.scss';

class SelectField extends React.Component<SelectFieldProps> {
  render() {
    const { error, options, refProp, label } = this.props;
    const id = `select-${label}`;
    return (
      <>
        <label htmlFor={id} className="select-field">
          <span>{label}</span>
          <select id={id} ref={refProp} className="select-field__select">
            {options.map((it) => (
              <option key={it} value={it}>
                {it}
              </option>
            ))}
          </select>
          {error && <span>{error.message}</span>}
        </label>
      </>
    );
  }
}

export default SelectField;
