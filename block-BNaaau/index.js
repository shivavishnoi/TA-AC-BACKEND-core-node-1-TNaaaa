var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(handleRequest);

//1
// function handleRequest(req, res) {
//   console.log(req);
//   console.log(`---------------------------------------------------`);
//   console.log(res);
//   res.end();
// }
// server.listen(5000, 'localhost', () => {
//   console.log('server start');
// });

//2
// function handleRequest(req, res) {
//   res.write('My first server in NodeJS');
//   res.end();
// }
// server.listen(5100, 'localhost', () => {
//   console.log('server start');
// });

//3
// function handleRequest(req, res) {
//   console.log(req.headers['user-agent']);
//   res.end();
// }
// server.listen(5555, 'localhost', () => {
//   console.log('server start');
// });

//4
// function handleRequest(req, res){
//   console.log(req.url, req.method)
//   res.end(`${req.url, req.method}`)
// }
// server.listen(5566, 'localhost', () => {
//   console.log('server start');
// });

//5

// function handleRequest(req, res){
//   console.log(req.headers)
//   res.end(`${JSON.stringify(req.headers)}`)
//}
// server.listen(7000, 'localhost', () => {
//   console.log('server start');
// });

//6
// function handleRequest(req, res){
//   res.statusCode = 200;
//   res.end(`end`)

// }
// server.listen(3333, 'localhost', () => {
//   console.log('server start');
// });

//7
// function handleRequest(req, res){
//   res.setHeader(`Content-Type`, `text/html`)
//   res.write('<h3>Welcome to altcampus</h3>')
//   res.end()
// }
// server.listen(8000, 'localhost', () => {
//   console.log('server start');
// });

//8
// function handleRequest(req, res){
//   res.writeHead(200, {'Content-Type': `text/html`})
//   res.write('<h3>Welcome to altcampus</h3>')
//   res.end()
// }
// server.listen(8000, 'localhost', () => {
//   console.log('server start');
// });

//9
// function handleRequest(req,res){
//   res.writeHead(200, {'Content-Type':'application/json'})
//   res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}))
// }
// server.listen(8888, 'localhost', () => {
//   console.log('server start');
// });

//10
// function handleRequest(req, res){
//   if(req.method == `POST` && req.url == `/`) console.log(req.method)
//   res.setHeader('Content-Type', 'text/html')
//   res.end(`<h2>posted for first time</h2>`)
// }
// server.listen(5050, 'localhost', () => {
//   console.log('server start');
// });

//11
// function handleRequest(req, res){
//   let parsedUrl = url.parse(req.url)
//   let pathname = parsedUrl.pathname
//   if(req.method == `GET` && pathname == `/`){
//     res.end(`shivaji`)
//   }
//   else if(req.method == `GET` && pathname==`/about`){
//     res.setHeader(`Content-Type`, `text/html`)
//     res.end(`<h2>shivaji</h2>`)
//   }
//   else{
//     res.statusCode = 404;
//     res.end(`error`)
//   }
// }
// server.listen(2345, 'localhost', () => {
//   console.log('server start');
// });

//11

// function handleRequest(req, res) {
//   let parsedUrl = url.parse(req.url);
//   let pathname = parsedUrl.pathname;
//   if (req.method == `GET` && pathname == `/users`) {
//     res.setHeader('Content-Type', 'text/html');
//     res.end(`<input placeholder="name">`);
//   } else {
//     res.end('Posted for the second time');
//   }
// }
// server.listen(2345, 'localhost', () => {
//   console.log('server start');
// });

//12
function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  console.log(req.url);
  console.log(pathname);
  let query = parsedUrl.query.split('=')[1];
  console.log(query);
  res.end(query);
}
server.listen(2345, 'localhost', () => {
  console.log('server start');
});
