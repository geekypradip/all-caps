import { Paper, Typography } from "@mui/material";

export const MainContentCard = () => {
  return (
    <Paper elevation={3} sx={{ padding: "20px", mt: 1 }}>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur
      </Typography>
      <Typography variant="caption" color={"textDisabled"}>
        Elementum exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </Typography>
    </Paper>
  );
};
