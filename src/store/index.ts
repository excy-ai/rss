import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import { rickAndMortyService } from 'services/RickAndMortyService';
import formReducer from 'store/slices/formSlice';
import mainReducer from 'store/slices/mainSlice';

const rootReducer = combineReducers({
  formReducer,
  mainReducer,
  [rickAndMortyService.reducerPath]: rickAndMortyService.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rickAndMortyService.middleware),
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
