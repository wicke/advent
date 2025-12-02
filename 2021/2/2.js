const fs = require('fs') 

var text = fs.readFileSync('data.txt','utf8')
var data = text.split("\n")

let h = 0;
let d = 0;
let a = 0;
let l = [];

const trip = data.forEach((x) => {    
    l = x.split(' ');
    step = parseInt(l[1]);
    if(x.includes('forward')) {                
        h += step; 
        if (a > 0) {
            d += (a * step);            
        }                           
    }
    else if(x.includes('up')) {                  
        a -= step; 
    }
    else if(x.includes('down')) {                  
        a += step; 
    }   
});

console.log('H: ' + h)
console.log('D: ' + d)
console.log('A: ' + a)
console.log('TOT: ' + (h*d)); // 2105273490