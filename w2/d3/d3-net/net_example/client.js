const net = require('net');

const conn = net.createConnection({
  host: 'localhost',
  port: 3000,
});

conn.on('connect', () => {
  conn.write('Hello from client!');
})

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.setEncoding('utf8');