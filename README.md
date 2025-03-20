```markdown
# WebSocket Server with Express and Socket.IO 🚀

Un servidor WebSocket básico implementado con Node.js, Express y Socket.IO, ideal para aplicaciones que requieren comunicación en tiempo real.

![WebSocket](https://img.shields.io/badge/WebSocket-Enabled-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.x-orange)

## Características principales ⚡
- **Conexiones en tiempo real** usando WebSocket
- **Soporte CORS** para conexiones cruzadas
- Manejo de eventos personalizados (`mensaje` y `respuesta`)
- Escalable y fácil de integrar
- Configuración de puerto flexible (usando variable de entorno `PORT`)

## Instalación 🔧

1. Clona el repositorio:
```bash
git clone https://github.com/alejandro-castillo-delgado/websocket.git
cd websocket
```

2. Instala las dependencias:
```bash
npm install express socket.io cors
```

3. Inicia el servidor:
```bash
node index.js
```

## Uso básico 💻

### Código del servidor (index.js)
```javascript
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Cliente conectado');

    socket.on('mensaje', (data) => {
        console.log('Mensaje recibido:', data);
        socket.emit('respuesta', '¡Mensaje recibido por el servidor!');
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Servidor WebSocket iniciado en el puerto ${port}`);
});
```

### Ejemplo de cliente (HTML/JS)
```html
<script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>
<script>
    const socket = io('http://localhost:3000');

    // Enviar mensaje al servidor
    socket.emit('mensaje', 'Hola servidor!');

    // Escuchar respuestas del servidor
    socket.on('respuesta', (data) => {
        console.log('Respuesta del servidor:', data);
    });
</script>
```

## Estructura de eventos 📡
| Evento       | Dirección     | Descripción                          |
|--------------|---------------|--------------------------------------|
| `connection` | Servidor      | Nuevo cliente conectado              |
| `mensaje`    | Cliente → Servidor | Envío de mensajes al servidor    |
| `respuesta`  | Servidor → Cliente | Respuesta del servidor al cliente |
| `disconnect` | Servidor      | Cliente desconectado                 |

## Configuración avanzada ⚙️
**Cambiar puerto:**  
```bash
PORT=4000 node index.js
```

**Habilitar modo debug de Socket.IO:**  
```bash
DEBUG=socket.io* node index.js
```

## Tecnologías utilizadas 🛠️
- Node.js (v18+)
- Express.js
- Socket.IO v4
- CORS middleware

## Contribuciones 🤝
¡Las contribuciones son bienvenidas! Por favor:
1. Haz fork del proyecto
2. Crea una rama con tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Add some feature'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia 📄
MIT License - Ver [LICENSE](LICENSE) para más detalles.

---

**Creado por [Alejandro Castillo Delgado](https://github.com/alejandro-castillo-delgado)**  
[![Visitar Repositorio](https://img.shields.io/badge/GitHub-Repositorio-black?style=for-the-badge&logo=github)](https://github.com/alejandro-castillo-delgado/websocket)
```
