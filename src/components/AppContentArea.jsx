// @ts-nocheck
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { AppContentWrapper } from "../styles/styles";
import SideBarList from "./sidebar/SideBarList";
import TopTagList from "./TopTagList";
import VideosList from "./VideosList";
import { flexColumnGrow } from "../styles/styles";
import Shorts from "./ShortLists";
import { getYoutubeAPTData } from "../api/axios";
import SearchContext from "../context/SearchContext";

const AppContentArea = ({ isOpen }) => {
  const [youtubeData, setYoutubeData] = useState([]);
  const { searchText, onSearch } = useContext(SearchContext);

  useEffect(() => {
    getYoutubeAPTData(searchText).then((response) => {
      setYoutubeData(response.data.items);
    });
  }, [searchText]);

  const onTabChange = (newSearch) => {
    onSearch(newSearch);
  };

  const item1 = youtubeData.slice(0, 8);
  const item2 = youtubeData.slice(8);

  return (
    <Box component="main" sx={AppContentWrapper}>
      <SideBarList isOpen={isOpen} />
      {youtubeData.length ? (
        <Box component="div" sx={flexColumnGrow}>
          <TopTagList isOpen={isOpen} onTabChange={onTabChange} />
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
            <VideosList items={item2} />
          </Box>
        </Box>
      ) : (
        <h1>Loading......</h1>
      )}
    </Box>
  );
};

export default AppContentArea;
