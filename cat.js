const fs = require('fs');
const done = require('./bash.js')

const cat = (fileName, done) => {

        
    fs.readFile(fileName, 'utf8', (err, content) => {
    if (err) {
        throw err;
    } else {
        done('\n' + content)
        // process.stdout.write('\n' + content);
        // process.stdout.write('\nprompt > ');
    }
    });
    }
  
    
    


module.exports = cat;