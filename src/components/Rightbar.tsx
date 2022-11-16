import React from 'react';
import { Box, Typography, List, TextField } from '@mui/material';

export const Rightbar = () => {
  return (
    <Box flex={2}>
      <Box>
        <TextField placeholder="Search Twitter"></TextField>
        <List>
          <Typography>Trends for you</Typography>
          <Typography>this</Typography>
          <Typography>that</Typography>
          <Typography>those</Typography>
        </List>
      </Box>
      <Box>
        <Typography>Who to follow</Typography>
        <Typography>this</Typography>
        <Typography>that</Typography>
        <Typography>those</Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
