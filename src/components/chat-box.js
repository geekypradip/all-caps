import { Box, Divider, Paper } from "@mui/material";

export const ChatBox = () => {
  return (
    <Paper sx={{ p: 1, px: 2, mt: 1 }}>
      <textarea
        placeholder="How can i help you.."
        rows={5}
        style={{
          outline: "none",
          border: "none",
          resize: "none",
          width: "100%",
          height: "100px",
        }}
      />
      <Divider />
      <Box></Box>
    </Paper>
  );
};
