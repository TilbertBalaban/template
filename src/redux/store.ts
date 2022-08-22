import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { vehiclesApi } from '../utils/vehiclesApi';
import starshipReducer from './slices/starshipsSlice';

const rootReducer = combineReducers({
  starshipsRoot: starshipReducer.reducer,
  [vehiclesApi.reducerPath]: vehiclesApi.reducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(vehiclesApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
