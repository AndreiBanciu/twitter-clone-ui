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
    getTweets: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { increment, decrement } = counter.actions;
export const { getTweets } = tweets.actions;
export default counter.reducer;
tweets.reducer;
