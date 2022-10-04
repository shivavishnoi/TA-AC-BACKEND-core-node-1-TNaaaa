var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.end(`welcome`);
}

server.listen(`4000`, `localhost`, () => {
  console.log(`server lisenng to port 4000`);
});
