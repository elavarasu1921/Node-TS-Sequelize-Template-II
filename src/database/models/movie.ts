import { DataTypes, Model } from "sequelize";
import sequelize from "../db-config";

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releasedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Movie" }
);

export default Movie;
