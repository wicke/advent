const fs = require('fs') 

var text = fs.readFileSync('numbers.txt','utf8')
var text2 = fs.readFileSync('data.txt','utf8')
var numbers = text.split(",")
var cards2 = text2.split("\n")

var cCard = {
    'CARD': cards2
};

console.log(cCard);

var bingoCard = [];
var bCard = [];
var isBingo = false;
var bingo = false;
var testStr = cards2;
 // PARSE OUT CARDS
var index = testStr.indexOf('');
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
        var new2 = newRow.replace(re, ' ');                   
        var splitRow = new2.split(" ");        
        var newRow = [];
        splitRow.map((i) => {            
            var newNum = Number(i);
           // console.log(newNum);
            newRow.push(newNum);
            //return Number(i)
        });
        // console.log(splitRow);
        // console.log(newRow);
        newArray.push(newRow); 

    }
    bingoCard[z] =  newArray;
}
var xBingo = bingoCard[0];
makeColCards(bingoCard);
// console.log(bingoCard);
//drawNumbers(); 

function drawNumbers() {

    draw = numbers.forEach((number) => {   
        if(bingo == false) { 
         console.log ("---->NUMBER: " + number);

        bingoCard.forEach((card, indexCard) => {
            if(bingo == false) { 
            console.log(bingo);
            console.log(">>> CARD: " + indexCard);
            card.forEach((row, indexRow) => {    
                console.log(row);
                row.forEach((num, indexNum) => {           
                    if(num == number) {
                        console.log("MATCH: " + indexCard + '::' +  indexRow + '::' + indexNum + ' NUMBER: ' + number)
                        bingoCard[indexCard][indexRow][indexNum] = -1;                                         
                        // IF BINGO -> SAVE CARD NUM AND CALCULATE SUM OF REMAINING NUMBERS
                    }                
                });  
                isBingo = bingoCheck(row);       
                if(isBingo) {
                    console.log("*** BINGO ****");
                    bingo = true;
                    bCard = indexCard; 
                    // GET SUM OF UNCALLED NUMS
                    
                    bingoCard[bCard].forEach((row) => {                        
                        var index = row.indexOf(-1);   
                        row[index] = 0;                   
                        var newSum = row.reduce((a,b) => {  
                            return a + b;
                        });
                        console.log("NEW: " + newSum);
                    });
                }                       
            });
            }
        });
    }
});

}

function bingoCheck(row) {   
    var rowSum = row.reduce((a,b) => {
        return a + b;            
    });
    if (rowSum == -5) {
        return true;
    }
    return false;
}
    
 function makeColCards(cards) {
     
    var originalCard = [];
    for (var i = 0, len = cards.length; i < len; i++) {
        originalCard[i] = cards[0].slice();
    }
    // console.log(cards[0] === originalCard);
    // console.log(originalCard);

    var newCard = cards[0]; 
    var colCard = [];
    console.log("INCOMING");   
    console.log(newCard);
    for(var i = 0; i < 5; i++) {
        for(var j = 0; j < 5; j++) {            
            console.log(cards[0][j][i]);
            colCard[i][j] = cards[0][j][i];
        }
        console.log('---');
    }

    // for(var i = 0; i < 5; i++) {
    //     for(var j = 0; j < 5; j++) {            
    //         newCard[j][i] = cards[0][i][j];  
    //         // console.log(j + '::' + i + ' == ' + cards[0][i][j] );
    //     }        
    // }    
    // console.log("NEW CARD: ");
    // console.log(newCard);
    // console.log("ORIGINAL");
    // console.log(originalCard);
 }  
