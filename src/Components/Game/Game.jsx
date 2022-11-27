import "./Game.scss";
import React, { useState } from "react";
import Player from "../Player/PlayerContainer";

const Game = () => {
  const [player, setPlayer] = useState(`p1`);

  // We need to ensure that the player is either p1 or p2 only
  const background = player === `p1` ? `green` : `pink`;

  return (
    <div className={`game game__background-${background}`}>
      <Player />
    </div>
  );
};

export default Game;
