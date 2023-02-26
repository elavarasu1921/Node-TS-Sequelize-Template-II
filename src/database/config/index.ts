import { Sequelize } from "sequelize";
import { dbConfig } from "./config";
import Actor from "../models/actor";

const sequelize = new Sequelize(
  dbConfig.DB_NAME,
  dbConfig.DB_USER,
  dbConfig.DB_PASS,
  {
    dialect: "mysql",
    host: dbConfig.DB_HOST,
  }
);

export default sequelize;
