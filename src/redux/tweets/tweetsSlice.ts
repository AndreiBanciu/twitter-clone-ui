import { createSlice } from '@reduxjs/toolkit';
import {
  getTweets,
  getTweet,
  deleteTweet,
  addTweet,
  editTweet
} from './actions';
import { emptyTweet } from './constants';
import { TweetsState } from './types';

export const initialState: TweetsState = {
  loading: false,
  tweetsData: [],
  myTweet: emptyTweet
};

const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTweets.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTweets.fulfilled, (state, action) => {
        state.loading = false;
        state.tweetsData = action.payload.data;
      })
      .addCase(getTweets.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getTweet.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTweet.fulfilled, (state, action) => {
        state.loading = false;
        state.myTweet = action.payload;
      })
      .addCase(getTweet.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteTweet.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteTweet.fulfilled, (state, action) => {
        state.loading = false;
        state.tweetsData = state.tweetsData.filter(
          (el) => el.id !== action.payload
        );
      })
      .addCase(deleteTweet.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(addTweet.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addTweet.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addTweet.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(editTweet.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editTweet.fulfilled, (state, action) => {
        state.loading = false;
        // state.tweetsData = state.tweetsData.map((tweet) => {
        //   if (state.myTweet.id === tweet.id) {
        //     console.log(action.payload);
        //     tweet.value = action.payload.data.value;
        //   }
        //   return tweet;
        // });
      })
      .addCase(editTweet.rejected, (state, action) => {
        state.loading = false;
      });
  }
});

export default tweetSlice.reducer;
