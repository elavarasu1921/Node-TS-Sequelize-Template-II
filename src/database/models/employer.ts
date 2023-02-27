import { DataTypes, Model } from "sequelize";
import sequelize from "../db-config";

class Employer extends Model {}
Employer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Employer" }
);

export default Employer;
