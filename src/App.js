import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./components/side-bar";
import Header from "./components/header";
import MainContent from "./components/main-content";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <MainContent />
      </Box>
    </Box>
  );
};

export default App;
