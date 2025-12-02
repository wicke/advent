const fs = require('fs'); 
const { DefaultDeserializer } = require('v8');

var text = fs.readFileSync('data.txt','utf8')
var data = text.split("\n")
var original = data;

const bitLength = data[0].length;
const dataLength = data.length;

let ogr = 0;
let c02 = 0;

var holdONE = [];
var holdZERO = [];


// MOST COMMON
// for(var i = 0; i < bitLength; i++) {   
//     var hold = [];
//     console.log("*** LOOP: " + i); 
//     let countONE = 0;
//     let countZERO = 0;
//     let mostCommonBit = 0;    
//     // 1. FIND THE COMMON   
//     var bits = data.forEach((x) => {    
//         var unit = x.slice(i, i+1);                
//         if(unit == 1) {
//             holdONE.push(x);                       
//         } else {
//             holdZERO.push(x);                        
//         }        
//     });        
//     console.log('COUNT1: ' + holdONE.length);
//     console.log('COUNT0: ' + holdZERO.length);        
//     if(holdONE.length >= holdZERO.length) {
//         mostCommonBit = 1;
//     }    
//     holdONE = [];
//     holdZERO = [];
//     console.log("MOST COMMON: " + mostCommonBit);    
//     console.log('===');
//     // LOOP ONLY COMMON (0|1)
//     var bits2 = data.forEach((y) => {    
//         var unit2 = y.slice(i, i+1);         
//         console.log("UNIT 2: " + unit2);        
//         if(unit2 == mostCommonBit) {
//             hold.push(y);                       
//         }         
//     });        
//     console.log(hold);
//     data = hold;
//     if(hold.length == 1) {
//         ogr = parseInt(hold,2)        
//         console.log("OGR: " + ogr);        
//         // 1883
//     }
// }

//LEAST COMMON
data = original;
hold = [];
for(var i = 0; i < bitLength; i++) {   
    var hold = [];
    var holdLeast = [];
    console.log("*** LOOP: " + i); 
    let countONE = 0;
    let countZERO = 0;    
    let leastCommonBit = 0;
    // 1. FIND THE COMMON   
    var bits = data.forEach((x) => {    
        var unit = x.slice(i, i+1);         
       // console.log(unit);        
        if(unit == 1) {
            holdONE.push(x);                       
        } else {
            holdZERO.push(x);                        
        }        
    });        
    console.log('COUNT1: ' + holdONE.length);
    console.log('COUNT0: ' + holdZERO.length);        
    if(holdONE.length < holdZERO.length) {
        leastCommonBit = 1;
    }    
    holdONE = [];
    holdZERO = [];    
    console.log("LEAST COMMON: " + leastCommonBit);
    console.log('===');
    // LOOP ONLY COMMON (0|1)
    var bits2 = data.forEach((y) => {    
        var unit2 = y.slice(i, i+1);         
       // console.log("UNIT 2: " + unit2);        
        if(unit2 == leastCommonBit) {
            hold.push(y);                       
        } 
        
    });        
    console.log(hold);
    data = hold;
    if(hold.length == 1) {        
        c02 = parseInt(hold,2);        
        console.log("C02: " + c02); //3757
        console.log(c02 * ogr);
        return;
    }
}

