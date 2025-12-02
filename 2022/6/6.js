const fs = require('fs');
var text = fs.readFileSync('data.txt', 'utf8')
var data = text.split("\n")



var packetStart = 0;

for (var x = 0; x < text.length - 13; x++) {

    console.log(text[x]);
    var hold = [];
    for (var y = 0; y < 14; y++) {
        hold.push(text[x + y]);
    }
    console.log(hold);
    var check = uniqueCheck(hold, x + 14); // T/F
    if (check) {
        packetStart = (x + 14);
        break;
    }
    console.log(check);
    console.log("============");
}

console.log(packetStart);

function uniqueCheck(arr, x) {
    console.log("CHECKING: " + x);
    var dups = arr.filter((item, index) => {
        return arr.indexOf(item) != index;
    });

    console.log(...arr);
    console.log(dups);
    return dups.length == 0;
}