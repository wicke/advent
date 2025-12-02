const fs = require('fs'); 
const { DefaultDeserializer } = require('v8');

var data = fs.readFileSync('data.txt','utf8')
var data = data.split("\n")
//var points2 = points.split(" -> ")


console.log(data);
// var A = [];
// var B = [];
var startX = [];
var startY = [];
var endX = [];
var endY = [];
var C = [];
var points = data.map((x) => {
   // console.log(x);
    var line = x.split(" -> ");
    //console.log(line[0]);
    var A = line[0]; 
    var B  = line[1];
    //var B = A.split(',');

   // console.log(A + ' :: ' + B);
    var AA = A.split(',');
   // console.log(AA);

    var BB = B.split(',');
  //  console.log(BB);
    
    startX.push(AA[0]);
    startY.push(AA[1]);
    endX.push(BB[0]);
    endY.push(BB[1]);

    
});

 var board = [];
for(var row = 0; row < 5; row++) {
    for(var col = 0; col < 5; col++) {
        board[row, col] = 0;
    }
}

console.log(board);



console.log(data.length);
for(var x = 0; x < data.length; x++) {
    var sx = startX[x];
    var ex = endX[x];
    if (sx != ex) {
        var start = sx;
        var end = ex;
        if(start < end) {
            for(var j = start; j > end; j--) {
                board[j][end] = 1;
            }
        }
    }
    
    
    // console.log(startX[x]); 
    // console.log(endX[x]);
}
console.log(board);
// console.log(startX[4]);
// console.log(startY[4]);
// console.log(endX[4]);
// console.log(endY[4]);

