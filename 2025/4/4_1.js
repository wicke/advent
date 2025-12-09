const fs = require("fs");
var text = fs.readFileSync("data.txt", "utf8");
var data = text.split("\r\n");

var gridBoard = Array.from({ length: data.length }, () => Array(140).fill("."));
var xBoard = gridBoard;
console.log(xBoard);
const ROWS = gridBoard.length;
const COLS = gridBoard[0].length;

const countPopulatedNeighbours = (row, col) => {
  const offsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let neighbourCount = 0;

  for (const [dRow, dCol] of offsets) {
    const neighbourRow = row + dRow;
    const neighbourCol = col + dCol;
    const isInsideBounds =
      neighbourRow >= 0 &&
      neighbourRow < ROWS &&
      neighbourCol >= 0 &&
      neighbourCol < COLS;

    if (
      isInsideBounds === true &&
      gridBoard[neighbourRow][neighbourCol] === "@"
    ) {
      neighbourCount++;
    }
  }
  return neighbourCount < 4;
};

//INITIALIZE
for (const [index, rows] of data.entries()) {
  for (var i = 0; i < rows.length; i++) {
    gridBoard[index][i] = rows[i];
  }
}

// RUN CHECKS
var accessCount = 0;
//for (const [col, rows] of data.entries()) {
for (var col = 0; col < xBoard; col++) {
  for (var i = 0; i < rows.length; i++) {
    currentCell = gridBoard[col][i];
    if (currentCell === "@") {
      const cellCount = countPopulatedNeighbours(col, i);
      console.log(col, i);
      if (cellCount === true) {
        // REMOVE PAPER
        console.log(`----> REMOVE ${col},${i}`);
        // gridBoard[col][i] = ".";
        accessCount++;
      }
    }
  }
  //   /newBoard[col][i] = gridBoard[col][i];
}

console.log("========");
console.log(`ACCESS COUNT ${accessCount}`);
