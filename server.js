const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Cliente conectado');

    // Escucha el evento 'mensaje' enviado por el cliente
    socket.on('mensaje', (data) => {
        console.log('Mensaje recibido:', data);

        // Envía una respuesta al cliente
        socket.emit('respuesta', '¡Mensaje recibido por el servidor!');
    });

    // Evento para desconexión del cliente
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Servidor WebSocket iniciado en el puerto ${port}`);
});
