import { useState } from "react";
import { useAppSelector } from "../../../../features/hooks/redux.hooks";

import { Grid } from "@mui/material";

import TextNotFound from "../../../TextNotFound";

import ButtonLoad from "../../../ButtonLoad";
import VideoTabItem from "./VideoTabItem";

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

      <Grid container spacing={3} justifyContent="center">
        {videos.slice(0, currentVideos).map((item) => (
          <VideoTabItem key={item.id} {...item} />
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
