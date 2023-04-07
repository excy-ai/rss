import { CatCardProps } from 'types/components.types';

export interface AddCardFormProps {
  weights: string[];
  temperaments: string[];
  lifespans: string[];
  handleSubmit: (card: CatCardProps) => void;
}
