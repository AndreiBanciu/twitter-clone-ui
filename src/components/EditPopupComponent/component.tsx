import styled from '@emotion/styled';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { getTweets, editTweet } from '../../redux/tweets/actions';
import { useAppDispatch } from '../../redux/use-app-dispatch';

type Props = {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditPopup = (props: Props) => {
  const { setPopup } = props;
  const [tweetValue, setTweetValue] = useState<string>('');

  const dispatch = useAppDispatch();

  const {
    tweets: { myTweet }
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    setTweetValue(myTweet.value);
  }, [myTweet]);

  return (
    <>
      <Box
        sx={{
          border: 'solid',
          borderTop: '0',
          borderWidth: 'thin',
          borderColor: 'darkgrey'
        }}
      >
        <Card>
          <Grid container justifyContent={'space-between'}>
            <Grid item>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: 'royalblue' }}>A</Avatar>}
                title={myTweet.user}
                subheader={'@' + myTweet.user.toLowerCase()}
              />
            </Grid>
            <Grid item>
              <Button
                onClick={() =>
                  dispatch(
                    editTweet({
                      tweetId: myTweet.id,
                      tweet: { user: myTweet.user, value: tweetValue }
                    })
                  ).then(() => {
                    dispatch(getTweets()).then(() => {
                      setPopup(false);
                    });
                  })
                }
                variant="contained"
              >
                Save
              </Button>
              <Button onClick={() => setPopup(false)} variant="contained">
                Cancel
              </Button>
            </Grid>
          </Grid>
          <CardContent>
            <TextField
              variant="standard"
              type="text"
              fullWidth
              multiline
              rows={2}
              value={tweetValue}
              onChange={(e) => setTweetValue(e.target.value)}
            />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
