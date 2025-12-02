const fs = require('fs');
var text = fs.readFileSync('data.txt', 'utf8')
var data = text.split("\n")

const a = [];
const b = [];

a['21'] = 1;
a['32'] = 2;
a['13'] = 3;
a['11'] = 4;
a['22'] = 5;
a['33'] = 6;
a['31'] = 7;
a['12'] = 8;
a['23'] = 9;

b['21'] = 1;
b['31'] = 2;
b['11'] = 3;
b['12'] = 4;
b['22'] = 5;
b['32'] = 6;
b['33'] = 7;
b['13'] = 8;
b['23'] = 9;

const rsp = [];
const res = data.map(x => {
    var val = x.split(' ');
    switch (val[0]) {
        case 'A':
            val[0] = 1;
            break;
        case 'B':
            val[0] = 2;
            break;
        case 'C':
            val[0] = 3;
            break;
        default:
            break;
    }
    switch (val[1]) {
        case 'X':
            val[1] = 1;
            break;
        case 'Y':
            val[1] = 2;
            break;
        case 'Z':
            val[1] = 3;
            break;
        default:
            break;
    }

    console.log(String(val[0]) + ':' + String(val[1]));
    const mergedNum = String(val[0]) + String(val[1]);
    console.log(b[mergedNum]);
    rsp.push(b[mergedNum]);
    return val;


});

const rspTot = rsp.reduce((acc, curr) => {
    return acc + curr;
});
console.log(rspTot);
console.log(rsp);
// results(2,1)=1;
// results(3,2)=2;
// results(1,3)=3;
// results(1,1)=4;
// results(2,2)=5;
// results(3,3)=6;
// results(3,1)=7;
// results(1,2)=8;
// results(2,3)=9;