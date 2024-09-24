const fs = require('fs');

// const fileContents = fs.readFileSync('./index.html', { encoding: 'utf-8' });

// Node error-first callback

// callback('err ENOENT', undefined)

fs.readFile('./index.html', { encoding: 'utf-8' }, (err, fileContents) => {
  if (err) {
    return console.log('bad stuff happened', err);
  }

  console.log('fileContents', fileContents.length);
});

console.log('bottom of the file');
