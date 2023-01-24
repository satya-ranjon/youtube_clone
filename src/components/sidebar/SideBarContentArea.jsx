import { Box } from "@mui/system";
import React from "react";
import { sideBarContentWrapper } from "../../styles/styles";
import SideBarList from "./SideBarList";

const SideBarContentArea = ({ isOpen }) => {
  const sideWidth = isOpen ? "70px" : "250px";
  return (
    <Box component="main" sx={sideBarContentWrapper}>
      <Box
        component="div"
        sx={{
          flexBasis: sideWidth,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto",
        }}>
        <SideBarList />
      </Box>
    </Box>
  );
};

export default SideBarContentArea;
