import React from "react";
import Player from "./Player";
import playersData from "./players";

const PlayersList = () => {
  return (
    <div>
      {playersData.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;