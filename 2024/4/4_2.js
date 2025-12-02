const fs = require('fs');
var text = fs.readFileSync('data1.txt', 'utf8')
var data = text.split("\n")

function parseMatrix(input) {
    return input.map((row) => row.split(''));
}

var a = [];
var xCount = 0;
a = parseMatrix(data);

for (let r = 1; r < a.length - 1; r++) {
    for (let c = 1; c < a[r].length - 1; c++) {
        const letter = a[r][c];
        if (letter === 'A') {
            console.log('------- A FOUND: ' + r, c);
            if ((a[r - 1][c - 1] == 'M' && a[r + 1][c + 1] == 'S') && ((a[r - 1][c + 1] == 'M' && a[r + 1][c - 1] == 'S') || (a[r - 1][c + 1] == 'S' && a[r + 1][c - 1] == 'M'))) {
                xCount++;
            }
            if ((a[r - 1][c - 1] == 'S' && a[r + 1][c + 1] == 'M') && ((a[r - 1][c + 1] == 'M' && a[r + 1][c - 1] == 'S') || (a[r - 1][c + 1] == 'S' && a[r + 1][c - 1] == 'M'))) {
                xCount++;
            }
        }
    }
}

// console.log(foundCount);
console.log("MAS COUNT: " + xCount);
//2015 too high
// 1822 PASS