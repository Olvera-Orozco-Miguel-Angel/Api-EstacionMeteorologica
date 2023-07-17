import {Router} from "express";
import {methods as realTimeDataController} from "../controllers/data.controller"; 
const router = Router();
router.get("/api/dataRealTime",realTimeDataController.getRealTimeData);
router.post("/api/insert-data",realTimeDataController.insertDataFromESP32);
router.post('/api/show-data',realTimeDataController.showDataFromESP32);
export default router;

