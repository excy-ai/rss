import { CardProps, ValidationError } from 'types/components.types';

export interface FormPageState {
  cards: CardProps[];
}

export interface MainPageState {
  query: string;
}

export interface AddCardFormProps {
  weights: string[];
  temperaments: string[];
  lifespans: string[];
  handleSubmit: (card: CardProps) => void;
}

export interface AddCardFormState {
  errors: ValidationError[];
  isPopupOpened: boolean;
}
