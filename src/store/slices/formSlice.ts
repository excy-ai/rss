import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store/index';
import { CatCardProps } from 'types';

interface FormState {
  forms: CatCardProps[];
}

const initialState: FormState = {
  forms: [],
};

const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    addFormCard: (state, action: PayloadAction<CatCardProps>) => {
      state.forms.push(action.payload);
    },
    setInitialState: (state) => {
      state.forms = [];
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice.reducer;

export const selectFormCards = (state: RootState) => state.formReducer.forms;
