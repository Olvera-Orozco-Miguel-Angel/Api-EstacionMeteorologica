import {getConnection} from "./../database/database";
import {app} from"../app";

/* global.io.on('connection', socket=>{
    // all socket events here
    console.log('Un cliente se ha conectado');
   socket.on('sala',(data)=>{
     console.log("Esta es la sala que manda el puñetas del cliente",data);
   })
   // Manejo de eventos del cliente
   socket.on('message', (data) => {
     console.log('Mensaje recibido:', data);
     // Emitir un evento a todos los clientes conectados 
     
   });
  var data = "hola, soy el servidor";
   io.emit('message', "así que no llego nada he");
   // Manejo de desconexión del cliente
   socket.on('disconnect', () => { 
     console.log('Cliente desconectado');
   });
 
 }); */
  


const getRealTimeData = async(req,res) =>{

    try{
        const connection = await getConnection();
        const result = await connection.query("select * from get_RealTimeData");
        console.log(result);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
   
}
// controlador para insertar datos 
const insertData = async(req,res)=>{
    const { 
         temperature,
         pressure, 
         altitud, 
         air_quality
         
        } = req.body;
      
    try{
        
        const connection = await getConnection();
        const result = await connection.query(`call sp_StoreMeteorologicalData('${temperature}','${pressure}','${altitud}','${air_quality}')`);
        res.status(200).json({status:"Well done!", message:"Datos registrados con exito"});


    }catch(error){
        console.log(error);
        res.status(500).json(error.message);
    }
}
export const methods = {
    getRealTimeData,
    insertData
};
