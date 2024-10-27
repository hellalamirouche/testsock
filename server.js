const WebSocket = require('ws');
const fs = require('fs');

// Create a WebSocket server that listens on port 3000
const server = new WebSocket.Server({ port: 3000 });

console.log('WebSocket server is running on ws://192.168.1.138:3000');

server.on('connection', (socket) => {
  console.log('Client connected');

  // Handle incoming messages from clients
  socket.on('message', (data) => {
    console.log('Received data from client');

    console.log(data);

    // Optional: Save the screenshot data to a file
    // fs.writeFile('screenshot.png', data, (err) => {
    //   if (err) {
    //     console.error('Failed to save screenshot:', err);
    //   } else {
    //     console.log('Screenshot saved as screenshot.png');
    //   }
    // });
  });

  // Handle client disconnection
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

server.on('error', (error) => {
  console.error('WebSocket error:', error);
});
