const fs = require('fs') 

var text = fs.readFileSync('data2.txt','utf8')
var data = text.split("\n")
// var parsed = data.filter((d, i) => {   
//     return d > data[i-1]
// });
var start = 0;
var end = 3;
const tot = [];
for(var i = 0; i < data.length-1; i++) {
    var trip = data.slice(start, start+3);
    var trip2 = data.slice(start+1, start+4);
    if(trip2.length == 3) {
        var trip_total = trip.reduce((s,n) => {
            return parseInt(s) + parseInt(n);
        });    
        var trip2_total = trip2.reduce((s2,n2) => {
            return parseInt(s2) + parseInt(n2);
        });
        start++;       
        if(trip2_total > trip_total) {
            tot.push(trip_total);
        }
    }        

}

console.log(tot.length) //1378



// console.log(parsed.length);