import { createSlice } from '@reduxjs/toolkit';

export const counter = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    }
  }
});

export const tweets = createSlice({
  name: 'tweets',
  initialState: { value: [] },
  reducers: {
    addTweet: (state, action) => {}
  }
});

export const { increment, decrement } = counter.actions;
export default counter.reducer;
