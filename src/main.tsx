import { StrictMode } from 'react';

import { setupListeners } from '@reduxjs/toolkit/query';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from 'router/router';
import { setupStore } from 'store';

import 'index.scss';

const store = setupStore();

setupListeners(store.dispatch);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
