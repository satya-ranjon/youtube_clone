// @ts-nocheck
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
import useToggle from "../../../hooks/useToggle";
import { BiHide } from "react-icons/bi";

const NotificationSetting = () => {
  const { el, open, handleClick, handleClose } = useToggle();
  return (
    <Box>
      <IconButton id="notification_setting_btn" onClick={handleClick}>
        <MoreVertIcon size={24} />
      </IconButton>
      <Menu
        anchorEl={el}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "notification_setting_btn",
        }}>
        <MenuItem>
          <ListItemIcon>
            <BiHide />
          </ListItemIcon>
          <ListItemText primary="Hide is notification" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Turn of all from" />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default NotificationSetting;
