// @ts-nocheck
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
import { ScrollBar } from "../../styles/styles";

/**
 * @returns {JSX} SideBar Item List
 */
const SideBarList = ({ isOpen }) => {
  const closeMenu = isOpen ? 5 : undefined;
  const sideWidth = isOpen ? "70px" : "250px";

  return (
    <Box
      component="div"
      sx={{
        flexBasis: sideWidth,
        flexGrow: 0,
        flexShrink: 0,
        overflow: "auto",
        borderRight: "1.5px  solid #b6b6b6",
        ...ScrollBar,
      }}>
      <Box sx={sideListWrapper} sx={{ border: "none" }}>
        {sideListItems.slice(0, closeMenu).map((item) => (
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
              !isOpen && <Divider />
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
    </Box>
  );
};

export default SideBarList;
