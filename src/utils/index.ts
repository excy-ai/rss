import React from 'react';
import { v4 as uuid } from 'uuid';

export * from './validationUtils';

export interface ValueWithRef<T> {
  id: string;
  value: string | number;
  ref: React.RefObject<T>;
}

const toValueWithRef = <T>(it: string | number): ValueWithRef<T> => {
  return {
    id: uuid(),
    value: it,
    ref: React.createRef<T>(),
  };
};

export { toValueWithRef };
