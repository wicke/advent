const fs = require('fs');
const { cwd } = require('process');
var text = fs.readFileSync('dataC.txt', 'utf8')
var data = text.split("\n")

var parent = '/';
var directory = [];
var current = ['/', '-'];
var d = [];
d['/:-'] = 0;
parent['/']



listing = data.forEach((c, index) => {

    if (c.indexOf('$ cd') > -1) {
        // CHANGE DIR : GET PARENT
        console.log(c + " ********* CHANGE DIRECTORY ********* ");
        var dir = c.split(' ');
        //SET
        if (dir[2] == '..') {


            //console.log("CURRENT UP: " + current);
            //console.log("PARENT: UP 1");
            // current = "PARENT";
            //currentSplit = current.split('::');
            // console.log("TO: " + currentSplit[1]);
            // current = 
            // console.log("     CHANGE CURRENT TO PARENT");
        } else {
            current = ([dir[2], parent]);
            var currentArray = d[[dir[2] + ':' + parent]];
            // console.log(d);
            // console.log("CURRENT: " + current);
            // console.log("CURRENT ARRAY: " + currentArray);
            parent = dir[2];
            //parent = parentArray[0];
            //parentArray.push([dir[2], parent]);
            // console.log("CURRENT: " + dir[2]);
            // console.log("PARENT: " + parent);
            // console.log("     CHANGE TO " + dir[2]);
            //  parent = dir[2];
            //  parentIndex = dirIndex;
            // current = dir[2] + '_' + parent;
            //console.log("TO: " + current);
            // current = directory[dir[2]];
            // console.log(current);
        }
        //console.log("CURRENT: " + current);
        // console.log("PARENT: " + parent);
    } else if (c.indexOf('dir ') > -1) {
        //DIR
        // dirIndex++;
        var dir = c.split(' ');
        //d.push([dir[1] + ':' + parent]);
        d[[dir[1] + ':' + parent]] = 0;
        // dirArray.push([dir[1], parentIndex]);
        console.log(c + " POPULATE " + dir[1] + " PARENT:" + (current[0] + ':' + current[1]));
        // directory.push([dir[1], parent]);
        // parentArray[dir[1]] =
        // directory.push([dirIndex, dir[1], parent, parentIndex, dir[1] + "_" + parent]);
        //console.log(dir[1] + "::" + parent);

    } else if (c.indexOf('$ ls') > -1) {
        //LIST
        // console.log(c + " LIST ");
    } else {
        //FILE
        // console.log(c + " FILE ");
    }


});

console.log(d);