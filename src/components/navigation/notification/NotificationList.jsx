// @ts-nocheck
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  Typography,
  ListItemButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
import React from "react";
import { BsBellFill } from "react-icons/bs";
import { notificationData } from "../../../data/app.data";
import useToggle from "../../../hooks/useToggle";
import { notificationWrapper, inlineText } from "../../../styles/styles";
import NotificationSetting from "./NotificationSetting";
const NotificationList = () => {
  const { el, open, handleClick, handleClose } = useToggle();
  return (
    <Box sx={{ px: 1 }}>
      <IconButton sx={{ mt: 0.6 }} id="notification_btn" onClick={handleClick}>
        <BsBellFill size={24} />
      </IconButton>
      {open && (
        <Menu
          id="notification_menu"
          anchorEl={el}
          open={open}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "notification_btn" }}>
          <List sx={notificationWrapper}>
            {notificationData.map((item) => (
              <Box key={item.id}>
                <ListItem sx={{ p: 0 }}>
                  <ListItemButton alignItems="flex-start" href={item.url}>
                    <ListItemAvatar>
                      <Avatar alt={item.alt} src={item.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.text}
                      secondary={
                        <>
                          <Typography sx={inlineText} component="span">
                            {item.time}
                          </Typography>
                        </>
                      }
                    />
                    <Box sx={{ ml: 0.5 }}>
                      <img
                        src={item.thum}
                        alt=""
                        style={{ width: "80px", height: "50px" }}
                      />
                    </Box>
                    <NotificationSetting />
                  </ListItemButton>
                </ListItem>
                {notificationData.length !== item.id && (
                  <Divider variant="inset" component="" />
                )}
              </Box>
            ))}
          </List>
        </Menu>
      )}
    </Box>
  );
};

export default NotificationList;
