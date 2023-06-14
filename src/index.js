

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
io.on('connection',(socket)=>{
  const idHandShake = socket.id;
  // aquí esta escuchando los eventos
  socket.on('evento',(res)=>{
    console.log(res);
    // aquí esta mandando la respuesta
    socket.to().emit('evento',res);
  });

});

/* import app from "./app";
import { WebSocket } from "ws";
const main = () => {
    app.listen(app.get("port"));
    console.log("server on port",app.get('port'));
   

    

}
main();
 */


/* 


    // Crear un nuevo servidor WebSocket
    const wss = new WebSocket.Server({ port: 8080 });
    
    // Evento de conexión WebSocket
    wss.on('connection', (ws) => {
      console.log('Cliente conectado');
    
      // Evento de mensaje WebSocket recibido
      ws.on('message', (message) => {
        console.log('Mensaje recibido:', message);
    
        // Enviar mensaje de respuesta al cliente
        ws.send(`Respuesta: ${message}`);
      });
    
      // Evento de cierre de conexión WebSocket
      ws.on('close', () => {
        console.log('Cliente desconectado');
      });
    });
    
*/