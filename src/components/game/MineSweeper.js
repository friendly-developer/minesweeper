import React, { useState } from "react";

import SweeeperGrid from "./SweeperGrid";
import ScoreCard from "./ScoreCard";

function MineSweeper() {
  const [counter, setCounter] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  return (
    <div className="sweeper-container">
      <ScoreCard remaining={counter} gameOver={gameOver} />
      <SweeeperGrid
        updateCounter={setCounter}
        updateGameOver={setGameOver}
        gameOver={gameOver}
      />
    </div>
  );
}

export default MineSweeper;
