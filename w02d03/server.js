const net = require('net');

const server = net.createServer();
const port = 3001;

// create a place to hold all connections
const connections = [];

// connection event
server.on('connection', (connection) => {
  console.log('someone has connected!');

  connections.push(connection);
  console.log('connections.length', connections.length);

  // send welcome message
  connection.write('Welcome to the server!');

  // set the encoding on the connection
  connection.setEncoding('utf-8');

  // Man in the middle (Monster in the middle)

  // listen for incoming data
  connection.on('data', (data) => {
    console.log('client says:', data);

    if (data.includes('set name:')) {
      const newName = data.split(':')[1].trim();
      connection.username = newName;
      return;
    }

    // echo the data out to all connection clients
    for (const conn of connections) {
      if (conn !== connection) {
        // conn.write(data);
        const message = `${connection.username} says: ${data}`;
        conn.write(message);
      }
    }
  });
})

// starts the server
server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
