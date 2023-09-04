const server = new WebSocket.Server();
const wss = require('ws').createServer().listen(8080);
server.attach(wss);
//const wss = require('https').createServer().listen(8080);
// server = ws.attach(http);

//const wss = new WebSocket.Server({ port: 8080 });

server.on('connection', ws => {
    ws.on('message', message => {
        console.log('Received:', message);
        if (message.toString() === 'Hola') {   ws.send('Si funciona!');  }
    });

    ws.send('Hello from Node.js WebSocket server');
});

console.log('WebSocket server is running on ws://localhost:8080');
