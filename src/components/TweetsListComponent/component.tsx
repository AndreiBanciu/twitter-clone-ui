import {
  ChatBubble,
  DeleteForever,
  Edit,
  Favorite,
  FavoriteBorder,
  Loop,
  Share
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Grid,
  IconButton,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { deleteTweet, getTweet, getTweets } from '../../redux/tweets/actions';
import { useAppDispatch } from '../../redux/use-app-dispatch';
import { EditPopup } from '../EditPopupComponent';

export const TweetsList = () => {
  const {
    tweets: { tweetsData }
  } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const [popup, setPopup] = useState(false);

  return (
    <Grid>
      {popup && <EditPopup setPopup={setPopup} />}
      {tweetsData &&
        tweetsData.map((tweet, index) => {
          return (
            <Box
              key={index}
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
                      title={tweet.user}
                      subheader={'@' + tweet.user.toLowerCase()}
                    />
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <Edit
                        onClick={() =>
                          dispatch(getTweet(tweet.id)).then(() => {
                            setPopup(true);
                          })
                        }
                        fontSize="small"
                      />
                    </IconButton>
                    <IconButton>
                      <DeleteForever
                        onClick={() =>
                          dispatch(deleteTweet(tweet.id)).then(() => {
                            dispatch(getTweets());
                          })
                        }
                        fontSize="small"
                      />
                    </IconButton>
                  </Grid>
                </Grid>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {tweet.value}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container justifyContent={'space-around'}>
                    <Grid item>
                      <IconButton>
                        <ChatBubble fontSize="small" />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <Loop fontSize="small" />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <Checkbox
                          icon={<FavoriteBorder fontSize="small" />}
                          checkedIcon={<Favorite sx={{ color: 'red' }} />}
                        />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <Share fontSize="small" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Box>
          );
        })}
    </Grid>
  );
};
