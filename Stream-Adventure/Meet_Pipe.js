var fs = require('fs');
fs.createReadStream(process.argv[2]).pipe(process.stdout);

// var file = process.argv[2];
// fs.createReadStream(file).pipe(process.stdout);
