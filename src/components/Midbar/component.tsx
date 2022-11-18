import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import {
  EmojiEmotions,
  EventRepeat,
  Gif,
  Image,
  LocationOnOutlined,
  Poll
} from '@mui/icons-material';

export const Midbar = () => {
  return (
    <Box flex={5} sx={{ padding: '5px' }}>
      <Box
        sx={{
          border: 'solid',
          borderTop: '0',
          borderBottom: '0',
          borderWidth: 'thin',
          borderColor: 'darkgrey',
          width: 600,
          height: 50
        }}
      >
        <Typography paddingLeft="3%">Home</Typography>
      </Box>
      <Box
        sx={{
          border: 'solid',
          borderTop: '0',
          borderWidth: 'thin',
          borderColor: 'darkgrey',
          width: 600,
          height: 100
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
            <Button
              sx={{
                width: '50%px',
                height: '85%',
                borderRadius: '25px'
              }}
              variant="contained"
            >
              Tweet
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            border: 'solid',
            borderTop: '0',
            borderWidth: 'thin',
            borderColor: 'darkgrey',
            width: 600,
            height: 300
          }}
        >
          tweet1
        </Box>
        <Box
          sx={{
            border: 'solid',
            borderTop: '0',
            borderWidth: 'thin',
            borderColor: 'darkgrey',
            width: 600,
            height: 300
          }}
        >
          tweet2
        </Box>
        <Box
          sx={{
            border: 'solid',
            borderTop: '0',
            borderWidth: 'thin',
            borderColor: 'darkgrey',
            width: 600,
            height: 300
          }}
        >
          tweet3
        </Box>
        <Box
          sx={{
            border: 'solid',
            borderTop: '0',
            borderWidth: 'thin',
            borderColor: 'darkgrey',
            width: 600,
            height: 300
          }}
        >
          tweet4
        </Box>
        <Box
          sx={{
            border: 'solid',
            borderTop: '0',
            borderWidth: 'thin',
            borderColor: 'darkgrey',
            width: 600,
            height: 300
          }}
        >
          tweet5
        </Box>
      </Box>
    </Box>
  );
};

export default Midbar;
