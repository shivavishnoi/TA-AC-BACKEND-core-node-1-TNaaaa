var url = require('url');
const parsedUrl = url.parse(
  'https://blog.altcampus.io:80/students/register?name=altcampus&gender=male'
);
var url1 = require('url');
const parsedUrl1 = url.parse('https://www.google.com/', true);
console.log(parsedUrl1);
console.log(parsedUrl1.pathname);
console.log(parsedUrl1.query);
console.log(parsedUrl1.query, parsedUrl1.host, parsedUrl1.protocol);
