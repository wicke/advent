const fs = require('fs');
const { exit } = require('process');
var text = fs.readFileSync('data.txt', 'utf8')
var data = text.split("\n")
var matchCount = 0;
var overlapCount = 0;
const res = data.forEach(x => {
    var pair = x.split(',')
    var aMin = Number(pair[0].split("-")[0]);
    var aMax = Number(pair[0].split("-")[1]);
    var bMin = Number(pair[1].split("-")[0]);
    var bMax = Number(pair[1].split("-")[1]);
    console.log(aMin + "::" + aMax);
    console.log(bMin + "::" + bMax);


    if ((aMin > bMax) || (aMax < bMin)) {
        console.log("--------- NO OVERLAP");
        overlapCount++;
    } else {
        console.log(" OVERLAPS ");
    }


    if (aMin >= bMin && aMax <= bMax) {
        console.log("################## A FITs B");
        console.log(x);
        matchCount++;
    } else if (bMin >= aMin && bMax <= aMax) {
        console.log("################## B FITS A");
        console.log(x);
        matchCount++;
    } else {
        console.log("xxxxxxxxx NO MATCH");
        console.log(x);
    }






    console.log('*********');


});
// console.log('----------');

//486 too high
//465 too high
//453
console.log("MATCHES: " + matchCount);
console.log("NO OVERLAPS: " + overlapCount);
console.log(data.length - overlapCount); //372 too low