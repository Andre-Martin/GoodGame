import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        p: 1,
        mt: "auto",
        textAlign: "center",
        color: "white",
      }}
    >
      <Typography>COPYRIGHT 2024</Typography>
      <Typography>
        Powered by{" "}
        <a href="https://boardgamegeek.com/" target="_blank">
          BoardGameGeek API
        </a>{" "}
        and{" "}
        <a href="https://botpress.com/docs/" target="_blank">
          Botpress API
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
