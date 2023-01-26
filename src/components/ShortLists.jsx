// @ts-nocheck
import { Box } from "@mui/system";
import { CgYoutube } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  shortsWrapper,
  flex,
  shortsHeader,
  scrollWrapper,
} from "../styles/styles";
import { Button, Typography } from "@mui/material";
import { shortsItems } from "../data/app.data";
import Short from "./Short";

/**
 * @param {boolean} isOpen // boolean
 * @returns Short list
 */
const ShortLists = ({ isOpen }) => {
  const [isHidden, setIsHidden] = useState(false);
  const hideShorts = () => {
    setIsHidden((prv) => !prv);
  };
  return (
    <Box
      component="div"
      sx={{
        display: "block",
        p: 2,
        minHeight: "100px",
        mb: 4,
        overflow: "hidden",
        overflowY: "auto",
        width: `calc(100vw - ${isOpen ? "70px" : "250px"})`,
      }}>
      <Box component="div" sx={shortsWrapper}>
        <Box sx={flex}>
          <CgYoutube size={32} color="red" />
          <Typography sx={shortsHeader} variant="h6">
            Shorts
          </Typography>
        </Box>
        <Button onClick={hideShorts}>
          <RiCloseFill size={24} />
        </Button>
      </Box>
      {isHidden ? (
        <Box>
          <Typography>
            This shelf will be hidden for 30 days.
            <Button onClick={hideShorts}>Undo</Button>
          </Typography>
        </Box>
      ) : (
        <Box component="div" sx={scrollWrapper}>
          <Box component="div" sx={flex}>
            {shortsItems.map((item) => (
              <Short
                key={item.id}
                url={item.url}
                text={item.text}
                views={item.views}
                shortsUrl={item.shortsUrl}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ShortLists;
ShortLists.prototype = {
  isOpen: PropTypes.bool.isRequired,
};
