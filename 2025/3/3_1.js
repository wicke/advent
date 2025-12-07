const fs = require("fs");
var text = fs.readFileSync("data1.txt", "utf8");
var data = text.split("\r\n");

function findLargestNumber(line, k = 12) {
  const n = line.length;
  let result = "";
  let digitsToDrop = n - k;
  let currentPosition = 0;

  while (result.length < k) {
    const requiredRemaining = k - result.length;
    const searchLimit = n - requiredRemaining;
    const subLine = line.trim().slice(currentPosition, searchLimit + 1);
    let highestDigit = Math.max(...subLine.split("").map((d) => +d));
    let highestDigitPosition = subLine.indexOf(highestDigit.toString());

    result += highestDigit;
    digitsToDrop -= highestDigitPosition;
    currentPosition += highestDigitPosition + 1;
  }

  return parseInt(result, 10);
}

let runningResult = 0;
for (const digits of data) {
  const result = findLargestNumber(digits);
  runningResult += result;
}

console.log("FINAL : " + runningResult);
