import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  Divider,
} from "@mui/material";

import { HomeImage } from "../components/Home";
import ROUTES from "../utils/ROUTES";
import { getRandomID } from "../utils/common";

import blueGuy from "../img/blueGuy.jpg";

interface KeyboardEvent {
  key: string;
}

const Home = () => {
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  const openWidget = () => {
    window?.botpressWebChat?.sendEvent({ type: "show" });
  };

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

        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            md={5}
            sx={{ p: 5, borderRadius: 4, boxShadow: 4, mr: 4 }}
          >
            <Typography>
              In this section you can search up boardgames by keywords or if you
              don't know what you're looking for you can click the random board
              game button to showcase a random board game or you can choose to
              look at the hottest board games at the moment.
            </Typography>
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
                  color="primary"
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
                color="primary"
                variant="contained"
                sx={{ width: "100%" }}
              >
                Get Random BoardGame
              </Button>
            </Link>
            <Button
              color="primary"
              variant="contained"
              sx={{ width: "100%", my: 1 }}
            >
              <Link
                to={ROUTES.boardGameList}
                style={{ textDecoration: "none" }}
              >
                <Typography color="black">Trending BoardGames</Typography>
              </Link>
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{ p: 5, borderRadius: 4, boxShadow: 4 }}
          >
            <Typography>
              Hey there! My name is GG and I am here to help! To get started you
              can click on me or click on the widget in the bottom right.
            </Typography>
            <Box
              onClick={openWidget}
              sx={{ cursor: "pointer" }}
              component="img"
              src={blueGuy}
              height={300}
              width="100%"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
