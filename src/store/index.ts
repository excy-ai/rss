import { configureStore } from '@reduxjs/toolkit';

import formReducer from 'store/slices/formReducer';
import mainReducer from 'store/slices/mainReducer';

export const store = configureStore({
  reducer: {
    formReducer,
    mainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
