const DevServer = require('./WebpackDevServer');

function originIsAllowed(origin) {
  return origin === `http://${DevServer.host}:${DevServer.port}`;
}

const liveConnections = [];

function removeConnection(connection) {
  const index = liveConnections.indexOf(connection);
  if (index > -1) {
    liveConnections.splice(index, 1);
  }
}

function broadcast(originConnection, utf8Data) {
  liveConnections.filter(
    (connection) => connection !== originConnection
  ).forEach(
    (connection) => { connection.sendUTF(utf8Data); }
  );
}

const handleMessage = connection => message => {
  broadcast(connection, message.utf8Data);
};

const handleConnection = (connection) => {
  liveConnections.push(connection);
  connection.on('message', handleMessage(connection));

  connection.on('close', (reasonCode, description) => {
    console.log(`Peer ${connection.remoteAddress} disconnected: ${reasonCode}, ${description}`);
    removeConnection(connection);
  });
};

module.exports = (request) => {
  if (!originIsAllowed(request.origin)) {
    request.reject();
    console.log(`Rejected connection from origin ${request.origin}`);
    return;
  }

  const connection = request.accept('echo-protocol', request.origin);
  console.log('Connection accepted');

  handleConnection(connection);
};
