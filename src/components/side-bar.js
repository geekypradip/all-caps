import React from "react";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import SearchBar from "./search-bar";
import { NavList } from "./nav-list";

const Sidebar = () => {
  return (
    <Box width={300} p={1} bgcolor={"#f7f8fa"} height="100vh">
      <SearchBar />
      <Box>
        {["Library", "Chats", "Apps"].map((text, index) => (
          <NavList title={text} key={text} />
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
