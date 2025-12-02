const fs = require('fs');
const { exit } = require('process');
var text = fs.readFileSync('data2.txt', 'utf8')
var data = text.split("\n")
var matchCount = 0;
const res = data.some(x => {
    // console.log(x);
    var aRange = [];
    var bRange = [];
    var pair = x.split(',')
    //console.log(pair);
    var aMin = Number(pair[0].split("-")[0]);
    var aMax = Number(pair[0].split("-")[1]);
    var bMin = Number(pair[1].split("-")[0]);
    var bMax = Number(pair[1].split("-")[1]);
    console.log(aMin + "::" + aMax);
    console.log(bMin + "::" + bMax);
    console.log('---');
    // SINGLE NUMBER CHECK
    var singleCheckA = aMin == aMax;
    var singleCheckb = bMin == bMax;
    var doubleCheckA = aMax - aMin;
    var doubleCheckb = bMin - bMax;
    if (doubleCheckA === 1) {
        console.log("DOUBLE CHECK");
        console.log(doubleCheckA);
        if (aMin >= bMin && aMax <= bMax) {
            console.log("### DOUBLE MATCH");
            console.log(x);
            console.log('----------');
            matchCount++;
        }
    }
    if (doubleCheckb == 1) {
        console.log("DOUBLE CHECK B");
        console.log(doubleCheckb);
        if (bMin >= aMin && bMax <= aMax) {
            console.log("### DOUBLE  B MATCH");
            console.log(x);
            console.log('----------');
            matchCount++;
        }
    }
    if (singleCheckA) {
        if (aMin >= bMin && aMin <= bMax) {
            console.log("### SINGLE MATCH");
            console.log(x);
            console.log('----------');
            matchCount++;
            //return aMin >= bMin && aMin <= bMax;
        } else {
            // console.log("### SINGLE NO MATCH");
        }
    }
    if (singleCheckb) {
        if (bMin >= aMin && bMin <= aMax) {
            console.log("### SINGLE MATCH B");
            console.log(x);
            console.log('----------');
            matchCount++;
            // return bMin >= aMin && bMin <= aMax;
        } else {
            // console.log("### SINGLE NO MATCH B");
        }
    }

    if ((!singleCheckb || !singleCheckA) || (doubleCheckb == 1 || doubleCheckA == 1)) {



        for (var i = aMin; i <= aMax; i++) {
            aRange.push(i);
        }
        for (var j = bMin; j <= bMax; j++) {
            bRange.push(j);
        }
        var aMerge = aRange.join("");
        var bMerge = bRange.join("");
        // console.log(aRange);
        // console.log(bRange);
        // console.log(aMerge);
        // console.log(bMerge);
        var aRangeCheck = aMerge.includes(bMerge);
        var bRangeCheck = bMerge.includes(aMerge);
        // console.log("A CHECK: " + aRangeCheck);
        // console.log("B CHECK: " + bRangeCheck);
        if (aRangeCheck || bRangeCheck) {
            console.log('***MATCH***');
            console.log(x);
            console.log('----------');
            matchCount++;
        }
    }
    // console.log('----------');
});
//486 too high
//465 too high
console.log("MATCHES: " + matchCount);