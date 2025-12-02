const fs = require('fs');
var text = fs.readFileSync('data1.txt', 'utf8')
var data = text.split("\n")

console.log(data);
const a = [];
const b = [];
const locations = data.map(location => {
    numbers = location.split('   ');
    a.push(numbers[0]);
    b.push(numbers[1]);
});

a.sort((a, b) => a - b);
b.sort((a, b) => a - b);

const countOccurrences = (arr, val) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

const totalDiff = a.reduce((sum, val, index) => {
    return sum + (countOccurrences(b, val) * val);
}, 0);

console.log("TOTAL DIFF");
console.log(totalDiff);
