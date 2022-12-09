import axios from 'axios';
import { TweetItem, TweetItemInput } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTweets = createAsyncThunk(
  'tweets/getTweets',
  async (data, thunkApi) => {
    try {
      const response = await axios.get('http://localhost:5000/api/tweets');
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getTweet = createAsyncThunk(
  'tweet/getTweet',
  async (data: string, thunkApi) => {
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
  async (tweetId: string, thunkApi) => {
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
  async (tweet: TweetItemInput, thunkApi) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/tweets',
        tweet
      );
      return response;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);
