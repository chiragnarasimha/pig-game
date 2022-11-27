import "./PlayerContainer.scss";
import React, { useState } from "react";

const Player = () => {
  const [turn, setTurn] = useState(`p1`);
  const player1Background = turn === `p1` ? `prominent` : `transparent`;
  const player2Background = turn === `p2` ? `prominent` : `transparent`;
  return (
    <>
      <div className="player">
        <div
          className={`player__player1 player__background__${player1Background}`}
        >
          TEST
        </div>

        <div
          className={`player__player2 player__background__${player2Background}`}
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

export default Player;
