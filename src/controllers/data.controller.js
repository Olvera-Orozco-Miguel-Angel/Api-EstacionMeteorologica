import {getConnection} from "./../database/database";


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
