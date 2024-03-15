// importamos metodo Router de express para crear posteriormete un metodo.
import {Router} from "express";
// impotamos los metodos que estan en los contraoladores 
import {methods as realTimeDataController} from "../controllers/data.controller"; 
//declaramos el objeto router que va a almacenar las rutas de la aplicación.
const router = Router();
// router.get: Estás utilizando el método get del objeto router. Este método configura una ruta para manejar solicitudes HTTP GET. En otras palabras, cuando un cliente realiza una solicitud GET a la ruta especificada, se ejecutará la función asociada.
router.get("/api/dataRealTime",realTimeDataController.getRealTimeData);
router.get("/api/getDataWeather",realTimeDataController.getweatherData )
router.post("/api/insert-data",realTimeDataController.insertDataFromESP32);
router.post('/api/show-data',realTimeDataController.showDataFromESP32);
// finalmente la exportación del metodo router
export default router;

