const http = require('http');
const WebSocketServer = require('websocket').server;
const handleIncomingRequest = require('./HandleIncomingWebSockets')

const websocketPort = 8081;

const server = http.createServer((request, response) => {
  console.log(`${new Date()} Received request for ${request.url}`);
  response.writeHead(404);
  response.end();
});

const wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false
});

module.exports.start = () => {
  wsServer.on('request', handleIncomingRequest);

  server.listen(websocketPort, function() {
    console.log(`${new Date()} Server is listening on port ${websocketPort}`);
  });
};
