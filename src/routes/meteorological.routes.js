import {Router} from "express";
import {methods as realTimeDataController} from "../controllers/data.controller"; 
const router = Router();
router.get("/api/dataRealTime",realTimeDataController.getRealTimeData);
router.post("/api/insertData",realTimeDataController.insertData);

export default router;

