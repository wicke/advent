const fs = require('fs');
var text = fs.readFileSync('data.txt', 'utf8')
var text2 = fs.readFileSync('rules.txt', 'utf8')
var data = text.split("\n")
var rules = text2.split("\n")


function parseData(input) {
    return input.map((row) => row.split(','));
}

var a = [];
var midCount = 0;

function runUpdate(data) {
    console.log(data);
    data.map((row) => {
        updatePage = row.split(',');
        console.log(updatePage);
        const allPass = updatePage.slice(0, -1).every((page, index) => {
            const result = checkForward(page, updatePage, index);
            return result;
        });

        const allPassReverse = updatePage
            .slice(1) // Exclude the first element
            .reverse() // Reverse the array
            .every((page, index) => {
                const actualIndex = updatePage.length - index; // Adjust index to match the original array
                console.log(actualIndex);
                const result = checkBackward(page, updatePage, actualIndex);
                return result;
            });

        if (allPass ? console.log(" ##  F PASS  ##") : console.log(" XX F FAIL XX"));

        if (allPassReverse ? console.log(" ##  B PASS  ##") : console.log(" XX B FAIL XX"));
        if (allPass && allPassReverse) {
            const middleIndex = Math.floor(updatePage.length / 2);
            const midPage = updatePage[middleIndex];
            console.log(midPage);
            midCount += Number(midPage);
        }
    })
}


function checkForward(page, row, index) {
    console.log("CHECKING F: " + page + " " + index);
    for (var i = index + 1; i < row.length; i++) {
        var ruleCheck = page + "|" + row[i];
        console.log('--> ' + ruleCheck);
        var checkPass = false;
        rules.map((rule) => {
            if (rule === ruleCheck) {
                checkPass = true;
                console.log(rule);
            }
        })
    }
    return checkPass;
}


function checkBackward(page, row, index) {
    console.log("CHECKING B: " + page + " " + index);
    for (var i = index - 2; i >= 0; i--) {
        var ruleCheck = page + "|" + row[i];
        console.log('--> ' + ruleCheck);
        var checkPass = true
        rules.map((rule) => {
            if (rule === ruleCheck) {
                checkPass = false;
                console.log(rule);
            }
        })
        if (!checkPass) break;
    }
    return checkPass;
}


runUpdate(data);
console.log(midCount);
