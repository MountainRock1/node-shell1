let reqPwd = require('./pwd.js');
let reqLs = require('./ls.js');
let cat = require('./cat.js');
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); 
    if (cmd == 'pwd') {
        reqPwd();
    }
    else if (cmd == 'ls') {
        reqLs();
    }
    else if (cmd.slice(0,3) == 'cat') {
        arr = cmd.split(' ');
        arg = arr[1];
        cat(arr[1]);
    }
});
