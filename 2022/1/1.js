const fs = require('fs');

var text = fs.readFileSync('data.txt', 'utf8')
var data = text.split("\n")
var data2 = text.split("\n\n")
//---
data.push('#');
console.log(data);

start = 0;
var i = 0;
var testStr = data;
console.log(testStr);
console.log(testStr.length);
var running = 0;
var tot = [];

while (i < testStr.length) {
    console.log(testStr[i]);
    if (testStr[i] === '' || (testStr[i] === '#')) {
        console.log('*');
        tot.push(running);
        running = 0;
    } else {
        running += parseInt(testStr[i]);
    }
    console.log(running);
    ++i;
}
console.log(tot.sort());
const lastThree = tot.sort().slice(-3);
console.log(lastThree);
console.log(Math.max(...tot));
const calSum = lastThree.reduce((acc, val) => {
    return acc + val;
});
console.log(calSum);

