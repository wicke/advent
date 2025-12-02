const fs = require('fs');
var text = fs.readFileSync('data1.txt', 'utf8')
var data = text.split("\n")

const directions = [
    [-1, 0], //UP
    [1, 0], //DOWN
    [0, -1], //LEFT
    [0, 1], //RIGHT
    [-1, 1], // DIAG up right
    [-1, -1], // DIAG up left
    [1, 1], // DIAG down right
    [1, -1], // DIAG down left    
];

function parseMatrix(input) {
    return input.map((row) => row.split(''));
}
// function initBooleanMatrix(matrix) {
//     return matrix.map(row => row.map(() => false));
// }

var a = [];
var b = [];
var xCount = 0;
var foundCount = 0;
a = parseMatrix(data);
console.log(a);

// console.log(a[0][0]);
// b = initBooleanMatrix(a);

for (let r = 0; r < a.length; r++) {
    for (let c = 0; c < a[r].length; c++) {
        const letter = a[r][c];
        //console.log(letter);
        if (letter === 'X') {
            console.log(r + '::' + c);
            // b[r][c] = true;
            xCheck(r, c);
        }
    }
}


function xCheck(row, col) {
    console.log("=================X FOUND: ", row, col);
    foundCount++;
    for (const [dRow, dCol] of directions) {
        console.log("DIRECTION: " + dRow, dCol);
        var word = 'X';
        var newC = col;
        var newR = row;
        for (var x = 1; x <= 3; x++) {
            newR = newR + dRow;
            newC = newC + dCol;
            if ((newR >= 0 && newR <= a.length - 1) && (newC >= 0 && newC <= a[0].length - 1)) {
                // console.log(a.length, a[0].length);
                // console.log(newR, newC);
                // console.log(a[newR][newC]);
                word += a[newR][newC];
            }

        }
        //console.log(word);
        if (word === 'XMAS') {
            console.log(row, col);
            console.log('*************XMAS');
            xCount++;
        }
        // console.log(neighborRow, neighborCol);
        // if ((neighborCol < 0 || neighborCol > a[0].length) || (neighborRow < 0 || neighborRow > a.length - 1)) {
        //     console.log('OUT OF RANGE');

        // } else {
        //     console.log(a[neighborRow][neighborCol]);
        //     if (a[neighborRow][neighborCol] === "M") {
        //         console.log("M *");
        //     }
        // }

        // console.log(a[neighborRow][neighborCol]);
        // if (a[neighborRow, neighborCol] === "M") {
        //     console.log(dRow + ':' + dCol);
        // }
    }
}

// console.table(a[r].length);

console.log(foundCount);
console.log("XMAS COUNT: " + xCount);
// console.table(b);