const { resolveSoa } = require('dns');
var http = require('http');
const { type } = require('os');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  // res.statusCode = 201;
  console.log(req.method);
  res.writeHead(201, { 'content-type': 'text/html' });
  res.write('<h2>hello</h2>');
  res.end();
}
server.listen(4444, 'localhost', () => {
  console.log(`server ready`);
});
