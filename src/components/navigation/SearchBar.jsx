import { Button, IconButton, InputBase, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { flexAlignCenter, searchBar } from "../../styles/styles";
import SearchIcon from "@mui/icons-material/Search";
import { BsFillMicFill } from "react-icons/bs";
import SearchContext from "../../context/SearchContext";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const ctx = useContext(SearchContext);
  return (
    <Box sx={flexAlignCenter}>
      <Paper component="form" sx={searchBar}>
        <InputBase
          onChange={(e) => setSearch(e.target.value)}
          sx={{ ml: 1, flex: 1, pl: 1 }}
          placeholder="Search"
          // value={ctx.searchText}
        />
        <Button
          type="button"
          sx={{ backgroundColor: "#eee", borderRadius: 0 }}
          aria-label="search"
          onClick={() => ctx.onSearch(search)}>
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
