import React from 'react';
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
  CardMedia,
  Checkbox,
  IconButton,
  Typography
} from '@mui/material';

export const Tweetpost = () => {
  return (
    <Box
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
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Andrei Banciu"
          subheader="@andreibanciu"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            That's a cool waterfall!
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <CardActions>
          <IconButton>
            <ChatBubble fontSize="small" />
          </IconButton>
          <IconButton>
            <Loop fontSize="small" />
          </IconButton>
          <IconButton>
            <Checkbox
              icon={<FavoriteBorder fontSize="small" />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
          </IconButton>
          <IconButton>
            <Share fontSize="small" />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Tweetpost;
