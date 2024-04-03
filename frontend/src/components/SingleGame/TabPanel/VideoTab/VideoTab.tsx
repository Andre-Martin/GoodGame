import { useState } from "react";
import { useAppSelector } from "../../../../features/hooks/redux.hooks";

import { Grid, Box, Typography } from "@mui/material";

import TextNotFound from "../../../TextNotFound";
import ListItemFlex from "../../../ListItemFlex";

import { getYoutubeImgByVideoID } from "../../../../utils/common";
import ButtonLoad from "../../../ButtonLoad";

const VideoTab = () => {
  const { videos } = useAppSelector((state) => state.boardgame.boardgameInfo);

  const [currentVideos, setCurrentVideos] = useState<number>(6);
  const loadCVideos = () => {
    setCurrentVideos((currentVideos) => (currentVideos += 6));
  };

  return (
    <>
      <TextNotFound
        content="There is not videos for this boardgame"
        array={videos}
      />

      <Grid container spacing={3}>
        {videos.slice(0, currentVideos).map((item) => (
          <Grid item xs={6} md={4} key={item.link}>
            <Box component="a" href={item.link} target="_blank">
              <Box
                component="img"
                src={getYoutubeImgByVideoID(item.link)}
                width="100%"
              />
              <Typography sx={{ px: 1, textAlign: "center" }}>
                {item.title}
              </Typography>
            </Box>
            <Box>
              <ListItemFlex>
                <Typography>Category: </Typography>
                <Typography>{item.category}</Typography>
              </ListItemFlex>
              <ListItemFlex>
                <Typography>Author: </Typography>
                <Typography>{item.author}</Typography>
              </ListItemFlex>
              <ListItemFlex>
                <Typography>Date: </Typography>
                <Typography> {item.date}</Typography>
              </ListItemFlex>
              <ListItemFlex>
                <Typography>Language: </Typography>
                <Typography>{item.language}</Typography>
              </ListItemFlex>
            </Box>
          </Grid>
        ))}
      </Grid>

      <ButtonLoad
        total={videos.length}
        current={currentVideos}
        onClick={loadCVideos}
      />
    </>
  );
};

export default VideoTab;
