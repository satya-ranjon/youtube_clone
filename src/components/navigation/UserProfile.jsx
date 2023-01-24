// @ts-nocheck
import {
  Avatar,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { userProfileItems } from "../../data/app.data";
import useToggle from "../../hooks/useToggle";
import { inlineText } from "../../styles/styles";

const UserProfile = () => {
  const { el, open, handleClick, handleClose } = useToggle();

  return (
    <Box sx={{ px: 1 }}>
      <IconButton
        sx={{ mt: 0.6 }}
        id="user_button"
        onClick={handleClick}
        aria-label="User Profile">
        <FaUserCircle size={24} />
      </IconButton>
      {open && (
        <Menu
          id="user_menu"
          anchorEl={el}
          open={open}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "user_button" }}>
          <ListItem sx={{ pt: 0, pb: 1 }} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="User" src="`https://i/pravatar.cc/150?img=2" />
            </ListItemAvatar>
            <ListItemText
              primary="Your Profile"
              secondary={
                <>
                  <Typography sx={inlineText} component="span">
                    <Link href="#" underline="none" color="#1877f2">
                      Manage Your Google Account
                    </Link>
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Box sx={{ minWidth: 300, borderTop: "1px solid #ddd" }}>
            {userProfileItems.map((item) => (
              <List sx={{ p: 0 }} key={item.id}>
                {item.divider ? (
                  <Divider />
                ) : (
                  <ListItem disablePadding>
                    <ListItemButton href={item.url}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                )}
              </List>
            ))}
          </Box>
        </Menu>
      )}
    </Box>
  );
};

export default UserProfile;
