import { useAppSelector } from "../../../../features/hooks/redux.hooks";

import { Grid, Box, List, Typography } from "@mui/material";

import ListItemFlex from "../../../ListItemFlex";

const StatTab = () => {
  const { boardgameInfo } = useAppSelector((state) => state.boardgame);
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box sx={{ m: 4 }}>
          <List>
            <Typography variant="h6" textAlign="center">
              Game Stats
            </Typography>
            <ListItemFlex>
              <span>Average Ratig</span>
              <span>{boardgameInfo.statistics.averageRating}</span>
            </ListItemFlex>
            <ListItemFlex>
              <span>No. of Ratings</span>
              <span>{boardgameInfo.statistics.usersRated}</span>
            </ListItemFlex>
            <ListItemFlex>
              <span>Buyers Average</span>
              <span>{boardgameInfo.statistics.buyersAverage}</span>
            </ListItemFlex>
            <ListItemFlex>
              <span>Std. Deviation</span>
              <span>{boardgameInfo.statistics.stddev}</span>
            </ListItemFlex>
            <ListItemFlex>
              <span>Median</span>
              <span>{boardgameInfo.statistics.median}</span>
            </ListItemFlex>
            <ListItemFlex>
              <span>Complexity</span>
              <span>{boardgameInfo.statistics.complexity}</span>
            </ListItemFlex>
            <ListItemFlex>
              <span>Comments</span>
              <span>{boardgameInfo.statistics.totalComments}</span>
            </ListItemFlex>
          </List>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ m: 4 }}>
          <Typography variant="h6" textAlign="center">
            Collection Stats
          </Typography>
          <List>
            <ListItemFlex>
              <span>Own</span>
              <span>{boardgameInfo.statistics.owned}</span>
            </ListItemFlex>

            <ListItemFlex>
              <span>Want In Trade</span>
              <span>{boardgameInfo.statistics.trading}</span>
            </ListItemFlex>
            <ListItemFlex>
              <span>Wishlist</span>
              <span>{boardgameInfo.statistics.wishing}</span>
            </ListItemFlex>
          </List>
        </Box>
        <Box sx={{ m: 4 }}>
          <Typography variant="h6" textAlign="center">
            Game Ranks
          </Typography>
          <List>
            {boardgameInfo.statistics.ranks.map((item) => (
              <ListItemFlex key={item.id}>
                <span>{item.fullName}</span>
                <span>No {item.value}</span>
              </ListItemFlex>
            ))}
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StatTab;
