import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {
  EmojiEmotions,
  EventRepeat,
  Gif,
  LocationOnOutlined,
  Poll,
  Image
} from '@mui/icons-material';
import { useState } from 'react';
import { addTweet } from '../../redux/tweets/actions';
import { useAppDispatch } from '../../redux/use-app-dispatch';

export const AddTweet = () => {
  const [tweet, setTweet] = useState('');
  const dispatch = useAppDispatch();

  const addNewTweet = () => {
    if (tweet === '') {
      return;
    }
    const tweetInput = {
      id: Math.floor(Math.random() * 100000),
      content: tweet
    };
    dispatch(addTweet(tweetInput));
    setTweet('');
  };

  return (
    <Box>
      <Box
        sx={{
          border: 'solid',
          borderTop: '0',
          borderBottom: '0',
          borderWidth: 'thin',
          borderColor: 'darkgrey',
          paddingLeft: '5%'
        }}
      >
        <Typography>Home</Typography>
      </Box>
      <Box
        paddingTop="20px"
        paddingBottom="10px"
        sx={{
          border: 'solid',
          borderTop: '0',
          borderWidth: 'thin',
          borderColor: 'darkgrey'
        }}
      >
        <Box paddingLeft="10%" paddingRight="5%">
          <TextField
            fullWidth
            placeholder="What's happening?"
            multiline
            rows={2}
            variant="standard"
            type="text"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
        </Box>
        <Box
          marginTop="5px"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box paddingLeft="10%" paddingTop="1%">
            <Stack direction="row" gap={2}>
              <Image fontSize="small" color="primary" />
              <Gif fontSize="small" color="primary" />
              <Poll fontSize="small" color="primary" />
              <EmojiEmotions fontSize="small" color="primary" />
              <EventRepeat fontSize="small" color="primary" />
              <LocationOnOutlined fontSize="small" color="primary" />
            </Stack>
          </Box>
          <Box paddingRight="5%">
            <Button
              onClick={addNewTweet}
              sx={{ borderRadius: '20px' }}
              variant="contained"
            >
              Tweet
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
