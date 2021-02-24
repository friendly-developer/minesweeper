import React from "react";
import { TOTAL_MINES, TOTAL_ROWS, TOTAL_COLUMNS } from "../../constants";

const ScoreCard = ({ remaining, gameOver }) => {
  const remCells = TOTAL_ROWS * TOTAL_COLUMNS - remaining;
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <h2>Total Mines: {TOTAL_MINES}</h2>
      {remCells === TOTAL_MINES && <h2>You Won! Congrats</h2>}
      {gameOver ? (
        <h2>Game Over! Better luck next time..!</h2>
      ) : (
        <h2>Remaining Cells: {remCells}</h2>
      )}
    </div>
  );
};

export default ScoreCard;
