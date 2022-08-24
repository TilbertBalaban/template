import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postApiExample } from '../utils/api/postApiExample';
import { getApiExample } from '../utils/api/getApiExample';
import { sliceWithRequestExample } from './slices/sliceWithRequestExample';
import { sliceWithoutRequestExample } from './slices/sliceWithoutRequestExample';

const rootReducer = combineReducers({
  sliceWithRequestExample: sliceWithRequestExample.reducer,
  sliceWithoutRequestExample: sliceWithoutRequestExample.reducer,
  [getApiExample.reducerPath]: getApiExample.reducer,
  [postApiExample.reducerPath]: postApiExample.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(getApiExample.middleware)
        .concat(postApiExample.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
