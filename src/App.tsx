import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { Leftbar, Midbar, Rightbar } from './components/MainComponents';
import { useAppDispatch } from './redux/use-app-dispatch';
import { getTweets } from './redux/tweets/actions';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTweets());
  }, []);

  return (
    <Grid container columns={12}>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}>
        <Leftbar />
      </Grid>
      <Grid item xs={4}>
        <Midbar />
      </Grid>
      <Grid item xs={2}>
        <Rightbar />
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}

export default App;
