const fs = require('fs');
var text = fs.readFileSync('data1.txt', 'utf8')
var data = text.split("\n")

const input = [];
const res = data.map(x => {
    input.push(x);
});

var levels = [];
const checkDesc = (report) => {
    console.log('-----------------------------')
    console.log("DESC CHECK");
    console.log(report);
    var levels = report.split(' ');
    for (var i = 0; i < levels.length - 1; i++) {
        if (parseInt(levels[i]) <= parseInt(levels[i + 1])) {
            console.log("NOT DESC");
            return false;
        }
    }
    console.log("DESC");
    return true;
}
const checkAsc = (report) => {
    console.log('-----------------------------')
    console.log("ASC CHECK");
    console.log(report);

    var levels = report.split(' ');
    console.log(levels.length);
    for (var i = 0; i < levels.length - 1; i++) {
        console.log(i);
        console.log('CHECKING: ' + levels[i] + ':' + levels[i + 1]);
        if (parseInt(levels[i]) >= parseInt(levels[i + 1])) {
            console.log("NOT ASC");
            return false;
        } else {
            console.log(levels[i] >= levels[i + 1])
        }
    }
    console.log("ASC");
    return true;
}
const checkDiff = (report) => {
    var levels = report.split(' ');
    for (var i = 0; i < levels.length - 1; i++) {
        if (Math.abs(levels[i] - levels[i + 1]) > 3) {
            return false;
        }
    }
    return true;
}

var ordered = [];
var notOrdered = [];
var checkInput = [...input];
var xCount = 0;
// console.log(checkInput);
input.forEach((val, index) => {
    // console.log(input[index]);
    if (checkDesc(input[index])) {
        // console.log("DESC");
        ordered.push(val);
        // checkInput[index] = val + ' * DESC * ';
        if (checkDiff(input[index])) {
            checkInput[index] = val + ' * DESC * --- SAFE';
            xCount++;
        } else {
            checkInput[index] = val + ' * DESC * --- NOT SAFE';
        }
    }
    else if (checkAsc(input[index])) {
        // console.log("ASC");
        ordered.push(val);
        // checkInput[index] = val + ' * ASC * ';
        if (checkDiff(input[index])) {
            checkInput[index] = val + ' * ASC * --- SAFE';
            xCount++;
        } else {
            checkInput[index] = val + ' * ASC * --- NOT SAFE';
        }
    } else {

        // console.log("*** NOT ASC OR DESC ***");
        notOrdered.push(val);
        checkInput[index] = val + ' * XXX *  --- NOT SAFE';
    }
})

// var finalSafe = [];
// var notSafe = [];
// var checkRange = [];
// ordered.forEach((val, index) => {
//     console.log(ordered[index]);
//     if (checkDiff(ordered[index])) {
//         //    / console.log("SAFE");
//         finalSafe.push(val);
//         checkRange[index] = val + ' * SAFE * ';
//     } else {
//         notSafe.push(val);
//         checkRange[index] = val + ' * FAIL * ';
//     }
// });

// console.log('====================');
// console.log(ordered);
// console.log(ordered.length);

// console.log('====================');
// console.log(finalSafe);
// console.log(finalSafe.length);
// console.log('====================');
// console.log(notSafe);
// console.log(notSafe.length);

console.log('====================');
// console.log(checkRange);
// console.log(checkRange.length);
checkInput.forEach(val => {
    console.log(val);
})

console.log(xCount);
// console.log(1000 - xCount);