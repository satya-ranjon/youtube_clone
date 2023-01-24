import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AiFillYoutube } from "react-icons/ai";
import {
  appBar,
  toolbarWrapper,
  flexAlignCenter,
  logoText,
  hideOnMobile,
} from "../../styles/styles";
import SearchBar from "./SearchBar";
import NotificationList from "./notification/NotificationList";
import UserProfile from "./UserProfile";
import Upload from "./Upload";

const AppNavMenu = ({ handleSideBar }) => {
  return (
    <AppBar component="nav" sx={appBar}>
      <Toolbar>
        <Box sx={toolbarWrapper}>
          <Box sx={flexAlignCenter}>
            <IconButton
              color="inherit"
              aria-label=" open drawer"
              edge="start"
              onClick={handleSideBar}
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <AiFillYoutube size={32} color="red" />
            <Typography variant="h6" component="div" sx={logoText}>
              Youtube
            </Typography>
          </Box>
          <Box sx={hideOnMobile}>
            <SearchBar />
          </Box>
          <Box sx={hideOnMobile}>
            <Upload />
            <NotificationList />
            <UserProfile />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavMenu;
