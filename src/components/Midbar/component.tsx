import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Tweetpost } from '../Tweetpost';
import {
  EmojiEmotions,
  EventRepeat,
  Gif,
  LocationOnOutlined,
  Poll,
  Image
} from '@mui/icons-material';

export const Midbar = () => {
  return (
    <Box marginBottom="20px" flex={4} p={{ xs: 0, md: 2 }}>
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
            <Button sx={{ borderRadius: '20px' }} variant="contained">
              Tweet
            </Button>
          </Box>
        </Box>
      </Box>
      <Tweetpost />
      <Tweetpost />
      <Tweetpost />
      <Tweetpost />
    </Box>
  );
};

export default Midbar;
