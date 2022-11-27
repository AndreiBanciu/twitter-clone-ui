import React from 'react';
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
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Twitter fontSize="large" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Tag fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Notifications fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Forum fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Bookmarks fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Bookmarks" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ViewList fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Lists" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person4 fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <More fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="More" />
            </ListItemButton>
          </ListItem>
          <Button
            sx={{
              marginTop: '10px',
              width: '80%',
              height: '45px',
              borderRadius: '20px'
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </List>
      </Box>
    </Box>
  );
};

export default Leftbar;
