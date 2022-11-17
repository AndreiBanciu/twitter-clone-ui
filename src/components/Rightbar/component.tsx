import React from 'react';
import { Box, Typography, List, TextField } from '@mui/material';

export const Rightbar = () => {
  return (
    <Box flex={2}>
      <TextField focused placeholder="Search Twitter"></TextField>
      <Box
        sx={{
          padding: '5px',
          borderRadius: '10px',
          marginBottom: '10px',
          marginTop: '10px',
          backgroundColor: 'grey',
          height: '80%'
        }}
      >
        <List>
          <Typography>Trends for you</Typography>
          <Typography>this</Typography>
          <Typography>that</Typography>
          <Typography>those</Typography>
        </List>
      </Box>
      <Box
        sx={{
          padding: '5px',
          borderRadius: '10px',
          backgroundColor: 'grey',
          height: '40%'
        }}
      >
        <Typography>Who to follow</Typography>
        <Typography>this</Typography>
        <Typography>that</Typography>
        <Typography>these</Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
