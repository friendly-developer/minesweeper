import React, { useState, useEffect } from "react";

import SweeperCell from "./SweeperCell";
import { generateGrid, getDistance } from "../../utils";
import { TOTAL_ROWS, TOTAL_COLUMNS } from "../../constants";

const defGrid = generateGrid(TOTAL_ROWS, TOTAL_COLUMNS);

function SweeeperGrid({ updateGameOver, gameOver, updateCounter }) {
  const [grid, setGrid] = useState(defGrid);
  const [cellsClicked, setCellClicked] = useState(0);

  useEffect(() => {
    updateCounter(cellsClicked);
    // eslint-disable-next-line
  }, [cellsClicked]);

  const onUpdate = (row, col) => {
    const newGrid = [...grid];
    const cell = newGrid[col][row];
    if (cell.isMine) updateGameOver(true);
    else newGrid[col][row] = { ...cell, distance: getDistance(row, col, grid) };
    setGrid(newGrid);
    setCellClicked(cellsClicked + 1);
  };

  const renderGrid = (cols) => {
    return cols.map((col, i) => {
      return (
        <div key={i} className="sweeper-cols">
          {col.map((c, j) => {
            return (
              <SweeperCell
                key={`${i}-${j}`}
                onUpdate={onUpdate}
                row={j}
                col={i}
                gameOver={gameOver}
                {...c}
              />
            );
          })}
        </div>
      );
    });
  };
  return <div className="sweeper-grid">{renderGrid(grid)}</div>;
}

export default SweeeperGrid;
