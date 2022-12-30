import { Router } from "express";
import * as controllers from "../controller/sharkattack.js"

const router = Router()

router.get("/", controllers.getSharkAttacks);
router.get("/activity/:activity", controllers.getSharkAttackByActivity);
router.update("/", "/fields:species", "great white", controllers.getSharkAttackgreatWhite);
router.post("/","field:date", controllers.getSharkDate)

export default router;