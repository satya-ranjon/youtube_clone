// @ts-nocheck
import { Box } from "@mui/system";
import React from "react";
import { youtubeResponse } from "../data/app.data";
import { AppContentWrapper } from "../styles/styles";
import SideBarList from "./sidebar/SideBarList";
import TopTagList from "./TopTagList";
import VideosList from "./VideosList";
import { flexColumnGrow } from "../styles/styles";
import Shorts from "./ShortLists";

const AppContentArea = ({ isOpen }) => {
  const item1 = youtubeResponse.slice(0, 8);
  const item2 = youtubeResponse.slice(8);

  return (
    <Box component="main" sx={AppContentWrapper}>
      <SideBarList isOpen={isOpen} />
      <Box component="div" sx={flexColumnGrow}>
        <TopTagList isOpen={isOpen} />
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            p: 1,
            overflowY: "auto",
            overflowX: "hidden",
            width: `calc(100vw - ${isOpen ? "70px" : "250px"})`,
          }}>
          <VideosList items={item1} />
          <Shorts isOpen={isOpen} />
        </Box>
      </Box>
    </Box>
  );
};

export default AppContentArea;
