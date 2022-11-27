import axios from 'axios';
import { TweetItem } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTweets = createAsyncThunk(
  'tweets/getTweets',
  async (data, thunkApi) => {
    try {
      const response = await axios.get('https://localhost:5000/api/tweets');
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getTweet = createAsyncThunk(
  'tweet/getTweet',
  async (data: number, thunkApi) => {
    try {
      return data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const deleteTweet = createAsyncThunk(
  'tweet/deleteTweet',
  async (tweetId: number, thunkApi) => {
    try {
      return tweetId;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const addTweet = createAsyncThunk(
  'tweet/addTweet',
  async (tweet: TweetItem, thunkApi) => {
    try {
      return tweet;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);
