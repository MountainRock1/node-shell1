const fs = require('fs');
const done = require('./bash.js')

// const ls = () => {
  
//     fs.readdir('./', 'utf8', (err, files) => {
//       if (err) {
//         throw err;
//       } else {
//         done()
//       }
//     });
//   }


// const done = (output) => {
//   // show the output
//   process.stdout.write(output);
//   // show the prompt
//   process.stdout.write('\nprompt > ');

// };

module.exports = (done) => {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(files.join('\n'));
    }
  });
};
  


