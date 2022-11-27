import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import tweetsSlice from './tweets/tweetsSlice';

export const appReducer = combineReducers({
  tweets: tweetsSlice
});

export const store = configureStore({
  reducer: appReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
