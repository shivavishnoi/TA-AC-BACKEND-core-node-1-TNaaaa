// let fs = require('fs');

// fs.readFile('./index.md', (err, data) => {
//   if (err) {
//     return err;
//   }
//   console.log(data.toString());
// });

var buff1 = Buffer.alloc(10);
buff1.write(`welcome node`);
console.log(buff1);
