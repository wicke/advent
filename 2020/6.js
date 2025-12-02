const fs = require('fs'); 
const { chdir, exit } = require('process');

var text = fs.readFileSync('./6/data.txt','utf8')
var parsed2 = text.replace(/\n/g, '*');
var parsed3 = parsed2.split('**');

var data = parsed3.map((m) => {
    return m.replace(/\*/g, ' ');
}).map((m) => {
    return m.split(' ');
});


var runningA = [];
var q = data.map((k) => {    
    // var yesCount = parseRow(k);
    // runningA.push(yesCount);    
    var yesCountGroup = parseGroup(k);
    runningA.push(yesCountGroup);    
});

var total = runningA.reduce((total, num) => {
    return total+num;
});

console.log('TOTAL : ' + total);

function parseRow(row) {
    console.log(row);
    var letters = [];
    for(var t = 97; t <= 122; t++) {
        letters[String.fromCharCode(t)] = 0;
    }
    var populated = new Map();
    for(var i = 0; i<row.length; i++) {        
        var answer = row[i];
        for(var j = 0; j<answer.length; j++) {                              
            populated.set(answer[j], true);                                
        }              
    }
    console.log(populated.size);          
    return populated.size;
}


function parseGroup(row) {

    console.log(row);
    
    //check first row with rest for sames
    var first_row = row[0];
    console.log(first_row);    
        var letterCount = 0;
         for(var j = 0; j < row[0].length; j++) {                                                                  
            console.log('----- LETTER ---- ' + first_row[j]);            
            if(row.length == 1) {                
                letterCount = row[0].length;                
            }
            if(row.length > 1) {             
                var check_count = 1;                
                for(var z = 1; z <= row.length-1; z++)    {
                    var next_row = row[z];
                    var check_f = next_row.indexOf(first_row[j]);                    
                    if(check_f === -1) {
                        break;
                    }                                                           
                }                
                if(check_f !== -1) {
                    letterCount++;
                }                   
            }                                   
         }
         console.log("CHECK COUNT: " + letterCount);
         console.log('==========================');
        
         return letterCount;
}




//bapocnysdr
//lpandcmb
//bplndca

// b : 3
// a : 3
// p : 3
// o : 1
// c : 3
// n : 3
// y : 1
// s : 1
// d : 1
// r : 1