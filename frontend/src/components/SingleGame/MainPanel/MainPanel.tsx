import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../features/hooks/redux.hooks";

import { clearText } from "../../../utils/common";
import RatingIcon from "../../RatingIcon";

const MainPanel = () => {
  const {
    statistics: { averageRating },
    title,
    year,
    description,
  } = useAppSelector((state) => state.boardgame.boardgameInfo);
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <RatingIcon rating={averageRating} />
          <Typography variant="h5" color="info.main" className="hoverText">
            {title}
          </Typography>
          <Typography ml={1} color="secondary.main">
            ({year})
          </Typography>
        </Box>
      </Box>
      <Typography my={4} fontStyle="italic">
        {clearText(description)}
      </Typography>
    </>
  );
};

export default MainPanel;
