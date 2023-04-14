import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store/index';

interface MainState {
  query: string;
}

const initialState: MainState = {
  query: '',
};

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setInitialState: (state) => {
      state.query = '';
    },
  },
});

export const mainActions = mainSlice.actions;
export default mainSlice.reducer;

export const selectQuery = (state: RootState) => state.mainReducer.query;
