import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISliceWithoutRequestExampleState {
  value: number;
}

const initialState: ISliceWithoutRequestExampleState = {
  value: 0,
};

export const sliceWithoutRequestExample = createSlice({
  name: 'sliceWithoutRequestExample',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});
