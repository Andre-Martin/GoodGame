import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";
import { useParams } from "react-router-dom";

import { Box, Grid, Typography } from "@mui/material";

import { TabPanel, CredPanel, InfoPanel } from "../components/SingleGame";

import Spinner from "../components/Spinner";

import { fetchBoardgame } from "../features/slices/boardgameSlice";

import { clearText } from "../utils/common";

const SingleGame: React.FC = () => {
  const { id } = useParams();
  const { boardgameInfo, boardgameLoadingStatus } = useAppSelector(
    (state) => state.boardgame
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof id === "string") dispatch(fetchBoardgame(+id));
  }, [id]);

  return (
    <Box component="main">
      {boardgameLoadingStatus === "pending" && <Spinner />}
      {boardgameLoadingStatus === "succeed" && (
        <>
          <Box sx={{ boxShadow: 4, borderRadius: 4 }}>
            <Grid container sx={{ mt: 3, p: 5 }} spacing={3}>
              <Grid item xs={12} md={5}>
                <Box
                  component="img"
                  sx={{
                    maxWidth: "100%",
                    height: 400,
                    display: "block",
                    mx: "auto",
                  }}
                  src={boardgameInfo.image}
                  alt={boardgameInfo.title}
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="h6">{boardgameInfo.title}</Typography>
                    <p className="game-year">({boardgameInfo.year})</p>
                  </Box>
                </Box>
                <Typography my={4}>
                  {clearText(boardgameInfo.description)}
                </Typography>
                <InfoPanel
                  minPlayers={boardgameInfo.minPlayers}
                  maxPlayers={boardgameInfo.maxPlayers}
                  minAge={boardgameInfo.minAge}
                  minPlaytime={boardgameInfo.minPlaytime}
                  maxPlaytime={boardgameInfo.maxPlaytime}
                  complexity={boardgameInfo.statistics.complexity}
                />

                <CredPanel
                  alternativeNames={boardgameInfo.alternativeNames}
                  links={boardgameInfo.links}
                />
              </Grid>
            </Grid>

            <TabPanel />
          </Box>
        </>
      )}
    </Box>
  );
};

export default SingleGame;
