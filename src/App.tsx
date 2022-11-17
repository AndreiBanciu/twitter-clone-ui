import { Box, Stack, Divider } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './slices';
import { Leftbar, Midbar, Rightbar } from './components';

function App() {
  const count = useSelector(
    (state: { counter: { count: number } }) => state.counter.count
  );
  const dispatch = useDispatch();

  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        sx={{ marginRight: '5%', marginLeft: '5%' }}
      >
        <Leftbar />
        <Midbar />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
