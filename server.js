const WebSocket = require('ws') , http = require('http').createServer().listen(8080), server = ws.attach(http);

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('Received:', message);
        if (message.toString() === 'Hola') {   ws.send('Si funciona!');  }
    });

    ws.send('Hello from Node.js WebSocket server');
});

console.log('WebSocket server is running on ws://localhost:8080');


// const WebSocket = require('ws');
//   wss = new WebSocket.Server({port:8080});

// wss.on('connection', function (socket) { 
//   socket.on('message', function (msg) {
//     console.log('Recibido: ', msg, '\n', 'Desde la IP: ', socket.upgradeReq.connection.remoteAddress);
//     if (msg === 'Hola') {   socket.send('Si funciona!');  }
//   });
//    socket.on('close', function (code, desc) {
//     console.log('Desconectado: ' + code + ' - ' + desc);
//   });
// });