const fs = require('fs');
const { exit } = require('process');
var text = fs.readFileSync('data.txt', 'utf8')
var data = text.split("\n")

var match = [];
var priority = 0;
for (var x = 0; x < data.length; x += 3) {
    console.log(data[x]);
    var check = "";
    [...data[x]].some(c => {
        console.log(c);
        if (data[x + 1].includes(c) && data[x + 2].includes(c)) {
            console.log("*MATCH*");
            console.log(c);
            if (c.charCodeAt(0) >= 97) {
                priority = c.charCodeAt(0) - 96;
            }
            else if (c.charCodeAt(0) < 97) {
                priority = c.charCodeAt(0) - 38;
            }
            match.push(priority);
            return c;
        }
    });
    // console.log(match);
    console.log("---");
}






const priorityTot = match.reduce((acc, tot) => {
    return acc + tot;
});

console.log(priorityTot);