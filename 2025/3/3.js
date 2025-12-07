const fs = require("fs");
var text = fs.readFileSync("data1.txt", "utf8");
var data = text.split("\r\n");

const findHighestPosition = (line) => {
  const subLine = line.trim().slice(0, -1);
  if (subLine.length === 0) {
    return -1; // Handle empty or single-digit input
  }
  const highestDigit = Math.max(...subLine.split("").map((d) => +d));
  const highestDigitPosition = subLine.indexOf(highestDigit.toString());
  return [highestDigit, highestDigitPosition];
};
const findSecondHighestPosition = (line) => {
  const highestDigit = Math.max(...line.split("").map((d) => +d));
  const highestDigitPosition = line.indexOf(highestDigit.toString());
  return [highestDigit, highestDigitPosition];
};

var runningDigitSum = 0;

for (const digits of data) {
  const [highDigit, highPos] = findHighestPosition(digits);
  const newLine = digits.slice(highPos + 1);
  const [highDigit2, highPos2] = findSecondHighestPosition(newLine);
  const combinedDigit = String(highDigit) + String(highDigit2);
  let singleNumber = Number(combinedDigit);
  runningDigitSum += singleNumber;
}

console.log(runningDigitSum);
