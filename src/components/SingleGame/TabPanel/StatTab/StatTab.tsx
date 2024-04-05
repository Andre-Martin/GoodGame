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
            <Typography variant="h5" textAlign="center">
              Game Stats
            </Typography>
            <ListItemFlex>
              <Typography fontWeight="bold" color="info.main">
                Average Ratig
              </Typography>
              <Typography>{boardgameInfo.statistics.averageRating}</Typography>
            </ListItemFlex>
            <ListItemFlex>
              <Typography fontWeight="bold" color="info.main">
                No. of Ratings
              </Typography>
              <Typography>{boardgameInfo.statistics.usersRated}</Typography>
            </ListItemFlex>
            <ListItemFlex>
              <Typography fontWeight="bold" color="info.main">
                Buyers Average
              </Typography>
              <Typography>{boardgameInfo.statistics.buyersAverage}</Typography>
            </ListItemFlex>
            <ListItemFlex>
              <Typography fontWeight="bold" color="info.main">
                Std. Deviation
              </Typography>
              <Typography>{boardgameInfo.statistics.stddev}</Typography>
            </ListItemFlex>
            <ListItemFlex>
              <Typography fontWeight="bold" color="info.main">
                Median
              </Typography>
              <Typography>{boardgameInfo.statistics.median}</Typography>
            </ListItemFlex>
            <ListItemFlex>
              <Typography fontWeight="bold" color="info.main">
                Complexity
              </Typography>
              <Typography>{boardgameInfo.statistics.complexity}</Typography>
            </ListItemFlex>
            <ListItemFlex>
              <Typography fontWeight="bold" color="info.main">
                Comments
              </Typography>
              <Typography>{boardgameInfo.statistics.totalComments}</Typography>
            </ListItemFlex>
          </List>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ m: 4 }}>
          <Typography variant="h5" textAlign="center">
            Collection Stats
          </Typography>
          <List>
            <ListItemFlex>
              <Typography fontWeight="bold" color="info.main">
                Own
              </Typography>
              <Typography>{boardgameInfo.statistics.owned}</Typography>
            </ListItemFlex>

            <ListItemFlex>
              <Typography fontWeight="bold" color="info.main">
                Want In Trade
              </Typography>
              <Typography>{boardgameInfo.statistics.trading}</Typography>
            </ListItemFlex>
            <ListItemFlex>
              <Typography fontWeight="bold" color="info.main">
                Wishlist
              </Typography>
              <Typography>{boardgameInfo.statistics.wishing}</Typography>
            </ListItemFlex>
          </List>
        </Box>
        <Box sx={{ m: 4 }}>
          <Typography variant="h5" textAlign="center">
            Game Ranks
          </Typography>
          <List>
            {boardgameInfo.statistics.ranks.map((item) => (
              <ListItemFlex key={item.id}>
                <Typography fontWeight="bold" color="info.main">
                  {item.fullName}
                </Typography>
                <Typography className="hoverText">
                  {item.value === "Not Ranked"
                    ? item.value
                    : `No: ${item.value}`}
                </Typography>
              </ListItemFlex>
            ))}
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StatTab;
