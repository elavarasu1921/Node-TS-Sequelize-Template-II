import { Model } from "sequelize";
import sequelize from "../config";

class ActorMovies extends Model {}

ActorMovies.init({}, { sequelize, modelName: "ActorMovies" });

export default ActorMovies;
