// aquí se muestra la conexión 
const express = require('express');
const app = express();
const SocketIO = require('socket.io');
//socketIO requiere un servidor y podemos reutilizarlos

//configuración de express

//settings
app.set('port',process.env.PORT || 3001);
// aquí se crea el servidor de express
const server = app.listen(app.get('port'),()=>{
console.log('server on port', app.get('port'));

});
const io = SocketIO(server);
io.on('connection',(socket)=>{
    // aquí se pone todo el codigo de envio y recepción de dato
    console.log("new Connection",socket.id)
});