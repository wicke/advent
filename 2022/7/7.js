const fs = require('fs');
var text = fs.readFileSync('dataB.txt', 'utf8')
var data = text.split("\n")

// group = data.split('')
var cwd = [];
// cwd[0][0] = '/';//
cwdCount = -1;
var directory = [];
directory[0] = '/';
directoryCount = 0;
var currentDirectory = [];
parent = '/';
listing = data.forEach((c, index) => {
    console.log("****PARENT: " + parent + "*****CURRENT: " + cwd);
    console.log(">>> " + c);
    //CHECK CD
    if (c.indexOf('$ cd') > -1) {
        console.log('--------------------------------CHANGE DIRECTORY');
        var dir = c.split(' ');
        if (dir[2] == '..') {
            cwdCount--;
            // cwd[cwdCount] = dir[2];
            //currentDirectory = directory[cwdCount]
        } else {
            cwdCount++;
            // currentDirectory = directory[cwdCount];
        }
        //console.log("CHANGED TO : " + currentDirectory);
    } else if (c.indexOf('dir ') > -1) {
        directoryCount++;
        var dir = c.split(' ');
        // directory[directoryCount] = [cwd[0], dir[1], 0];
        console.log('************************************************ DIR');
        // console.log(directoryCount + '::' + directory[directoryCount]);
        console.log('************************************************');
    } else if (c.indexOf('$ ls') > -1) {
        //LIST
        console.log('LIST');
    } else {
        // FILE
        var file = c.split(' ');
        console.log('FILE ' + file[0]);
        console.log(cwd);
        console.log(directory);
        //directory[0][2] += Number(file[0]);


        //directory[directoryCount] = [cwd, dir[1], 0];
    }


});
console.log("===========");
for (var z = 0; z < directory.length; z++) {
    console.log(directory[z]);
}

