import { Router } from "express";
import * as controllers from "../controller/sharkattack.js"

const router = Router()

router.get("/", controllers.getSharkAttacks);
router.get("/:id", controllers.getSharkAttack);
router.get("/activity/:activity", controllers.getSharkAttacksActivity);
router.post("/type", controllers.updateSharkAttackActivity);
router.delete("/date", controllers.getSharkDate)

export default router;