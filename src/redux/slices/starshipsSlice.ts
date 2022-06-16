import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStarship } from '../../models/IStarship';
import fetchStarships from '../actions/fetchStarships';

interface StartshipState {
  starships: IStarship[],
  isLoading: boolean,
  error: null | string,
}

const initialState: StartshipState = {
  starships: [],
  isLoading: false,
  error: null,
};

export const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStarships.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchStarships.fulfilled.type]: (state, action: PayloadAction<IStarship[]>) => {
      state.isLoading = false;
      state.starships = action.payload;
      state.error = null;
    },
    [fetchStarships.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default starshipsSlice;
