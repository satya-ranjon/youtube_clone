import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { sideListItems } from "../../data/app.data";
import { sideListWrapper } from "../../styles/styles";

const SideBarList = () => {
  return (
    <Box sx={sideListWrapper}>
      {sideListItems.map((item) => (
        <React.Fragment key={item.id}>
          {item.subdivision ? (
            <>
              <Divider />
              <Box sx={{ ml: 2, mt: 2 }}>
                <Typography
                  sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                  variant="button"
                  display="block"
                  gutterBottom>
                  {item.text}
                </Typography>
              </Box>
            </>
          ) : item.divider ? (
            <Divider />
          ) : (
            <List sx={{ p: 0 }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default SideBarList;
