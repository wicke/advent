const fs = require("fs");
var text = fs.readFileSync("data1.txt", "utf8");
var data = text.split(",");

matchCount = 0;
matchTotal = 0;

const idCheck = (itemStr) => {
  const itemLen = itemStr.length;
  if (itemLen % 2 == 0) {
    const splitPt = itemLen / 2;
    const stringHalves = [itemStr.slice(0, splitPt), itemStr.slice(splitPt)];
    const [firstHalf, secondHalf] = stringHalves.map((s) => parseInt(s, 10));
    return firstHalf === secondHalf;
  }
  return false;
};

for (const dataRange of data) {
  const [startStr, endStr] = dataRange.split("-");
  const start = parseInt(startStr, 10);
  const end = parseInt(endStr, 10);
  for (let i = start; i <= end; i++) {
    const iStr = i.toString();
    const check = idCheck(iStr);
    if (check) {
      matchTotal += i;
      matchCount++;
      // console.log("MATCH");
    }
  }
}

console.log(`TOTAL MATCHES COUNT: ${matchCount}`);
console.log(`TOTAL MATCHES SUM: ${matchTotal}`);
