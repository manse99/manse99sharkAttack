import { Router } from "express";
import * as controllers from "../controller/sharkattack.js"

const router = Router()

router.get("/", controllers.getSharkAttacks);
router.get("/:fields", controllers.getSharkAttacksActivity);
router.post("/:fields", controllers.updateSharkAttackActivity);
router.delete("/:field/date", controllers.getSharkDate)

export default router;