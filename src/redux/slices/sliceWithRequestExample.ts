import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStarship } from '../../models/IStarship';
import { fetchItems } from '../actions/createAsyncThunkExample';

interface ISliceWithRequestExampleState {
  items: IStarship[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ISliceWithRequestExampleState = {
  items: [],
  isLoading: false,
  error: null,
};

export const sliceWithRequestExample = createSlice({
  name: 'sliceWithRequestExample',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchItems.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchItems.fulfilled.type]: (
      state,
      action: PayloadAction<IStarship[]>,
    ) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchItems.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
