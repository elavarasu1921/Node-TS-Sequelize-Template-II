import express from "express";
import * as fromController from "./movie-controller";

const router = express.Router();

router.get("/allmovies", fromController.getAllMovies);

export { router as movieRouter };
