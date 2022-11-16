import React, { useState } from 'react';
import {
  Home,
  Tag,
  Notifications,
  Forum,
  Bookmarks,
  ViewList,
  Person4,
  More,
  Twitter
} from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button
} from '@mui/material';

export const Leftbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box flex={1}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Twitter fontSize="large" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Tag fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Notifications fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Forum fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Bookmarks fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Bookmarks" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <ViewList fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Lists" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Person4 fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <More fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="More" />
          </ListItemButton>
        </ListItem>
        <Button variant="contained">Tweet</Button>
      </List>
    </Box>
  );
};

export default Leftbar;
