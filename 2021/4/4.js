const fs = require('fs') 

var text = fs.readFileSync('numbers.txt','utf8')
var numbers = text.split(",")
var text2 = fs.readFileSync('data.txt','utf8')
var cards2 = text2.split("\n")
var bingoCard = [];
var isBingo = false;
var bingo = false;

var newCards = cards2;
console.log(newCards);

let cards = [
    [[83, 40, 67, 98,  4],
    [50, 74, 31, 30,  3],
    [75, 64, 79, 61,  5],
    [12, 59, 26, 25, 72],
    [36, 33, 18, 54, 10]],

    [[68, 56, 28, 57, 12],
    [78, 66, 20, 85, 51],
    [35, 23,  7, 99, 44],
    [86, 37,  8, 45, 49],
    [40, 77, 32,  6, 88]]
]
//console.log(cards[1][2][3]);




draw = numbers.forEach((number) => {   

if(bingo == false) {
    console.log('#: ' + number);
    //LOOP ALL THE CARDS
    cards.forEach((card, indexCard) => {
    //    console.log(">>> CARD: " + indexCard);
        //LOOP CARD ROWS
        card.forEach((row, indexRow) => {                
            //LOOP EACH NUMBER OF ROW
            row.forEach((num, indexNum) => {           
                if(num == number) {
                    console.log("MATCH: " + indexCard + '::' +  indexRow + '::' + indexNum)
                    cards[indexCard][indexRow][indexNum] = -1;                                         
                    // IF BINGO -> SAVE CARD NUM AND CALCULATE SUM OF REMAINING NUMBERS
                }                
            });  
            isBingo = bingoCheck(row);       
            if(isBingo) {
                bingo = true;
                bingoCard = indexCard; 
            //    console.log("BINGO CHECK: " + isBingo);                        
            //    console.log("BINGO CARD: " + bingoCard); 
                // GET SUM OF UNCALLED NUMS
                cards[bingoCard].forEach((row) => {
                    var newSum = row.reduce((a,b) => {  
                        return a + b;
                    });
                    console.log("NEW: " + newSum);
                });
            }          
             
        });
    });
}
});

//console.log(cards);

function bingoCheck(row) {   
    var rowSum = row.reduce((a,b) => {
        return a + b;            
    });
    if (rowSum == -5) {
        return true;
    }
    return false;
}
    
   
    //     var rowSum = row.reduce((a, b) => { 
    //         return a + b;           
    //     });
    //     console.log(rowSum);
    //     return rowSum === -5;            
    // });

    // const check = card.forEach((row) => {
    //     console.log('ROW: ' + row);
    //     var rowSum = row.reduce((a, b) => { 
    //         return a + b;           
    //     });
    //     console.log(rowSum);
    //     return rowSum === -5;            
    // });
   
  