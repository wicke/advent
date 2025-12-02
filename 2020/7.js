const fs = require('fs'); 
const { userInfo } = require('os');

var text = fs.readFileSync('./7/data.txt','utf8')
var text = text.split("\n")


var countSet = new Set()
// text
//  .filter(r => r.match(/contain[\sa-z0-9,]*shiny gold/i))
//  .forEach(r => {
//    var containingBag = r.match(/([a-z\s]*)\sbag[s]?\scontain/i)[1].trim()
//    countSet.add(containingBag)
// });

// console.log(countSet.size);

var getBag = (childBag) => {
   var bagReg = new RegExp(`contain[\\sa-z0-9,]*${childBag}`,'i')
   text
       .filter(r => r.match(bagReg))
       .forEach(r => {
           var containingBag = r.match(/([a-z\s]*)\sbag[s]?\scontain/i)[1].trim()
           countSet.add(containingBag)
           console.log(containingBag);
           getBag(containingBag)
       })
}
 
getBag('shiny gold')
console.log(countSet.size) // = 115

// console.log(text);

// var data = text.map((m) => {   
//    return m.replace(/no other bags/g, ' NONE');
//  }).map((m) => {
//     return m.replace(/bags contain/g, '*');
//  }).map((m) => {
//     return m.replace(/ bags/g, '');
//  }).map((m) => {
//     return m.replace(/ bag/g, '');
//  }).map((m) => {
//     return m.replace(/\./g, '');
//  }).map((m) => {
//     return m.replace(/\,\s/g, ',');
//  }).map((m) => {
//     return m.replace(/\d+/g, '');
//  }).map((m) => {
//     return m.split(' *  ');
//  });
// //  console.log(data);
// var cols = [];
// var populated = new Map();
// var goldlist = new Map();
// var colours = data.map(function(m) {    
//    var baglist = m[1];
//    var bagcol = m[0];
//    var blist = "NONE"; 
//    //console.log("SETTING: " + bagcol.toString());
//    //populated.set(m[0], m[1]);   
//    populated.set(bagcol.toString(), baglist);   
//    goldlist.set(bagcol.toString(), false);
  
//    return cols[m[0]] = m[1];  
// });
// populated.set("NONE", ['NONE']); 
// //
// console.log(populated.has('bright gold'));
// populated.forEach(function(value, key) {
//  //  console.log(key);
//  // console.log('---' +  populated.get(value) + ' ::: ' + populated.get(key));
//  });


//  var gold_count = 0;
// for(var i = 0; i < 594; i++) { 
//    var colourrow = data[i];
//   // console.log(colourrow);
//    var incolour = colourrow[0];
//    console.log("COLOUR -----------------------------------------------------------------------------> " + incolour);   
//    var bags = populated.get(incolour);
//   // console.log(incolour + " BAGS ::: " + bags);
//    // for(var i = 1; i < colourrow.length; i++) {
//    //    // console.log('====================================');
//    //    // console.log("ROW: " + colourrow[i]);
//     var col = colourrow[1].split(', ');            
    
//    //for(var j = 0; j < col.length; j++) {         
//    //    //    console.log(populated.get(col[j]));
//     getBags(col, incolour );
//     //console.log("GOLD LIST: " + goldlist.size);
//     var newCount = 0;
    
//    //     //}
//    // }  
   
   
// };
// goldlist.forEach(function(value, key) {
//    //  console.log(key);
//     console.log('---' +  value + ' ::: ' + key);
//     if(value === true) {
//        newCount++;
//     }
//    });
// console.log("NEW COUNT: " + newCount);
// console.log("GOLD COUNT: " + gold_count);
// var cont = [];
// function getBags(col, incolour) {
    
//    // cont = true;
   
//      // console.log(cont);
   
//   // console.log("GET BAGS ==> " + col);
//    for(var j = 0; j < col.length; j++) {   
//      // console.log("GETTING: " + col[j]);
//       var bags = populated.get(col[j]);
//      // console.log("GET: " + bags); 
//       if(bags == "NONE") {
//          // console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX BREAK");
//           break;
//        }     
           
//       var parsed = bags.split(', ');   
//      // console.log(parsed);
//       if(parsed[0] === 'NONE') {
//         // console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX BREAK");
//          break;
//       }
//       if(parsed[0] === 'shiny gold') {
//          console.log("********************************************************* SHINY GOLD");
//          gold_count++;
//          console.log("COLOUR: " + incolour);
//          goldlist.set(incolour, true);
//          // cont = false;
//         // console.log(cont);
//          return;
//         // break;
//       }
      
//      getBags(parsed, incolour);
//    }
   


//   // return gold_count;
// }