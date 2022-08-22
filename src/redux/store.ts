import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../utils/postsApi';
import { vehiclesApi } from '../utils/vehiclesApi';
import starshipReducer from './slices/starshipsSlice';

const rootReducer = combineReducers({
  starshipsRoot: starshipReducer.reducer,
  [vehiclesApi.reducerPath]: vehiclesApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(vehiclesApi.middleware)
    .concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
