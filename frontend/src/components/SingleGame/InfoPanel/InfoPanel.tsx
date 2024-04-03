import { Grid } from "@mui/material";
import InfoPanelItem from "./InfoPanelItem";
import { useAppSelector } from "../../../features/hooks/redux.hooks";

const InfoPanel = () => {
  const {
    minPlayers,
    maxPlayers,
    minPlaytime,
    maxPlaytime,
    minAge,
    statistics: { complexity },
  } = useAppSelector((state) => state.boardgame.boardgameInfo);

  const formattedComplexity =
    complexity === "N/A"
      ? "N/A"
      : `Weight: ${Math.round(+complexity * 10) / 10}`;
  const formattedPlayers =
    minPlayers !== "N/A" ? `${minPlayers}-${maxPlayers} Players` : "N/A";
  const formattedTime =
    minPlaytime !== "N/A" ? `${minPlaytime}-${maxPlaytime}min` : "N/A";

  return (
    <Grid container borderTop={1}>
      <InfoPanelItem
        subInfo={formattedPlayers}
        supInfo="Recommended"
        styles={{ borderLeft: "none" }}
      />
      <InfoPanelItem subInfo={formattedTime} supInfo="Playing Time" />
      <InfoPanelItem
        subInfo={`Age: ${minAge}+`}
        supInfo={`Community: ${minAge}+`}
      />
      <InfoPanelItem
        subInfo={formattedComplexity}
        supInfo="'Complexity' Rating'"
      />
    </Grid>
  );
};

export default InfoPanel;
