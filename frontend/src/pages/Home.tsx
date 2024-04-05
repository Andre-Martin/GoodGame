import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, Button, Grid, Typography, TextField } from "@mui/material";

import { HomeImage } from "../components/Home";
import ROUTES from "../utils/ROUTES";
import { getRandomID } from "../utils/common";

interface KeyboardEvent {
  key: string;
}

const Home = () => {
  const [name, setName] = useState<string>("");
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
      <Box component="main" sx={{ my: 3 }}>
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
                  sx={{ height: "100%" }}
                >
                  Enter
                </Button>
              </Grid>
            </Grid>
            <Link to={ROUTES.boardGameItem + getRandomID()}>
              <Button
                color="secondary"
                variant="contained"
                sx={{ width: "100%" }}
              >
                Get Random BoardGame
              </Button>
            </Link>
            <Button
              color="secondary"
              variant="contained"
              sx={{ width: "100%", my: 1 }}
            >
              <Link
                to={ROUTES.boardGameList}
                style={{ textDecoration: "none" }}
              >
                <Typography color="white">Hottest BoardGames</Typography>
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
