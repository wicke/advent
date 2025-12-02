const fs = require('fs') 

var text = fs.readFileSync('numbers.txt','utf8')
var text2 = fs.readFileSync('data.txt','utf8')
var numbers = text.split(",")
var cards2 = text2.split("\n")
var testStr = cards2
var bingoCard = [];
var bingo = false;

var i = 0;
while(i < testStr.length) {
    if(testStr[i] === '') {
        testStr.splice(i,1);        
    } else {
        ++i;
    }
}

// PUSH CARDS INTO ARRAY
var ii = 0;
while(testStr.length > 0) {
    var parseData = testStr.splice(0, 5);    
    bingoCard.push(parseData);    
    ++ii;
}

var newArray = [];
for (var z = 0; z < bingoCard.length; z++) {
    newArray = [];
    for(var x = 0; x < 5; x++) {
        var newRow = bingoCard[z][x];           
        var re = /\s\s/g;
        var r2 = /^\s/;
        var new2 = newRow.replace(re, ' ');                   
        var new3 = new2.replace(r2, '');        
        var splitRow = new3.split(" ");        
        var newRow = [];
        splitRow.map((i) => {            
            var newNum = Number(i);          
            newRow.push(newNum);            
        });        
        newArray.push(newRow); 
    }
    bingoCard[z] =  newArray;
}

// console.log(bingoCard);
drawNumbers();

function drawNumbers() {
    
    var bingoCount = 0;
    

    draw = numbers.forEach((number) => {   
        if(bingoCount < 200) {
            //console.log(bingoCount);
       console.log('******************************' + number);

        if(bingo == false) {    
            bingoCard.forEach((card, indexCard) => {                 
                
                    for(var j = 0; j < 5; j++) {
                       // console.log("J " + j + " CARD: " + indexCard);
                        var newC = [];
                        var newR = [];               
                        for(var i = 0; i < 5; i++) {                                                                                         
                            if(card[j][i] == number) {                              
                                card[j][i] = -1;
                            }                               
                            if(card[i][j] == number) {                               
                                card[i][j] = -1;
                            }
                            newC.push(card[j][i]);       
                            newR.push(card[i][j]);    
                        }                                          
                        var newSum = getSum(newC);
                        var newSumR = getSum(newR);  

                        if((newSum == -5) || (newSumR == -5)) {                  
                            //BINGO ROW OR COL                    
                            bingoCount++;              
                            // console.log('BINGO ' + bingoCount);   
                             console.log(bingoCard[indexCard]);
                            delete bingoCard[indexCard];
                           // break;
                            //const index = bingoCard[indexCard];
                            //bingoCard.splice(indexCard, 1);   
                            //indexCard--;
                           
                        }
                    }                        
                
                
            });
                
               console.log('----------------------------------');            
        }

    }
    });
    
}

function getSum(row) {        
    var newCSum = row.reduce((a,b) => {
        return a+b;
    }); 
    return newCSum;
}

// function checkNums(row, num, cards) {
//     console.log('BEFORE: ' + row);
//     row.forEach((n, indexNum) => {
//         console.log('CHECKING: ' + n);
//         if (n == num) {
//             row[indexNum] = -1;
//             //cards[indexCard][indexRow][indexNum] = -1;   
//         }
//     })
//     console.log('AFTER: ' + row);


                                         
// }
