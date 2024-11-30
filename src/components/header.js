import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";

const Header = () => {
  return (
    <Box display={"flex"} alignItems="center" px={1}>
      <Typography sx={{ flexGrow: 1 }}>Lorem ipsum dolor sit amet</Typography>
      <Button variant="contained">+ New Chat</Button>
    </Box>
  );
};

export default Header;
