import axios from 'axios';
import { TweetItemInput } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TWEETS_URL } from './constants';

export const getTweets = createAsyncThunk(
  'tweets/getTweets',
  async (data, thunkApi) => {
    try {
      const response = await axios.get(TWEETS_URL);
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getTweet = createAsyncThunk(
  'tweet/getTweet',
  async (tweetId: string, thunkApi) => {
    try {
      const response = await axios.get(`${TWEETS_URL}/${tweetId}`);
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const deleteTweet = createAsyncThunk(
  'tweet/deleteTweet',
  async (tweetId: string, thunkApi) => {
    try {
      const response = await axios.delete(`${TWEETS_URL}/${tweetId}`);
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const addTweet = createAsyncThunk(
  'tweet/addTweet',
  async (tweet: TweetItemInput, thunkApi) => {
    try {
      const response = await axios.post(TWEETS_URL, tweet);
      return response;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const editTweet = createAsyncThunk(
  'tweet/editTweet',
  async (input: { tweetId: string; tweet: TweetItemInput }, thunkApi) => {
    try {
      const response = await axios.put(
        `${TWEETS_URL}/${input.tweetId}`,
        input.tweet
      );
      return response;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);
