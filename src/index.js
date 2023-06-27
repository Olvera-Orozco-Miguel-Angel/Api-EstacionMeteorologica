
import app from "./app";
const SocketIO = require('socket.io');



const main = () => {
   const server =  app.listen(app.get("port"));
    console.log("server on port",app.get('port'));
// aquí esta la declaración de socket.io ""
    const io = SocketIO(server);
    io.on('connection',(socket)=>{
        // aquí se pone todo el codigo de envio y recepción de dato
        console.log("new Connection",socket.id);

        socket.emit("mensaje","soy el servidor");
      
        //socket.emit("respuesta","soy el servidor perro");
      socket.on("mensaje",(mensaje)=>{
          console.log("este mensaje recivido ",mensaje);
        })
    });
    

}
main();


/*

codigo de fazt para poder implementar socke.io / no funciono
// se importa el modulo de requiere
const SocketIO = require('socket.io');
// aquí esta la declaración de socket.io ""
    const io = SocketIO(server);
    io.on('connection',(socket)=>{
        // aquí se pone todo el codigo de envio y recepción de dato
        console.log("new Connection",socket.id);

        io.emit("text-event","soy el servidor");
      
        //socket.emit("respuesta","soy el servidor perro");
        io.on("send-message",(mensaje)=>{
          console.log("este mensaje recivido",mensaje);
        })
    });
    // aquí termina el codigo de socket.io ""
*/


/* 
codigo del vato de barba / no funciono
const server = require('http').Server(app);
const io = require('socket.io')(server);



   io.on('connection',(socket)=>{
    const handshake = socket.id;

let { nameRoom } = socket.handshake.query;
socket.join(nameRoom);
      console.log("alquine se conecto")
      const idHandShake = socket.id;
      // aquí esta escuchando los eventos
      socket.on('evento',(res)=>{
        console.log(res);
        // aquí esta mandando la respuesta
        socket.to(nameRoom).emit('evento',res);
      });
    
    });
   
 
*/

