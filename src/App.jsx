import { Box } from "@mui/system";
import React, { useState } from "react";
import AppNavMenu from "./components/navigation/AppNavMenu";
import SideBarContentArea from "./components/sidebar/SideBarContentArea";
import { appWrapper } from "./styles/styles";

const App = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const handleSideBar = () => {
    setSideBarIsOpen((prv) => !prv);
  };
  return (
    <Box sx={appWrapper}>
      <AppNavMenu handleSideBar={handleSideBar} />
      <SideBarContentArea isOpen={sideBarIsOpen} />
    </Box>
  );
};

export default App;
