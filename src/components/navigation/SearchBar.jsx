import { Button, IconButton, InputBase, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { flexAlignCenter, searchBar } from "../../styles/styles";
import SearchIcon from "@mui/icons-material/Search";
import { BsFillMicFill } from "react-icons/bs";
const SearchBar = () => {
  return (
    <Box sx={flexAlignCenter}>
      <Paper component="form" sx={searchBar}>
        <InputBase sx={{ ml: 1, flex: 1, pl: 1 }} placeholder="Search" />
        <Button
          type="button"
          sx={{ backgroundColor: "#eee", borderRadius: 0 }}
          aria-label="search">
          <SearchIcon />
        </Button>
      </Paper>
      <IconButton sx={{ p: 2 }}>
        <BsFillMicFill size={18} />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
