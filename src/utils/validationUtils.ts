import React, { RefObject } from 'react';

type ValidationRef = RefObject<HTMLInputElement | HTMLSelectElement>;

const generateIsFieldEmptyValidation = (id: string, ref: ValidationRef, errorText: string) => {
  return () => {
    return !!ref?.current?.value
      ? undefined
      : {
          id,
          message: errorText,
        };
  };
};
const generateIsAnyCheckedValidation = (
  id: string,
  refs: RefObject<HTMLInputElement>[],
  errorText: string
) => {
  return () => {
    return refs.filter((it) => it.current?.checked).length
      ? undefined
      : {
          id,
          message: errorText,
        };
  };
};

const clearRef = <T extends HTMLInputElement | HTMLSelectElement>(ref: React.RefObject<T>) => {
  const current = ref.current;
  if (current) {
    current.value = '';
    if (current instanceof HTMLInputElement) {
      current.files = null;
      current.checked = false;
    }
  }
};

export { generateIsFieldEmptyValidation, generateIsAnyCheckedValidation, clearRef };
