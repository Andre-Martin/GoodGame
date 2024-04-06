import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks/redux.hooks";
import { useParams } from "react-router-dom";

import { Box, Grid } from "@mui/material";

import {
  TabPanel,
  CredPanel,
  InfoPanel,
  MainPanel,
} from "../components/SingleGame";
import Page404 from "./Page404";
import Spinner from "../components/Spinner";

import { fetchBoardgame } from "../features/slices/boardgameSlice";
import { useWindowSize, useElementWidth } from "../features/hooks/uiHooks";

const SingleGame: React.FC = () => {
  const { id } = useParams();

  const { boardgameInfo, boardgameLoadingStatus } = useAppSelector(
    (state) => state.boardgame
  );
  const dispatch = useAppDispatch();

  const { windowWidth } = useWindowSize();
  const imageSize = useElementWidth("bgInfo-img");

  useEffect(() => {
    if (typeof id === "string") dispatch(fetchBoardgame(+id));
  }, [id]);

  return (
    <Box component="main">
      {boardgameLoadingStatus === "pending" && <Spinner />}
      {boardgameLoadingStatus === "succeed" && boardgameInfo === null && (
        <Page404 message="BoardGame with such ID is not found  " />
      )}
      {boardgameLoadingStatus === "succeed" && boardgameInfo !== null ? (
        <>
          <Box sx={{ boxShadow: 4, borderRadius: 4 }}>
            <Grid container sx={{ mt: 3, p: 5 }} spacing={3}>
              <Grid item xs={12} md={5}>
                {/* <Box
                  id="bgInfo-img"
                  sx={{
                    width: "100%",
                    height: 500,
                    mx: "auto",
                    my: 3,
                  }}
                >
                  {windowWidth > 900 ? (
                    <InnerImageZoom
                      src={boardgameInfo.image}
                      width={imageSize}
                      zoomScale={2}
                    />
                  ) : (
                    <Zoom>
                      <img
                        src={boardgameInfo.image}
                        width={imageSize}
                        alt="product image"
                      />
                    </Zoom>
                  )}
                </Box> */}

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
                <MainPanel />
                <InfoPanel />
                <CredPanel />
              </Grid>
            </Grid>

            <TabPanel />
          </Box>
        </>
      ) : null}
    </Box>
  );
};

export default SingleGame;
