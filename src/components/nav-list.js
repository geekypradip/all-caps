import React, { useState } from "react";
import { Box, TextField, IconButton, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardIcon from "@mui/icons-material/Keyboard";

export const NavList = ({ title }) => {
  const [hover, setHover] = useState(false);
  return (
    <Paper
      elevation={hover ? 1 : 0}
      sx={{ width: "100%", mt: 1 }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 1,
          justifyContent: "space-between",
        }}
      >
        <SearchIcon sx={{ color: "#9e9e9e", marginRight: "8px" }} />
        <Typography color={"textDisabled"}>{title}</Typography>
        <IconButton>
          <KeyboardIcon sx={{ color: "#9e9e9e" }} />
        </IconButton>
      </Box>
    </Paper>
  );
};
