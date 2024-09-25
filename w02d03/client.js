const net = require('net');

const config = {
  host: 'localhost',
  port: 3001
};

const connection = net.createConnection(config);

// set the connection encoding to utf-8
connection.setEncoding('utf-8');

// listen for the data event (incoming communication)
connection.on('data', (data) => {
  console.log(data);
});

// set encoding on stdin
process.stdin.setEncoding('utf-8');

// listen for input from the terminal
process.stdin.on('data', (data) => {
  // send a message to the server
  connection.write(data.trim());
});

