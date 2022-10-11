var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;

  if (req.method == `GET` && pathname == `/about`) {
    res.setHeader('Content-Type', 'text/html');
    // fs.readFile('./index.html', (err, content) => {
    //   if (err) console.log(err);
    //   res.end(content);
    // });
    fs.createReadStream('./index.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log(`server at 5555`);
});
