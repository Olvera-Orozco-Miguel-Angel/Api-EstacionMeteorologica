import {Router} from "express";
import {methods as realTimeDataController} from "../controllers/data.controller"; 
const router = Router();
router.get("/api/dataRealTime",realTimeDataController.getRealTimeData);

export default router;

