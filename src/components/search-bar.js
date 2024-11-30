import React from "react";
import { Box, TextField, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardIcon from "@mui/icons-material/Keyboard";

const SearchBar = () => {
  return (
    <Paper elevation={1}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 1,
        }}
      >
        <SearchIcon sx={{ color: "#9e9e9e", marginRight: "8px" }} />
        <TextField
          variant="standard"
          placeholder="Search for chats..."
          InputProps={{
            disableUnderline: true,
            sx: { flex: 1 },
          }}
          fullWidth
        />
        <IconButton>
          <KeyboardIcon sx={{ color: "#9e9e9e" }} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default SearchBar;
