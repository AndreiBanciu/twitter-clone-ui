import { Box, Stack } from '@mui/material';
import React from 'react';
import { Leftbar, Midbar, Rightbar } from './components';

function App() {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        sx={{ marginRight: '10%', marginLeft: '5%' }}
      >
        <Leftbar />
        <Midbar />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
