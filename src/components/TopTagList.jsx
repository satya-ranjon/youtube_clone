import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { tabItems } from "../data/app.data";

const TopTagList = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
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
