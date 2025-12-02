const fs = require('fs');
const { exit } = require('process');
var text = fs.readFileSync('data3.txt', 'utf8')
var data = text.split("\n")

//console.log(data);
const split = [];
const priorityArray = [];
const res = data.map(x => {
    console.log(x + "::" + x.length);
    const leftSide = x.slice(0, x.length / 2);
    const rightSide = x.slice((x.length / 2), x.length);

    [...leftSide].some(c => {
        const rightCheck = rightSide.indexOf(c);

        // console.log(rightSide[]);
        if (rightCheck != -1) {
            //a-z = 1-26 :: 97-123 = x-96
            //A-Z = 27-52 :: 65-91 = x-38
            //A = 65
            //a = 97
            var priority = 0;
            if (c.charCodeAt(0) >= 97) {
                priority = c.charCodeAt(0) - 96;
            }
            else if (c.charCodeAt(0) < 97) {
                priority = c.charCodeAt(0) - 38;
            }
            console.log('FOUND');
            console.log(c.charCodeAt(0));
            console.log(priority);
            priorityArray.push(priority);
            return rightCheck != -1;
        }
        console.log(c + '::' + rightCheck);
    })

    console.log(x.slice(0, x.length / 2));
    console.log(x.slice((x.length / 2), x.length));
    console.log(priorityArray);
    console.log("---");

    // loop through each letter if first half
    // check if it exists in second half
    // yes = done and thats the letter = push


});

console.log(priorityArray);

const priorityTot = priorityArray.reduce((acc, tot) => {
    return acc + tot;
});

console.log(priorityTot);