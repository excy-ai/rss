import { formActions } from 'store/slices/formReducer';
import { mainActions } from 'store/slices/mainReducer';

export const actionCreators = {
  ...formActions,
  ...mainActions,
};
