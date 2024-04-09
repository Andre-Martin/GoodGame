import { Typography, Grid, Box, Button } from "@mui/material";

import ListItemFlex from "../../../ListItemFlex";
import { getTimeAgo, getYoutubeImgByVideoID } from "../../../../utils/common";

import type { SingleGameVideo } from "../../../../utils/types";

interface Props extends SingleGameVideo {}

const VideoTabItem = ({
  link,
  title,
  category,
  author,
  date,
  language,
}: Props) => {
  return (
    <Grid item xs={6} md={4} key={link}>
      <Box component="a" href={link} target="_blank">
        <Box component="img" src={getYoutubeImgByVideoID(link)} width="100%" />
        <Typography sx={{ px: 1, textAlign: "center" }} className="hoverText">
          {title}
        </Typography>
      </Box>
      <Box>
        <ListItemFlex>
          <Typography fontWeight="bold">Category: </Typography>
          <Button variant="outlined" color="secondary">
            {category}
          </Button>
        </ListItemFlex>
        <ListItemFlex>
          <Typography fontWeight="bold">Author: </Typography>
          <Typography className="hoverText" color="info.main">
            {author}
          </Typography>
        </ListItemFlex>
        <ListItemFlex>
          <Typography fontWeight="bold">Date: </Typography>
          <Typography> {getTimeAgo(date)}</Typography>
        </ListItemFlex>
        <ListItemFlex>
          <Typography fontWeight="bold">Language: </Typography>
          <Typography>{language}</Typography>
        </ListItemFlex>
      </Box>
    </Grid>
  );
};

export default VideoTabItem;
