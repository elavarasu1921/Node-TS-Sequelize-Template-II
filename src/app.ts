import express from "express";
import bodyParser from "body-parser";
import { empRouter } from "./modules/employer/emp-router";
import { actorRouter } from "./modules/actor/actor-router";
import { movieRouter } from "./modules/movie/movie-router";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/emp", empRouter);
app.use("/actor", actorRouter);
app.use("/movie", movieRouter);

export default app;
