import { Box } from "@mui/system";
import React from "react";
import AppNavMenu from "./components/navigation/AppNavMenu";
import { appWrapper } from "./styles/styles";

const App = () => {
  return (
    <Box sx={appWrapper}>
      <AppNavMenu />
    </Box>
  );
};

export default App;
