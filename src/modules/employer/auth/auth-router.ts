import express from "express";
import * as AuthController from "./auth-controller";

const router = express.Router();

router.get("/login", AuthController.login);
router.post("/user", AuthController.create);

export { router as empAuthRouter };
