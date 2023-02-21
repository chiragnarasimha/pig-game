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
          <Player playerName={`Player 1`} playerScore={20} currentScore={15} />
        </div>

        <div
          className={`player-container__player2 player-container__background__${player2Background}`}
        >
          <Player playerName={`Player 2`} playerScore={20} currentScore={15} />
        </div>
        <div className="player_interaction">
          <div className="player_interaction__new_game">
            <button>New Game</button>
          </div>
          <div className="player_interaction__dice">Test</div>
          <div className="player_interaction__turn_buttons">
            <button>Roll Dice</button>
            <button>Hold</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerContainer;
