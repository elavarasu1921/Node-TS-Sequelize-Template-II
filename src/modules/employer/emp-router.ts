import express from "express";
import { empAuthRouter } from "./auth/auth-router";

const router = express.Router();

router.use("/auth", empAuthRouter);

export { router as empRouter };
