import { TOTAL_COLUMNS, TOTAL_MINES, TOTAL_ROWS } from "../constants";

export const generateGrid = (row, col) => {
  const cols = [];
  const minesObj = generateRandomMines();
  for (let i = 0; i < row; i += 1) {
    const rows = [];
    for (let j = 0; j < col; j += 1) {
      const cell = {};
      if (minesObj[`${i}${j}`]) cell.isMine = true;
      rows.push(cell);
    }
    cols.push(rows);
  }
  return cols;
};

const generateRandomMines = () => {
  //const len = Math.floor(row / col) + 1;
  let counter = 0;
  let randomMines = {};
  while (counter < TOTAL_MINES) {
    const random = Math.floor(Math.random() * 100) - 1;
    if (!randomMines[random] && random < TOTAL_ROWS * TOTAL_COLUMNS) {
      randomMines[String(random).padStart(2, "0")] = true;
      counter += 1;
    }
  }
  return randomMines;
};

export const getDistance = (row, col, grid) => {
  let counter = 0;
  for (let j = row - 1; j <= row + 1; j += 1) {
    for (let i = col - 1; i <= col + 1; i += 1) {
      if (i < 0 || i >= grid.length) {
        continue;
      }
      const cell = grid[i][j];
      if (cell && cell.isMine) {
        counter += 1;
      }
    }
  }
  return counter;
};
