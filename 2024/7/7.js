const fs = require('fs');
const text = fs.readFileSync('data.txt', 'utf8')
var data = text.split("\n")


const a = [];
const b = [];
// const dataSet = new Set();

function parseData(data) {
    console.log(data);
    const input = data.map((row, index) => {
        const dataRow = row.split(':');
        //dataSet.add(`${dataRow[0]},${dataRow[1]}`);
        a.push(dataRow[0]);
        b.push(dataRow[1].split(' ').slice());
    });

}

parseData(data);

console.log(a);
console.log(b);