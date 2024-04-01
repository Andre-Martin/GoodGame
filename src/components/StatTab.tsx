import { Grid } from "@mui/material";
import { useAppSelector } from "../features/hooks/redux.hooks";

const StatTab = () => {
  const { boardgameInfo } = useAppSelector((state) => state.boardgame);
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <div>
          <h4 className="text-center">GAME STATS</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
              <span>Average Ratig</span>
              <span>{boardgameInfo.statistics.averageRating}</span>
            </li>
            <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
              <span>No. of Ratings</span>
              <span>{boardgameInfo.statistics.usersRated}</span>
            </li>
            <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
              <span>Buyers Average</span>
              <span>{boardgameInfo.statistics.buyersAverage}</span>
            </li>
            <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
              <span>Std. Deviation</span>
              <span>{boardgameInfo.statistics.stddev}</span>
            </li>
            <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
              <span>Median</span>
              <span>{boardgameInfo.statistics.median}</span>
            </li>
            <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
              <span>Complexity</span>
              <span>{boardgameInfo.statistics.complexity}</span>
            </li>
            <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
              <span>Comments</span>
              <span>{boardgameInfo.statistics.totalComments}</span>
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div>
          <h4 className="text-center">Collection Stats</h4>
          <ul className="list-group ">
            <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
              <span>Own</span>
              <span>{boardgameInfo.statistics.owned}</span>
            </li>

            <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
              <span>Want In Trade</span>
              <span>{boardgameInfo.statistics.trading}</span>
            </li>
            <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
              <span>Wishlist</span>
              <span>{boardgameInfo.statistics.wishing}</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-center">Game Ranks</h4>
          <ul className="list-group ">
            {boardgameInfo.statistics.ranks.map((item) => (
              <li
                className="list-group-item list-group-item-light d-flex justify-content-between align-items-center"
                key={item.id}
              >
                <span>{item.fullName}</span>
                <span>No {item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </Grid>
    </Grid>
  );
};

export default StatTab;
