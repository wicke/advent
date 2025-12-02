const fs = require("fs");
var text = fs.readFileSync("data1.txt", "utf8");
var data = text.split("\n");

var currentLocation = 50;
var newLocation = 50;
console.log("=============================");
var passwordCount = 0;
var zeroPass = 0;

data.map((rotation) => {
  const match = rotation.match(/(\D)(\d+)/);
  if (match) {
    var startLocation = currentLocation;
    const direction = match[1];
    const clicks = parseInt(match[2], 10);
    const adjustedClicks = clicks % 100;
    const leadingDigits = Math.floor(clicks / 100);

    if (direction == "R") {

      newLocation = currentLocation + clicks;

      if (clicks > 100) {
        // DETERMINE ACTUAL ADJUSTED      
        newLocation = currentLocation + adjustedClicks;
        zeroPass += leadingDigits;
      }

      if (newLocation === 100) {
        newLocation = 0;
      } else if (newLocation > 100) {
        newLocation -= 100;
        if (currentLocation != 0) {
          zeroPass++;
        }
      }

      currentLocation = newLocation;

    } else if (direction == "L") {

      newLocation = currentLocation - clicks;

      //ADJUST IF THERE ARE MORE THAN 100 CLICKS
      if (clicks > 100) {
        // DETERMINE ACTUAL ADJUSTED
        newLocation = currentLocation - adjustedClicks;
        zeroPass += leadingDigits;
      }

      if (newLocation === 100) {
        newLocation = 0;
      } else if (newLocation < 0) {
        newLocation += 100;
        if (currentLocation != 0) {
          zeroPass++;
        }
      }
      currentLocation = newLocation;
    }

    if (currentLocation == 0) {
      passwordCount++;
    }

    console.log(
      `THE DIAL STARTED AT ${startLocation} IS ROTATED ${direction}->${clicks} TO POINT ${currentLocation} `
    );

  } else {
    console.log("NOT A MATCH");
  }
  console.log("--------------------------------");
});

console.log("PASSWORD COUNT: " + passwordCount);
console.log("ZERO COUNT: " + zeroPass);
console.log(
  "NEW PASSWORD: " + (parseInt(passwordCount, 10) + parseInt(zeroPass, 10))
);
