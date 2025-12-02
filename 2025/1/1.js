const fs = require("fs");
var text = fs.readFileSync("data.txt", "utf8");
var data = text.split("\r\n");

var currentLocation = 50;
var newLocation = 50;
console.log("=============================");
console.log("START: " + currentLocation);
var passwordCount = 0;
var zeroPass = 0;

data.map((rotation) => {
  const match = rotation.match(/(\D)(\d+)/);
  if (match) {
    var startLocation = currentLocation;
    const direction = match[1];
    const originalClicks = parseInt(match[2], 10);
    const clicks = parseInt(match[2], 10);
    const cleanClicks = clicks % 100;
    const leadingDigits = Math.floor(clicks / 100);
    console.log("START:" + startLocation);
    // console.log("LEADING: " + leadingDigits);
    var passedZero = false;

    // console.log(`ROTATION ${rotation} :: ${direction}->${clicks}`);

    if (direction == "R") {
      orignialLocation = currentLocation + clicks;
      newLocation = currentLocation + cleanClicks;
      console.log("ORIGINAL LOCATION: " + orignialLocation);
      console.log("CLEAN LOCATION: " + newLocation);
      if (newLocation > 99) {
        newLocation -= 100;
        console.log("PASSED ZERO TO " + newLocation);
        if (newLocation != 0 && startLocation != 0) {
          passedZero = true;
          console.log(originalClicks);
          if (originalClicks > 99) {
            //zeroPass = leadingDigits;
            console.log(
              "GREATER THAN 100: " + originalClicks + "::" + leadingDigits
            );
          } else {
            zeroPass++;
          }
        }
      }

      currentLocation = newLocation;
    } else if (direction == "L") {
      orignialLocation = currentLocation - clicks;
      newLocation = currentLocation - cleanClicks;
      console.log("ORIGINAL LOCATION: " + orignialLocation);
      console.log("CLEAN LOCATION: " + newLocation);
      if (newLocation < 0) {
        newLocation += 100;
        console.log("PASSED ZERO TO " + newLocation);
        if (newLocation != 0 && startLocation != 0) {
          if (originalClicks > 99) {
            console.log(
              "GREATER THAN 100: " + originalClicks + "::" + leadingDigits
            );
            zeroPass += leadingDigits;
          } else {
            zeroPass++;
          }
          passedZero = true;
        }
      }
      currentLocation = newLocation;
    }
    if (currentLocation == 0) {
      passwordCount++;
      console.log("STOPPED ON 0");
    }
    console.log(
      `THE DIAL STARTED AT ${startLocation} IS ROTATED ${direction}->${clicks} TO POINT ${currentLocation} `
    );
    if (passedZero) {
      console.log("PASSED ZERO");
    }
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
