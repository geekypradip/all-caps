import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { Children } from "react";
import { MainContentCard } from "./main-content-card";
import { ChatBox } from "./chat-box";

const MainContent = () => {
  return (
    <Box sx={{ margin: "20px", padding: "10px" }}>
      {Children.toArray([1, 2, 3, 5].map((cl) => <MainContentCard key={cl} />))}

      <ChatBox />
    </Box>
  );
};

export default MainContent;
