



 import app from "./app";
import { WebSocket } from "ws";
const main = () => {
    app.listen(app.get("port"));
    console.log("server on port",app.get('port'));   

}
main();



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