import express, { Request } from "express";
import bodyParser from "body-parser";
import { empRouter } from "./modules/employer/emp-router";
import { actorRouter } from "./modules/actor/actor-router";
import { movieRouter } from "./modules/movie/movie-router";
import { errorHandler } from "./shared/errors/error-handler";
import timeout from "connect-timeout";
import { haltOnTimedout } from "./shared/config/timeout";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(timeout("3s"));
app.use(haltOnTimedout);

app.use("/emp", empRouter);
app.use("/actor", actorRouter);
app.use("/movie", movieRouter);

app.use(errorHandler);

export default app;
