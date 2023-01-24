// @ts-nocheck
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import useToggle from "../../hooks/useToggle";
import { RiVideoUploadFill } from "react-icons/ri";
import { uploadMenuItems } from "../../data/app.data";

const Upload = () => {
  const { el, open, handleClick, handleClose } = useToggle();
  return (
    <Box sx={{ px: 1 }}>
      <IconButton sx={{ mt: 0.6 }} id="upload_btn" onClick={handleClick}>
        <RiVideoUploadFill size={24} />
      </IconButton>
      {open && (
        <Menu
          anchorEl={el}
          open={open}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "upload_btn" }}>
          {uploadMenuItems.map((item) => (
            <MenuItem key={item.id}>
              {item.icon && <Box sx={{ mr: 1 }}>{item.icon}</Box>}
              <Typography
                sx={{ textAlign: "center", width: "100%" }}
                component="span">
                {item.text}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  );
};

export default Upload;
