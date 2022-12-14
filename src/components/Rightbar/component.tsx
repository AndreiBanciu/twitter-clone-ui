import React from 'react';
import { Box, Typography, List, TextField } from '@mui/material';

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <TextField fullWidth placeholder="Search Twitter"></TextField>
        <Box
          sx={{
            padding: '5px',
            borderRadius: '10px',
            marginBottom: '10px',
            marginTop: '10px',
            height: '400px'
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
            height: '200px'
          }}
        >
          <Typography>Who to follow</Typography>
          <Typography>this</Typography>
          <Typography>that</Typography>
          <Typography>these</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;
