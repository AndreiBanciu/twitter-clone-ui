import React from 'react';
import { TweetsList } from '../../TweetsListComponent';
import { AddTweet } from '../../AddTweetComponent';
import { Box } from '@mui/system';

export const Midbar = () => {
  return (
    <Box>
      <AddTweet />
      <TweetsList />
    </Box>
  );
};
