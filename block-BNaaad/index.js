// console.log(`welcome to node`);
// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }

var path = require('path');
var os = require('os');
var path = require('path');

var filepath = path.join(__dirname, 'index.md');
var freeMem = os.freemem();
console.log(filepath, freeMem, os.cpus().length);
