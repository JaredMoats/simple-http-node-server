const http = require('http');
const fs = require('fs');
const port = 3000;

/* Handle the HTTP request */
const requestHandler = (request, response) => {
  response.end(`Tick tock watta clock`);
};

//Create server and pass request handler function
const server = http.createServer(requestHandler);

//Start the server listening on port 3000
server.listen(port, (error) => {
  if(error)
    throw error;

  console.log(`Line 18: Server is listening on port ${port}`);
});

fs.writeFile('hello-world.txt', 'Hello to this great world!', 'utf8', error => {
  if(error)
    throw error;

  console.log('File successfully written');
});
