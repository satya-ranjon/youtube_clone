import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, pink } from "@mui/material/colors";
import React from "react";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: 400,
    },
  },

  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: pink[500],
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: "#eee",
          borderRadius: 10,
          marginRight: "10px",
          marginTop: "10px",
          minHeight: "20px",
          minWidth: "60px",
          ":active": {
            backgroundColor: "black",
            color: "white",
          },
          ":focus": {
            backgroundColor: "black",
            color: "white",
          },
          ":selected": {
            backgroundColor: "black",
            color: "white",
          },
        },
        // @ts-ignore
        indicator: {
          backgroundColor: "transparent",
        },
      },
    },
  },
});

const AppThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
