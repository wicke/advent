const fs = require('fs');
const { exit } = require('process');
var text = fs.readFileSync('data.txt', 'utf8')
var data = text.split("\n")


var row = [];
const res = data.map(x => {
    row.push(x);
});

// CALCULATE PERIMETER
var rowLength = row.length;
var colLength = row[0].length;
console.log(rowLength);
console.log(colLength);
// get first and last row sums
var firstRowSum = 0;
var lastRowSum = 0;
for (var y = 0; y < colLength; y++) {
    firstRowSum += Number(row[0][y]);
    lastRowSum += Number(row[rowLength - 1][y]);
}
// get sides minus top and bottom
var firstColSum = 0;
var lastColSum = 0;
for (var i = 1; i < rowLength - 1; i++) {
    firstColSum += Number(row[i][0]);
    lastColSum += Number(row[i][colLength - 1]);
}
var visibleSum = 0;
//visibleSum = firstRowSum + lastRowSum + firstColSum + lastColSum;
visibleSum = (colLength * 2) + ((rowLength - 2) * 2)
console.log(visibleSum);


// GET INNER COUNT
var innerStart = row[1];
var innerEnd = row[rowLength - 2];

// console.log(innerStart);
// console.log(innerEnd);
var maxScore = [];
for (var z = 1; z < rowLength - 1; z++) {
    //console.log(row[z]);
    for (var zz = 1; zz < colLength - 1; zz++) {
        //  console.log(row[z][zz]); // pivot
        maxScore.push(checkPivot(z, zz));
        // if (checkPivot(z, zz) == true) {
        //     // console.log("*****************VISIBLE");
        //     visibleSum++;
        // }

    }
}

console.log(maxScore);
console.log(Math.max(...maxScore));

function checkPivot(currRow, currCol) {
    var res = false;
    var currPoint = row[currRow][currCol];
    //console.log(currPoint);
    //LEFT CHECK
    //console.log("LEFT CHECK");
    var leftResult = true;
    var leftTrees = 0;
    var leftTreeCount = 0;
    for (var l = currCol - 1; l >= 0; l--) {
        leftTreeCount++;
        if (currPoint <= row[currRow][l]) {
            leftResult = false;
            break;
        }
        // console.log("LEFT: " + row[currRow][l] + ":: " + leftResult);
    }
    //console.log("LEFT ==> " + leftResult);
    // console.log("LEFT TREES ==> " + leftTreeCount);
    // if (leftResult) {
    //     return true;
    // }
    //RIGHT CHECK
    // console.log("RIGHT CHECK");
    var rightResult = true;
    var rightTreeCount = 0;
    for (var r = currCol + 1; r <= colLength - 1; r++) {
        rightTreeCount++;
        if (currPoint <= row[currRow][r]) {
            rightResult = false;
            break;
        }

        //  console.log("RIGHT: " + row[currRow][r]);
    }
    // console.log("RIGHT TREES ==> " + rightTreeCount);
    // console.log("RIGHT ==> " + rightResult);
    // if (rightResult) {
    //     return true;
    // }
    //UP CHECK
    // console.log("UP CHECK");
    var upResult = true;
    var upTreeCount = 0;
    for (var u = currRow - 1; u >= 0; u--) {
        upTreeCount++;
        if (currPoint <= row[u][currCol]) {
            upResult = false;
            break;
        }
        //  console.log("UP: " + row[u][currCol]);
    }
    // console.log("UP TREES ==> " + upTreeCount);
    // console.log("UP ==> " + upResult);
    // if (upResult) {
    //     return true;
    // }
    //DOWN CHECK
    //console.log("DOWN CHECK");
    var downResult = true;
    var downTreeCount = 0;
    for (var d = currRow + 1; d <= rowLength - 1; d++) {
        downTreeCount++;
        if (currPoint <= row[d][currCol]) {
            downResult = false;
            break;
        }
        //   console.log("DOWN: " + row[d][currCol]);
    }
    //  console.log("DOWN TREES ==> " + downTreeCount);
    // console.log("DOWN ==> " + downResult);
    // if (downResult) {
    //     return true;
    // }
    return leftTreeCount * rightTreeCount * upTreeCount * downTreeCount;
}