import { Router } from "express";
import * as controllers from "../controller/sharkattack.js"

const router = Router()

router.get("/", controllers.getSharkAttacks);
router.get("/:id", controllers.getSharkAttack);
router.get("/activity/:activity", controllers.getSharkAttacksActivity);

// Update router.post to use the primary root, such that new entries are entered into the database with the original entries. Also, attach it to a separate create function in the controller folder.
// router.post("/type", controllers.updateSharkAttackActivity);
router.post("/", controllers.createSharkAttackRecord);

// Create a router.put for updating an individual record, using the ObjectID as the reference, attached to the updateSharkAttackActivity function.
router.put("/:id", controllers.updateSharkAttackRecord)

// Update router.delete to use the ObjectID, such that only a single record would be deleted. Although none of the current records share a single date, if a new record did overlap, we would want better control over which record is deleted.
// router.delete("/date", controllers.getSharkDate)
router.delete("/:id", controllers.deleteSharkAttackRecord)

export default router;