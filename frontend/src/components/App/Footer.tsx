import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        p: 3,
        mt: "auto",
        textAlign: "center",
        color: "white",
      }}
    >
      <Typography>COPYRIGHT 2024</Typography>
    </Box>
  );
};

export default Footer;
