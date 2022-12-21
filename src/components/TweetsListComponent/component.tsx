import {
  ChatBubble,
  Favorite,
  FavoriteBorder,
  Loop,
  MoreVert,
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
  Menu,
  MenuItem,
  Typography
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { deleteTweet, getTweets } from '../../redux/tweets/actions';
import { useAppDispatch } from '../../redux/use-app-dispatch';

export const TweetsList = () => {
  const {
    tweets: { tweetsData }
  } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid>
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
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor: 'royalblue' }}>A</Avatar>}
                  title={tweet.user}
                  subheader={'@' + tweet.user.toLowerCase()}
                  action={
                    <IconButton
                      id="options-button"
                      aria-controls={open ? 'options-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVert />
                      <Menu
                        id="options-menu"
                        MenuListProps={{
                          'aria-labelledby': 'options-button'
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        <MenuItem
                          onClick={() =>
                            dispatch(deleteTweet(tweet.id)).then(() => {
                              dispatch(getTweets());
                            })
                          }
                        >
                          Delete
                        </MenuItem>
                      </Menu>
                    </IconButton>
                  }
                />
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
