const fs = require('fs');

const cat = (fileName) => {

        
    fs.readFile(fileName, 'utf8', (err, content) => {
    if (err) {
        throw err;
    } else {
        process.stdout.write('\n' + content);
        process.stdout.write('\nprompt > ');
    }
    });
    }
  
    
    


module.exports = cat;