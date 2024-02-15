import React from "react";
import { Link } from "react-router-dom";

import { Container, Box, Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box sx={{ bgcolor: "primary.main" }}>
        <Container
          sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
        >
          <Link to="/">
            <Typography variant="h4" color="white">
              BoardEdu
            </Typography>
          </Link>

          <Button variant="contained" color="secondary">
            <Link to="/login">
              <Typography color="white">Log In</Typography>
            </Link>
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Header;
