import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, Button, Grid, Typography, TextField } from "@mui/material";

import { HomeImage } from "../components/Home";
import ROUTES from "../utils/ROUTES";

interface KeyboardEvent {
  key: string;
}

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = () => {
    if (!name.trim()) return;

    navigate(`${ROUTES.search}?name=${name}&page=1`, { replace: true });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <>
      <Box component="main">
        <HomeImage />

        <Grid container>
          <Grid
            item
            xs={12}
            md={8}
            lg={5}
            sx={{ mx: "auto", p: 5, borderRadius: 4, boxShadow: 4 }}
          >
            <Grid container sx={{ my: 3 }}>
              <Grid item xs={10}>
                <TextField
                  label="Quick Search"
                  variant="filled"
                  size="small"
                  sx={{ width: "100%" }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearchInput(e)
                  }
                  onKeyDown={handleKeyDown}
                  value={name}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Enter
                </Button>
              </Grid>
            </Grid>

            <Button
              color="secondary"
              variant="contained"
              sx={{ width: "100%" }}
            >
              Advanced Search
            </Button>
            <Button
              color="secondary"
              variant="contained"
              sx={{ width: "100%", my: 1 }}
            >
              <Link to={ROUTES.chat} style={{ textDecoration: "none" }}>
                <Typography color="white">ASK GG</Typography>
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
