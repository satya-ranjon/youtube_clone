// @ts-nocheck
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { tabItems } from "../data/app.data";
import PropTypes from "prop-types";

/**
 * @param {boolean} isOpen // boolean value
 */
const TopTagList = ({ isOpen }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        my: 2,
        width: `calc(100vw - ${isOpen ? "70px" : "250px"})`,
      }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable tabs">
        {tabItems &&
          tabItems.map((item) => <Tab key={item.id} label={item.text} />)}
      </Tabs>
    </Box>
  );
};

export default TopTagList;

TopTagList.prototype = {
  isOpen: PropTypes.bool,
};
