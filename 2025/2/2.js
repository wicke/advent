const fs = require("fs");
var text = fs.readFileSync("data.txt", "utf8");
var data = text.split(",");

console.log(data);

data.map((id) => {
  range = id.split("-");
  firstLength = range[0].length;
  console.log(firstLength);
  for (var x = range[0]; x <= range[1]; x++) {
    console.log("CHECKING: " + x);
  }
});
