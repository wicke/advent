const fs = require('fs') 

var text = fs.readFileSync('data.txt','utf8')
var data = text.split("\n")

var pos = 1;

var holdB = [];
var holdE = [];

for(var i = 0; i < 12; i++) {
    var hold = [];
    const bits = data.forEach((x) => {    
        var unit = x.slice(i, i+1); 
        hold.push(unit);    
    });
    console.log(hold);
    const count1 = hold.filter((val) => {
        return val == 1;
    });
    var bitLength = hold.length;
    var countOne = count1.length;
    var countZero = bitLength-countOne;
    var bit = 0;
    var bitE = 1;
    if(countOne > countZero) {
        bit = 1;
        bitE = 0;
    }  
    holdB.push(bit);
    holdE.push(bitE);   
    var gamma = holdB.join('');
    var epsilon = holdE.join('');   
    console.log(parseInt(gamma,2) * parseInt(epsilon,2));
}
