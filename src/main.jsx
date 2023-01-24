import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import AppThemeProvider from "./theme/AppThemeProvider";

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>
);
