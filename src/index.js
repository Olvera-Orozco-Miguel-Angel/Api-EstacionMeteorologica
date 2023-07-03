
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

