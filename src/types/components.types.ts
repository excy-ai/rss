import * as React from 'react';
import { ReactNode } from 'react';

export interface CardProps {
  date?: string;
  weight: string;
  name: string;
  temperament: string;
  origin: string;
  country_code: string;
  description?: string;
  life_span: string;
  wikipedia_url?: string;
  reference_image_id?: string;
  image_url?: string;
}

export interface CardFieldProps {
  caption: string;
  children: string | ReactNode;
}

export interface ValidationError {
  id: string;
  message: string;
}

export type Validation = () => ValidationError | undefined;

export interface FormProps {
  className?: string;
  onSubmit: () => void;
  validations: Validation[];
  onError: (errors: ValidationError[]) => void;
  children: React.ReactNode | JSX.Element;
  refProp?: React.RefObject<HTMLFormElement>;
}

export interface InputFieldProps {
  id: string;
  type: string;
  value?: string | number;
  label?: string;
  name?: string;
  error?: ValidationError;
  refProp?: React.RefObject<HTMLInputElement>;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  fileTypes?: string;
  hideError?: boolean;
}

export interface SearchState {
  query: string;
}

export interface SearchProps {
  onChange?: (query: string) => void;
}

export interface SelectFieldProps {
  label: string;
  options: string[];
  refProp: React.Ref<HTMLSelectElement>;
  error?: ValidationError;
}
