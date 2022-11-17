import React from 'react';
import { Box } from '@mui/material';

export const Midbar = () => {
  return (
    <Box
      flex={4}
      sx={{ padding: '5px', borderLeft: 'solid', borderRight: 'solid' }}
    >
      <h2>Home</h2>
    </Box>
  );
};

export default Midbar;
