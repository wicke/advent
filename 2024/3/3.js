const fs = require('fs');
var text = fs.readFileSync('data1.txt', 'utf8')
var data = text.split("\n")

const input = [];
data.map(x => {
    input.push(x);
});
console.log(input.length);
const regex = /mul\(\d+,\d+\)/g;
var runningSum = 0;
input.forEach(row => {
    var matches = row.match(regex);
    matches.forEach(item => {
        const [, num1, num2] = item.match(/mul\((\d+),(\d+)\)/);
        multiplyNum = num1 * num2;
        runningSum += multiplyNum;
    });
})

console.log(runningSum);