import "./PlayerContainer.scss";
import React, { useState } from "react";
import Player from "./Player";

const PlayerContainer = () => {
  const [turn, setTurn] = useState(`p1`);
  const player1Background = turn === `p1` ? `prominent` : `transparent`;
  const player2Background = turn === `p2` ? `prominent` : `transparent`;
  return (
    <>
      <div className="player-container">
        <div
          className={`player-container__player1 player-container__background__${player1Background}`}
        >
          <Player />
        </div>

        <div
          className={`player-container__player2 player-container__background__${player2Background}`}
        />
      </div>
      <div className="buttons">
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </div>
    </>
  );
};

export default PlayerContainer;
