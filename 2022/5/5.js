const { Console } = require('console');
const fs = require('fs');
var gridFile = fs.readFileSync('grid.txt', 'utf8')
var grid = gridFile.split("\n")
var moveFile = fs.readFileSync('data.txt', 'utf8')
var moves = moveFile.split("\n")
var cols = [];
var stacks = [];
var gridSize = grid.length - 1;
console.log(gridSize);
// initGrid();
// initStacks();

function initGrid() {
    for (var z = 0; z < gridSize; z++) {
        var row = grid[z];
        for (var x = 0; x < row.length; x += 4) {
            if (row.slice(x, x + 3) == '   ') {
                cols.push([z, '*']);
            } else {
                cols.push([z, row.slice(x + 1, x + 2)]);
            }
        }
    }
}

function initStacks() {
    // transpose
    var counter = 0;
    for (var i = 0; i < 9; i++) {
        var s = [];
        for (var j = 0; j < 8; j++) {
            counter = (j + ((8 * j) + i));
            //console.log(cols[counter][1]);
            if ([cols[counter][1]] != '*') {
                s.push([cols[counter][1]])
            };
        }
        // console.log(s);
        stacks.push(s)
        //console.log('*****');
    }
}
// console.log('STACKS');
// console.log(stacks);


function moveBox(from, to, qty) {
    initGrid();
    initStacks();
    var topBox = [];
    for (var w = 0; w < qty; w++) {
        fromClean = stacks[from - 1];
        console.log(fromClean);
        var t = getTopBox(fromClean);
        topBox.push(t);
        fromClean.shift(topBox);
        console.log(fromClean);
    }
    console.log(topBox);
    // fromClean = stacks[from - 1];
    toClean = stacks[to - 1];
    // console.log(fromClean);
    // fromClean.shift(topBox); // need to change array
    // console.log(fromClean);
    // console.log('=============');
    for (var x = topBox.length - 1; x >= 0; x--) {
        console.log(toClean);
        toClean.unshift(topBox[x]);
        console.log(toClean);
    }
    // console.log(toClean);
    // toClean.unshift(topBox);
    // console.log(toClean);
    // console.log('=============');
}

function getTopBox(stack) {
    // console.log("GETTING STACK");
    // remove * cells
    //
    var foundBox = "";
    const topBox = stack.some((x) => {
        return foundBox = x[0];
    });
    return foundBox;
}

function getTopBoxQty(stack, qty) {

    var foundBox = "";
    const topBox = stack.some((x) => {
        return foundBox = x[0];
    });
    return foundBox;
}


// MAIN LOOP
const res = moves.map(x => {
    var matches = x.match(/(\d+)/);
    var from = x.match(/from\s(\d+)/);
    var to = x.match(/to\s(\d+)/);
    var move = matches[0];
    var moveFrom = from[1];
    var moveTo = to[1];
    console.log(x);
    moveBox(moveFrom, moveTo, move);
});

getTopRow();

function getTopRow() {
    console.log('TOP ROW *********');
    for (var i = 0; i < 9; i++) {
        console.log(stacks[i][0]);
    }
}
