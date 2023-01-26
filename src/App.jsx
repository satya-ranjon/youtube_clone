import { Box } from "@mui/system";
import React, { useState } from "react";
import AppNavMenu from "./components/navigation/AppNavMenu";
import AppContentArea from "./components/AppContentArea";
import { appWrapper } from "./styles/styles";
import SearchContext from "./context/SearchContext";
const App = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSideBar = () => {
    setSideBarIsOpen((prv) => !prv);
  };

  const onSearch = (value) => {
    setSearch(value);
  };

  return (
    <Box sx={appWrapper}>
      <SearchContext.Provider
        value={{ searchText: search, onSearch: onSearch }}>
        <AppNavMenu handleSideBar={handleSideBar} />
        <AppContentArea isOpen={sideBarIsOpen} />
      </SearchContext.Provider>
    </Box>
  );
};

export default App;
