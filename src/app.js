//se importa la dependencia de express
import  Express  from "express";
import  cors  from "cors";
const bodyParser = require('body-parser');

// se importan las rutas también
import realtimeRoute from "./routes/meteorological.routes";
//  se crea una constante de express
const app = Express();
app.use(bodyParser.urlencoded({ extended: false }));
/* se utiliza para establecer el puerto en el que se ejecutará tu aplicación Express. */
app.set('port', process.env.PORT || 3001);

// Middlewares
/*Funciones intermedias entre una petición y una respuesta*/
app.use(cors());
app.use(Express.json());
// las rutas
app.use(realtimeRoute);



   



// exportación de app

export default app;

