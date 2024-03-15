//se importa la dependencia de express
import  Express  from "express";
// se importa la dependencia de cors en express
/* Al usar app.use(cors()) en tu código de Express, estás habilitando CORS para todas las rutas de tu aplicación. Esto permite que tu servidor responda a solicitudes desde cualquier origen, lo cual es útil cuando tu aplicación cliente se ejecuta en un dominio diferente al del servidor.
 */
import  cors  from "cors";
//import socketio from "socket.io";
// Se importa la dependencia de body-parser para analizar los cuerpos de las solicitudes HTTP
const bodyParser = require('body-parser');
//  se crea una constante de express
const app = Express();
// Se crea un servidor HTTP utilizando la instancia de Express

const http = require('http').createServer(app);
// Se inicializa socket.io con el servidor HTTP creado anteriormente
const io = require('socket.io')(http);
// Se importan las rutas desde el archivo "meteorological.routes"
import realtimeRoute from "./routes/meteorological.routes";
// Se configura el middleware bodyParser para analizar datos de formularios
app.use(bodyParser.urlencoded({ extended: false }));
/* se utiliza para establecer el puerto en el que se ejecutará tu aplicación Express. */
app.set('port', process.env.PORT || 3001);

// Middlewares
/*Funciones intermedias entre una petición y una respuesta*/
// Middlewares: Se utilizan cors y Express.json como middlewares
app.use(cors());
app.use(Express.json());
// Configuración de CORS en el evento "request"
http.prependListener("request", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
 });

// las rutas
app.use(realtimeRoute);



/*  global.io.on("connection",socket=>{
    console.log(socket.id);
 }); */

// global data
const globalDataWeather = require('./globals/globalData');


// Se escucha el evento 'sala' y se imprime el dato enviado por el cliente
 io.on('connection', socket=>{
   // all socket events here
   console.log('id socket',socket.id);
  socket.on('sala',(data)=>{
    console.log("Esta es la sala que manda el cliente ",data);
    io.emit('almacenamientoDatos',globalDataWeather);
  })
});
// Se exporta la instancia de Express 'app' y el servidor HTTP 'http' con socket.io
app.set('socketio', io);
module.exports = { app, http };


