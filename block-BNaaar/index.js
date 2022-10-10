var http = require('http');
var url = require('url');

var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  var parsedUrl = url.parse(req.url);
  var pathname = parsedUrl.pathname;
  if (req.method === `GET` && pathname === `/`) {
    res.write('Welcome to homepage');
    res.end();
  } else if (req.method === `GET` && pathname === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(`<h2>this is all about NodeJS</h2>`);
  } else if (req.method === `POST` && pathname === '/about') {
    let str = JSON.stringify(`{message: this is a post request}`);
    res.end(str);
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.write('not valid');
    res.end();
  }
}

server.listen(5000, () => {
  console.log(`server started at 5000`);
});
