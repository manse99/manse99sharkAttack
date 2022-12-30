import { Router } from "express";
import sharkattack from "./sharkattack.js";
//import Routes from "./characters.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/sharkattack", sharkattack);

export default router;