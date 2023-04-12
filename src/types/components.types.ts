import { ReactNode } from 'react';

import { FieldValues } from 'react-hook-form';

export interface RickAndMortyCardProps {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export interface CatCardProps {
  id?: string;
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

export interface FormProps {
  className?: string;
  onSubmit: () => void;
  children: ReactNode | JSX.Element;
}

export interface InputFieldProps {
  id: string;
  register?: () => FieldValues;
  type: string;
  value?: string | number;
  label?: string;
  name?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  fileTypes?: string;
  hideError?: boolean;
}

export interface SearchProps {
  query?: string;
  onSearch?: (query: string) => void;
}

export interface SelectFieldProps {
  register: () => FieldValues;
  label: string;
  options: string[];
  error?: string;
}
