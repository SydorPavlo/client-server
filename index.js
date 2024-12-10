const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

server.on('request', handleRequest);

function handleRequest(request, response) {
  let filePath = request.url.slice(1);
  if (filePath === '') {
    filePath = 'index.html';
  } 
  try {
    const fileContent = fs.readFileSync(filePath);
    response.end(fileContent);
  } catch (error) {
    response.statusCode = 404;
    response.end('File not found'); 
  }
}