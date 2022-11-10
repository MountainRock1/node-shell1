let reqPwd = require('./pwd.js');
let reqLs = require('./ls.js');
let cat = require('./cat.js');
let date1 = require('./date.js');


const done = (output) => {
    // show the output
    process.stdout.write(output);
    // show the prompt
    process.stdout.write('\nprompt > ');

};

module.exports = done;


process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); 
    if (cmd == 'pwd') {
        reqPwd(done);
    }
    else if (cmd == 'ls') {
        reqLs(done);
    }
    else if (cmd.slice(0,3) == 'cat') {
        arr = cmd.split(' ');
        arg = arr[1];
        cat(arr[1], done);
    }
    else if (cmd == 'date') {
        date1(done);
    }
});

