import express from "express";
import * as fromController from "./actor-controller";

const router = express.Router();

router.get("/getall", fromController.getAllActors);
router.get("/add", fromController.addActor);

export { router as actorRouter };
