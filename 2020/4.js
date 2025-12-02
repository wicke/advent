const fs = require('fs') 

var text = fs.readFileSync('./4/data.txt','utf8')
var parsed2 = text.replace(/\n/g, '*');
var parsed3 = parsed2.split('**');

var data = parsed3.map((m) => {
    return m.replace(/\*/g, ' ');
}).map((m) => {
    return m.split(' ');
});

var q_count = 0;

var q = data.map((k) => {
    if(k.length === 8) {
        const [check, reason] = checkline(k);
        if(check === false) {
            q_count++;        
        }
    } else if (k.length === 7) {        
        var fail = false;
        for(var i = 0; i < k.length; i++) {    
            if(k[i].indexOf('cid') === 0) {                
                fail = true;                
            }
        };
        if(fail === false) {
            const [check, reason] = checkline(k);
            if(check === false) {
                q_count++;        
            }
        }
    }        
});

console.log(q_count);


function checkline(line) {
   // console.log(line);
   var fail_reason = [];
   var fail = false;
    for(var i = 0; i < line.length; i++) {    
        //console.log(line[i].toString().split(':'));
        var v = line[i].toString().split(':')
        switch(v[0]) {
            case 'iyr':
                var check = v[1].length === 4;
                var range;
                range = v[1] >= 2010 && v[1] <= 2020; 
                if ((check === false) || (range === false)) {
                    fail = true;
                    fail_reason.push('iyr');
                }
                break;
            case 'byr':
                var check = v[1].length === 4;
                var range;
                range = v[1] >= 1920 && v[1] <= 2002; 
                if ((check === false) || (range === false)) {
                    fail = true;
                    fail_reason.push('byr');
                }
                break;
            case 'ecl':                
                var cols = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
                check = cols.includes(v[1]);                
                if(check === false) {
                    fail = true;
                    fail_reason.push('ecl');
                }                
               // console.log(check);
                break;
            case 'eyr':
                var check = v[1].length === 4;
                var range;
                range = v[1] >= 2020 && v[1] <= 2030; 
                if ((check === false) || (range === false)) {
                    fail = true;
                    fail_reason.push('eyr');
                }
                break;                
            case 'hcl':                
                var re1 = /^#[0-9a-f]{6}/;
                var re = new RegExp(re1, 'g');                
                check = re.test(v[1]);                
                if ((check === false)) {
                    fail = true;
                    fail_reason.push('hcl');
                }
                break; 
            case 'cid':
                break; 
            case 'pid':
                var re1 = /^(\d{9})$/;
                var re = new RegExp(re1, 'g');                
                check = re.test(v[1]);
                if ((check === false)) {
                    fail = true;
                    fail_reason.push('pid');
                }
                break; 
            case 'hgt':               
                var re1 = /^(\d{3}['cm']|\d{2}['in'])/;
                var re = new RegExp(re1, 'g');                
                check = re.test(v[1]);               
                if ((check === false)) {
                    fail = true;
                    fail_reason.push('hgt');
                }
                break; 
        }
    };
    //console.log(fail_reason);
    return [fail, fail_reason];
}