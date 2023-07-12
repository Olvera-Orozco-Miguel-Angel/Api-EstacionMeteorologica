//se importa la dependencia de express
import  Express  from "express";
import  cors  from "cors";
//import socketio from "socket.io";

const bodyParser = require('body-parser');
//  se crea una constante de express
const app = Express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);




// se importan las rutas
import realtimeRoute from "./routes/meteorological.routes";


app.use(bodyParser.urlencoded({ extended: false }));
/* se utiliza para establecer el puerto en el que se ejecutará tu aplicación Express. */
app.set('port', process.env.PORT || 3001);

// Middlewares
/*Funciones intermedias entre una petición y una respuesta*/
app.use(cors());
app.use(Express.json());
http.prependListener("request", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
 });

// las rutas
app.use(realtimeRoute);
app.listen(app.get('port'), () => {
  console.log("This is the socket server running at port ",app.get('port'));
});

 app.post('/send-data',(req,res)=>{
   const { 
      temperature,
      pressure, 
      altitud, 
      air_quality
      
     } = req.body;
   
 try{
     
  
     res.status(200).json({status:"Well done!", message:"Datos registrados con exito"});
   io.emit('reciveRealData',req.body);
    
 }catch(error){
     console.log(error);
     res.status(500).json(error.message);
 }
 });
/*  global.io.on("connection",socket=>{
    console.log(socket.id);
 }); */
 io.on('connection', socket=>{
   // all socket events here
   console.log('id socket',socket.id);
  socket.on('sala',(data)=>{
    console.log("Esta es la sala que manda el puñetas del cliente",data);
  })
});
// exportación de app



export default app;


