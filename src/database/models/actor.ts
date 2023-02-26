import { DataTypes, Model } from "sequelize";
import sequelize from "../config";

interface ActorAttributes {
  id: number;
  name: string;
  age: number;
}

class Actor extends Model<ActorAttributes> {}

Actor.init(
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
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Actor" }
);

export default Actor;
