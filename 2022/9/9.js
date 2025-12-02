const fs = require('fs');
const { exit } = require('process');
var text = fs.readFileSync('data2.txt', 'utf8')
var data = text.split("\n")

var current = [];
current.push([0, 0]);
var direction = '';
var steps = 0;
var instructions = '';
var x = 0;
var y = 0;
var currentX = 0;
var currentY = 0;
var currentTX = 0;
var currentTY = 0;
const moves = data.map(z => {
    instructions = z.split(' ');
    direction = instructions[0];
    steps = instructions[1];
    if (direction === 'R') {
        console.log("R" + steps + " CURRENT: " + currentX + "::" + currentY);
        for (var i = 1; i <= steps; i++) {
            //MOVE H 1 SPACE RIGHT
            current.push([currentX + i, currentY]);
            console.log(currentX + i, currentY);
            //MOVE T 1 SPACE RIGHT
            // CASES
            // IF T IS LEFT
            // IF T IS DIAGONAL
            // IF T IS ABOVE
            // IF T IS BELOW
            // IF T IS RIGHT

        }
        currentX += Number(steps);
        //console.log(currentX, currentY);
    }
    else if (direction === 'L') {
        console.log("L" + steps + " CURRENT: " + currentX + "::" + currentY);
        for (var i = 1; i <= steps; i++) {
            current.push([currentX - i, currentY]);
            console.log(currentX - i, currentY);
        }
        currentX -= Number(steps);
        // console.log(currentX, currentY);
    }
    else if (direction === 'U') {
        console.log("U" + steps + " CURRENT: " + currentX + "::" + currentY);
        for (var i = 1; i <= steps; i++) {
            current.push([currentX, currentY + i]);
            console.log(currentX, currentY + i);
        }
        currentY += Number(steps);
        //console.log(currentX, currentY);
    }
    else if (direction === 'D') {
        console.log("D" + steps + " CURRENT: " + currentX + "::" + currentY);
        for (var i = 1; i <= steps; i++) {
            current.push([currentX, currentY - 1]);
            console.log(currentX, currentY - 1);
        }
        currentY -= Number(steps);
        //console.log(currentX, currentY);
    }

});



console.log(current);