import { formActions } from 'store/slices/formSlice';
import { mainActions } from 'store/slices/mainSlice';

export const actionCreators = {
  ...formActions,
  ...mainActions,
};
