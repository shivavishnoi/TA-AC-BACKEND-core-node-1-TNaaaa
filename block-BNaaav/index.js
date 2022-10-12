var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(handleRequest).listen(2233, 'localhost', () => {
  console.log(`server started`);
});

function handleRequest(req, res) {
  if (url.parse(req.url).pathname == '/index.html' || req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./index.html').pipe(res);
  } else if (url.parse(req.url).pathname == '/about.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./about.html').pipe(res);
  } else if (req.url.split('.').pop() == 'css') {
    res.setHeader('Content-Type', 'text/css');
    fs.readFile('.' + req.url, (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
  } else if (req.url.split('.').pop() == 'jpg') {
    res.writeHead(200, { 'Content-Type': 'image/jpg' });
    fs.createReadStream('.' + req.url).pipe(res);
  } else {
    res.end('error');
  }
}
