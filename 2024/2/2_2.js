const fs = require('fs');
const { exit } = require('process');
var text = fs.readFileSync('data1.txt', 'utf8')
var data = text.split("\n")

const input = [];
const res = data.map(x => {
    input.push(x.split(' ').map(Number));
});

const checkDesc = (report) => {
    for (var i = 0; i < report.length - 1; i++) {
        if (parseInt(report[i]) <= parseInt(report[i + 1])) {
            return false;
        }
    }
    return true;
}

const checkAsc = (report) => {
    for (var i = 0; i < report.length - 1; i++) {
        if (parseInt(report[i]) >= parseInt(report[i + 1])) {
            return false;
        }
    }
    return true;
}

const checkDiff = (report) => {
    for (var i = 0; i < report.length - 1; i++) {
        if (Math.abs(report[i] - report[i + 1]) > 3) {
            return false;
        }
    }
    return true;
}

var xCount = 0;
var notSafe = [];

input.forEach((val, index) => {
    if (checkDesc(val) || checkAsc(val)) {
        if (checkDiff(val)) {
            xCount++;
        } else {
            notSafe.push(val);
        }
    } else {
        notSafe.push(val);
    }
})


var newSafe = 0;
var yCount = 0;
notSafe.forEach((row, index) => {
    console.log('---------');
    console.log(row);
    for (var i = 0; i < row.length; i++) {
        let modifiedLevel = row.filter((_, index) => {
            return index !== i;
        });

        console.log(modifiedLevel);
        var checkPass = false;

        if (checkDesc(modifiedLevel) || checkAsc(modifiedLevel)) {
            if (checkDiff(modifiedLevel)) {

                console.log(modifiedLevel + ' --- PASS');
                checkPass = true;
            }
        }

        if (checkPass === true) {
            yCount++;
            console.log('NEW SAFE');
            break;
        }

    }
});



console.log('====================');
console.log(xCount);
console.log(yCount);
console.log(xCount + yCount);
console.log(notSafe.length);

