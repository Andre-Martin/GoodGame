import { useAppSelector } from "../features/hooks/redux.hooks";
import { getYoutubeImgByVideoID } from "../utils/common";
import { Grid } from "@mui/material";

const VideoTab = () => {
  const { videos } = useAppSelector((state) => state.boardgame.boardgameInfo);
  return (
    <Grid container spacing={3}>
      {videos.length === 0 ? (
        <Grid item xs={12}>
          <p className=" text-center text-info p-5">
            There's not videos for this BoardGame
          </p>
        </Grid>
      ) : (
        videos.map((item) => (
          <Grid item xs={6} md={4} key={item.link}>
            <a href={item.link} target="_blank">
              <img src={getYoutubeImgByVideoID(item.link)} width="100%" />
              <span className="text-info">{item.title}</span>
            </a>
            <div>
              <span className="bg-secondary">{item.category}</span>
              <span>{item.author}</span>
              <span>{item.date}</span>
              <span>{item.language}</span>
            </div>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default VideoTab;
