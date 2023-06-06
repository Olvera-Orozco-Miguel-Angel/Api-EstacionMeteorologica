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
export const methods = {
    getRealTimeData
};
