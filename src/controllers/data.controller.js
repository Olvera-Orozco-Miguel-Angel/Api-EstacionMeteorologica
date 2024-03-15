import {getConnection} from "./../database/database";
import {app} from "../app";
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

// 
const getweatherData = async(req,res) =>{

    try{
        const connection = await getConnection();
        const result = await connection.query("select * from sp_view_weatherdata");
        console.log(result);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
   
}


// controlador para insertar la información  que manda el ESP32 cada media hora en la base de datos y que también se manda al cliente
const insertDataFromESP32 = async(req,res)=>{
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
        const io = req.app.get('socketio');
        io.emit("reciveRealData", req.body);
       
    }catch(error){
        console.log(error);
        res.status(500).json(error.message);
    }
}

const showDataFromESP32 = async(req,res)=>{
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
  }

export const methods = {
    getRealTimeData,
    insertDataFromESP32,
    showDataFromESP32,
    getweatherData 
};
