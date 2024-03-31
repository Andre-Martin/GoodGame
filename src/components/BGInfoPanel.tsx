interface Props {
  minPlayers: string;
  maxPlayers: string;
  minPlaytime: string;
  maxPlaytime: string;
  minAge: string;
  complexity: string;
}

const BGInfoPanel = ({
  minPlayers,
  maxPlayers,
  minPlaytime,
  maxPlaytime,
  minAge,
  complexity,
}: Props) => {
  //
  const formattedComplexity =
    complexity === "N/A" ? "N/A" : Math.round(+complexity * 10) / 10;
  const formattedPlayers =
    minPlayers !== "N/A" ? `${minPlayers}-${maxPlayers} Players` : "N/A";
  const formattedTime =
    minPlaytime !== "N/A" ? `${minPlaytime}-${maxPlaytime}min` : "N/A";

  return (
    <div className="game-panel_block">
      <div className="game-panel_item">
        <span className="sub-info">{formattedPlayers}</span>
        <span className="sup-info">Recommended Number of Players</span>
      </div>
      <div className="game-panel_item">
        <span className="sub-info">{formattedTime}</span>
        <span className="sup-info">Playing Time</span>
      </div>
      <div className="game-panel_item">
        <span className="sub-info">Age: {minAge}+</span>
        <span className="sup-info">Community: {minAge}+</span>
      </div>
      <div className="game-panel_item">
        <span className="sub-info">Weight: {formattedComplexity}</span>
        <span className="sup-info">'Complexity' Rating</span>
      </div>
    </div>
  );
};

export default BGInfoPanel;
