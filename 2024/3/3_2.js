const fs = require('fs');
var data = fs.readFileSync('data1.txt', 'utf8')


const mulRegex = /mul\(\d+,\d+\)/g;

var newData = removeDontSections(data);
console.log(newData);

var runningSum2 = 0;
var mulMatch = newData.match(mulRegex);
var result = [];
mulMatch.forEach(n => {
    const [, num1, num2] = n.match(/mul\((\d+),(\d+)\)/);
    multiplyNum2 = num1 * num2;
    runningSum2 += multiplyNum2;
    result.push([num1, num2]);
    console.log(n);
})
const calculations = result
    .map(([a, b]) => a * b)
    .reduce((sum, product) => sum + product, 0);

console.log(calculations);

function removeDontSections(corruptedCode) {

    return corruptedCode.replace(/don't\(\)[\s\S]*?do\(\)/g, "")

}