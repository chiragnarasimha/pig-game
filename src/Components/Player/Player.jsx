import "./Player.scss";
import React from "react";

const Player = ({ playerName, playerScore, currentScore }) => {
  return (
    <div className="player">
      <div className="player__name">{playerName}</div>
      <div className="player__total-score">Score: {playerScore}</div>
      <div className="player__current-score">Current Score: {currentScore}</div>
    </div>
  );
};

export default Player;
