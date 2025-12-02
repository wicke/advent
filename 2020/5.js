const fs = require('fs') 

var text = fs.readFileSync('./5/data.txt','utf8')
var data = text.split("\n")
var allseats = [];
var q = data.map((d) => {    
    var row = parseData(d);
    var col = parseCol(d);
    // console.log(row);
    // console.log(col);
    var final = (row*8) + col;
    allseats.push(final);
    // console.log(allseats);
    // console.log('--------------------------------------');

});

//console.log(Math.max(...allseats));
//console.log(allseats.sort());
sorted = allseats.sort();


allseats.sort(function(a, b) {
  return a - b;
});
// check = allseats.map((m) => {
//     return m;
// });
function iterate(item, index, array) {
    // console.log(item);
    // console.log(array[index]);
    if(array[index] - array[index+1] === -2) {
        console.log(array[index]);
    }
    // if(index === array.length - 1) {
    //     console.log("LAST");
    // }
}
allseats.forEach(iterate);

// check = allseats.forEach((val) => {
//     console.log(val);
// });


// console.log(allseats);
//console.log(check);
// console.log(allseats[900]);

function parseCol(data) {
    var f = [];   
    var b = [];        
    var range;
    var upper = 7;
    var lower = 0;
    for(var q = 7; q <=9; q++) {    
        //console.log(data[q]);
        var range = (upper - lower);
        //console.log(range);
        f[0] = lower;        
        f[1] = lower + ((range-1)/2);     
        b[0] =  f[1] + 1;
        b[1] = upper;        
        // console.log(f);
        // console.log(b);
        [lower, upper] = parseLine(data[q], f, b);                
    }
    return lower;

}

function parseData(data) {   
    var f = [];   
    var b = [];        
    var range;
    var upper = 127;
    var lower = 0;
    for(var q = 0; q <=6; q++) {    
        var range = (upper - lower);
        f[0] = lower;        
        f[1] = lower + ((range-1)/2);        
        b[0] =  f[1] + 1;
        b[1] = upper;        
        [lower, upper] = parseLine(data[q], f, b);        
    }
       
    return lower;
    
}

function parseLine(line, l, u) {
   
    var min;
    var max;
    
    if((line === 'F') || (line === 'L')) {
        //LOWER    
        min = l[0];
        max = l[1];
    } else if ((line === 'B') || (line === 'R')) {
        //UPPER        
        min = u[0];
        max = u[1];
    }

     return [min,max];

}



// 901 rows
// console.log(data[901]);
// F=LOWER, B=UPPER
// START: WHOLE RANGE OF NUMBERS (0-127)
// 1: F=(0,63), B=(64,127)
// (0,63)
// (0,31),(32,63) 
// (0,15)(16,31) || (32,47)(48,63)
// (0,7)(8,15)(16,23)(24,31) || (32,39)(40,47)(48,55)(56,63)
//---
// (0,3)(4,7)(8,11)(12,15)(16,19)(20,23)  || 
//      (32,35)(36,39)(40,43)(44,47)(48,51)(52,55)(56,59)(60,63)
//---
// (0,1)(2,3)(4,5)(6,7)
// (8,9)(10,11)(12,13)(14,15)
// (16,17)(18,19)(20,21)(22,23)
// (24,25)(26,27)(28,29)(30,31) ... (60,61)(62,63)

//FBFBBF
// 1: (0,63) OR (64,127)
// 1: F = (0,63)
// 2: (0,31),(32,63)
// 2: B = (32,63)
// 3: (32,47)(48,63)
// 3: F = (32,47)
// 4: (32,39)(40,47)
// 4: B = (40,47)
// 5: (40,43)(44,47)
// 5: B = (44,47)
// 6: (44,45),(46,47)
// 6: F = (44,45) == ROW 44


