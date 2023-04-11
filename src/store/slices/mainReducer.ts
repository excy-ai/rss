import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store/index';
import { RickAndMortyCardProps } from 'types';

interface MainState {
  cards: RickAndMortyCardProps[];
}

const initialState: MainState = {
  cards: [],
};

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    addMainCard: (state, action: PayloadAction<RickAndMortyCardProps>) => {
      state.cards.push(action.payload);
    },
    setInitialState: (state) => {
      state.cards = [];
    },
  },
});

export const mainActions = mainSlice.actions;
export default mainSlice.reducer;

export const selectMainCards = (state: RootState) => state.mainReducer.cards;
