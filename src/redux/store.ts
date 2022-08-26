import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import { postApiExample } from '../utils/api/postApiExample';
import { getApiExample } from '../utils/api/getApiExample';
import { sliceWithRequestExample } from './slices/sliceWithRequestExample';
import { sliceWithoutRequestExample } from './slices/sliceWithoutRequestExample';

export const rootReducer = combineReducers({
  sliceWithRequestExample: sliceWithRequestExample.reducer,
  sliceWithoutRequestExample: sliceWithoutRequestExample.reducer,
  [getApiExample.reducerPath]: getApiExample.reducer,
  [postApiExample.reducerPath]: postApiExample.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(getApiExample.middleware)
        .concat(postApiExample.middleware),
  });

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
