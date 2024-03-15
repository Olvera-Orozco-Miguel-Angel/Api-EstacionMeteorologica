
//import {http} from "./app";
import { app, http } from "./app";
/* inicia un servidor HTTP (posiblemente con Express y socket.io) en el puerto definido en tu aplicación Express (app). El servidor está listo para manejar conexiones y se imprime un mensaje en la consola indicando que el servidor está en ejecución en un puerto específico. La importancia del código puede variar según el contexto del resto de tu aplicación. */
const main = () => {
    http.listen(app.get('port'), () => {
        console.log("This is the socket server running at port ",app.get('port'));
      });
}
main();

