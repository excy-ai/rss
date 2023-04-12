import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { rickAndMortyService } from 'services/RickAndMortyService';
import formReducer from 'store/slices/formSlice';
import mainReducer from 'store/slices/mainSlice';

export const store = configureStore({
  reducer: {
    formReducer,
    mainReducer,
    [rickAndMortyService.reducerPath]: rickAndMortyService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyService.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
