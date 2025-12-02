const fs = require('fs');
const { start } = require('repl');
const text = fs.readFileSync('data2.txt', 'utf8')
var board = text.split("\n")

// const gameBoard = Array.from({ length: board.length }, () => Array(10).fill(0));
const usedBoard = Array.from({ length: board.length }, () => Array(10).fill(0));

let directions = {
    up: { dx: -1, dy: 0 },
    right: { dx: 0, dy: 1 },
    down: { dx: 1, dy: 0 },
    left: { dx: 0, dy: -1 }
}

let arrow = {
    x: 5, // Row position
    y: 5, // Column position
    direction: "right", // Initial direction: "up", "down", "left", "right"
};

function moveArrow() {
    const { dx, dy } = directions[arrow.direction];
    const nextX = arrow.x + dx;
    const nextY = arrow.y + dy;
}

function changeDirection(currentDirection) {
    //console.log("CHANGING DIRECTION " + currentDirection);
    const directionOrder = ["up", "right", "down", "left"];
    const index = directionOrder.indexOf(currentDirection);
    // console.log(index);
    return directionOrder[(index + 1) % 4];
}

function initialArrow(board) {
    // console.log("GETTING ARROW");
    //console.log(board);
    const symbols = { "^": "up", ">": "right", "V": "down", "<": "left" };
    for (var x = 0; x < board.length; x++) {

        for (var y = 0; y < board[x].length; y++) {
            if (symbols[board[x][y]]) {
                // console.log("FOUND: " + symbols[board[x][y]])
                return { x, y, direction: symbols[board[x][y]] };
            }
        }
    };
}

function runGame(board) {
    let arrow = initialArrow(board);
    // console.log(arrow);
    const visitedCells = new Set();
    const visitedState = new Set();
    let isRunning = true;

    while (isRunning) {
        const stateKey = `${arrow.x},${arrow.y},${arrow.direction}`;

        //console.log(stateKey);
        if (visitedState.has(stateKey)) {
            // endless loop detected
            console.log('++++++++++++++LOOP DETECTED');
            return { isEndlessLoop: true, visitedCount: visitedCells.size };
        }
        visitedState.add(stateKey);

        //console.log(`${arrow.x},${arrow.y}`);


        visitedCells.add(`${arrow.x},${arrow.y}`);
        //board[arrow.x][arrow.y] = "X";

        const { dx, dy } = directions[arrow.direction];
        const nextX = arrow.x + dx;
        const nextY = arrow.y + dy;



        if (nextX < 0 || nextX >= board.length ||
            nextY < 0 || nextY >= board[0].length) {
            isRunning = false;
        } else if (board[nextX][nextY] === "#") {
            //console.log("CHANGE DIRECTION");
            arrow.direction = changeDirection(arrow.direction);
            //console.log("NEW DIRECTION " + arrow.direction);
        } else {
            //console.log("KEEP GOING");
            arrow.x = nextX;
            arrow.y = nextY;
        }

        //console.log(arrow.x, arrow.y);
        // if (arrow.x > 0 || arrow.x >= board.length || arrow.y < 0 || arrow.y >= board[0].length) {
        //     break;
        // }
    }

    //return visited.size;
    return { isEndlessLoop: false, visitedCount: visitedCells.size };
}


let grid = initGrid(board);


// console.log(board[0][4]);

function initGrid(inboard) {
    const gameBoard = Array.from({ length: inboard.length }, () => Array(10).fill(0));
    for (var i = 0; i < inboard.length; i++) {
        for (var j = 0; j < inboard[0].length; j++) {
            // console.log(board[0]);
            gameBoard[i][j] = inboard[i][j];
        }
    }

    return gameBoard;
}

// const boardSize = board.length * board[0].length;
function countLoops(board) {
    let endlessLoopCount = 0;
    //initGrid(board);
    for (var xx = 0; xx < board.length; xx++) {
        for (var yy = 0; yy < board[0].length; yy++) {
            //console.log(board[xx][yy]);
            if (board[xx][yy] === '.') {
                // console.log("ADDING NEW OBSTACLE: " + xx + "," + yy);
                board[xx][yy] = '#';
                //console.log(board[xx][yy]);
                //gameBoard = initGrid(board);
                // console.log("CHECKING: " + xx, yy);//
                const result = runGame(board);
                // console.log(xx + ',' + yy + ' :: ' + result.isEndlessLoop);
                board[xx][yy] = ".";
                if (result.isEndlessLoop) {
                    console.log("ENDLESS FOUND " + xx, yy);
                    endlessLoopCount++;
                    board[xx][yy] = "O";
                }
            }
        }

    }

    return endlessLoopCount;
}

const endlessLoops = countLoops(grid);
console.log("Number of obstacles leading to endless loops:", endlessLoops);
// runGame(gameBoard);

// const distinctVisitedCount = runGame(gameBoard);
// console.log("Distinct 'X' cells visited:", distinctVisitedCount);
// console.log(gameBoard);